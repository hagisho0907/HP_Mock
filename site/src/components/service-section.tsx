import { PageTurnImage } from "./page-turn-image";

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
    <section id="service" className="relative bg-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-6xl md:text-7xl lg:text-8xl mb-16">SERVICE</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <PageTurnImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
