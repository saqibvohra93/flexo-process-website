import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', id: 'overview' },
    { label: 'Technology', id: 'technology' },
    { label: 'Industries', id: 'industries' },
    { label: 'Services', id: 'services' },
    { label: 'Plate Configurator', id: 'configurator' },
    { label: 'Articles & Tech Hub', id: 'knowledge-hub' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Industrial Emergency / Hotline Bar */}
      <div className="bg-navy-950/90 border-b border-white/10 backdrop-blur-md text-xs text-slate-300 py-1.5 hidden sm:block">
        <div className="container-x flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-flexo-yellow font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              German CDI Laser Technology &amp; HD Flat-Top Dots
            </span>
            <span className="hidden md:inline-flex items-center text-slate-400">
              Karachi S.I.T.E. Manufacturing Hub &bull; Nationwide 24h Dispatch
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+922132581090"
              className="flex items-center gap-1.5 hover:text-flexo-yellow transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-flexo-yellow" />
              <span>021-32581090</span>
            </a>
            <a
              href="mailto:info@flexoprocess.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-flexo-yellow transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-flexo-yellow" />
              <span>info@flexoprocess.com</span>
            </a>
            <a
              href="https://wa.me/923002567114?text=Hi%20Flexo%20Process,%20I%20need%20a%20technical%20quote%20for%20flexo%20plates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-wider bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full hover:bg-emerald-600/50 transition-colors"
            >
              WhatsApp Hotline
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl border-b border-white/10 py-3.5'
            : 'bg-navy-950/70 backdrop-blur-lg border-b border-white/5 py-4'
        }`}
      >
        <div className="container-x flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('overview')}
            className="flex items-center gap-3 text-left group"
          >
            {/* Custom Flexo Diamond / P Emblem */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/20 p-1 flex items-center justify-center shadow-lg group-hover:border-flexo-yellow transition-all duration-300">
              <div className="w-full h-full bg-navy-950 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="font-display font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-flexo-yellow to-flexo-orange">
                  FP
                </span>
                <div className="absolute inset-0 bg-flexo-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black tracking-wider text-base sm:text-lg text-white uppercase group-hover:text-flexo-yellow transition-colors">
                  FLEXO PROCESS
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-slate-400 block uppercase">
                (PRIVATE) LIMITED
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-300">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="hover:text-flexo-yellow transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-flexo-yellow transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="btn-primary text-xs py-2.5 px-5 shadow-[0_0_25px_rgba(245,197,24,0.25)] hover:shadow-[0_0_35px_rgba(245,197,24,0.45)]"
            >
              <span>Instant RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-navy-950/98 border-b border-white/10 backdrop-blur-2xl px-5 py-6 mt-3 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-slate-200 hover:bg-white/5 hover:text-flexo-yellow"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="btn-primary w-full py-3 text-xs justify-center"
                >
                  <span>Request a Technical Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                  <a href="tel:+922132581090" className="flex items-center gap-1.5 text-flexo-yellow font-medium">
                    <Phone className="w-3.5 h-3.5" />
                    <span>021-32581090</span>
                  </a>
                  <a
                    href="https://wa.me/923002567114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-semibold"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
