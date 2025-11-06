import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { NewsSection } from './components/NewsSection';
import { ServiceSection } from './components/ServiceSection';
import { RecruitSection } from './components/RecruitSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { WorksPage } from './components/WorksPage';
import { AdBanner } from './components/AdBanner';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleLocationChange);

    // Override link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        const url = new URL(anchor.href);
        
        // Handle internal navigation
        if (url.origin === window.location.origin) {
          // Handle hash links on different pages
          if (url.hash && url.pathname !== window.location.pathname) {
            e.preventDefault();
            window.history.pushState({}, '', url.pathname);
            setCurrentPath(url.pathname);
            // Wait for page to render, then scroll to section
            setTimeout(() => {
              const element = document.querySelector(url.hash);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }
          // Handle path-only navigation (no hash)
          else if (!url.hash && url.pathname !== window.location.pathname) {
            e.preventDefault();
            window.history.pushState({}, '', url.pathname);
            setCurrentPath(url.pathname);
            window.scrollTo(0, 0);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1668462836626-e41758689bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxob3VldHRlJTIwcGVyc29uJTIwZ2xvd2luZyUyMG9yYnMlMjBuaWdodHxlbnwxfHx8fDE3NjI0NDA3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      
      {currentPath === '/works' ? (
        <WorksPage />
      ) : (
        <>
          <HomeSection />
          <NewsSection />
          <ServiceSection />
          <RecruitSection />
          <AboutSection />
          <ContactSection />
        </>
      )}
      
      <AdBanner />
    </div>
  );
}
