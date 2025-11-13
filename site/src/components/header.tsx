'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "HOME", href: "/#home" },
  { name: "NEWS", href: "/#news" },
  { name: "SERVICE", href: "/#service" },
  { name: "WORKS", href: "/works" },
  { name: "RECRUIT", href: "/#recruit" },
  { name: "ABOUT US", href: "/#about" },
  { name: "CONTACT", href: "/#contact" }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClose = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-8 py-12 md:py-16">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-white tracking-[0.4em]"
            style={{ 
              fontFamily: "Georgia, serif", 
              letterSpacing: "0.3em",
              textShadow: "0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)"
            }}
            onClick={handleClose}
          >
            toito.inc
          </Link>

          <nav className="hidden lg:flex items-center gap-12 ml-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
                style={{ 
                  fontSize: "11px", 
                  letterSpacing: "0.1em",
                  textShadow: "0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)"
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 flex flex-col gap-4 bg-black/60 rounded-lg p-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
                style={{ 
                  fontSize: "11px", 
                  letterSpacing: "0.1em",
                  textShadow: "0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)"
                }}
                onClick={handleClose}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
