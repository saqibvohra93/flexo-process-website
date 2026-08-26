import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/faq';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-100/60 border-t border-slate-200 relative transition-colors duration-200">
      <div className="container-x relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="eyebrow mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3">
            Common <span className="text-flexo-yellow">questions</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
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
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 shrink-0">
                      Q{idx + 1}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-amber-500" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
