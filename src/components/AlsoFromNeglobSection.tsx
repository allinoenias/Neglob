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
        return <Printer className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="also" className="relative min-h-screen py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-8">
          <span className="text-[#7b5cfa] font-bold tracking-widest">ALSO FROM NEGLOB</span>
          <span className="font-mono text-[#9494a8]">07 / 08</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.05]"
          >
            Everything around<br />
            the work.
          </motion.h2>
          <p className="text-base sm:text-lg text-[#a0a0b8]">
            Physical collateral, human capital development, and enterprise SaaS licenses at discounted corporate rates.
          </p>
        </div>

        {/* 3 High-Impact Cards from PDF Page 7 */}
        <div className="space-y-6 mb-16">
          {ALSO_SERVICES.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.35 }}
              whileHover={{ scale: 1.01 }}
              className={`rounded-3xl p-8 sm:p-10 ${card.bgClass} shadow-xl transition-all relative overflow-hidden`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-current/10 flex items-center justify-center shrink-0 ${card.iconColor}`}>
                    {getIcon(card.icon)}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {card.title}
                  </h3>
                </div>

                {card.id === 'digital-tools' && (
                  <button
                    onClick={onOpenPlanner}
                    className="self-start sm:self-auto px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0f0f1d] text-white hover:bg-[#202035] transition-colors"
                  >
                    Inquire Rates
                  </button>
                )}
              </div>

              <p className="text-base sm:text-lg max-w-3xl leading-relaxed opacity-90 mb-4">
                {card.description}
              </p>

              {card.badges && (
                <div className="pt-6 mt-4 border-t border-current/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-bold tracking-wider uppercase opacity-85">
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
        <div className="mt-8 pt-6 border-t border-[#262640]/50 flex items-center justify-between text-xs text-[#9494a8]">
          <span>Tool availability and rates on request.</span>
          <button
            onClick={onNextPage}
            className="group flex items-center gap-1.5 text-white hover:text-[#c8ff25] transition-colors"
          >
            <span>Next: let's talk</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
