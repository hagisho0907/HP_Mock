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
            <p className="text-xs uppercase tracking-[0.6em] text-gray-400 lg:hidden">Service</p>
            <h2 className="text-[clamp(42px,9vw,104px)] leading-none tracking-tight text-black">
              <span className="lg:hidden">事業領域</span>
              <span className="hidden lg:inline">SERVICE</span>
            </h2>
            <p className="max-w-3xl text-sm text-gray-500 sm:text-base lg:hidden">
              コンテンツ制作から運営、IP開発までをワンストップで支援。スマートフォンでも読みやすいカードレイアウトで、それぞれの強みを直感的に理解できます。
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} animation="fadeUp" delay={index * 200}>
              <article className="group flex h-full min-h-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-900">
                    0{service.id}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 flex-1">{service.description}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
