import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Box, Megaphone, CheckCircle2 } from 'lucide-react';
import { GROW_SERVICES } from '../data/content';

interface ServicesGrowSectionProps {
  onNextPage: () => void;
  onSelectTag?: (tag: string) => void;
}

export const ServicesGrowSection: React.FC<ServicesGrowSectionProps> = ({ onNextPage, onSelectTag }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trending':
        return <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'box':
        return <Box className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'megaphone':
        return <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section id="services-grow" className="relative min-h-0 lg:min-h-screen py-10 sm:py-16 lg:py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        {/* Header Metadata */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-6 sm:mb-8">
          <span className="text-[#c8ff25] font-bold tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff25]" />
            SERVICES · GROW
          </span>
          <span className="font-mono text-[#9494a8]">03 / 08</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3 sm:mb-4 leading-[1.08]"
          >
            Grow the business.<br />
            <span className="text-[#c8ff25]">Shape the brand.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-base sm:text-lg text-[#a0a0b8]"
          >
            Strategic foundations and high-impact identity systems engineered for quantifiable growth.
          </motion.p>
        </div>

        {/* 3 Numbered Service Blocks */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {GROW_SERVICES.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.008 }}
              className="rounded-3xl p-6 sm:p-8 md:p-10 bg-[#171728]/80 border border-[#262640] hover:border-[#3d3d66] transition-all group backdrop-blur-sm shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Number & Icon */}
                <div className="lg:col-span-4 flex items-center gap-3 sm:gap-4">
                  <span
                    className="text-3xl sm:text-5xl font-black tracking-tight font-mono shrink-0"
                    style={{ color: item.color }}
                  >
                    {item.num}
                  </span>
                  <div
                    className="p-2.5 sm:p-3 rounded-2xl bg-[#0f0f1d] border border-[#262640] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ color: item.color }}
                  >
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description & Tags */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <p className="text-sm sm:text-base md:text-lg text-[#a0a0b8] mb-5 sm:mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {item.tags.map((tag) => (
                      <motion.button
                        key={tag}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelectTag?.(tag)}
                        className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-white/90 bg-[#202038] hover:bg-[#2c2c4d] hover:text-[#c8ff25] border border-[#2e2e50] cursor-pointer transition-colors"
                      >
                        {tag}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Page Footer Navigation */}
        <div className="mt-8 pt-5 sm:pt-6 border-t border-[#262640]/50 flex items-center justify-between text-xs text-[#9494a8]">
          <span>neglob partners · Jorhat, Assam</span>
          <button
            onClick={onNextPage}
            className="group flex items-center gap-1.5 text-white hover:text-[#c8ff25] transition-colors"
          >
            <span>Next: build your presence</span>
            <span className="group-hover:translate-x-1 transition-transform text-[#c8ff25]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
