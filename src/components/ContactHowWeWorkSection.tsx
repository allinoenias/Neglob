import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { WORK_PROCESS, COMPANY_INFO, HERO_TAGS } from '../data/content';

export const ContactHowWeWorkSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const toggleService = (srv: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter(s => s !== srv)
        : [...prev.services, srv]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Project Brief / Roadmap Request - ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(
      `Hello,\n\nA new project brief has been submitted from Neglob Partners website.\n\n` +
      `CLIENT DETAILS:\n` +
      `• Name: ${formData.name}\n` +
      `• Organization: ${formData.organization || 'Not provided'}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Services Needed: ${formData.services.join(', ') || 'General Inquiry'}\n\n` +
      `PROJECT GOALS & CONTEXT:\n` +
      `${formData.message}\n\n` +
      `---\n` +
      `Target Recipient: ${COMPANY_INFO.inquiryRecipientEmail}`
    );

    const emailUrl = `mailto:${COMPANY_INFO.inquiryRecipientEmail}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        window.location.href = emailUrl;
      } catch {
        // Fallback
      }
    }, 400);
  };

  const emailSubject = encodeURIComponent(`Project Brief / Roadmap Request - ${formData.name || 'New Client'}`);
  const emailBody = encodeURIComponent(
    `Hello,\n\nA new project brief has been submitted from Neglob Partners website.\n\n` +
    `CLIENT DETAILS:\n` +
    `• Name: ${formData.name}\n` +
    `• Organization: ${formData.organization || 'Not provided'}\n` +
    `• Email: ${formData.email}\n` +
    `• Phone: ${formData.phone}\n` +
    `• Services Needed: ${formData.services.join(', ') || 'General Inquiry'}\n\n` +
    `PROJECT GOALS & CONTEXT:\n` +
    `${formData.message}\n\n` +
    `---\n` +
    `Target Recipient: ${COMPANY_INFO.inquiryRecipientEmail}`
  );
  const emailMailtoUrl = `mailto:${COMPANY_INFO.inquiryRecipientEmail}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Neglob Partners! I'm interested in discussing a project. Name: ${formData.name || 'N/A'}. Services: ${formData.services.join(', ') || 'General Inquiry'}. Message: ${formData.message}`
  );

  return (
    <section id="work-contact" className="relative min-h-0 lg:min-h-screen py-10 sm:py-16 lg:py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        {/* Header Metadata */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-6 sm:mb-8">
          <span className="text-[#c8ff25] font-bold tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff25]" />
            HOW WE WORK
          </span>
          <span className="font-mono text-[#9494a8]">08 / 08</span>
        </div>

        {/* 4-Stage Process Horizontal Bar from PDF Page 8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {WORK_PROCESS.map((step, idx) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#171728]/70 border border-[#262640] relative overflow-hidden transition-all shadow-md"
            >
              {/* Colorful top border accent from PDF */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: step.color }}
              />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 tracking-tight">
                {step.stage}
              </h3>
              <p className="text-xs sm:text-sm text-[#a0a0b8] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Grid: Headline + Contact Details (Left) & Interactive Planner Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Left Column: Big Headline & Direct Contact from PDF */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-[0.98]"
            >
              Let's build<br />
              <span className="text-[#c8ff25]">something loud.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-base sm:text-lg text-[#a0a0b8] max-w-md mb-8 sm:mb-10 leading-relaxed font-normal"
            >
              Tell us what you're working on. We'll reply with a plan, not a pitch.
            </motion.p>

            {/* Direct Contact Links matching PDF layout */}
            <div className="space-y-3 sm:space-y-4 max-w-md">
              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#171728]/80 border border-[#262640] hover:border-[#38385e] transition-colors group">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3.5 text-white group-hover:text-[#c8ff25] transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-[#0f0f1d] text-[#c8ff25]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9494a8]">Call or WhatsApp</div>
                    <div className="text-base font-bold font-mono tracking-wide">{COMPANY_INFO.phone}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                  className="p-2 text-[#9494a8] hover:text-white"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#c8ff25]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#171728]/80 border border-[#262640] hover:border-[#38385e] transition-colors group">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3.5 text-white group-hover:text-[#7b5cfa] transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-[#0f0f1d] text-[#7b5cfa]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9494a8]">Email Inquiry</div>
                    <div className="text-base font-bold">{COMPANY_INFO.email}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                  className="p-2 text-[#9494a8] hover:text-white"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#7b5cfa]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Website */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#171728]/80 border border-[#262640] hover:border-[#38385e] transition-colors group">
                <a
                  href={`https://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 text-white group-hover:text-[#ff5c77] transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-[#0f0f1d] text-[#ff5c77]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9494a8]">Web Address</div>
                    <div className="text-base font-bold">{COMPANY_INFO.website}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(`https://${COMPANY_INFO.website}`, 'web')}
                  className="p-2 text-[#9494a8] hover:text-white"
                  title="Copy Website"
                >
                  {copiedField === 'web' ? <Check className="w-4 h-4 text-[#ff5c77]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Address */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#171728]/80 border border-[#262640] hover:border-[#38385e] transition-colors group">
                <div className="flex items-center gap-3.5 text-white">
                  <div className="p-2.5 rounded-xl bg-[#0f0f1d] text-[#c8ff25]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9494a8]">Office Location</div>
                    <div className="text-sm font-semibold">{COMPANY_INFO.fullAddress}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_INFO.fullAddress, 'address')}
                  className="p-2 text-[#9494a8] hover:text-white"
                  title="Copy Address"
                >
                  {copiedField === 'address' ? <Check className="w-4 h-4 text-[#c8ff25]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <div className="mt-6">
              <a
                href={`https://wa.me/918486820329?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold bg-[#25D366] text-black hover:bg-[#20ba59] transition-all shadow-lg active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-8 sm:p-10 bg-[#171728] border border-[#262640] shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Start the conversation
              </h3>
              <p className="text-sm text-[#a0a0b8] mb-8">
                Share what you are aiming to build or grow. We'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#c8ff25]/20 text-[#c8ff25] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Roadmap & Plan Requested</h4>
                  <p className="text-sm text-[#a0a0b8] max-w-sm mx-auto mb-2">
                    Thank you, <span className="text-white font-semibold">{formData.name || 'Partner'}</span>. Your project brief has been formatted for delivery to:
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#1b1b2f] border border-[#30304e] text-xs font-mono text-[#c8ff25] mb-6">
                    {COMPANY_INFO.inquiryRecipientEmail}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                    <a
                      href={emailMailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7b5cfa] hover:bg-[#8d71ff] text-white transition-colors shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </a>

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

                  <div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          organization: '',
                          email: '',
                          phone: '',
                          services: [],
                          message: ''
                        });
                      }}
                      className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#24243e] hover:bg-[#323254] text-[#9494a8] hover:text-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Select Services (matching PDF tags) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-3">
                      Select Services Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {HERO_TAGS.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-[#c8ff25] text-[#0f0f1d] font-bold'
                                : 'bg-[#202038] text-[#9494a8] hover:text-white hover:bg-[#282845]'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0f1d] border border-[#262640] text-white placeholder-[#505068] text-sm focus:outline-none focus:border-[#c8ff25] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-2">
                        Company or Institute
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Jorhat Academy"
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0f1d] border border-[#262640] text-white placeholder-[#505068] text-sm focus:outline-none focus:border-[#c8ff25] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0f1d] border border-[#262640] text-white placeholder-[#505068] text-sm focus:outline-none focus:border-[#c8ff25] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0f1d] border border-[#262640] text-white placeholder-[#505068] text-sm focus:outline-none focus:border-[#c8ff25] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9494a8] mb-2">
                      Project Goals & Context *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're working on, target timeline, or specific challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0f1d] border border-[#262640] text-white placeholder-[#505068] text-sm focus:outline-none focus:border-[#c8ff25] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full text-sm font-bold text-[#0f0f1d] bg-[#c8ff25] hover:bg-[#d4ff3a] transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(200,255,37,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Send Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Page Footer Navigation */}
        <div className="pt-6 border-t border-[#262640]/50 flex items-center justify-between text-xs text-[#9494a8]">
          <span>© 2026 Neglob Partners. Built in Jorhat, Assam.</span>
          <a
            href="#hero"
            className="group flex items-center gap-1.5 text-white hover:text-[#c8ff25] transition-colors"
          >
            <span>Back to top</span>
            <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
          </a>
        </div>
      </div>
    </section>
  );
};
