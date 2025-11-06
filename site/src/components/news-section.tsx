import { PageTurnImage } from "./page-turn-image";

const newsItems = [
  {
    id: 1,
    date: "2025/10/30",
    title: "イマーシブシアター『蔵丘街いの約束～戦時のフルリは幻影と共に～』KV&...",
    image:
      "https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NjI0MzgxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    date: "2025/10/17",
    title: "『細田守監督作品と思春期展』開催決定！",
    image:
      "https://images.unsplash.com/photo-1740297223378-38c5ee91d459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGV4aGliaXRpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjI0MzgxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    date: "2025/9/24",
    title: "『思春期展』の大阪開催が決定！",
    image:
      "https://images.unsplash.com/photo-1674978667530-cdf6630b38dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmZXN0aXZhbCUyMGxpZ2h0cyUyMGphcGFufGVufDF8fHx8MTc2MjQzODE5NHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function NewsSection() {
  return (
    <section id="news" className="relative bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-6xl md:text-7xl lg:text-8xl">NEWS</h2>
          <a
            href="#news"
            className="inline-flex items-center gap-2 text-sm tracking-wider hover:opacity-70 transition-opacity mt-4"
          >
            VIEW MORE <span>{">"}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <PageTurnImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
