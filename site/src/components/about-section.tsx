import { AnimatedSection } from './animated-section';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl relative z-10">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-[clamp(48px,10vw,104px)] leading-none tracking-tight text-white mb-12">ABOUT US</h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
          <div className="max-w-3xl">
            <table className="w-full text-white">
              <tbody>
                <tr className="border-b border-white/30">
                  <td className="py-6 pr-8 align-top whitespace-nowrap text-gray-300">商号</td>
                  <td className="py-6">toito.inc</td>
                </tr>
                <tr className="border-b border-white/30">
                  <td className="py-6 pr-8 align-top whitespace-nowrap text-gray-300">住所</td>
                  <td className="py-6">東京都渋谷区恵比寿西2丁目4番8号</td>
                </tr>
                <tr className="border-b border-white/30">
                  <td className="py-6 pr-8 align-top whitespace-nowrap text-gray-300">代表者</td>
                  <td className="py-6">佐田 晋一郎</td>
                </tr>
                <tr>
                  <td className="py-6 pr-8 align-top whitespace-nowrap text-gray-300">事業内容</td>
                  <td className="py-6">
                    体験型・没入型コンテンツのプロデュース・企画・制作
                    <br />
                    体験型プロダクトの開発・空間設計・R&D
                    <br />
                    体験型イベントの運営・IPビジネス開発
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
