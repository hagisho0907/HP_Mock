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

      // フェーズ判定
      const phase1Start = windowHeight * 0.7; // 70%で浮遊開始
      const phase2Start = windowHeight * 1.0; // 100%で暗転開始
      const phase3Start = windowHeight * 1.3; // 130%でINFO表示

      if (currentScrollY < phase1Start) {
        setCurrentPhase(0);
      } else if (currentScrollY < phase2Start) {
        setCurrentPhase(1);
      } else if (currentScrollY < phase3Start) {
        setCurrentPhase(2);
      } else {
        setCurrentPhase(3);
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
        start = windowHeight * 0.7;
        end = windowHeight * 1.0;
        break;
      case 2: // 暗転フェーズ  
        start = windowHeight * 1.0;
        end = windowHeight * 1.3;
        break;
      case 3: // INFOフェーズ
        start = windowHeight * 1.3;
        end = windowHeight * 1.6;
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

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* フローティング「WHAT WE DO」テキスト */}
      {(currentPhase === 1 || currentPhase === 2) && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translateY(${-floatingProgress * 50 + fadeProgress * -100}px) scale(${1 + floatingProgress * 0.3})`,
            opacity: Math.max(0, 1 - fadeProgress * 2),
          }}
        >
          <h1 
            className="text-[clamp(40px,8vw,80px)] font-bold text-white text-center leading-none tracking-wider"
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)',
              filter: `blur(${fadeProgress * 2}px)`,
            }}
          >
            WHAT WE DO
          </h1>
        </div>
      )}

      {/* 暗転オーバーレイ */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-300"
        style={{
          opacity: currentPhase >= 2 ? Math.min(0.95, fadeProgress) : 0,
        }}
      />

      {/* INFOセクション表示 */}
      {currentPhase >= 3 && (
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
      {currentPhase >= 2 && (
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