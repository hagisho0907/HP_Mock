'use client';

import { useEffect, useState, useRef } from 'react';

export function FloatingTextTransition() {
  const [scrollY, setScrollY] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0); // 0: normal, 1: floating, 2: fade-out, 3: info
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

      if (currentScrollY < phase1Start) {
        setCurrentPhase(0);
      } else if (currentScrollY < phase2Start) {
        setCurrentPhase(1);
      } else if (currentScrollY < phase3Start) {
        setCurrentPhase(2);
      } else if (currentScrollY < phase3End) {
        setCurrentPhase(3);
      } else {
        setCurrentPhase(4); // エフェクト完全終了
      }

      // HOMEセクション内のWHAT WE DOを含む全要素を非表示にする
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const whatWeDoElements = homeSection.querySelectorAll('h2, h1, div');
        whatWeDoElements.forEach(el => {
          if (el.textContent?.includes('WHAT WE DO') || el.textContent?.includes('toito.inc')) {
            const targetElement = el as HTMLElement;
            if (currentPhase === 0) {
              // 通常時は表示
              targetElement.style.opacity = '1';
              targetElement.style.visibility = 'visible';
              targetElement.style.display = '';
            } else if (currentPhase >= 1 && currentPhase < 4) {
              // アニメーション中は非表示
              targetElement.style.opacity = '0';
              targetElement.style.visibility = 'hidden';
              targetElement.style.display = 'none';
            } else {
              // エフェクト完了後は復活
              const endProgress = Math.min(1, (currentScrollY - windowHeight * 1.1) / (windowHeight * 0.1));
              targetElement.style.opacity = `${endProgress}`;
              targetElement.style.visibility = endProgress > 0 ? 'visible' : 'hidden';
              targetElement.style.display = endProgress > 0 ? '' : 'none';
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

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

  if (currentPhase >= 4 && endFadeProgress <= 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* フローティング「WHAT WE DO」セクション全体 - 既存要素と同じスタイル */}
      {(currentPhase === 1 || currentPhase === 2) && (
        <div
          className="absolute inset-0 flex items-start justify-center pt-[20vh] transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${-floatingProgress * 50 + fadeProgress * -100}px) scale(${1 + floatingProgress * 0.2})`,
            opacity: Math.max(0, 1 - fadeProgress * 2),
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