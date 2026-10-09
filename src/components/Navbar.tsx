import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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

  const navLinks = [
    { id: 'who-we-are', label: 'About' },
    { id: 'services-grow', label: 'Grow' },
    { id: 'services-build', label: 'Build' },
    { id: 'products', label: 'Products' },
    { id: 'institutes', label: 'Institutes' },
    { id: 'work-contact', label: 'Contact' }
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

      {/* Top Bar adhering strictly to 3-Zone Contract */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0f0f1d]/90 backdrop-blur-md border-b border-[#262640]/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff25] rounded-md p-1"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9494a8]">
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

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPlanner}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0f0f1d] bg-[#c8ff25] rounded-full hover:bg-[#d8ff4f] transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 shadow-[0_2px_12px_rgba(200,255,37,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#c8ff25] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff25] rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#262640] bg-[#0f0f1d]/98 px-6 py-5 flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2 text-base font-medium transition-colors ${
                  activeSection === link.id ? 'text-[#c8ff25]' : 'text-[#cbd5e1] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-[#262640]/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-[#0f0f1d] bg-[#c8ff25] rounded-lg"
              >
                Start a Project →
              </button>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
