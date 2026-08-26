import React, { useState } from 'react';
import { Sliders, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { PLATE_SPECIFICATIONS, SUBSTRATE_OPTIONS, PlateSpec } from '../data/specs';

interface PlateConfiguratorProps {
  onSelectSpec: (specDetails: { substrate: string; thickness: string; lpi: string; notes: string }) => void;
}

export const PlateConfigurator: React.FC<PlateConfiguratorProps> = ({ onSelectSpec }) => {
  const [selectedSubstrate, setSelectedSubstrate] = useState(SUBSTRATE_OPTIONS[1].id);
  const [selectedPlate, setSelectedPlate] = useState<PlateSpec>(PLATE_SPECIFICATIONS[1]);
  const [selectedLpi, setSelectedLpi] = useState('150 LPI');
  const [selectedInk, setSelectedInk] = useState('Solvent-based Inks');

  const handleSubstrateChange = (subId: string) => {
    setSelectedSubstrate(subId);
    if (subId === 'labels') {
      setSelectedPlate(PLATE_SPECIFICATIONS[0]);
      setSelectedLpi('175 LPI');
    } else if (subId === 'flexpack' || subId === 'polypropylene') {
      setSelectedPlate(PLATE_SPECIFICATIONS[1]);
      setSelectedLpi('150 LPI');
    } else if (subId === 'corrugated') {
      setSelectedPlate(PLATE_SPECIFICATIONS[2]);
      setSelectedLpi('110 LPI');
    } else if (subId === 'ppwoven' || subId === 'cement') {
      setSelectedPlate(PLATE_SPECIFICATIONS[3]);
      setSelectedLpi('85 LPI');
    }
  };

  const handleApplySpec = () => {
    const currentSub = SUBSTRATE_OPTIONS.find(s => s.id === selectedSubstrate)?.label || selectedSubstrate;
    onSelectSpec({
      substrate: currentSub,
      thickness: selectedPlate.thickness,
      lpi: selectedLpi,
      notes: `Configured: ${selectedPlate.name} (${selectedPlate.hardness}, ${selectedInk})`
    });
  };

  return (
    <section id="configurator" className="py-16 lg:py-20 bg-slate-50 dark:bg-navy-950 border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-200">
      <div className="container-x relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="eyebrow mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Spec Builder</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight mb-3">
            Not sure which plate <span className="text-flexo-yellow">you need?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Pick your substrate and press setup, we'll show you the right spec.
          </p>
        </div>

        {/* Configurator Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left Column) */}
          <div className="lg:col-span-6 bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-sm">
            
            {/* Step 1: Substrate Selection */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-flexo-yellow mb-2.5">
                1. Select Target Substrate &amp; Packaging Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SUBSTRATE_OPTIONS.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => handleSubstrateChange(sub.id)}
                    className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                      selectedSubstrate === sub.id
                        ? 'bg-amber-500/10 border-amber-500 text-slate-900 dark:text-white'
                        : 'bg-slate-50 dark:bg-navy-950/60 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/25 hover:text-slate-950 dark:hover:text-white'
                    }`}
                  >
                    <div className="font-bold mb-0.5">{sub.label}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Rec. Thick: {sub.defaultThick}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Plate Grade / Thickness */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-flexo-yellow mb-2.5">
                2. Choose Photopolymer Plate Thickness
              </label>
              <div className="space-y-2">
                {PLATE_SPECIFICATIONS.map((plate) => (
                  <button
                    key={plate.id}
                    type="button"
                    onClick={() => setSelectedPlate(plate)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between ${
                      selectedPlate.id === plate.id
                        ? 'bg-amber-500/10 dark:bg-white/10 border-amber-500 dark:border-flexo-yellow text-slate-900 dark:text-white'
                        : 'bg-slate-50 dark:bg-navy-950/40 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">{plate.name}</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {plate.hardness} &bull; Relief: {plate.reliefDepth}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-slate-100 dark:bg-navy-950 text-amber-700 dark:text-flexo-yellow border border-slate-200 dark:border-white/10">
                      {plate.thickness.split('/')[0].trim()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Screen Ruling & Inks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Screen Ruling (LPI)
                </label>
                <select
                  value={selectedLpi}
                  onChange={(e) => setSelectedLpi(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                >
                  <option value="85 LPI">85 LPI (Sacks &amp; Rough Board)</option>
                  <option value="110 LPI">110 LPI (Standard Corrugated)</option>
                  <option value="133 LPI">133 LPI (Standard Packaging)</option>
                  <option value="150 LPI">150 LPI (High-Res Flexible Film)</option>
                  <option value="175 LPI">175 LPI (HD Process Labels/Film)</option>
                  <option value="200 LPI">200 LPI (Ultra-HD Micro-Screening)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Pressroom Ink System
                </label>
                <select
                  value={selectedInk}
                  onChange={(e) => setSelectedInk(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                >
                  <option value="Solvent-based Inks">Solvent-based Inks (CI Flexo)</option>
                  <option value="UV / LED Curable Inks">UV / LED Curable (Narrow Web)</option>
                  <option value="Water-based Inks">Water-based Inks (Corrugated/Paper)</option>
                  <option value="Alcohol / Specialty Inks">Alcohol / Specialty (PP Woven)</option>
                </select>
              </div>
            </div>

          </div>

          {/* Technical Spec Output Sheet (Right Column) */}
          <div className="lg:col-span-6 bg-white dark:bg-gradient-to-b dark:from-navy-900 dark:to-navy-950 border border-amber-500/30 dark:border-flexo-yellow/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-lg relative">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>CERTIFIED PREPRESS CALIBRATION</span>
              </div>
              <span className="text-xs font-mono text-amber-700 dark:text-flexo-yellow bg-amber-500/10 dark:bg-flexo-yellow/10 px-2 py-0.5 rounded border border-amber-500/30 dark:border-flexo-yellow/30">
                GERMAN CDI PROFILE
              </span>
            </div>

            {/* Spec Title */}
            <div className="mt-5 mb-6">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest block font-mono mb-1">
                Recommended Photopolymer Formula
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                {selectedPlate.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {selectedPlate.description}
              </p>
            </div>

            {/* Technical Parameters Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10">
                <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Plate Thickness</span>
                <span className="text-slate-900 dark:text-white font-bold text-sm">{selectedPlate.thickness}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10">
                <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Durometer Hardness</span>
                <span className="text-amber-600 dark:text-flexo-yellow font-bold text-sm">{selectedPlate.hardness}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10">
                <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Relief Floor Depth</span>
                <span className="text-slate-900 dark:text-white font-bold text-sm">{selectedPlate.reliefDepth}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10">
                <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Target Highlight Dot</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">{selectedPlate.minDot}</span>
              </div>
            </div>

            {/* Best Application Match */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 mb-6">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Ideal Industrial Applications:</span>
              <span>{selectedPlate.bestFor}</span>
            </div>

            {/* Action CTA Bridge */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleApplySpec}
                className="btn-primary w-full justify-center text-xs py-3.5"
              >
                <span>Request Quotation with This Spec</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 text-center text-[11px] text-slate-500 dark:text-slate-400">
              Need custom cylinder distortion calculations or stepped layouts? Contact our prepress lab directly.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
