'use client';

import { useState } from 'react';
import { ImageWithFallback } from './figma/image-with-fallback';

interface PageTurnImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function PageTurnImage({ src, alt, className = '' }: PageTurnImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showPageTurn, setShowPageTurn] = useState(false);

  const handleImageLoad = () => {
    // 画像が読み込まれたらページめくりアニメーションを開始
    setShowPageTurn(true);
    
    // アニメーション終了後にローディングを完了
    setTimeout(() => {
      setIsLoading(false);
    }, 1200); // page-turnアニメーションの時間と合わせる
  };

  return (
    <div className={`page-turn-container relative overflow-hidden ${className}`}>
      {/* 実際の画像 */}
      <ImageWithFallback
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={handleImageLoad}
      />
      
      {/* ページめくりエフェクト */}
      {isLoading && showPageTurn && (
        <div className="page-turn-sheet" />
      )}
      
      {/* ローディング中の背景 */}
      {isLoading && !showPageTurn && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}