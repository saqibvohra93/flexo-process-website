import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, Sparkles, ShieldCheck, Gauge } from 'lucide-react';

export const DotComparator: React.FC = () => {
  const [activeImpression, setActiveImpression] = useState<'normal' | 'high'>('normal');

  return (
    <section id="technology" className="py-16 lg:py-20 bg-slate-100/70 dark:bg-navy-950/90 border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(22,41,92,0.3),transparent_70%)] dark:block hidden pointer-events-none" />
      <div className="container-x relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-left">
          <div className="eyebrow mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="text-emerald-500 font-bold">German CDI Technology</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight mb-3">
            Standard Round-Top vs.{' '}
            <span className="text-emerald-500">
              Flexo Process HD Flat-Top
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            See how our oxygen-free flat-top dot technology eliminates impression dot gain and protects your highlights across 500,000+ meter runs.
          </p>
        </div>

        {/* Simulate Press Impression Nip Controller (Positioned ABOVE the comparison cards) */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-emerald-500 shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Live Pressroom Simulation
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Cylinder Impression Nip:{' '}
                <strong className={activeImpression === 'normal' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}>
                  {activeImpression === 'normal' ? 'Normal Operating Pressure (10-15 µm)' : 'Heavy Production Load (30-40 µm)'}
                </strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveImpression('normal')}
              className={`flex-1 sm:flex-none text-xs px-4 py-2 rounded-xl font-bold transition-all duration-200 ${
                activeImpression === 'normal'
                  ? 'bg-emerald-500 text-navy-950 shadow-md shadow-emerald-500/20 scale-[1.02]'
                  : 'bg-slate-100 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/5'
              }`}
            >
              Normal Nip
            </button>
            <button
              type="button"
              onClick={() => setActiveImpression('high')}
              className={`flex-1 sm:flex-none text-xs px-4 py-2 rounded-xl font-bold transition-all duration-200 ${
                activeImpression === 'high'
                  ? 'bg-amber-400 text-navy-950 shadow-md shadow-amber-400/20 scale-[1.02]'
                  : 'bg-slate-100 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/5'
              }`}
            >
              Heavy Impression
            </button>
          </div>
        </div>

        {/* Clean Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          
          {/* Card 1: Standard Round-Top Flexo (Defects / Issues) */}
          <div className="rounded-2xl border border-rose-500/30 bg-white dark:bg-navy-950/80 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30 text-xs font-bold font-mono uppercase">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Standard Round-Top Flexo
                </span>
                <span className="text-xs font-mono text-rose-600 dark:text-rose-400 font-semibold">
                  {activeImpression === 'high' ? 'High Nip: +28% Dot Gain' : 'Normal Nip: +18% Dot Gain'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">
                Parabolic Dome &amp; Impression Sensitivity
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Atmospheric oxygen truncates dot crowns into bullet domes. As press impression fluctuates by just 15 microns, the round top squashes outward — causing harsh vignette cutoffs and muddy midtones.
              </p>

              {/* Graphic Simulation */}
              <div className="h-44 rounded-xl bg-slate-100 dark:bg-navy-900/90 border border-slate-200 dark:border-white/5 p-4 flex flex-col justify-between items-center mb-6 relative overflow-hidden">
                <span className="text-[10px] font-mono text-slate-500 uppercase self-start">Microscopic 100x Profile</span>
                
                <div className="flex items-end justify-center gap-6 my-auto">
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative">
                      {/* Parabolic round dot */}
                      <div className={`rounded-t-full bg-gradient-to-b from-rose-400 to-rose-700 border border-rose-300 transition-all duration-300 ${
                        activeImpression === 'high' ? 'w-14 h-11' : 'w-10 h-14'
                      }`} />
                      <div className={`absolute -bottom-1 -left-2 -right-2 h-2.5 rounded-full bg-rose-500/30 blur-[2px] transition-all duration-300 ${
                        activeImpression === 'high' ? 'opacity-100' : 'opacity-40'
                      }`} />
                    </div>
                    <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 font-semibold">Unstable Crown</span>
                  </div>
                </div>

                <div className="w-full flex justify-between text-[11px] font-mono text-rose-700 dark:text-rose-300/80 pt-2 border-t border-slate-200 dark:border-white/5">
                  <span>Minimum Highlight: 3.5%</span>
                  <span>Prone to Haloing</span>
                </div>
              </div>

              {/* Technical Limits */}
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">&times;</span>
                  <span>Dot crowns mushroom under nip pressure, shifting Pantone colors</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">&times;</span>
                  <span>Requires frequent press shutdowns for manual plate cleaning</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">&times;</span>
                  <span>Shorter plate life due to mechanical stress on thin shoulders</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-500">
              Traditional Analog &amp; Non-Inert Digital Plates
            </div>
          </div>

          {/* Card 2: Flexo Process HD Flat-Top (ALL GOOD THINGS IN GREEN) */}
          <div className="rounded-2xl border-2 border-emerald-500/60 bg-emerald-50/50 dark:bg-gradient-to-b dark:from-emerald-950/30 dark:via-navy-950 dark:to-navy-950 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.08)] dark:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40 text-xs font-bold font-mono uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  Flexo Process HD Flat-Top
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  Zero Dot Gain Shift (0.8% Dot)
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2 flex items-center gap-2">
                <span>Flat Plateau &amp; 70° Steep Shoulders</span>
                <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  GERMAN OPTICS
                </span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Oxygen-free laser CDI exposure creates engineered flat plateaus with steep 70° sidewalls. Impression fluctuations cannot increase the contact surface area, guaranteeing razor-sharp 0.8% highlights down to zero.
              </p>

              {/* Graphic Simulation */}
              <div className="h-44 rounded-xl bg-white dark:bg-navy-900/90 border border-emerald-500/25 p-4 flex flex-col justify-between items-center mb-6 relative overflow-hidden shadow-inner">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase self-start flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Sub-Micron Laser Flat-Top Profile
                </span>
                
                <div className="flex items-end justify-center gap-6 my-auto">
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative">
                      {/* Engineered Flat Top Dot */}
                      <div className="w-10 h-14 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-700 border-t-2 border-x border-white/90 shadow-[0_0_15px_rgba(16,185,129,0.35)]" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">Stable 0.8% Dot</span>
                  </div>
                </div>

                <div className="w-full flex justify-between text-[11px] font-mono text-emerald-700 dark:text-emerald-300 pt-2 border-t border-emerald-500/20">
                  <span>Minimum Dot: 0.8% at 175 LPI</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Clean Drop to Zero</span>
                </div>
              </div>

              {/* All Good Advantages in Green */}
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong className="text-emerald-700 dark:text-emerald-300">40% Longer Plate Life:</strong> Steep shoulders withstand continuous high-speed mechanical nip pressure</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong className="text-emerald-700 dark:text-emerald-300">Fast Make-Ready (&lt;80m):</strong> Uniform plate floor gauge (±0.005mm) achieves target color instantly</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong className="text-emerald-700 dark:text-emerald-300">Zero Vignette Banding:</strong> Smooth photographic gradient transitions without harsh drop-offs</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs">
              <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">500,000+ Meter Run Life</span>
              <a
                href="#contact"
                className="text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-white flex items-center gap-1 uppercase tracking-wider"
              >
                Request Free Sample Kit &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
