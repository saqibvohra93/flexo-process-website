import React from 'react';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onNavigateSection }) => {
  return (
    <section id="overview" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-100/90 via-slate-50 to-white transition-colors duration-200">
      {/* Dark mode ambient radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_90%_at_50%_-10%,rgba(45,79,158,0.35),transparent_80%)] hidden pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_20%_40%,rgba(22,41,92,0.4),transparent)] hidden pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-navy-600/[0.25] hidden rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-flexo-yellow/[0.08] hidden rounded-full blur-[140px] pointer-events-none" />

      {/* Light mode crisp premium subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_0%,rgba(240,180,41,0.07),transparent_70%)] block pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-80 h-80 bg-blue-100/40 block rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-100/35 block rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute inset-0 grid-texture opacity-10 pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left: Bold, direct, high-converting copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              German CDI Laser Plate Technology &bull; HD Flat-Top
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.4rem] tracking-tight text-[#FF7A00] leading-[1.1] mb-5">
              Flexo Graphic Digital Plates
            </h1>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-lg mb-8">
              Pakistan's premier manufacturer of digital flexographic printing plates
              <span className="text-slate-950 font-semibold"> (Flexo Blocks)</span>, engineered
              for labels, flexible packaging, corrugated cartons and PP woven sacks.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <button onClick={onOpenQuote} className="btn-primary group shadow-md">
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+923002567114" className="btn-ghost shadow-sm">
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>+92-300-2567114</span>
              </a>
            </div>

            {/* Trust row with high contrast */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-700">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-950 font-bold">24-Hour</span> Express Dispatch
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-950 font-bold">4,000 DPI</span> Laser Precision
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Karachi S.I.T.E. Plant
              </span>
            </div>
          </div>

          {/* Right: Real Printing Press & Plate Engineering Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="High-precision digital flexographic photopolymer printing plate production using German CDI laser technology"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              {/* Top right floating chip: 40% Longer Plate Life */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold tracking-wide">
                  <strong className="text-emerald-400 font-extrabold">40%</strong> Longer Plate Life
                </span>
              </div>

              {/* Minimal floating spec badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex items-center justify-between bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-center sm:text-left shadow-lg">
                <div>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 block">Thickness</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">1.14 - 3.94mm</span>
                </div>
                <div className="w-px h-7 sm:h-8 bg-slate-200" />
                <div>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 block">Screen</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-600">Up to 200 LPI</span>
                </div>
                <div className="w-px h-7 sm:h-8 bg-slate-200" />
                <div>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 block">Turnaround</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-600">24 Hours</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Subtle bottom separator line for crisp transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent pointer-events-none" />
    </section>
  );
};
