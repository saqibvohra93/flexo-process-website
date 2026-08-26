import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/faq';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-20 bg-navy-900/40 border-t border-white/10 relative">
      <div className="container-x relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="eyebrow mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
            Common <span className="text-flexo-yellow">questions</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Lead times, plate thicknesses, file formats and ink compatibility.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-navy-950/80 border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono font-bold text-flexo-yellow bg-flexo-yellow/10 px-2.5 py-1 rounded-md border border-flexo-yellow/30 shrink-0">
                      Q{idx + 1}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-flexo-yellow" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 bg-white/[0.01]">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Category: {faq.category}
                    </div>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
