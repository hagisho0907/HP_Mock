import { AnimatedSection } from './animated-section';

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] flex-col overflow-hidden bg-black/40 pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <AnimatedSection animation="fadeIn" delay={300}>
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60 sm:text-sm">
              NOMORE INC.
            </p>
            <h1 className="text-[clamp(28px,7vw,44px)] font-light leading-tight text-white sm:leading-snug">
              <span className="block">テクノロジーで人々の記憶に残る</span>
              <span className="block">新しいストーリー体験を発明する</span>
            </h1>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Inventing innovative and memorable storytelling experiences through technology.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeUp" delay={600}>
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white/5 px-6 py-10 text-center backdrop-blur-sm sm:px-10">
            <h2 className="mb-6 text-[clamp(36px,12vw,104px)] leading-none tracking-tight text-white">
              WHAT WE DO
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-white/90 sm:text-base sm:leading-loose">
              <p>toito.incは東京を拠点とする体験型エンターテイメント カンパニー。</p>
              <p>デジタルテクノロジーを駆使して没入・体験型コンテンツを開発し、</p>
              <p>それらを体験できる空間やイベントを世界中で展開していきます。</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 animate-float lg:block"
        style={{ zIndex: 100 }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] tracking-[0.4em] text-white/80 vertical-text rotate-180">
            SCROLL
          </p>
          <div
            className="h-24 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)"
            }}
          />
        </div>
      </div>
    </section>
  );
}
