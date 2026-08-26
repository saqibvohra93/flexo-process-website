import React, { useState } from 'react';
import { Layers, Sparkles, Maximize2, Headphones, CheckCircle2, ArrowRight, ShieldCheck, Wrench, FileCheck, X } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/services';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6 text-flexo-yellow" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-flexo-yellow" />;
      case 'Maximize2': return <Maximize2 className="w-6 h-6 text-flexo-yellow" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-flexo-yellow" />;
      default: return <Layers className="w-6 h-6 text-flexo-yellow" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-20 bg-navy-900/50 border-t border-white/10 relative">
      <div className="container-x relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="eyebrow mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Services</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
            Artwork in, <span className="text-flexo-yellow">press-ready plates out</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Prepress, laser imaging, mounting and on-press support — handled end to end.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group rounded-2xl bg-navy-950/80 border border-white/10 hover:border-flexo-yellow/50 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            >
              <div>
                {/* Icon & Equipment Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-white/15 flex items-center justify-center group-hover:border-flexo-yellow transition-colors shadow-inner">
                    {getIcon(srv.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
                    Industrial Standard
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white group-hover:text-flexo-yellow transition-colors mb-1.5">
                  {srv.title}
                </h3>
                <p className="text-xs font-mono text-flexo-yellow mb-4">
                  {srv.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 mb-6 text-xs text-slate-200">
                  {srv.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-flexo-yellow shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveServiceModal(srv)}
                  className="font-bold text-slate-300 hover:text-flexo-yellow flex items-center gap-1.5 transition-colors"
                >
                  <FileCheck className="w-4 h-4 text-flexo-yellow" />
                  <span>View Deliverables &amp; Equipment</span>
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(srv.title)}
                  className="btn-primary text-xs py-2 px-4 font-bold"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-navy-900 border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="eyebrow mb-2">Service Technical Profile</div>
            <h3 className="font-display font-extrabold text-2xl text-white mb-1">
              {activeServiceModal.title}
            </h3>
            <p className="text-xs text-flexo-yellow font-mono mb-4">
              {activeServiceModal.subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeServiceModal.description}
            </p>

            {/* Equipment Utilized */}
            <div className="p-4 rounded-xl bg-navy-950 border border-white/10 mb-6 text-xs">
              <span className="text-slate-400 block text-[11px] font-mono uppercase mb-1">
                Technology &amp; Equipment Deployed:
              </span>
              <span className="text-white font-semibold">{activeServiceModal.equipment}</span>
            </div>

            {/* Full Feature Checklist */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Full Technical Specifications:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeServiceModal.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white/[0.02] p-2 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-flexo-yellow shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Deliverables */}
            <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
              <h4 className="font-bold text-amber-300 uppercase tracking-wider mb-2">
                Certified Deliverables:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-slate-200">
                {activeServiceModal.deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveServiceModal(null)}
                className="px-5 py-2.5 rounded-xl border border-white/20 text-xs text-slate-300 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeServiceModal.title;
                  setActiveServiceModal(null);
                  onSelectServiceForQuote(title);
                }}
                className="btn-primary text-xs py-2.5 px-6"
              >
                <span>Request Quotation for {activeServiceModal.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
