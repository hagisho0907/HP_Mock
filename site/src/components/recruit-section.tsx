import { PageTurnImage } from "./page-turn-image";

export function RecruitSection() {
  return (
    <section id="recruit" className="relative bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl mb-8">RECRUIT</h2>
            <p className="text-gray-800 mb-8 leading-relaxed">
              新しいストーリー体験、
              <br />
              体験型・イマーシブコンテンツを
              <br />
              共に創っていく仲間を探しています。
            </p>
            <a
              href="#recruit"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              募集一覧を見る <span>{">"}</span>
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <PageTurnImage
                src="https://images.unsplash.com/photo-1610618292314-e55c7ac33485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzaWxob3VldHRlJTIwbXlzdGljYWwlMjBsaWdodHxlbnwxfHx8fDE3NjI0Mzg0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Recruit"
                className="w-full h-[400px] md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
