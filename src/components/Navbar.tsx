import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenPlanner: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPlanner,
  onNavigate,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'who-we-are', label: 'About', num: '02' },
    { id: 'services-grow', label: 'Grow', num: '03' },
    { id: 'services-build', label: 'Build', num: '04' },
    { id: 'products', label: 'Products', num: '05' },
    { id: 'institutes', label: 'Institutes', num: '06' },
    { id: 'work-contact', label: 'Contact', num: '08' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c8ff25] via-[#7b5cfa] to-[#ff5c77] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0f0f1d]/95 backdrop-blur-md border-b border-[#262640]/70 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-8">
          {/* Zone 1: Brand Wordmark (adapts to mobile) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff25] rounded-md p-0.5"
            aria-label="Neglob Partners Home"
          >
            {/* Show slightly more compact logo on narrow screens */}
            <div className="sm:hidden">
              <Logo size="sm" />
            </div>
            <div className="hidden sm:block">
              <Logo size="md" />
            </div>
          </a>

          {/* Zone 2: Desktop 4–5 single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-[#9494a8]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c8ff25] rounded ${
                    isActive ? 'text-[#c8ff25] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c8ff25]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop CTA */}
            <button
              onClick={onOpenPlanner}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0f0f1d] bg-[#c8ff25] rounded-full hover:bg-[#d8ff4f] transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 shadow-[0_2px_12px_rgba(200,255,37,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Compact CTA button */}
            <button
              onClick={onOpenPlanner}
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-[#0f0f1d] bg-[#c8ff25] rounded-full active:scale-95 whitespace-nowrap shadow-sm"
            >
              <span>Start</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Mobile Hamburger / Close Button - High contrast and always prominent */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-[#171728] border border-[#2c2c48] text-white hover:text-[#c8ff25] hover:border-[#c8ff25]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff25] active:scale-95 shadow-sm"
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#c8ff25]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Darkened backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="md:hidden fixed inset-0 top-16 bg-black/75 backdrop-blur-sm z-30"
              />

              {/* Drawer Sheet */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="md:hidden fixed top-16 left-0 right-0 z-40 bg-[#121222] border-b border-[#2c2c48] shadow-2xl px-5 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto"
              >
                {/* Menu Header with clear Close Button */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262640]">
                  <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#9494a8] uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#c8ff25]" />
                    <span>Navigation Menu</span>
                    <span className="text-[#7b5cfa]">· 6 Sections</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1e1e34] hover:bg-[#282848] text-white hover:text-[#c8ff25] border border-[#2f2f4e] text-xs font-bold transition-all active:scale-95 shadow-sm"
                    aria-label="Close navigation popup"
                  >
                    <span>Close</span>
                    <X className="w-3.5 h-3.5 text-[#c8ff25]" />
                  </button>
                </div>

                {/* Navigation links list */}
                <nav className="flex flex-col gap-1.5 mb-6">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => handleLinkClick(link.id)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                          isActive
                            ? 'bg-[#c8ff25] text-[#0f0f1d] shadow-md font-bold'
                            : 'bg-[#18182c] text-white/90 hover:bg-[#202038] hover:text-[#c8ff25]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#0f0f1d]' : 'text-[#7b5cfa]'}`}>
                            {link.num}
                          </span>
                          <span>{link.label}</span>
                        </div>
                        <span className="text-xs opacity-70">→</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Direct Action Buttons Inside Mobile Menu */}
                <div className="pt-4 border-t border-[#262640] space-y-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenPlanner();
                    }}
                    className="w-full py-3.5 px-5 rounded-full text-sm font-bold text-[#0f0f1d] bg-[#c8ff25] hover:bg-[#d8ff4f] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98"
                  >
                    <span>Start a Project Brief</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="py-2.5 px-3 rounded-xl bg-[#1b1b2f] border border-[#2a2a46] text-white flex items-center justify-center gap-2 text-xs font-semibold hover:border-[#c8ff25] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#c8ff25]" />
                      <span>Call Us</span>
                    </a>

                    <a
                      href="https://wa.me/918486820329"
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center gap-2 text-xs font-semibold hover:bg-[#25D366]/25 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 rounded-xl bg-[#18182c] hover:bg-[#202038] text-[#9494a8] hover:text-white border border-[#2a2a46] text-xs font-semibold uppercase tracking-wider transition-colors active:scale-95"
                  >
                    Close Menu
                  </button>
                </div>

                {/* Footer notes in drawer */}
                <div className="mt-5 pt-3 border-t border-[#262640]/60 flex items-center justify-between text-[11px] text-[#9494a8]">
                  <span>Jorhat, Assam · India</span>
                  <span className="font-mono text-[#c8ff25]">Brochure 2026</span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
