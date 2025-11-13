'use client';

import { useState } from "react";
import { ImageWithFallback } from "./figma/image-with-fallback";
import { AnimatedSection } from "./animated-section";

const newsItems = [
  {
    id: 1,
    date: "2025.04.07",
    title:
      "世界初・チリのウニ工場にAI画像認識システムを導入 現地の課題と親身に向き合い最適なソリューションを開発",
    description:
      "工場全体を見渡す可視化ダッシュボードとリモート改善チームの連携で、現場負荷を抑えながら品質とスピードを両立。",
    category: "事例紹介",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    date: "2025.04.07",
    title:
      "AI活用で営業計画を効率化 不二家ベトナムが東南アジアで挑む卸売DX",
    description:
      "散在していた販売実績と在庫データを一元化し、商談の“気づき”を自動提案。新しい販路開拓とチーム共通言語づくりに挑戦中。",
    category: "事例紹介",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    date: "2024.09.18",
    title:
      "EVを導入から管理まで一元的にサポートする『EVolity』誕生 顧客に伴走し柔軟かつスピーディに進むサービス改善",
    description:
      "ハードとソフトを分けずに“移動体験”として再設計。開発チームとサポートチームが一体となった改善プロセスを公開。",
    category: "事例紹介",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    date: "2024.09.18",
    title:
      "顧客価値と向き合うことで生まれた『おまかせEV for Biz』配車・充電マネジメントで法人のEV導入を親身に支援",
    description:
      "車両配備、経路最適化、エネルギーマネジメントをワンストップ化。顧客ヒアリングをもとにした最短デリバリー体制が強み。",
    category: "社員インタビュー",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
  }
];

const categories = ["All", "社員インタビュー", "事例紹介"];

export function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredNews =
    selectedCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="news"
      className="relative bg-white py-16 px-4 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <AnimatedSection animation="fadeUp">
          <div className="space-y-4">
            <p className="text-[clamp(48px,10vw,104px)] leading-none tracking-tight text-[#d10000]">
              INFO
            </p>
            <p className="text-lg text-gray-500">私たちの思考やアイディア</p>
          </div>
        </AnimatedSection>

        <div className="mt-16 flex flex-col gap-12 lg:flex-row">
          <AnimatedSection className="lg:w-1/4" animation="fadeUp" delay={150}>
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400">
              Category
            </p>
            <div className="mt-6 space-y-5">
              {categories.map((category) => {
                const isActive = category === selectedCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center gap-4 text-base transition-colors ${
                      isActive
                        ? "text-[#d10000]"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        isActive ? "border-[#d10000]" : "border-gray-300"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isActive ? "bg-[#d10000]" : "bg-transparent"
                        }`}
                      />
                    </span>
                    {category}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          <div className="flex-1">
            <div className="md:hidden">
              {filteredNews.map((item, index) => (
                <AnimatedSection
                  key={item.id}
                  animation="fadeUp"
                  delay={index * 120}
                  className="border-b border-gray-200 py-8 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <article className="group flex items-stretch gap-6">
                    <div className="flex min-w-0 flex-1 flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="text-sm font-semibold tracking-wide text-gray-900">
                          {item.date}
                        </span>
                        <span className="rounded-md bg-gray-900 px-3 py-1 text-[11px] tracking-wide text-white">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium leading-relaxed text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:w-32">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <div className="hidden gap-12 md:grid md:grid-cols-2">
              {filteredNews.map((item, index) => (
                <AnimatedSection
                  key={item.id}
                  animation="fadeUp"
                  delay={index * 120}
                >
                  <article className="group flex h-full min-h-[520px] flex-col cursor-pointer md:min-h-[560px]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-gray-100">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-6 flex flex-1 flex-col space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="font-semibold tracking-wide">
                          {item.date}
                        </span>
                        <span className="rounded-full bg-gray-900 px-3 py-1 text-xs uppercase tracking-wide text-white">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-medium leading-snug text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-auto text-sm leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm tracking-[0.4em] text-gray-400">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`px-3 py-1 font-light ${
                    page === 1 ? "text-[#d10000]" : "hover:text-gray-600"
                  }`}
                  aria-current={page === 1 ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="px-3 py-1 text-lg hover:text-gray-600"
                aria-label="Next page"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
