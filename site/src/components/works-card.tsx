'use client';

import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/image-with-fallback';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface WorksCardProps {
  work: {
    id: number;
    title: string;
    date: string;
    image: string;
  };
  index: number;
}

export function WorksCard({ work, index }: WorksCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div
      ref={elementRef}
      className={`works-card-container ${isVisible ? 'animate' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <article
        ref={cardRef}
        className="works-card bg-white rounded-xl overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="works-card-image-container">
          <div className="works-card-image-wrapper">
            <ImageWithFallback
              src={work.image}
              alt={work.title}
              className={`works-card-image ${isLoaded ? 'loaded' : ''}`}
              onLoad={() => setIsLoaded(true)}
            />
            <div className="works-card-overlay">
              <div className="works-card-overlay-content">
                <span className="works-card-view-text">VIEW PROJECT</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="works-card-content">
          <h3 className="works-card-title">{work.title}</h3>
          <p className="works-card-date">{work.date}</p>
        </div>
      </article>
    </div>
  );
}