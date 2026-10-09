import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { HERO_TAGS, COMPANY_INFO } from '../data/content';

interface InteractivePlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string | null;
}

export const InteractivePlannerModal: React.FC<InteractivePlannerModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['Branding', 'Website Development']
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll while modal is active on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    setSelectedServices(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare email to user's destination email
    const subject = encodeURIComponent(`Project Roadmap Request - ${name || 'New Client'}`);
    const body = encodeURIComponent(
      `Hello,\n\nA new project roadmap has been requested from Neglob Partners website.\n\n` +
      `CLIENT DETAILS:\n` +
      `• Name: ${name}\n` +
      `• Email: ${email}\n` +
      `• Phone: ${phone}\n` +
      `• Timeline: ${timeline}\n` +
      `• Capabilities Needed: ${selectedServices.join(', ') || 'None specified'}\n\n` +
      `PROJECT NOTES / CONTEXT:\n` +
      `${notes || 'No additional notes provided.'}\n\n` +
      `---\n` +
      `Target Recipient: ${COMPANY_INFO.inquiryRecipientEmail}`
    );

    const emailUrl = `mailto:${COMPANY_INFO.inquiryRecipientEmail}?subject=${subject}&body=${body}`;
    
    // Automatically trigger mail client draft
    try {
      window.location.href = emailUrl;
    } catch {
      // Fallback if browser blocks protocol navigation
    }
  };

  const emailSubject = encodeURIComponent(`Project Roadmap Request - ${name || 'New Client'}`);
  const emailBody = encodeURIComponent(
    `Hello,\n\nA new project roadmap has been requested from Neglob Partners website.\n\n` +
    `CLIENT DETAILS:\n` +
    `• Name: ${name}\n` +
    `• Email: ${email}\n` +
    `• Phone: ${phone}\n` +
    `• Timeline: ${timeline}\n` +
    `• Capabilities Needed: ${selectedServices.join(', ') || 'None specified'}\n\n` +
    `PROJECT NOTES / CONTEXT:\n` +
    `${notes || 'No additional notes provided.'}\n\n` +
    `---\n` +
    `Target Recipient: ${COMPANY_INFO.inquiryRecipientEmail}`
  );
  const emailMailtoUrl = `mailto:${COMPANY_INFO.inquiryRecipientEmail}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Neglob Partners! I'd like to plan a project.\nName: ${name || 'N/A'}\nServices: ${selectedServices.join(', ')}\nTimeline: ${timeline}\nDetails: ${notes}`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-start sm:items-center justify-center p-3 sm:p-6 pt-3 pb-12 sm:py-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-[#141424] border border-[#2a2a46] rounded-2xl sm:rounded-3xl p-4 sm:p-10 text-white shadow-2xl z-10 my-2 sm:my-6 overflow-hidden"
        >
          {/* Permanent Sticky Top Header Bar with guaranteed visible Close button */}
          <div className="sticky top-0 -mx-4 -mt-4 sm:-mx-10 sm:-mt-10 px-4 sm:px-10 py-3 sm:py-4 bg-[#141424]/98 backdrop-blur-md border-b border-[#2a2a46] flex items-center justify-between z-30 mb-5 sm:mb-6 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8ff25]" />
              <span className="text-xs font-bold text-[#c8ff25] tracking-widest uppercase">
                Project Planner
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#202038] hover:bg-[#2c2c4d] text-white hover:text-[#c8ff25] border border-[#38385e] hover:border-[#c8ff25]/40 text-xs font-bold transition-all active:scale-95 shadow-md"
              aria-label="Close popup window"
              title="Close window"
            >
              <span>Close</span>
              <X className="w-4 h-4 text-[#c8ff25]" />
            </button>
          </div>

          {submitted ? (
            <div className="py-6 sm:py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#c8ff25]/20 text-[#c8ff25] flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-2">Roadmap Requested</h3>
              <p className="text-[#a0a0b8] max-w-md mx-auto mb-2 text-xs sm:text-sm">
                Thank you, <span className="text-white font-semibold">{name || 'Partner'}</span>. Your project brief has been formatted for delivery to:
              </p>
              <div className="inline-block px-3 py-1 rounded-full bg-[#1b1b2f] border border-[#30304e] text-xs font-mono text-[#c8ff25] mb-6">
                {COMPANY_INFO.inquiryRecipientEmail}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                {/* Email Action */}
                <a
                  href={emailMailtoUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7b5cfa] hover:bg-[#8d71ff] text-white transition-colors shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </a>

                {/* WhatsApp Action */}
                <a
                  href={`https://wa.me/918486820329?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] text-black hover:bg-[#22bf5c] transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continue on WhatsApp</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#222238] hover:bg-[#2c2c48] text-white transition-colors border border-[#343456]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-5 sm:mb-6">
                <h3 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Let's shape your roadmap.
                </h3>
                <p className="text-xs sm:text-sm text-[#9494a8] mt-1">
                  Select what you need help with and tell us your timeline.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Services multi-select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-2 sm:mb-2.5">
                    What capabilities do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {HERO_TAGS.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                            isSelected
                              ? 'bg-[#c8ff25] text-[#0f0f1d] font-bold'
                              : 'bg-[#1e1e34] text-[#9494a8] hover:text-white hover:bg-[#272744]'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-2">
                    Expected Launch Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Immediate (< 2 wks)', 'Within 1 Month', 'Flexible / Planning'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`py-2 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-medium border text-center transition-all ${
                          timeline === t
                            ? 'bg-[#7b5cfa]/20 border-[#7b5cfa] text-[#c8ff25]'
                            : 'bg-[#0f0f1d] border-[#262640] text-[#9494a8] hover:border-[#38385e]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f0f1d] border border-[#262640] text-sm text-white focus:outline-none focus:border-[#c8ff25]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f0f1d] border border-[#262640] text-sm text-white focus:outline-none focus:border-[#c8ff25]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f0f1d] border border-[#262640] text-sm text-white focus:outline-none focus:border-[#c8ff25]"
                    />
                  </div>
                </div>

                {/* Additional Note */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-1.5">
                    Project Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about the challenge or target audience..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f0f1d] border border-[#262640] text-sm text-white focus:outline-none focus:border-[#c8ff25] resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c8ff25] text-[#0f0f1d] hover:bg-[#d8ff4f] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    <span>Request Action Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/918486820329?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] text-black hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1c30] hover:bg-[#272744] text-[#9494a8] hover:text-white border border-[#2e2e4e] transition-colors active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
