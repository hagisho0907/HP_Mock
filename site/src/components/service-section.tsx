import { ImageWithFallback } from "./figma/image-with-fallback";
import { AnimatedSection } from "./animated-section";

const services = [
  {
    id: 1,
    title: "Immersive Experience Design",
    description: "体験型/没入型コンテンツのプロデュース・企画制作",
    image:
      "https://images.unsplash.com/photo-1706705556261-c02146118d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZ1dHVyaXN0aWMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjQzODM3OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "Digital Attraction Development",
    description: "体験型プロジェクトの開発・空間設計・R&D",
    image:
      "https://images.unsplash.com/photo-1762115445572-42293fe777de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0aW9uJTIwbWFwcGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI0MzgzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Event Management / IP Business",
    description: "体験型イベントの運営 / IPビジネス開発",
    image:
      "https://images.unsplash.com/photo-1648260029310-5f1da359af9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjI0MDY5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function ServiceSection() {
  return (
    <section id="service" className="relative bg-white py-16 px-4 sm:px-6 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fadeUp">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.6em] text-gray-400">Service</p>
            <h2 className="text-[clamp(42px,9vw,104px)] leading-none tracking-tight text-black">
              事業領域
            </h2>
            <p className="max-w-3xl text-sm text-gray-500 sm:text-base">
              コンテンツ制作から運営、IP開発までをワンストップで支援。スマートフォンでも読みやすいカードレイアウトで、それぞれの強みを直感的に理解できます。
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} animation="fadeUp" delay={index * 200}>
              <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.05)]">
                <div className="relative overflow-hidden">
                  <div className="aspect-[5/4] sm:aspect-[4/3]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <p className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-900">
                    0{service.id}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
