import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Code, Laptop } from 'lucide-react';
import { BUILD_SERVICES } from '../data/content';

interface ServicesBuildSectionProps {
  onNextPage: () => void;
}

export const ServicesBuildSection: React.FC<ServicesBuildSectionProps> = ({ onNextPage }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'instagram':
        return <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'code':
        return <Code className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'monitor':
        return <Laptop className="w-6 h-6 sm:w-7 sm:h-7" />;
      default:
        return <Code className="w-6 h-6 sm:w-7 sm:h-7" />;
    }
  };

  return (
    <section id="services-build" className="relative min-h-0 lg:min-h-screen py-10 sm:py-16 lg:py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-6 sm:mb-8">
          <span className="text-[#c8ff25] font-bold tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff25]" />
            SERVICES · BUILD · FOR EVERY BUSINESS
          </span>
          <span className="font-mono text-[#9494a8]">04 / 08</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3 sm:mb-4 leading-[1.08]"
          >
            Show up everywhere.<br />
            <span className="text-white">Build it properly.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-base sm:text-lg text-[#a0a0b8]"
          >
            Complete digital execution across social channels, custom web architecture, and production software.
          </motion.p>
        </div>

        {/* 3 Full-Width Stacked Cards from PDF Page 4 */}
        <div className="space-y-5 sm:space-y-6 mb-12 sm:mb-16">
          {BUILD_SERVICES.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.14, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-6 sm:p-8 md:p-10 ${card.bgClass} shadow-xl transition-all relative overflow-hidden`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 ${card.iconBg}`}>
                  {getIcon(card.icon)}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                  {card.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-3xl leading-relaxed opacity-90">
                {card.description}
              </p>

              {/* Badges strip from PDF */}
              <div className="pt-4 sm:pt-6 border-t border-current/15 flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase opacity-85">
                {card.badges.map((b, i) => (
                  <React.Fragment key={b}>
                    <span>{b}</span>
                    {i < card.badges.length - 1 && <span className="opacity-40 font-normal">·</span>}
                  </React.Fragment>
                ))}
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
            <span>Next: for product brands</span>
            <span className="group-hover:translate-x-1 transition-transform text-[#c8ff25]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
