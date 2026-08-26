import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultTopic }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    substrate: 'Flexible Packaging (BOPP/PET)',
    plateThickness: '1.70 mm / 0.067"',
    urgency: 'Standard 24h',
    details: defaultTopic ? `Inquiry regarding: ${defaultTopic}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          service: 'Instant Technical RFQ',
          substrate: formData.substrate,
          thickness: formData.plateThickness,
          subject: `[Instant RFQ - ${formData.urgency}] ${formData.fullName}`,
          message: `${formData.details}\nUrgency: ${formData.urgency}`
        })
      });
    } catch (e) {
      // ignore in preview
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-navy-900 border border-white/20 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[95vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              RFQ Received
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Thank you, <strong>{formData.fullName}</strong>. Our prepress team is evaluating your specifications and will respond with pricing within 60 minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-primary text-xs py-2.5 px-6"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="eyebrow mb-2">Priority Technical RFQ</div>
            <h3 className="font-display font-extrabold text-2xl text-white mb-1">
              Request a Technical Plate Quotation
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Fill in your press requirements below for immediate pricing and delivery estimation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-navy-950 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:border-flexo-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="Packaging Co."
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-navy-950 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:border-flexo-yellow focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-navy-950 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:border-flexo-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0300-XXXXXXX"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-navy-950 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:border-flexo-yellow focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Substrate</label>
                  <select
                    value={formData.substrate}
                    onChange={e => setFormData({ ...formData, substrate: e.target.value })}
                    className="w-full bg-navy-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:border-flexo-yellow focus:outline-none"
                  >
                    <option value="Self-Adhesive Labels">Self-Adhesive Labels</option>
                    <option value="Flexible Packaging (BOPP/PET)">Flexible Packaging (BOPP/PET)</option>
                    <option value="Corrugated Cartons">Corrugated Cartons</option>
                    <option value="PP Woven Bags">PP Woven Sacks</option>
                    <option value="Cement Bags">Cement Multi-Wall Bags</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Turnaround Urgency</label>
                  <select
                    value={formData.urgency}
                    onChange={e => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full bg-navy-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:border-flexo-yellow focus:outline-none"
                  >
                    <option value="Standard 24h">Standard 24 Hours</option>
                    <option value="Same-Day Express">Same-Day Urgent Express</option>
                    <option value="Sample Proof Kit">Send Sample Test Kit First</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details / Specs</label>
                <textarea
                  rows={3}
                  placeholder="Number of colors, repeat length, anilox volume, or artwork questions..."
                  value={formData.details}
                  onChange={e => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-navy-950 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:border-flexo-yellow focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full py-3 text-xs justify-center"
                >
                  {submitting ? 'Transmitting...' : 'Submit Quote Request'}
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
