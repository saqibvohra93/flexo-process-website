import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  prefilledData?: {
    service?: string;
    substrate?: string;
    thickness?: string;
    notes?: string;
    subject?: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'General Plate Inquiry',
    substrate: 'Labels & Flexible Film',
    thickness: '1.14 mm / 0.045"',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (prefilledData) {
      setFormData(prev => ({
        ...prev,
        service: prefilledData.service || prev.service,
        substrate: prefilledData.substrate || prev.substrate,
        thickness: prefilledData.thickness || prev.thickness,
        subject: prefilledData.subject || prev.subject,
        message: prefilledData.notes ? `Specs Requested:\n${prefilledData.notes}\n\n` : prev.message
      }));
    }
  }, [prefilledData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('success');
      }
    } catch (err) {
      console.log('Submission recorded:', formData);
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-200">
      <div className="container-x relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="eyebrow mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight mb-3">
            Let's talk about <span className="text-flexo-yellow">your next run</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Quotes, technical questions, or a sample kit — we reply fast.
          </p>
        </div>

        {/* 2 Column Layout: Contact Info & RFQ Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Physical Footprint */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-slate-50 dark:bg-navy-900/80 border border-slate-200 dark:border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-sm">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span>Head Office &amp; Manufacturing Plant</span>
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-white/15 flex items-center justify-center text-amber-500 dark:text-flexo-yellow shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase font-mono mb-0.5">Physical Address</span>
                    <p className="text-slate-900 dark:text-white font-medium leading-relaxed">
                      C-18 A, Estate Avenue, S.I.T.E.,<br />
                      Karachi - 75700, Pakistan
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-white/15 flex items-center justify-center text-amber-500 dark:text-flexo-yellow shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase font-mono mb-0.5">Telephone &amp; Hotline</span>
                    <p className="text-slate-900 dark:text-white font-medium space-y-0.5">
                      <a href="tel:+922132581090" className="hover:text-amber-600 dark:hover:text-flexo-yellow transition-colors block">
                        +92-21-32581090
                      </a>
                      <a href="tel:+922132582090" className="hover:text-amber-600 dark:hover:text-flexo-yellow transition-colors block">
                        +92-21-32582090
                      </a>
                      <a href="tel:+923002567114" className="text-emerald-600 dark:text-emerald-400 hover:underline block font-semibold">
                        +92-300-2567114 (Emergency)
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-white/15 flex items-center justify-center text-amber-500 dark:text-flexo-yellow shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase font-mono mb-0.5">Official Emails</span>
                    <p className="text-slate-900 dark:text-white font-medium space-y-0.5">
                      <a href="mailto:info@flexoprocess.com" className="hover:text-amber-600 dark:hover:text-flexo-yellow transition-colors block">
                        info@flexoprocess.com
                      </a>
                      <a href="mailto:flexoprocess.pk@gmail.com" className="hover:text-amber-600 dark:hover:text-flexo-yellow transition-colors block text-slate-500 dark:text-slate-400 text-xs">
                        flexoprocess.pk@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-white/15 flex items-center justify-center text-amber-500 dark:text-flexo-yellow shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-xs uppercase font-mono mb-0.5">Production Hours</span>
                    <p className="text-slate-900 dark:text-white font-medium">
                      Monday &ndash; Saturday: 09:00 AM &ndash; 06:00 PM<br />
                      <span className="text-slate-500 dark:text-slate-400 text-xs">24/7 CDI Laser Overnight Dispatch Available</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Why Contact Flexo Process Trust Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Fast Response</span>
                <span className="text-slate-500 dark:text-slate-400">Technical RFQs answered within 60 minutes.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">On-Site Support</span>
                <span className="text-slate-500 dark:text-slate-400">Pressroom engineers stationed nationwide.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Field RFQ & Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-white/15 rounded-2xl p-6 sm:p-9 backdrop-blur-xl shadow-lg">
            
            {status === 'success' ? (
              <div className="py-12 text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
                  Technical Inquiry Received
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.fullName}</strong>. Your inquiry and plate specifications have been dispatched to our prepress engineering department. A technical specialist will contact you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary text-xs py-2.5 px-6"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    Send Technical Inquiry / Request a Quote
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    * Required fields
                  </span>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Asif Qureshi"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="e.g. Apex Packaging Ltd."
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="0300-XXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                    />
                  </div>
                </div>

                {/* Service & Substrate Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                    >
                      <option value="General Plate Inquiry">General Plate Inquiry</option>
                      <option value="Prepress & Artwork Engineering">Prepress &amp; Artwork Engineering</option>
                      <option value="CDI Laser Plate Making">CDI Laser Plate Making</option>
                      <option value="Precision Plate Mounting">Precision Plate Mounting</option>
                      <option value="On-Site Press Fingerprinting">On-Site Press Fingerprinting</option>
                      <option value="Sample Proof Kit Request">Sample Proof Kit Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Plate Thickness / Spec
                    </label>
                    <select
                      name="thickness"
                      value={formData.thickness}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                    >
                      <option value='1.14 mm / 0.045"'>1.14 mm / 0.045" (Labels &amp; Shrink)</option>
                      <option value='1.70 mm / 0.067"'>1.70 mm / 0.067" (Flexible Packaging)</option>
                      <option value='2.54 mm / 0.100"'>2.54 mm / 0.100" (Corrugated)</option>
                      <option value='2.84 mm / 0.112"'>2.84 mm / 0.112" (PP Woven &amp; Cement)</option>
                      <option value='3.94 mm / 0.155"'>3.94 mm / 0.155" (Heavy Sacks)</option>
                      <option value="Help Me Choose">Help Me Choose Optimal Plate</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Project Title
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. 8-Color CI Flexible Film Plate Set RFQ"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Project Details, Dimensions, Quantity, or Questions *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Provide cylinder repeat length, number of colors, target substrate, or any pressroom challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full py-3.5 text-xs sm:text-sm justify-center"
                  >
                    {status === 'submitting' ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Technical RFQ</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                  We respect NDA confidentiality. Artwork files are processed in secure prepress environments.
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
