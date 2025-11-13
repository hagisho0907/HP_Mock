'use client';

import { useEffect, useRef, useState } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

export function HomeInfoTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setProgress(0);
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const totalDistance = rect.height + viewportHeight;
      const distance = viewportHeight - rect.top;
      const ratio = clamp(distance / totalDistance);
      setProgress(ratio);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const parallaxShift = (progress - 0.5) * 80;
  const backgroundScale = 1 + progress * 0.2;
  const gradientPosition = 50 - progress * 25;

  return (
    <section
      ref={containerRef}
      aria-hidden="true"
      className="relative hidden overflow-hidden bg-black lg:block"
    >
      <div
        className="absolute inset-0 opacity-90 transition-transform duration-300 ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1668462836626-e41758689bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600')",
          backgroundSize: `${120 + progress * 40}%`,
          backgroundPosition: `center ${gradientPosition}%`,
          transform: `translateY(${parallaxShift}px) scale(${backgroundScale})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_45%)] opacity-40" />

      <div className="relative mx-auto flex min-h-[360px] max-w-6xl flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.8em] text-white/50">
          NEXT SECTION
        </p>

        <div className="flex flex-col items-center gap-4">
          <span
            className="text-[clamp(160px,18vw,220px)] font-light uppercase leading-none tracking-[0.4em] text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(255,255,255,0.9), rgba(209,0,0,0.7), rgba(121,199,255,0.9))",
              backgroundSize: `${120 + progress * 120}%`,
              backgroundPosition: `${gradientPosition}% 50%`,
              WebkitBackgroundClip: "text"
            }}
          >
            INFO
          </span>
          <div className="h-1 w-32 rounded-full bg-white/40" />
        </div>

        <p className="max-w-3xl text-sm uppercase tracking-[0.3em] text-white/60">
          STORIES • JOURNAL • THOUGHTS
        </p>
      </div>
    </section>
  );
}
