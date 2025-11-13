'use client';

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const letters = ["I", "N", "F", "O"];

export function HomeInfoTransition() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.4 });

  return (
    <section
      ref={elementRef}
      aria-hidden="true"
      className="relative hidden overflow-hidden bg-gradient-to-b from-black via-black/90 to-black lg:block"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)] opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(209,0,0,0.2),_transparent_40%,_rgba(0,0,0,0.7))]" />

      <div className="relative mx-auto flex min-h-[360px] max-w-6xl flex-col items-center justify-center gap-6 px-6 text-center">
        <p
          className={`text-xs uppercase tracking-[0.8em] text-white/40 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          NEXT SECTION
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-end gap-8 text-[140px] font-light uppercase tracking-[0.4em] text-white/10">
            {letters.map((letter, index) => (
              <span
                key={letter}
                className={`transition-all duration-700 ease-out ${
                  isVisible
                    ? "text-transparent opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                  WebkitBackgroundClip: "text",
                  backgroundImage:
                    "linear-gradient(180deg, #ffb3b3, #d10000, #430000)",
                  backgroundSize: "200% auto"
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div
            className={`h-px w-32 origin-center rounded-full bg-white/60 transition-all duration-700 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
        </div>

        <p
          className={`text-sm uppercase tracking-[0.4em] text-white/60 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          STORIES • JOURNAL • THOUGHTS
        </p>
      </div>
    </section>
  );
}
