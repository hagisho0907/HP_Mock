import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', href: '/#home' },
    { name: 'NEWS', href: '/#news' },
    { name: 'SERVICE', href: '/#service' },
    { name: 'WORKS', href: '/works' },
    { name: 'RECRUIT', href: '/#recruit' },
    { name: 'ABOUT US', href: '/#about' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-8 py-8 md:py-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className="text-white italic tracking-wide"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            NOMORE INC.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12 ml-auto">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
                style={{ fontSize: '11px', letterSpacing: '0.1em' }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 flex flex-col gap-4 bg-black/60 rounded-lg p-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
                style={{ fontSize: '11px', letterSpacing: '0.1em' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
