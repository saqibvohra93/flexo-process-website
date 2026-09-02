import React from 'react';
import { Cpu, Zap, Sun, Droplets, Flame, Microscope, CheckCircle2 } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Prepress & Distortion Calibration',
      desc: 'Files are normalized, trapped to 0.08-0.20mm tolerances, and adjusted for exact cylinder elongation curves.',
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      tagline: 'Precision file preparation'
    },
    {
      step: '02',
      title: '5,000 DPI Laser CDI Ablation',
      desc: 'High-power German multi-beam fiber lasers vaporize the black LAMS mask with sub-micron spot precision.',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      tagline: 'Sub-micron laser accuracy'
    },
    {
      step: '03',
      title: 'Oxygen-Free UV-A Exposure',
      desc: 'Inert exposure cross-links the photopolymer base to lock in flat-top plateau dot geometry and 70° shoulders.',
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      tagline: 'Flat-top dot formation'
    },
    {
      step: '04',
      title: 'Automated Solvent Washout',
      desc: 'Closed-loop oscillating brush washers remove unexposed resin, preserving sub-0.8% micro-dot pillars.',
      icon: <Droplets className="w-5 h-5 text-amber-500" />,
      tagline: 'Clean dot relief development'
    },
    {
      step: '05',
      title: 'Drying & UV-C De-Tack Curing',
      desc: 'Multi-stage temperature-controlled drying followed by UV-C finishing to impart chemical and solvent resistance.',
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      tagline: 'Chemical resistance curing'
    },
    {
      step: '06',
      title: 'Digital 3D Micrometer QA',
      desc: 'Every plate is verified for relief depth, floor gauge (±0.005mm), and barcode readability before dispatch.',
      icon: <Microscope className="w-5 h-5 text-amber-500" />,
      tagline: '100% digital quality check'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-slate-200 relative overflow-hidden transition-colors duration-200">
      <div className="container-x relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="eyebrow mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Our Process</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3">
            Six stages, <span className="text-flexo-yellow">zero guesswork</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Every plate leaving our Karachi facility runs the same calibrated process.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:bg-slate-100/80 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-amber-500 transition-colors shadow-sm">
                    {s.icon}
                  </div>
                  <span className="font-mono font-extrabold text-2xl text-slate-300 group-hover:text-amber-500 transition-colors">
                    {s.step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{s.tagline}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
