import { ImageWithFallback } from "./figma/image-with-fallback";
import { AnimatedSection } from "./animated-section";

export function RecruitSection() {
  return (
    <section id="recruit" className="relative bg-gray-50 px-4 py-16 sm:px-6 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection animation="slideRight">
            <div className="text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Join Us</p>
              <h2 className="mb-6 text-[clamp(42px,10vw,104px)] leading-none tracking-tight text-black">
                RECRUIT
              </h2>
              <p className="mb-10 text-base leading-relaxed text-gray-700">
                新しいストーリー体験、体験型・イマーシブコンテンツを共に創っていく仲間を探しています。
                モバイルでも読みやすい行幅で、カルチャーや募集職種の背景を丁寧に伝えます。
              </p>
              <a
                href="#recruit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm uppercase tracking-[0.3em] text-white transition-colors hover:bg-gray-800 sm:w-auto"
              >
                募集一覧を見る <span>{">"}</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={300}>
            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610618292314-e55c7ac33485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzaWxob3VldHRlJTIwbXlzdGljYWwlMjBsaWdodHxlbnwxfHx8fDE3NjI0Mzg0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Recruit"
                  className="h-[320px] w-full object-cover sm:h-[400px] md:h-[500px]"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
