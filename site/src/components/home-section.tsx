export function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between overflow-hidden"
      style={{ height: "85vh" }}
    >
      <div className="container mx-auto px-6 pt-24 md:pt-28 relative z-10">
        <div className="max-w-2xl">
          <h1
            className="text-white mb-6"
            style={{ fontSize: "32px", lineHeight: "1.4", fontWeight: "400" }}
          >
            <span className="block mb-1">テクノロジーで人々の記憶に残る</span>
            <span className="block">新しいストーリー体験を発明する</span>
          </h1>
          <p className="text-white/80" style={{ fontSize: "13px", lineHeight: "1.6" }}>
            Inventing innovative and memorable storytelling experiences through technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 md:pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-white mb-8"
            style={{
              fontSize: "80px",
              lineHeight: "1.2",
              fontWeight: "700",
              letterSpacing: "0.02em"
            }}
          >
            WHAT WE DO
          </h2>
          <div className="text-white/90" style={{ fontSize: "15px", lineHeight: "1.8" }}>
            <p>NO MOREは東京を拠点とする体験型エンターテイメント カンパニー。</p>
            <p>デジタルテクノロジーを駆使して没入・体験型コンテンツを開発し、</p>
            <p>それらを体験できる空間やイベントを世界中で展開していきます。</p>
          </div>
        </div>
      </div>

      <div
        className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block"
        style={{ zIndex: 100 }}
      >
        <div className="flex flex-col items-center gap-8">
          <p
            className="text-white tracking-widest vertical-text rotate-180"
            style={{ fontSize: "10px", letterSpacing: "0.2em" }}
          >
            SCROLL
          </p>
          <div
            className="w-[1px] h-32"
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
