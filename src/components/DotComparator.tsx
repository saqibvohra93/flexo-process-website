import React, { useState } from 'react';
import { SlidersHorizontal, CheckCircle2, AlertTriangle, Sparkles, ZoomIn } from 'lucide-react';

export const DotComparator: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeImpression, setActiveImpression] = useState<'low' | 'medium' | 'high'>('medium');

  return (
    <section id="technology" className="py-16 lg:py-20 bg-navy-900/60 border-y border-white/10 relative overflow-hidden">
      <div className="container-x relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="eyebrow mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technology</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
            Why our dots <span className="text-flexo-yellow">hold on press</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Drag the slider to see how flat-top dots resist the impression gain that plagues standard plates.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Interactive Split Slider Box */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl border border-white/15 bg-navy-950 overflow-hidden shadow-2xl select-none">
              
              {/* Top Viewport Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-navy-900/90 border-b border-white/10 text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1.5 font-bold">
                  <ZoomIn className="w-4 h-4 text-flexo-yellow" />
                  MICROSCOPIC 100X CROSS-SECTION VIEW
                </span>
                <span className="text-slate-400">
                  Target: 175 LPI Process Highlight Vignette (1% - 10%)
                </span>
              </div>

              {/* Main Visual Display */}
              <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden flex">
                
                {/* Left Side: Standard Round Top Flexo */}
                <div
                  className="absolute top-0 bottom-0 left-0 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-all"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold font-mono uppercase">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Standard Round-Top Flexo
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 font-display">
                      Parabolic Dot Gain &amp; Vignette Edge Banding
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs">
                      Oxygen inhibition truncates the dot apex. Under normal press impression, the round dome mushrooms outward, resulting in sudden 5-8% dot jumping.
                    </p>
                  </div>

                  {/* Microscopic Graphic Simulation: Round Top Dots */}
                  <div className="my-auto py-6 flex items-end justify-center gap-6 sm:gap-10">
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative">
                        {/* Parabolic round dot with squashed halo */}
                        <div className={`rounded-t-full bg-gradient-to-b from-rose-400 to-rose-700 border border-rose-300 transition-all duration-300 ${
                          activeImpression === 'high' ? 'w-16 h-12 rounded-t-[50%]' : activeImpression === 'medium' ? 'w-12 h-14' : 'w-10 h-16'
                        }`} />
                        {/* Dot gain halo expansion */}
                        <div className={`absolute -bottom-1 -left-2 -right-2 h-3 rounded-full bg-rose-500/30 blur-[2px] transition-all duration-300 ${
                          activeImpression === 'high' ? 'opacity-100' : 'opacity-40'
                        }`} />
                      </div>
                      <span className="text-[11px] font-mono text-rose-400 font-bold">
                        {activeImpression === 'high' ? 'Dot Gain: +28%' : activeImpression === 'medium' ? 'Dot Gain: +21%' : 'Dot Gain: +15%'}
                      </span>
                    </div>
                  </div>

                  <div className="z-10 text-[11px] font-mono text-slate-400 border-t border-white/5 pt-3 flex justify-between">
                    <span>Relief: Uncontrolled Rounding</span>
                    <span className="text-rose-400">Prone to Midtone Plugging</span>
                  </div>
                </div>

                {/* Right Side: German HD Flat-Top Dots */}
                <div className="w-full bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 flex flex-col justify-between p-6 sm:p-8 pl-8">
                  <div className="z-10 flex flex-col items-end text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-flexo-yellow/20 text-flexo-yellow border border-flexo-yellow/40 text-xs font-bold font-mono uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Flexo Process HD Flat-Top
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 font-display">
                      Flat Plateau &amp; 70° Steep Shoulders
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-xs">
                      Oxygen-free CDI laser exposure creates engineered flat dot plateaus. Impression pressure shifts cannot expand the dot surface area.
                    </p>
                  </div>

                  {/* Microscopic Graphic Simulation: Flat Top Dots */}
                  <div className="my-auto py-6 flex items-end justify-center gap-6 sm:gap-10">
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative">
                        {/* Flat top dot with steep shoulders */}
                        <div className="w-10 h-16 bg-gradient-to-b from-flexo-yellow via-amber-400 to-amber-600 border-t-2 border-x border-white/80" />
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold">
                        Stable 0.8% - 1.2% Dot
                      </span>
                    </div>
                  </div>

                  <div className="z-10 text-[11px] font-mono text-slate-300 border-t border-white/5 pt-3 flex justify-between w-full">
                    <span className="text-flexo-yellow">German Optical Engine</span>
                    <span>Smooth Fades to 0% Zero</span>
                  </div>
                </div>

                {/* Vertical Divider Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-flexo-yellow cursor-ew-resize flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-navy-950 border-2 border-flexo-yellow flex items-center justify-center text-flexo-yellow shadow-xl -ml-0.5">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                </div>

              </div>

              {/* Bottom Range Controller */}
              <div className="p-4 bg-navy-900/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-2/3 flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400 shrink-0">Drag to Compare:</span>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="w-full h-2 bg-navy-950 rounded-lg appearance-none cursor-pointer accent-flexo-yellow"
                    aria-label="Compare Standard vs HD Flat Top Dots"
                  />
                  <span className="text-xs font-mono text-flexo-yellow font-bold w-12 text-right">
                    {sliderPosition}%
                  </span>
                </div>

                {/* Impression Level Buttons */}
                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  <span className="text-[11px] text-slate-400 mr-1">Press Nip:</span>
                  {(['low', 'medium', 'high'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setActiveImpression(level)}
                      className={`text-[11px] font-mono uppercase px-2.5 py-1 rounded transition-colors ${
                        activeImpression === level
                          ? 'bg-flexo-yellow text-navy-950 font-bold'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Technical Superiority Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            <div className="card-glass p-5 border-l-4 border-l-flexo-yellow">
              <h4 className="text-white font-bold text-sm mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-flexo-yellow shrink-0" />
                Zero Highlight Dot Bridging
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Flat plateaus hold 0.8% to 2% dots cleanly without clustering into neighboring cells, eliminating the harsh cutoff lines common in skin tones and vignettes.
              </p>
            </div>

            <div className="card-glass p-5 border-l-4 border-l-emerald-400">
              <h4 className="text-white font-bold text-sm mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Extended Plate Run Life (+40%)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Steep 70-degree shoulder walls distribute mechanical nip stress evenly, resisting premature edge chipping and wear across 500,000+ meter continuous runs.
              </p>
            </div>

            <div className="card-glass p-5 border-l-4 border-l-flexo-cyan">
              <h4 className="text-white font-bold text-sm mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-flexo-cyan shrink-0" />
                Faster Press Make-Ready (Under 80m)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Consistent floor thickness (held to ±0.005mm) lets press operators achieve target Solid Ink Density and registration in a fraction of setup time.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between">
              <div>
                <span className="font-bold block text-white">Need Free Test Samples?</span>
                <span>We ship sample proof kits to qualified converters.</span>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-3 py-1.5 rounded-lg bg-amber-400 text-navy-950 font-bold hover:bg-white transition-colors"
              >
                Get Kit
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
