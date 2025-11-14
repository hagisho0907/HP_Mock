'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { HTMLAttributes, ReactNode } from 'react';

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  style,
  ...rest
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeUp':
          return `${baseClass} opacity-0 translate-y-12`;
        case 'fadeIn':
          return `${baseClass} opacity-0`;
        case 'slideLeft':
          return `${baseClass} opacity-0 -translate-x-12`;
        case 'slideRight':
          return `${baseClass} opacity-0 translate-x-12`;
        case 'scale':
          return `${baseClass} opacity-0 scale-95`;
        default:
          return `${baseClass} opacity-0 translate-y-12`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
