import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onNavigateSection: (sectionId: string) => void;
}

const NAV_LINKS = [
  { label: 'Industries', id: 'industries' },
  { label: 'Services', id: 'services' },
  { label: 'Technology', id: 'technology' },
  { label: 'Resources', id: 'knowledge-hub' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-slate-200 shadow-md py-2.5'
            : 'bg-white/85 backdrop-blur-md border-slate-200/80 shadow-sm py-3'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('overview')}
            className="flex items-center shrink-0"
            aria-label="Flexo Process Home"
          >
            <img
              src="/images/logo-black.png"
              alt="Flexo Process (Private) Limited"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-slate-700 flex-nowrap">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="hover:text-amber-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: Phone + CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+923002567114"
              className="hidden xl:flex items-center gap-1.5 text-[13px] font-medium text-slate-700 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>+92-300-2567114</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex btn-primary text-xs py-2 sm:py-2.5 px-4 sm:px-5 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-200 shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 border-t border-slate-200 px-5 py-5 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="flex items-center justify-between text-left py-3 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-amber-600"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="btn-primary w-full py-3 text-sm justify-center"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+923002567114"
                  className="flex items-center justify-center gap-2 text-sm text-slate-700 font-medium py-2 hover:text-slate-950"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>+92-300-2567114</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};