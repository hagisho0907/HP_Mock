import { AboutSection } from "@/components/about-section";
import { AdBanner } from "@/components/ad-banner";
import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";
import { HomeSection } from "@/components/home-section";
import { NewsSection } from "@/components/news-section";
import { RecruitSection } from "@/components/recruit-section";
import { ServiceSection } from "@/components/service-section";

export default function Page() {
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
        <HomeSection />
        <NewsSection />
        <ServiceSection />
        <RecruitSection />
        <AboutSection />
        <ContactSection />
      </main>
      <AdBanner />
    </div>
  );
}
