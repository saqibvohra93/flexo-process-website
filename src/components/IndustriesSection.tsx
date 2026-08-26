import React, { useState } from 'react';
import { Building2, Check, ArrowRight, ChevronRight, X } from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustryForQuote: (industryName: string) => void;
}

interface IndustrySimple {
  id: string;
  name: string;
  icon: string;
  packagingTypes: string[];
  whyFlexo: string;
}

const INDUSTRIES_SIMPLE: IndustrySimple[] = [
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    icon: '🍱',
    packagingTypes: ['Snack pouches', 'Beverage labels', 'Food wrap films', 'Retort pouches'],
    whyFlexo: 'High-definition plates for food-grade barrier films and prime labels with zero migration risk.'
  },
  {
    id: 'pharma-healthcare',
    name: 'Pharma & Healthcare',
    icon: '💊',
    packagingTypes: ['Pharma labels', 'Medical device packaging', 'Blister foil lids', 'Sterile pouch films'],
    whyFlexo: 'GS1 Grade A barcode compliance, micro-text for regulatory warnings, and cleanroom-compatible plate processing.'
  },
  {
    id: 'cosmetics-personal-care',
    name: 'Cosmetics & Personal Care',
    icon: '🧴',
    packagingTypes: ['Cosmetic labels', 'Shampoo sachets', 'Luxury folding cartons', 'Shrink sleeves'],
    whyFlexo: 'Ultra-fine 2pt typography, smooth vignette fades, and cold foil embellishment capability for premium shelf appeal.'
  },
  {
    id: 'ecommerce-retail',
    name: 'E-Commerce & Retail',
    icon: '📦',
    packagingTypes: ['Corrugated shipping boxes', 'Mailer cartons', 'Product labels', 'Retail display boxes'],
    whyFlexo: 'Fluting-suppressed corrugated plates for branded shipping boxes and high-speed post-print carton runs.'
  },
  {
    id: 'agriculture-feed',
    name: 'Agriculture & Feed',
    icon: '🌾',
    packagingTypes: ['PP woven feed sacks', 'Fertilizer bags', 'Seed pouches', 'Rice and flour sacks'],
    whyFlexo: 'Abrasion-resistant Huaguang DR284M-II plates engineered for rough woven polypropylene and heavy ink laydown.'
  },
  {
    id: 'construction-industrial',
    name: 'Construction & Industrial',
    icon: '🏗️',
    packagingTypes: ['Cement bags', 'Chemical sacks', 'Multi-wall kraft bags', 'Industrial valve sacks'],
    whyFlexo: 'High-impact photopolymer plates delivering maximum opacity and rub-resistance on porous kraft and cement sack substrates.'
  }
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustryForQuote }) => {
  const [activeIndustry, setActiveIndustry] = useState<IndustrySimple | null>(null);

  return (
    <section id="industries" className="py-16 lg:py-20 bg-white border-t border-slate-200 relative">
      <div className="container-x relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="eyebrow mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Industries We Serve</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3">
            Packaging solutions for <span className="text-amber-600">every market</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From food and pharma to cement and agriculture, we manufacture precision flexo plates tailored to the specific substrates and press conditions of each industry.
          </p>
        </div>

        {/* 6 Industry Cards (No images, clean text + icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES_SIMPLE.map((ind) => (
            <div
              key={ind.id}
              className="group rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-600 transition-colors mb-3">
                  {ind.name}
                </h3>

                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Common Packaging Types
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.packagingTypes.map((p, i) => (
                      <span key={i} className="text-xs bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {ind.whyFlexo}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveIndustry(ind)}
                  className="font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectIndustryForQuote(ind.name)}
                  className="text-amber-600 font-bold uppercase tracking-wider hover:underline"
                >
                  Request Quote &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Industry Detail Modal */}
      {activeIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveIndustry(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 p-1 rounded-lg bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-4xl mb-3">{activeIndustry.icon}</div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-3">
              {activeIndustry.name}
            </h3>

            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Common Packaging Types
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeIndustry.packagingTypes.map((p, i) => (
                  <span key={i} className="text-xs bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeIndustry.whyFlexo}
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveIndustry(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-700 hover:text-slate-950"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = activeIndustry.name;
                  setActiveIndustry(null);
                  onSelectIndustryForQuote(name);
                }}
                className="btn-primary text-xs py-2.5 px-6"
              >
                <span>Request Quote for {activeIndustry.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
