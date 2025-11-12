'use client';

import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1
            className="text-white text-4xl md:text-6xl font-light tracking-[0.4em]"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            toito.inc
          </h1>
        </div>
        
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-white text-sm mt-4 opacity-60">
          {progress}%
        </p>
      </div>
    </div>
  );
}
