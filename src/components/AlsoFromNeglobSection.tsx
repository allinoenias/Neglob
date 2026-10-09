import React from 'react';
import { motion } from 'motion/react';
import { Printer, Users, Sparkles } from 'lucide-react';
import { ALSO_SERVICES } from '../data/content';

interface AlsoFromNeglobSectionProps {
  onNextPage: () => void;
  onOpenPlanner: () => void;
}

export const AlsoFromNeglobSection: React.FC<AlsoFromNeglobSectionProps> = ({ onNextPage, onOpenPlanner }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'printer':
        return <Printer className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'users':
        return <Users className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section id="also" className="relative min-h-[90vh] sm:min-h-screen py-16 sm:py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-6 sm:mb-8">
          <span className="text-[#7b5cfa] font-bold tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7b5cfa]" />
            ALSO FROM NEGLOB
          </span>
          <span className="font-mono text-[#9494a8]">07 / 08</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-[1.08]"
          >
            Everything around<br />
            <span className="text-white">the work.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-[#a0a0b8]"
          >
            Physical collateral, human capital development, and enterprise SaaS licenses at discounted corporate rates.
          </motion.p>
        </div>

        {/* 3 High-Impact Cards from PDF Page 7 */}
        <div className="space-y-5 sm:space-y-6 mb-12 sm:mb-16">
          {ALSO_SERVICES.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.12, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-6 sm:p-8 md:p-10 ${card.bgClass} shadow-xl transition-all relative overflow-hidden`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-current/10 flex items-center justify-center shrink-0 ${card.iconColor}`}>
                    {getIcon(card.icon)}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                    {card.title}
                  </h3>
                </div>

                {card.id === 'digital-tools' && (
                  <button
                    onClick={onOpenPlanner}
                    className="self-start sm:self-auto px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0f0f1d] text-white hover:bg-[#202035] transition-colors shadow-sm"
                  >
                    Inquire Rates
                  </button>
                )}
              </div>

              <p className="text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed opacity-90 mb-4">
                {card.description}
              </p>

              {card.badges && (
                <div className="pt-4 sm:pt-6 mt-4 border-t border-current/15 flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase opacity-85">
                  {card.badges.map((b, i) => (
                    <React.Fragment key={b}>
                      <span>{b}</span>
                      {i < card.badges!.length - 1 && <span className="opacity-40 font-normal">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Page Footer Navigation */}
        <div className="mt-8 pt-5 sm:pt-6 border-t border-[#262640]/50 flex items-center justify-between text-xs text-[#9494a8]">
          <span>Tool availability and rates on request.</span>
          <button
            onClick={onNextPage}
            className="group flex items-center gap-1.5 text-white hover:text-[#c8ff25] transition-colors"
          >
            <span>Next: let's talk</span>
            <span className="group-hover:translate-x-1 transition-transform text-[#c8ff25]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
