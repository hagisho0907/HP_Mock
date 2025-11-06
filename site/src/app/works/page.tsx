'use client';

import { useState, useMemo } from 'react';
import { AdBanner } from "@/components/ad-banner";
import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";
import { WorksCard } from "@/components/works-card";
import { AnimatedSection } from "@/components/animated-section";
import { WorksFilter } from "@/components/works-filter";

const worksItems = [
  {
    id: 1,
    title: "【ムクイチョウコク】恋愛のNight Wedding",
    date: "2025/9/22",
    image:
      "https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc2MjM2MTk0MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "【ムクイチョウコク】特許庁「ジュニアイノベーションフェス」イマージング...",
    date: "2025/9/22",
    image:
      "https://images.unsplash.com/photo-1729707735724-c8f92562d3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGZlc3RpdmFsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyNDM3MzE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "映画『8番出口』公開記念特別展",
    date: "2025/8/21",
    image:
      "https://images.unsplash.com/photo-1706665714936-3211c96474c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwbXVzZXVtJTIwYXJ0fGVufDF8fHx8MTc2MjQzNzMxOXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "『怨営業電話』",
    date: "2025/4/4",
    image:
      "https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjIzNDM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "呪合うめた店 映像空間プロデュース",
    date: "2025/3/26",
    image:
      "https://images.unsplash.com/photo-1655840221473-98a52cd7ba68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBpbnN0YWxsYXRpb24lMjBhcnR8ZW58MXx8fHwxNzYyMzQwNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "MRX「弥生～第1章～」リピーターゲーム",
    date: "2025/1/13",
    image:
      "https://images.unsplash.com/photo-1758523670550-223a01cd7764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBleHBlcmllbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI0MzczMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 7,
    title: "舞台「AGASA-アガサ-」完璧女級入省",
    date: "2024/12/11",
    image:
      "https://images.unsplash.com/photo-1662912403386-44f0560ef46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXR0cmFjdGlvbiUyMHZyfGVufDF8fHx8MTc2MjQzNzMxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 8,
    title: "FELIX THE CAT - イマージング・エクスペリエンス -",
    date: "2024/12/8",
    image:
      "https://images.unsplash.com/photo-1729707735724-c8f92562d3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGZlc3RpdmFsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyNDM3MzE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 9,
    title: "Netflixシリーズ「幽霊女王」配信記念イベント「ネトウリ映画プロレ...",
    date: "2024/9/30",
    image:
      "https://images.unsplash.com/photo-1759477274116-e3cb02d2b9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2MjQzNzMxOHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export default function WorksPage() {
  const [currentFilter, setCurrentFilter] = useState('all');

  const filteredWorks = useMemo(() => {
    if (currentFilter === 'all') return worksItems;
    
    return worksItems.filter(work => {
      switch (currentFilter) {
        case '2025':
          return work.date.startsWith('2025');
        case '2024':
          return work.date.startsWith('2024');
        case 'theater':
          return work.title.includes('シアター') || work.title.includes('舞台') || work.title.includes('AGASA');
        case 'exhibition':
          return work.title.includes('展') || work.title.includes('記念');
        case 'event':
          return work.title.includes('イベント') || work.title.includes('フェス') || work.title.includes('配信');
        default:
          return true;
      }
    });
  }, [currentFilter]);

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1668462836626-e41758689bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxob3VldHRlJTIwcGVyc29uJTIwZ2xvd2luZyUyMG9yYnMlMjBuaWdodHxlbnwxfHx8fDE3NjI0NDA3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <Header />
      <main className="flex flex-col gap-0">
        <section className="relative h-[40vh] md:h-[50vh] flex items-center px-6">
          <div className="container mx-auto max-w-7xl relative z-10">
            <AnimatedSection animation="fadeUp">
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl">WORKS</h1>
            </AnimatedSection>
          </div>
        </section>

        <section className="relative bg-white py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl md:text-4xl mb-8 text-center">すべての記事一覧</h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={200}>
              <WorksFilter 
                currentFilter={currentFilter}
                onFilterChange={setCurrentFilter}
              />
            </AnimatedSection>

            <div className="works-grid mb-16">
              {filteredWorks.map((work, index) => (
                <WorksCard
                  key={`${work.id}-${currentFilter}`}
                  work={work}
                  index={index}
                />
              ))}
            </div>

            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="text-center">
                <button className="bg-black text-white px-10 py-4 rounded-md hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  もっと読む +
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div className="relative bg-gray-50 py-8 px-6">
          <div className="container mx-auto max-w-7xl">
            <nav className="text-sm text-gray-600">
              <a href="/" className="hover:text-black transition-colors">
                HOME
              </a>
              <span className="mx-2">{">"}</span>
              <span className="text-black">NEWS</span>
            </nav>
          </div>
        </div>

        <ContactSection />
      </main>
      <AdBanner />
    </div>
  );
}
