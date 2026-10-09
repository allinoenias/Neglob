import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Phone, Mail, Globe, MapPin, Target, Star, Code2, Users2, ShieldCheck, TrendingUp, Box, Megaphone, Instagram, Code, Laptop, Package, Truck, BookOpen, Image, Video, Database, Printer, Users, Sparkles } from 'lucide-react';
import { SECTIONS, COMPANY_INFO, HERO_TAGS, GROW_SERVICES, BUILD_SERVICES, PRODUCT_CARDS, INSTITUTE_SERVICES, ALSO_SERVICES, WORK_PROCESS } from '../data/content';
import { Logo } from './Logo';

interface PresentationModeProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  onClose: () => void;
  onOpenPlanner: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  currentPage,
  onPageChange,
  onClose,
  onOpenPlanner
}) => {
  // Keyboard arrow listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentPage < 7) onPageChange(currentPage + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentPage > 0) onPageChange(currentPage - 1);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, onPageChange, onClose]);

  const nextPage = () => {
    if (currentPage < 7) onPageChange(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) onPageChange(currentPage - 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a14] text-white flex flex-col justify-between overflow-hidden">
      {/* Top Presentation Bar */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-[#202036] bg-[#0f0f1d]">
        <div className="flex items-center gap-4">
          <Logo size="sm" />
          <span className="hidden sm:inline text-xs font-mono text-[#9494a8]">BROCHURE · 2026</span>
        </div>

        {/* Page title and pagination */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#9494a8] hidden md:inline">
            {SECTIONS[currentPage].title}
          </span>
          <div className="font-mono text-xs font-bold bg-[#171728] px-3 py-1 rounded-full border border-[#262640] tracking-wider text-[#c8ff25]">
            {SECTIONS[currentPage].pageNum} / 08
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPlanner}
            className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#c8ff25] text-black hover:bg-[#d8ff4f] transition-colors"
          >
            Start Project
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#9494a8] hover:text-white hover:bg-[#202038] transition-colors"
            title="Exit Presentation Mode (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Slide Viewport */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 relative overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl max-h-[85vh] bg-[#0f0f1d] border border-[#262640] rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-y-auto"
          >
            {/* Page 1 (Cover) */}
            {currentPage === 0 && (
              <div className="relative">
                <div className="flex justify-between items-center text-xs tracking-wider text-[#c8ff25] font-bold uppercase mb-10">
                  <span>{COMPANY_INFO.kicker}</span>
                  <span className="text-[#9494a8] font-mono">{COMPANY_INFO.brochureTag}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8">
                    <h1 className="text-6xl sm:text-7xl font-black tracking-tight leading-[0.95] text-white mb-6">
                      Ideas.<br />
                      Brands.<br />
                      Growth.
                    </h1>
                    <p className="text-base sm:text-lg text-[#a0a0b8] mb-8 leading-relaxed">
                      One partner for business development, branding, marketing, social media, software and websites. Built in Jorhat, made to scale anywhere.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {HERO_TAGS.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#171728] border border-[#2a2a46] text-white/90">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-4 flex justify-center">
                    <div className="w-48 h-48 rounded-full border-[14px] border-[#ff5c77] flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#c8ff25]" />
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-[#262640] flex justify-between text-xs text-[#9494a8]">
                  <span>{COMPANY_INFO.location}</span>
                  <button onClick={nextPage} className="text-[#c8ff25] font-semibold hover:underline">
                    Turn the page →
                  </button>
                </div>
              </div>
            )}

            {/* Page 2 (Who We Are) */}
            {currentPage === 1 && (
              <div>
                <div className="flex justify-between text-xs font-bold text-[#7b5cfa] uppercase mb-6 tracking-widest">
                  <span>WHO WE ARE</span>
                  <span className="text-[#9494a8] font-mono">02 / 08</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  The team behind the momentum.
                </h2>
                <p className="text-base text-[#a0a0b8] mb-8">
                  Neglob Partners is a software and growth company from Jorhat, Assam. We pair sharp business thinking with design and engineering, so the brand you build and the product you ship pull in the same direction.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-6 rounded-2xl bg-[#171728] border border-[#262640]">
                    <Target className="w-6 h-6 text-[#c8ff25] mb-4" />
                    <h3 className="font-bold text-lg mb-2">Strategy first</h3>
                    <p className="text-xs text-[#a0a0b8]">We start with your goal and customer, then pick channels.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#7b5cfa] text-white">
                    <Star className="w-6 h-6 text-white mb-4" />
                    <h3 className="font-bold text-lg mb-2">Bold creative</h3>
                    <p className="text-xs text-white/90">Brands and content with a point of view, made to be remembered.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#ff5c77] text-white">
                    <Code2 className="w-6 h-6 text-white mb-4" />
                    <h3 className="font-bold text-lg mb-2">Real engineering</h3>
                    <p className="text-xs text-white/90">Software and websites built in-house, fast to launch and scale.</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#262640] flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-white">Isfaque Parveg Ahmed</span> (Director) &nbsp;·&nbsp; <span className="font-bold text-white">Amit Boruah</span> (Deputy Director)
                  </div>
                  <button onClick={nextPage} className="text-[#c8ff25] font-semibold">
                    Next: grow the business →
                  </button>
                </div>
              </div>
            )}

            {/* Page 3 (Services Grow) */}
            {currentPage === 2 && (
              <div>
                <div className="flex justify-between text-xs font-bold text-[#c8ff25] uppercase mb-6 tracking-widest">
                  <span>SERVICES · GROW</span>
                  <span className="text-[#9494a8] font-mono">03 / 08</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
                  Grow the business.<br />Shape the brand.
                </h2>

                <div className="space-y-4 mb-8">
                  {GROW_SERVICES.map(s => (
                    <div key={s.num} className="p-5 rounded-2xl bg-[#171728] border border-[#262640]">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono font-black text-2xl" style={{ color: s.color }}>{s.num}</span>
                        <h3 className="font-bold text-xl">{s.title}</h3>
                      </div>
                      <p className="text-xs text-[#a0a0b8] mb-3">{s.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {s.tags.map(t => (
                          <span key={t} className="px-2.5 py-1 rounded-full text-[11px] bg-[#22223c] text-white/90">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#262640] flex justify-between text-xs text-[#9494a8]">
                  <span>neglob partners · Jorhat, Assam</span>
                  <button onClick={nextPage} className="text-[#c8ff25] font-semibold">Next: build your presence →</button>
                </div>
              </div>
            )}

            {/* Page 4 (Services Build) */}
            {currentPage === 3 && (
              <div>
                <div className="flex justify-between text-xs font-bold text-[#c8ff25] uppercase mb-6 tracking-widest">
                  <span>SERVICES · BUILD · FOR EVERY BUSINESS</span>
                  <span className="text-[#9494a8] font-mono">04 / 08</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                  Show up everywhere.<br />Build it properly.
                </h2>

                <div className="space-y-3 mb-8">
                  {BUILD_SERVICES.map(card => (
                    <div key={card.id} className={`p-5 rounded-2xl ${card.bgClass}`}>
                      <h3 className="font-bold text-xl mb-1">{card.title}</h3>
                      <p className="text-xs opacity-90 mb-3">{card.description}</p>
                      <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-wider uppercase opacity-85">
                        {card.badges.join(' · ')}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#262640] flex justify-between text-xs text-[#9494a8]">
                  <span>neglob partners · Jorhat, Assam</span>
                  <button onClick={nextPage} className="text-[#c8ff25] font-semibold">Next: for product brands →</button>
                </div>
              </div>
            )}

            {/* Page 5 (Product Businesses) */}
            {currentPage === 4 && (
              <div>
                <div className="flex justify-between text-xs font-bold text-[#ff5c77] uppercase mb-6 tracking-widest">
                  <span>FOR PRODUCT BUSINESSES</span>
                  <span className="text-[#9494a8] font-mono">05 / 08</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
                  From shelf to doorstep.
                </h2>
                <p className="text-sm text-[#a0a0b8] mb-6">
                  Whether you make it, pack it or sell it, we help your product get noticed, and get moving.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {PRODUCT_CARDS.map(p => (
                    <div key={p.id} className={`p-5 rounded-2xl ${p.bgClass}`}>
                      <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                      <p className="text-xs opacity-90">{p.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#262640] flex justify-between text-xs text-[#9494a8]">
                  <span>neglob partners · Jorhat, Assam</span>
                  <button onClick={nextPage} className="text-[#c8ff25] font-semibold">Next: for institutes →</button>
                </div>
              </div>
            )}

            {/* Page 6 (Institutes) */}
            {currentPage === 5 && (
              <div>
                <div className="flex justify-between text-xs font-bold text-[#c8ff25] uppercase mb-6 tracking-widest">
                  <span>FOR INSTITUTES</span>
                  <span className="text-[#9494a8] font-mono">06 / 08</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
                  Tell your institute's story.
                </h2>
                <p className="text-sm text-[#a0a0b8] mb-6">
                  Schools, colleges and coaching centres get a media and data team that makes admissions season easier.
                </p>

                <div className="space-y-3 mb-8">
                  {INSTITUTE_SERVICES.map(inst => (
                    <div key={inst.id} className="p-4 rounded-xl bg-[#171728] border border-[#262640] flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${inst.iconColor}`}>
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-white">{inst.title}</h3>
                        <p className="text-xs text-[#a0a0b8]">{inst.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#262640] flex justify-between text-xs text-[#9494a8]">
                  <span>neglob partners · Jorhat, Assam</span>
                  <button onClick={nextPage} className="text-[#c8ff25] font-semibold">Next: more from Neglob →</button>
                </div>
              </div>
            )}

            {/* Page 7 (Also From Neglob) */}
            {currentPage === 6 && (
              <div>
                <div className="flex justify-between text-xs font-bold text-[#7b5cfa] uppercase mb-6 tracking-widest">
                  <span>ALSO FROM NEGLOB</span>
                  <span className="text-[#9494a8] font-mono">07 / 08</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                  Everything around the work.
                </h2>

                <div className="space-y-4 mb-8">
                  {ALSO_SERVICES.map(also => (
                    <div key={also.id} className={`p-5 rounded-2xl ${also.bgClass}`}>
                      <h3 className="font-bold text-xl mb-1">{also.title}</h3>
                      <p className="text-xs opacity-90 mb-2">{also.description}</p>
                      {also.badges && (
                        <div className="text-[10px] font-bold tracking-wider uppercase opacity-85">
                          {also.badges.join(' · ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#262640] flex justify-between text-xs text-[#9494a8]">
                  <span>Tool availability and rates on request.</span>
                  <button onClick={nextPage} className="text-[#c8ff25] font-semibold">Next: let's talk →</button>
                </div>
              </div>
            )}

            {/* Page 8 (How We Work & Contact) */}
            {currentPage === 7 && (
              <div>
                <div className="flex justify-between text-xs font-bold text-[#c8ff25] uppercase mb-4 tracking-widest">
                  <span>HOW WE WORK</span>
                  <span className="text-[#9494a8] font-mono">08 / 08</span>
                </div>

                {/* 4 Process steps */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {WORK_PROCESS.map(step => (
                    <div key={step.stage} className="p-3 rounded-xl bg-[#171728] border border-[#262640]">
                      <div className="h-1 w-full mb-2 rounded" style={{ backgroundColor: step.color }} />
                      <h4 className="font-bold text-sm text-white">{step.stage}</h4>
                      <p className="text-[11px] text-[#a0a0b8]">{step.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-4xl sm:text-5xl font-black text-white mb-2">
                  Let's build something loud.
                </h2>
                <p className="text-sm text-[#a0a0b8] mb-6">
                  Tell us what you're working on. We'll reply with a plan, not a pitch.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#171728] border border-[#262640] flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#c8ff25]" />
                    <span className="text-sm font-mono font-bold">{COMPANY_INFO.phone}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171728] border border-[#262640] flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#7b5cfa]" />
                    <span className="text-sm font-semibold">{COMPANY_INFO.email}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171728] border border-[#262640] flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#ff5c77]" />
                    <span className="text-sm font-semibold">{COMPANY_INFO.website}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171728] border border-[#262640] flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#c8ff25]" />
                    <span className="text-xs">{COMPANY_INFO.fullAddress}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#262640] flex justify-between items-center text-xs text-[#9494a8]">
                  <span>neglobpartners.com</span>
                  <button
                    onClick={onOpenPlanner}
                    className="px-5 py-2 rounded-full font-bold bg-[#c8ff25] text-black hover:bg-[#d8ff4f]"
                  >
                    Start Project Now
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Slider Navigation */}
      <footer className="px-6 py-4 flex items-center justify-between border-t border-[#202036] bg-[#0f0f1d]">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#171728] hover:bg-[#222238] disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* 8 Dot indicators */}
        <div className="flex items-center gap-2">
          {SECTIONS.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => onPageChange(idx)}
              className={`transition-all rounded-full ${
                currentPage === idx
                  ? 'w-7 h-2.5 bg-[#c8ff25]'
                  : 'w-2.5 h-2.5 bg-[#262640] hover:bg-[#38385e]'
              }`}
              title={`Page ${sec.pageNum}: ${sec.label}`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === 7}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#171728] hover:bg-[#222238] disabled:opacity-30 disabled:pointer-events-none transition-colors text-[#c8ff25]"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};
