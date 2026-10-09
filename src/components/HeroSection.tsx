import React from 'react';
import { motion } from 'motion/react';
import { HERO_TAGS, COMPANY_INFO } from '../data/content';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onSelectTag: (tag: string) => void;
  onNextPage: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectTag, onNextPage }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        {/* Page metadata bar like the PDF page 1 */}
        <div className="flex items-center justify-between text-xs tracking-wider text-[#9494a8] mb-12 uppercase font-medium">
          <div className="flex items-center gap-2">
            <span className="text-[#c8ff25] font-semibold">{COMPANY_INFO.kicker}</span>
          </div>
          <div className="font-mono tracking-widest text-[#9494a8]">
            {COMPANY_INFO.brochureTag}
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            {/* Monumental Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.92] text-white mb-8"
            >
              Ideas.<br />
              Brands.<br />
              <span className="text-white">Growth.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-[#a0a0b8] max-w-xl leading-relaxed mb-10 font-normal"
            >
              One partner for business development, branding, marketing, social media, software and websites. Built in Jorhat, made to scale anywhere.
            </motion.p>

            {/* Capability Explorer Pill Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2.5 max-w-2xl"
            >
              {HERO_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onSelectTag(tag)}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white/90 bg-[#171728]/80 hover:bg-[#202038] hover:text-[#c8ff25] border border-[#2c2c48] transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff25]"
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Interactive Visual Graphic Area (Page 1 Motif) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              {/* Central Hollow Coral Ring from PDF page 1 */}
              <div className="w-full h-full rounded-full border-[18px] border-[#ff5c77] animate-pulse duration-[4000ms] shadow-[0_0_80px_rgba(255,92,119,0.3)] flex items-center justify-center relative">
                {/* Inner floating lime orb */}
                <div className="w-16 h-16 rounded-full bg-[#c8ff25] shadow-[0_0_40px_rgba(200,255,37,0.4)] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#0f0f1d]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Page 1 Bottom Footer Bar */}
        <div className="mt-16 pt-6 border-t border-[#262640]/50 flex items-center justify-between text-xs text-[#9494a8]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff25]" />
            <span>{COMPANY_INFO.location}</span>
          </div>

          <button
            onClick={onNextPage}
            className="group flex items-center gap-1.5 text-white hover:text-[#c8ff25] transition-colors focus-visible:outline-none"
          >
            <span className="font-medium">Turn the page</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
            <ArrowDown className="w-3.5 h-3.5 ml-1 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
