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

      // フェーズ判定 - 非常に早めの開始
      const phase1Start = windowHeight * 0.2; // 20%で浮遊開始
      const phase2Start = windowHeight * 0.4; // 40%で暗転開始  
      const phase3Start = windowHeight * 0.6; // 60%でINFO表示開始
      const phase3End = windowHeight * 0.8; // 80%で完全にINFOセクション

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

      // 既存のWHAT WE DOセクション全体を制御
      const whatWeDoSection = document.querySelector('[data-what-we-do-section]') as HTMLElement;
      if (whatWeDoSection) {
        if (currentPhase >= 1 && currentPhase < 4) {
          // 浮遊フェーズ〜INFO表示中は元のセクションを隠す
          whatWeDoSection.style.opacity = '0';
          whatWeDoSection.style.pointerEvents = 'none';
        } else {
          // 通常時とエフェクト完了後は表示
          whatWeDoSection.style.opacity = '1';
          whatWeDoSection.style.pointerEvents = 'auto';
        }
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
        start = windowHeight * 0.2;
        end = windowHeight * 0.4;
        break;
      case 2: // 暗転フェーズ  
        start = windowHeight * 0.4;
        end = windowHeight * 0.6;
        break;
      case 3: // INFOフェーズ
        start = windowHeight * 0.6;
        end = windowHeight * 0.8;
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

  // エフェクト完全終了後は何も表示しない
  if (currentPhase >= 4) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* フローティング「WHAT WE DO」セクション全体 - 既存要素と同じスタイル */}
      {(currentPhase === 1 || currentPhase === 2) && (
        <div
          className="absolute inset-0 flex items-center justify-center"
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
        className="absolute inset-0 bg-black transition-opacity duration-300"
        style={{
          opacity: currentPhase >= 2 && currentPhase < 4 ? Math.min(0.95, fadeProgress) : 0,
        }}
      />

      {/* INFOセクション表示 */}
      {currentPhase === 3 && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: infoProgress,
            transform: `translateY(${(1 - infoProgress) * 30}px) scale(${0.9 + infoProgress * 0.1})`,
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