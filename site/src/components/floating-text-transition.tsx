'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export function FloatingTextTransition() {
  const [scrollY, setScrollY] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0); // 0: normal, 1: floating, 2: fade-out, 3: info
  const [isMounted, setIsMounted] = useState(false);
  const whatWeDoBlockRef = useRef<HTMLElement | null>(null);
  const floatingStartTopRef = useRef<number | null>(null);
  const phaseRef = useRef(currentPhase);

  const getWhatWeDoBlock = useCallback(() => {
    if (typeof document === 'undefined') return null;
    if (!whatWeDoBlockRef.current) {
      const element = document.querySelector<HTMLElement>('[data-what-we-do-block]');
      if (element) {
        whatWeDoBlockRef.current = element;
      }
    }
    return whatWeDoBlockRef.current;
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const updateHomeWhatWeDoVisibility = useCallback((phase: number, transitionProgress = 0) => {
    const block = getWhatWeDoBlock();
    if (!block) return;

    const shouldFadeOut = phase >= 1 && phase <= 3;
    const fadeProgress = shouldFadeOut ? Math.min(1, Math.max(0, transitionProgress)) : 0;
    const opacity = shouldFadeOut ? Math.max(0, 1 - fadeProgress) : 1;
    const isHidden = opacity <= 0.02;

    if (!block.style.transition) {
      block.style.transition = 'opacity 350ms ease, transform 350ms ease';
    }
    block.style.willChange = 'opacity, transform';
    block.style.opacity = `${opacity}`;
    block.style.transform = shouldFadeOut ? `translateY(${fadeProgress * -24}px)` : '';
    block.style.visibility = isHidden ? 'hidden' : 'visible';
    block.style.pointerEvents = isHidden ? 'none' : '';
    block.setAttribute('aria-hidden', isHidden ? 'true' : 'false');
  }, [getWhatWeDoBlock]);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setScrollY(currentScrollY);

      // フェーズ判定 - INFOをより早く表示
      const phase1Start = windowHeight * 0.1; // 10%で浮遊開始
      const phase2Start = windowHeight * 0.3; // 30%で暗転開始  
      const phase3Start = windowHeight * 0.4; // 40%でINFO表示開始（早く）
      const phase3End = windowHeight * 1.1; // 110%で完全にINFOセクション

      let nextPhase = 0;
      if (currentScrollY < phase1Start) {
        nextPhase = 0;
      } else if (currentScrollY < phase2Start) {
        nextPhase = 1;
      } else if (currentScrollY < phase3Start) {
        nextPhase = 2;
      } else if (currentScrollY < phase3End) {
        nextPhase = 3;
      } else {
        nextPhase = 4; // エフェクト完全終了
      }

      const block = getWhatWeDoBlock();
      if (nextPhase >= 1) {
        if (floatingStartTopRef.current === null && block) {
          floatingStartTopRef.current = block.getBoundingClientRect().top;
        }
      } else if (floatingStartTopRef.current !== null) {
        floatingStartTopRef.current = null;
      }

      phaseRef.current = nextPhase;
      let crossfadeProgress = 0;
      if (nextPhase >= 1 && nextPhase <= 3) {
        const range = Math.max(1, phase2Start - phase1Start);
        if (currentScrollY <= phase1Start) {
          crossfadeProgress = 0;
        } else if (currentScrollY >= phase2Start) {
          crossfadeProgress = 1;
        } else {
          crossfadeProgress = (currentScrollY - phase1Start) / range;
        }

        if (nextPhase >= 2) {
          crossfadeProgress = 1;
        }
      }

      setCurrentPhase(nextPhase);
      updateHomeWhatWeDoVisibility(nextPhase, crossfadeProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      updateHomeWhatWeDoVisibility(0, 0);
      whatWeDoBlockRef.current = null;
      floatingStartTopRef.current = null;
      phaseRef.current = 0;
    };
  }, [isMounted, updateHomeWhatWeDoVisibility, getWhatWeDoBlock]);

  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      const phase = phaseRef.current;
      const block = getWhatWeDoBlock();
      if (block && phase >= 1 && phase <= 3) {
        floatingStartTopRef.current = block.getBoundingClientRect().top;
      } else if (phase === 0) {
        floatingStartTopRef.current = null;
      }

      const windowHeight = window.innerHeight;
      const phase1Start = windowHeight * 0.1;
      const phase2Start = windowHeight * 0.3;
      let crossfadeProgress = 0;

      if (phase >= 1 && phase <= 3) {
        if (window.scrollY <= phase1Start) {
          crossfadeProgress = 0;
        } else if (window.scrollY >= phase2Start) {
          crossfadeProgress = 1;
        } else {
          crossfadeProgress = (window.scrollY - phase1Start) / Math.max(1, phase2Start - phase1Start);
        }

        if (phase >= 2) {
          crossfadeProgress = 1;
        }
      }

      updateHomeWhatWeDoVisibility(phase, crossfadeProgress);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted, updateHomeWhatWeDoVisibility, getWhatWeDoBlock]);

  if (!isMounted) return null;

  // 各フェーズの進行度計算
  const getPhaseProgress = (phase: number) => {
    if (!isMounted || typeof window === 'undefined') return 0;
    
    const windowHeight = window.innerHeight;
    let start, end;

    switch (phase) {
      case 1: // 浮遊フェーズ
        start = windowHeight * 0.1;
        end = windowHeight * 0.3;
        break;
      case 2: // 暗転フェーズ  
        start = windowHeight * 0.3;
        end = windowHeight * 0.4;
        break;
      case 3: // INFOフェーズ
        start = windowHeight * 0.4;
        end = windowHeight * 1.1;
        break;
      default:
        return 0;
    }

    if (scrollY <= start) return 0;
    if (scrollY >= end) return 1;
    return (scrollY - start) / (end - start);
  };

  const floatingProgress = getPhaseProgress(1);
  const fadeProgress = getPhaseProgress(2);
  const infoProgress = getPhaseProgress(3);

  // エフェクト完全終了時のフェードアウト処理
  const endFadeProgress = currentPhase >= 4 ? 
    Math.max(0, 1 - Math.min(1, (scrollY - window.innerHeight * 1.1) / (window.innerHeight * 0.1))) : 1;
  const floatingStartTop = floatingStartTopRef.current;
  const floatingPaddingTop = floatingStartTop !== null ? Math.max(0, floatingStartTop) : null;
  const floatingEntranceOpacity = Math.min(1, floatingProgress * 1.5);
  const floatingContainerOpacity = floatingEntranceOpacity * Math.max(0, 1 - fadeProgress * 2);

  if (currentPhase >= 4 && endFadeProgress <= 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* フローティング「WHAT WE DO」セクション全体 - 既存要素と同じスタイル */}
      {(currentPhase === 1 || currentPhase === 2) && (
        <div
          className="absolute inset-0 flex items-start justify-center transition-all duration-1000 ease-out"
          style={{
            paddingTop: floatingPaddingTop !== null ? `${floatingPaddingTop}px` : '20vh',
            transform: `translateY(${-floatingProgress * 50 + fadeProgress * -100}px) scale(${1 + floatingProgress * 0.2})`,
            opacity: floatingContainerOpacity,
          }}
        >
          <div className="text-center max-w-5xl px-6">
            {/* WHAT WE DOタイトル */}
            <h1 
              className="mb-6 text-[clamp(36px,12vw,104px)] leading-none tracking-tight text-white lg:mb-8 lg:text-[clamp(48px,10vw,104px)]"
              style={{
                textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)',
                filter: `blur(${fadeProgress * 2}px)`,
              }}
            >
              WHAT WE DO
            </h1>
            
            {/* 説明文 */}
            <div 
              className="space-y-3 text-sm leading-relaxed text-white/90 sm:text-base sm:leading-loose lg:space-y-2 lg:text-[15px] lg:leading-[1.8]"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.3)',
                filter: `blur(${fadeProgress * 1.5}px)`,
              }}
            >
              <p>toito.incは東京を拠点とする体験型エンターテイメント カンパニー。</p>
              <p>デジタルテクノロジーを駆使して没入・体験型コンテンツを開発し、</p>
              <p>それらを体験できる空間やイベントを世界中で展開していきます。</p>
            </div>
          </div>
        </div>
      )}

      {/* 暗転オーバーレイ */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out"
        style={{
          opacity: currentPhase >= 2 && currentPhase < 4 ? Math.min(0.95, fadeProgress) : 0,
        }}
      />

      {/* INFOセクション表示 */}
      {(currentPhase === 3 || currentPhase >= 4) && (
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-1200 ease-out"
          style={{
            opacity: currentPhase >= 4 ? endFadeProgress : infoProgress,
            transform: `translateY(${(1 - (currentPhase >= 4 ? 1 : infoProgress)) * 30}px) scale(${0.9 + (currentPhase >= 4 ? 1 : infoProgress) * 0.1})`,
          }}
        >
          <div className="text-center">
            <h2 
              className="text-[clamp(48px,10vw,104px)] leading-none tracking-tight text-[#d10000] mb-6"
              style={{
                filter: `blur(${(1 - infoProgress) * 3}px)`,
              }}
            >
              INFO
            </h2>
            <p 
              className="text-lg text-white/90"
              style={{
                transitionDelay: '300ms',
                opacity: Math.max(0, infoProgress - 0.3) * 1.5,
              }}
            >
              私たちの思考やアイディア
            </p>
          </div>
        </div>
      )}

      {/* 背景グラデーション効果 */}
      {currentPhase >= 2 && currentPhase < 4 && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, 
              transparent ${Math.max(0, 100 - fadeProgress * 150)}%, 
              rgba(0,0,0,0.7) ${Math.min(100, 50 + fadeProgress * 50)}%)`,
            opacity: fadeProgress,
          }}
        />
      )}
    </div>
  );
}
