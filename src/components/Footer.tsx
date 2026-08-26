import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenQuote }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-navy-950 border-t border-slate-800 dark:border-white/15 text-slate-400 text-xs transition-colors duration-200">
      {/* Pre-Footer Industrial Callout Strip */}
      <div className="bg-slate-800/80 dark:bg-gradient-to-r dark:from-navy-900 dark:via-navy-800 dark:to-navy-900 border-b border-slate-700 dark:border-white/10 py-10">
        <div className="container-x flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div>
            <span className="eyebrow mb-2">Ready to Upgrade Your Print Precision?</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Experience the German HD Flat-Top Difference.
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Get in touch with our prepress engineers today for live press fingerprinting or free test plate samples.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenQuote}
              className="btn-primary text-xs py-3 px-6"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+922132581090"
              className="btn-ghost text-xs py-3 px-6 !text-white !border-white/30 hover:!border-flexo-yellow hover:!text-flexo-yellow"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: 021-32581090</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src="/logo.png"
              alt="Flexo Process (Private) Limited"
              className="h-10 w-auto object-contain"
            />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Digital flexographic printing plates (flexo blocks) for labels, flexible packaging, corrugated cartons and PP woven sacks, made in Karachi with German CDI laser technology.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>ISO Standard Quality Control</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateSection('overview')} className="hover:text-flexo-yellow transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('technology')} className="hover:text-flexo-yellow transition-colors">
                  Technology &amp; Dot Gain
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('industries')} className="hover:text-flexo-yellow transition-colors">
                  Industries Served
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('configurator')} className="hover:text-flexo-yellow transition-colors">
                  Spec Builder / Configurator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('services')} className="hover:text-flexo-yellow transition-colors">
                  Prepress &amp; Mounting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('knowledge-hub')} className="hover:text-flexo-yellow transition-colors">
                  Technical Articles
                </button>
              </li>
            </ul>
          </div>

          {/* Plate Formats */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Plate Specifications
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">
                <strong className="text-white">1.14 mm (0.045")</strong> for Narrow-Web &amp; Labels
              </li>
              <li className="text-slate-300">
                <strong className="text-white">1.70 mm (0.067")</strong> for Flexible Film (BOPP/PET)
              </li>
              <li className="text-slate-300">
                <strong className="text-white">2.54 mm (0.100")</strong> for Fluted Corrugated
              </li>
              <li className="text-slate-300">
                <strong className="text-white">2.84 mm (0.112")</strong> for Huaguang DR284M-II Sacks
              </li>
              <li className="text-slate-300">
                <strong className="text-white">3.94 mm (0.155")</strong> for Heavy Industrial Sacks
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Karachi Facility
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-500 dark:text-flexo-yellow shrink-0 mt-0.5" />
                <span>C-18 A, Estate Avenue, S.I.T.E., Karachi - 75700, Pakistan</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+922132581090" className="hover:text-white transition-colors">
                  +92-21-32581090 / 32582090
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-500 dark:text-flexo-yellow shrink-0" />
                <a href="mailto:info@flexoprocess.com" className="hover:text-white transition-colors">
                  info@flexoprocess.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800 dark:border-white/10 py-6 bg-slate-950 dark:bg-navy-950/90 text-slate-400">
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {currentYear} Flexo Process (Private) Limited. All rights reserved. Precision Plates. Perfect Prints.
          </div>
          <div className="flex items-center gap-6">
            <span>Karachi &bull; Lahore &bull; Faisalabad Dispatch</span>
            <button onClick={() => onNavigateSection('knowledge-hub')} className="hover:text-white transition-colors">
              Knowledge Hub
            </button>
            <button onClick={() => onNavigateSection('contact')} className="hover:text-white transition-colors">
              Contact Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
