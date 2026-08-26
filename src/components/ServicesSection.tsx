import React, { useState } from 'react';
import { Layers, Sparkles, Box, Package, Tag, Archive, CheckCircle2, ArrowRight, Wrench, FileCheck, X } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/services';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tag': return <Tag className="w-6 h-6 text-amber-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-amber-500" />;
      case 'Box': return <Box className="w-6 h-6 text-amber-500" />;
      case 'Package': return <Package className="w-6 h-6 text-amber-500" />;
      case 'Archive': return <Archive className="w-6 h-6 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      default: return <Layers className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-20 bg-slate-100/60 border-t border-slate-200 relative transition-colors duration-200">
      <div className="container-x relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="eyebrow mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Our Services</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3">
            Specialized Flexo Plate Services for <span className="text-amber-600">Every Packaging Line</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From narrow-web prime labels and flexible film barrier pouches to heavy-duty corrugated cartons and industrial sacks, we manufacture precision digital photopolymer printing plates tailored to your press setup.
          </p>
        </div>

        {/* 6 Services Grid (2 cols on md, 3 cols on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-500/50 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              {/* Service Image */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                <img
                  src={srv.imageUrl}
                  alt={srv.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-600 transition-colors mb-1.5">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-600 mb-3">
                    {srv.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-1.5 mb-4 text-xs text-slate-700">
                    {srv.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveServiceModal(srv)}
                    className="font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1.5 transition-colors"
                  >
                    <FileCheck className="w-4 h-4 text-amber-500" />
                    <span>View Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(srv.title)}
                    className="btn-primary text-xs py-2 px-3.5 font-bold"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 p-1 rounded-lg bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="eyebrow mb-2">Service Technical Profile</div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-1">
              {activeServiceModal.title}
            </h3>
            <p className="text-xs text-amber-600 font-mono mb-4">
              {activeServiceModal.subtitle}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeServiceModal.description}
            </p>

            {/* Equipment Utilized */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs">
              <span className="text-slate-500 block text-[11px] font-mono uppercase mb-1">
                Technology &amp; Equipment Deployed:
              </span>
              <span className="text-slate-900 font-semibold">{activeServiceModal.equipment}</span>
            </div>

            {/* Full Feature Checklist */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Full Technical Specifications:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {activeServiceModal.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Deliverables */}
            <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
              <h4 className="font-bold text-amber-800 uppercase tracking-wider mb-2">
                Certified Deliverables:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-slate-800">
                {activeServiceModal.deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveServiceModal(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-700 hover:text-slate-950"
              >
                Close
              </button>
              <button
                type="button"
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
