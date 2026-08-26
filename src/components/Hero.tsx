import React from 'react';
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onNavigateSection }) => {
  return (
    <section id="overview" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-flexo-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left: Bold, direct, high-converting copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              German CDI Laser Plate Technology &bull; HD Flat-Top
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] tracking-tight text-white leading-[1.08] mb-5">
              Precision Plates.<br />
              <span className="text-flexo-yellow">Perfect Prints.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg mb-8">
              Pakistan's premier manufacturer of digital flexographic printing plates
              <span className="text-white font-medium"> (Flexo Blocks)</span> — engineered
              for labels, flexible packaging, corrugated cartons and PP woven sacks.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <button onClick={onOpenQuote} className="btn-primary group">
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+922132581090" className="btn-ghost">
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>021-32581090</span>
              </a>
            </div>

            {/* Trust row with emerald green checks */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">24-Hour</span> Express Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">4,000 DPI</span> Laser Precision
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Karachi S.I.T.E. Plant
              </span>
            </div>
          </div>

          {/* Right: Real Printing Press & Plate Engineering Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="High-precision digital flexographic photopolymer printing plate production using German CDI laser technology"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />

              {/* Minimal floating spec badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-navy-950/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
                <div>
                  <span className="text-[11px] text-slate-400 block">Plate Thickness</span>
                  <span className="text-sm font-bold text-white">1.14mm – 3.94mm</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Screen Ruling</span>
                  <span className="text-sm font-bold text-emerald-400">Up to 200 LPI</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Turnaround</span>
                  <span className="text-sm font-bold text-emerald-400">24 Hours</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
