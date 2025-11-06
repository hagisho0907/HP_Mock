import { ContactSection } from './ContactSection';

const worksItems = [
  {
    id: 1,
    title: '【ムクイチョウコク】恋愛のNight Wedding',
    date: '2025/9/22',
    image:
      'https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc2MjM2MTk0MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: '【ムクイチョウコク】特許庁「ジュニアイノベーションフェス」イマージング...',
    date: '2025/9/22',
    image:
      'https://images.unsplash.com/photo-1729707735724-c8f92562d3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGZlc3RpdmFsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyNDM3MzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: '映画『8番出口』公開記念特別展',
    date: '2025/8/21',
    image:
      'https://images.unsplash.com/photo-1706665714936-3211c96474c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwbXVzZXVtJTIwYXJ0fGVufDF8fHx8MTc2MjQzNzMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: '『怨営業電話』',
    date: '2025/4/4',
    image:
      'https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjIzNDM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: '呪合うめた店 映像空間プロデュース',
    date: '2025/3/26',
    image:
      'https://images.unsplash.com/photo-1655840221473-98a52cd7ba68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBpbnN0YWxsYXRpb24lMjBhcnR8ZW58MXx8fHwxNzYyMzQwNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'MRX「弥生～第1章～」リピーターゲーム',
    date: '2025/1/13',
    image:
      'https://images.unsplash.com/photo-1758523670550-223a01cd7764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBleHBlcmllbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI0MzczMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 7,
    title: '舞台「AGASA-アガサ-」完璧女級入省',
    date: '2024/12/11',
    image:
      'https://images.unsplash.com/photo-1662912403386-44f0560ef46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXR0cmFjdGlvbiUyMHZyfGVufDF8fHx8MTc2MjQzNzMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 8,
    title: 'FELIX THE CAT - イマージング・エクスペリエンス -',
    date: '2024/12/8',
    image:
      'https://images.unsplash.com/photo-1729707735724-c8f92562d3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGZlc3RpdmFsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyNDM3MzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 9,
    title: 'Netflixシリーズ「幽霊女王」配信記念イベント「ネトウリ映画プロレ...',
    date: '2024/9/30',
    image:
      'https://images.unsplash.com/photo-1759477274116-e3cb02d2b9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2MjQzNzMxOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function WorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center px-6"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl">WORKS</h1>
        </div>
      </section>

      {/* Works Grid Section */}
      <section className="relative bg-white py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl mb-16 text-center">
            すべての記事一覧
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {worksItems.map((work) => (
              <article
                key={work.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${work.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="mb-4 line-clamp-2">{work.title}</h3>
                  <p className="text-gray-500 text-sm">{work.date}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-black text-white px-10 py-4 rounded-md hover:bg-gray-800 transition-colors">
              もっと読む +
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="relative bg-gray-50 py-8 px-6">
        <div className="container mx-auto max-w-7xl">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-black transition-colors">
              HOME
            </a>
            <span className="mx-2">{'>'}</span>
            <span className="text-black">NEWS</span>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
