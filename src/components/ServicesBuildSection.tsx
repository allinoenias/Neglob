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
        return <Instagram className="w-7 h-7" />;
      case 'code':
        return <Code className="w-7 h-7" />;
      case 'monitor':
        return <Laptop className="w-7 h-7" />;
      default:
        return <Code className="w-7 h-7" />;
    }
  };

  return (
    <section id="services-build" className="relative min-h-screen py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-8">
          <span className="text-[#c8ff25] font-bold tracking-widest">
            SERVICES · BUILD · FOR EVERY BUSINESS
          </span>
          <span className="font-mono text-[#9494a8]">04 / 08</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 leading-[1.05]"
          >
            Show up everywhere.<br />
            Build it properly.
          </motion.h2>
          <p className="text-base sm:text-lg text-[#a0a0b8]">
            Complete digital execution across social channels, custom web architecture, and production software.
          </p>
        </div>

        {/* 3 Full-Width Stacked Cards from PDF Page 4 */}
        <div className="space-y-6 mb-16">
          {BUILD_SERVICES.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.35 }}
              whileHover={{ scale: 1.01 }}
              className={`rounded-3xl p-8 sm:p-10 ${card.bgClass} shadow-xl transition-all relative overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${card.iconBg}`}>
                    {getIcon(card.icon)}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {card.title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg mb-8 max-w-3xl leading-relaxed opacity-90">
                {card.description}
              </p>

              {/* Badges strip from PDF */}
              <div className="pt-6 border-t border-current/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-bold tracking-wider uppercase opacity-85">
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
        <div className="mt-8 pt-6 border-t border-[#262640]/50 flex items-center justify-between text-xs text-[#9494a8]">
          <span>neglob partners · Jorhat, Assam</span>
          <button
            onClick={onNextPage}
            className="group flex items-center gap-1.5 text-white hover:text-[#c8ff25] transition-colors"
          >
            <span>Next: for product brands</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
