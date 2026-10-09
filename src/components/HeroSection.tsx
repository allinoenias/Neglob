import React from 'react';
import { motion } from 'motion/react';
import { HERO_TAGS, COMPANY_INFO } from '../data/content';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onSelectTag: (tag: string) => void;
  onNextPage: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectTag, onNextPage }) => {
  const words = [
    { text: "Ideas.", delay: 0.1 },
    { text: "Brands.", delay: 0.25 },
    { text: "Growth.", delay: 0.4 }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] sm:min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        {/* Page metadata bar like the PDF page 1 */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between text-[11px] sm:text-xs tracking-wider text-[#9494a8] mb-8 sm:mb-12 uppercase font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c8ff25] animate-ping opacity-75" />
            <span className="text-[#c8ff25] font-bold tracking-widest">{COMPANY_INFO.kicker}</span>
          </div>
          <div className="font-mono tracking-widest text-[#9494a8] bg-[#171728]/80 px-2.5 py-1 rounded-full border border-[#262640]">
            {COMPANY_INFO.brochureTag}
          </div>
        </motion.div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            {/* Monumental Staggered Headline */}
            <div className="mb-6 sm:mb-8 overflow-hidden">
              {words.map((w, index) => (
                <div key={w.text} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%", opacity: 0, rotateX: -20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: w.delay,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.93] transition-colors ${
                      index === 2
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#c8ff25]'
                        : 'text-white'
                    }`}
                  >
                    {w.text}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#a0a0b8] max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal"
            >
              One partner for business development, branding, marketing, social media, software and websites.{' '}
              <span className="text-white font-medium">Built in Jorhat, made to scale anywhere.</span>
            </motion.p>

            {/* Capability Explorer Pill Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2 sm:gap-2.5 max-w-2xl"
            >
              {HERO_TAGS.map((tag, i) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.04 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onSelectTag(tag)}
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white/90 bg-[#171728]/90 hover:bg-[#20203a] hover:text-[#c8ff25] border border-[#2c2c48] hover:border-[#c8ff25]/40 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff25]"
                >
                  {tag}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Interactive Visual Graphic Area (Page 1 Motif) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72"
            >
              {/* Central Hollow Coral Ring from PDF page 1 */}
              <div className="w-full h-full rounded-full border-[14px] sm:border-[18px] border-[#ff5c77] shadow-[0_0_60px_rgba(255,92,119,0.25)] flex items-center justify-center relative transition-transform">
                {/* Inner floating lime orb */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                  }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#c8ff25] shadow-[0_0_35px_rgba(200,255,37,0.35)] flex items-center justify-center cursor-pointer"
                  onClick={onNextPage}
                >
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#0f0f1d]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Page 1 Bottom Footer Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 sm:mt-16 pt-5 sm:pt-6 border-t border-[#262640]/50 flex items-center justify-between text-xs text-[#9494a8]"
        >
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
            <ArrowDown className="w-3.5 h-3.5 ml-1 animate-bounce text-[#c8ff25]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
