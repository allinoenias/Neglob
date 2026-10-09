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
        return <TrendingUp className="w-6 h-6" />;
      case 'box':
        return <Box className="w-6 h-6" />;
      case 'megaphone':
        return <Megaphone className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="services-grow" className="relative min-h-screen py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        {/* Header Metadata */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-8">
          <span className="text-[#c8ff25] font-bold tracking-widest">SERVICES · GROW</span>
          <span className="font-mono text-[#9494a8]">03 / 08</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 leading-[1.05]"
          >
            Grow the business.<br />
            Shape the brand.
          </motion.h2>
          <p className="text-base sm:text-lg text-[#a0a0b8]">
            Strategic foundations and high-impact identity systems engineered for quantifiable growth.
          </p>
        </div>

        {/* 3 Numbered Service Blocks */}
        <div className="space-y-8 mb-16">
          {GROW_SERVICES.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="rounded-3xl p-8 sm:p-10 bg-[#171728]/70 border border-[#262640] hover:border-[#38385e] transition-all group backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Number & Icon */}
                <div className="lg:col-span-4 flex items-center gap-4">
                  <span
                    className="text-4xl sm:text-5xl font-black tracking-tight font-mono"
                    style={{ color: item.color }}
                  >
                    {item.num}
                  </span>
                  <div
                    className="p-3 rounded-2xl bg-[#0f0f1d] border border-[#262640] flex items-center justify-center group-hover:scale-105 transition-transform"
                    style={{ color: item.color }}
                  >
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description & Tags */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <p className="text-base sm:text-lg text-[#a0a0b8] mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={() => onSelectTag?.(tag)}
                        className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white/90 bg-[#202038] hover:bg-[#2c2c4d] border border-[#2e2e50] cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Page Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-[#262640]/50 flex items-center justify-between text-xs text-[#9494a8]">
          <span>neglob partners · Jorhat, Assam</span>
          <button
            onClick={onNextPage}
            className="group flex items-center gap-1.5 text-white hover:text-[#c8ff25] transition-colors"
          >
            <span>Next: build your presence</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
