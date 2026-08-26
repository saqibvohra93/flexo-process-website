import React from 'react';
import { Cpu, Zap, Sun, Droplets, Flame, Microscope, CheckCircle2 } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Prepress & Distortion Calibration',
      desc: 'Files are normalized, trapped to 0.08–0.20mm tolerances, and adjusted for exact cylinder elongation curves.',
      icon: <Cpu className="w-5 h-5 text-flexo-yellow" />
    },
    {
      step: '02',
      title: '4,000 DPI Laser CDI Ablation',
      desc: 'High-power German multi-beam fiber lasers vaporize the black LAMS mask with 6.35-micron spot precision.',
      icon: <Zap className="w-5 h-5 text-flexo-yellow" />
    },
    {
      step: '03',
      title: 'Oxygen-Free UV-A Exposure',
      desc: 'Inert exposure cross-links the photopolymer base to lock in flat-top plateau dot geometry and 70° shoulders.',
      icon: <Sun className="w-5 h-5 text-flexo-yellow" />
    },
    {
      step: '04',
      title: 'Automated Solvent Washout',
      desc: 'Closed-loop oscillating brush washers remove unexposed resin, preserving sub-0.8% micro-dot pillars.',
      icon: <Droplets className="w-5 h-5 text-flexo-yellow" />
    },
    {
      step: '05',
      title: 'Drying & UV-C De-Tack Curing',
      desc: 'Multi-stage temperature-controlled drying followed by UV-C finishing to impart chemical and solvent resistance.',
      icon: <Flame className="w-5 h-5 text-flexo-yellow" />
    },
    {
      step: '06',
      title: 'Digital 3D Micrometer QA',
      desc: 'Every plate is verified for relief depth, floor gauge (±0.005mm), and barcode readability before dispatch.',
      icon: <Microscope className="w-5 h-5 text-flexo-yellow" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 border-t border-white/10 relative overflow-hidden">
      <div className="container-x relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="eyebrow mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>German Manufacturing Pipeline</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            6-Stage Precision{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flexo-yellow to-flexo-orange">
              Plate Making Workflow
            </span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Every photopolymer plate manufactured at our Karachi S.I.T.E. facility undergoes an ISO-calibrated six-stage process to guarantee 100% repeatability from job to job.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-900/60 border border-white/10 hover:border-flexo-yellow/40 transition-all duration-300 flex flex-col justify-between group hover:bg-navy-900"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-950 border border-white/10 flex items-center justify-center group-hover:border-flexo-yellow transition-colors">
                    {s.icon}
                  </div>
                  <span className="font-mono font-extrabold text-2xl text-white/20 group-hover:text-flexo-yellow/40 transition-colors">
                    {s.step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-flexo-yellow transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Tolerance Precision</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
