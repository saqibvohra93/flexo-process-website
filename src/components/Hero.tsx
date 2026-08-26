import React from 'react';
import { ShieldCheck, Zap, Award, ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles, Sliders } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onNavigateSection }) => {
  return (
    <section id="overview" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Lighting Gradients & Textures */}
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-navy-600/30 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-flexo-yellow/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Positioning & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Technology Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md text-slate-200 text-xs font-semibold uppercase tracking-wider mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-flexo-yellow animate-ping" />
              <span className="text-flexo-yellow font-bold">German CDI Laser Technology</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Pakistan's Prepress Authority</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-6">
              Precision Plates.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-flexo-yellow via-amber-300 to-flexo-orange">
                Perfect Prints.
              </span>
            </h1>

            {/* High Impact B2B Value Proposition Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Flexo Process (Private) Limited manufactures industry-leading <strong className="text-white font-semibold">HD digital flexographic photopolymer plates</strong> for labels, barrier flexible packaging, corrugated cartons, and PP woven sacks. Engineered with 4,000+ DPI German laser optics and oxygen-free Flat-Top Dot technology for zero dot gain shift and extended plate run-life.
            </p>

            {/* Quick Proof Metrics Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-flexo-yellow shrink-0" />
                <span>Sub-0.8% Micro-Dot Highlight Stability</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-flexo-yellow shrink-0" />
                <span>Huaguang DR284M-II &amp; German Plates</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-flexo-yellow shrink-0" />
                <span>24-Hour Express Dispatch Nationwide</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-flexo-yellow shrink-0" />
                <span>On-Site Press Fingerprinting &amp; DGC</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenQuote}
                className="btn-primary group shadow-[0_0_35px_rgba(245,197,24,0.3)]"
              >
                <span>Request a Technical Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigateSection('configurator')}
                className="btn-ghost flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4 text-flexo-yellow" />
                <span>Plate Spec Configurator</span>
              </button>
            </div>

          </div>

          {/* Right Column: Industrial Photopolymer Plate Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-flexo-yellow/30 via-navy-500/40 to-flexo-orange/30 rounded-3xl blur-2xl opacity-70" />

              {/* Master Technical Showcase Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-white/15 p-6 sm:p-7 backdrop-blur-xl shadow-2xl overflow-hidden">
                
                {/* Micro-Header with Plate Spec Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-slate-300 font-bold uppercase tracking-wider">
                      CDI LASER ACTIVE • 4,000 DPI
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-flexo-yellow bg-flexo-yellow/10 px-2 py-0.5 rounded border border-flexo-yellow/30">
                    GERMAN OPTICS
                  </span>
                </div>

                {/* Simulated Photopolymer Plate Relief Display */}
                <div className="my-5 relative rounded-xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-amber-600/30 via-orange-950/40 to-navy-950 p-4 shadow-inner">
                  <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
                  
                  <div className="flex items-center justify-between text-[11px] font-mono text-amber-300 mb-3">
                    <span className="font-bold">HUAGUANG DR284M-II / HD FLEXO</span>
                    <span>175 LPI • 0.8% DOT</span>
                  </div>

                  {/* Photopolymer Relief Layer Preview */}
                  <div className="space-y-2.5">
                    <div className="h-12 rounded-lg bg-gradient-to-r from-amber-500/40 via-amber-400/20 to-amber-600/50 border border-amber-400/40 flex items-center justify-between px-4 relative overflow-hidden">
                      <div className="flex items-center gap-2 font-mono text-xs text-amber-200">
                        <Layers className="w-4 h-4 text-flexo-yellow" />
                        <span className="font-bold">Flat-Top Dot Micro-Relief</span>
                      </div>
                      <span className="text-[11px] font-mono bg-navy-950/80 px-2 py-0.5 rounded text-amber-300 border border-amber-400/30">
                        0.55mm Relief
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                      <div className="p-2 rounded bg-navy-900/80 border border-white/10">
                        <span className="text-slate-400 block">Gauge</span>
                        <span className="text-white font-bold text-xs">1.14 - 3.94mm</span>
                      </div>
                      <div className="p-2 rounded bg-navy-900/80 border border-white/10">
                        <span className="text-slate-400 block">Durometer</span>
                        <span className="text-flexo-yellow font-bold text-xs">38 - 75 Shore A</span>
                      </div>
                      <div className="p-2 rounded bg-navy-900/80 border border-white/10">
                        <span className="text-slate-400 block">Floor Tol.</span>
                        <span className="text-emerald-400 font-bold text-xs">±0.005 mm</span>
                      </div>
                    </div>
                  </div>

                  {/* Laser Beam Animation Line */}
                  <div className="mt-3 text-[11px] font-mono text-slate-300 flex items-center justify-between bg-navy-950/60 p-2 rounded border border-white/5">
                    <span className="flex items-center gap-1.5 text-flexo-cyan">
                      <Sparkles className="w-3.5 h-3.5" />
                      Sub-Micron Laser Ablation
                    </span>
                    <span className="text-slate-400">100% In-Line QA</span>
                  </div>
                </div>

                {/* Bottom Spec Summary */}
                <div className="pt-2 text-xs text-slate-300 space-y-2">
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-slate-400">Core Substrates:</span>
                    <span className="text-white font-medium">BOPP, Kraft Corrugated, PP Woven, Labels</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-slate-400">Manufacturing Facility:</span>
                    <span className="text-white font-medium">Karachi S.I.T.E., Pakistan</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">Emergency Support:</span>
                    <span className="text-flexo-yellow font-bold">24/7 Hotline Dispatch</span>
                  </div>
                </div>

              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -bottom-5 -left-4 bg-navy-900 border border-flexo-yellow/40 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-flexo-yellow/20 flex items-center justify-center text-flexo-yellow">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase">ISO Calibrated</div>
                  <div className="text-[11px] text-slate-400">German Quality Benchmarks</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Industrial Live Metrics Stats Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-flexo-yellow">4,000+ DPI</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">CDI Laser Optical Precision</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">0.8% - 99.8%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Highlight-to-Shadow Dot Range</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400">24 Hours</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Standard Production Dispatch</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-flexo-cyan">500,000+ m</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Continuous Plate Run Life</div>
          </div>
        </div>

      </div>
    </section>
  );
};
