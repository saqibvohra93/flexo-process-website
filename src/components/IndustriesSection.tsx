import React, { useState } from 'react';
import { Package, Check, ArrowRight, ShieldCheck, Sparkles, Layers, ChevronRight, X } from 'lucide-react';
import { INDUSTRIES, IndustryItem } from '../data/industries';

interface IndustriesSectionProps {
  onSelectIndustryForQuote: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustryForQuote }) => {
  const [activeModalIndustry, setActiveModalIndustry] = useState<IndustryItem | null>(null);

  return (
    <section id="industries" className="py-16 lg:py-20 bg-navy-950 border-t border-white/10 relative">
      <div className="container-x relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="eyebrow mb-3">
            <Package className="w-3.5 h-3.5" />
            <span>Industries</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
            Plates built for <span className="text-flexo-yellow">your substrate</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            From fine pharmaceutical labels to abrasive cement sacks — each formulation is matched to the job.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="group rounded-2xl bg-navy-900/70 border border-white/10 hover:border-flexo-yellow/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm"
            >
              {/* Image & Overlay Tag */}
              <div className="relative h-48 w-full overflow-hidden bg-navy-950">
                <img
                  src={ind.imageUrl}
                  alt={ind.imageAlt || `${ind.title} flexographic printing plates`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono font-bold bg-navy-950/90 text-flexo-yellow border border-flexo-yellow/30 px-2.5 py-1 rounded-md backdrop-blur-md">
                    {ind.specs.screenRulings}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-flexo-yellow transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-5 text-xs text-slate-200">
                    {ind.keyBenefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setActiveModalIndustry(ind)}
                    className="font-bold text-slate-300 hover:text-flexo-yellow flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onSelectIndustryForQuote(ind.title)}
                    className="text-flexo-yellow font-bold uppercase tracking-wider hover:underline"
                  >
                    Request Quote &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Industry Detail Modal */}
      {activeModalIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-navy-900 border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalIndustry(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="eyebrow mb-2">Technical Industry Profile</div>
            <h3 className="font-display font-extrabold text-2xl text-white mb-2">
              {activeModalIndustry.title}
            </h3>
            <p className="text-xs text-flexo-yellow font-mono mb-4">
              {activeModalIndustry.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalIndustry.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-navy-950 border border-white/10 mb-6 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">CDI Resolution</span>
                <span className="text-white font-bold">{activeModalIndustry.specs.resolution}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Durometer</span>
                <span className="text-flexo-yellow font-bold">{activeModalIndustry.specs.durometer}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Screen Ruling</span>
                <span className="text-white font-bold">{activeModalIndustry.specs.screenRulings}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Turnaround</span>
                <span className="text-emerald-400 font-bold">{activeModalIndustry.specs.turnaround}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Key Performance Advantages
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                {activeModalIndustry.keyBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-200 mb-6 flex justify-between items-center">
              <span className="font-semibold text-slate-400">Recommended Plate:</span>
              <span className="font-bold text-white font-mono">{activeModalIndustry.plateRecommendation}</span>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveModalIndustry(null)}
                className="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-slate-300 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalIndustry.title;
                  setActiveModalIndustry(null);
                  onSelectIndustryForQuote(title);
                }}
                className="btn-primary text-xs py-2.5 px-6"
              >
                <span>Request Plate Quote for {activeModalIndustry.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
