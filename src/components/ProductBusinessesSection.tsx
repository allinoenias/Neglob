import React from 'react';
import { motion } from 'motion/react';
import { Package, Star, Megaphone, Truck } from 'lucide-react';
import { PRODUCT_CARDS } from '../data/content';

interface ProductBusinessesSectionProps {
  onNextPage: () => void;
}

export const ProductBusinessesSection: React.FC<ProductBusinessesSectionProps> = ({ onNextPage }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'package':
        return <Package className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'star':
        return <Star className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'megaphone':
        return <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'truck':
        return <Truck className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Package className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section id="products" className="relative min-h-0 lg:min-h-screen py-10 sm:py-16 lg:py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-6 sm:mb-8">
          <span className="text-[#ff5c77] font-bold tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c77]" />
            FOR PRODUCT BUSINESSES
          </span>
          <span className="font-mono text-[#9494a8]">05 / 08</span>
        </div>

        {/* Headline & Body */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-[1.08]"
          >
            From shelf to <span className="text-[#ff5c77]">doorstep.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-[#a0a0b8] leading-relaxed"
          >
            Whether you make it, pack it or sell it, we help your product get noticed, and get moving.
          </motion.p>
        </div>

        {/* 4 Grid Cards matching PDF Page 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {PRODUCT_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-3xl p-6 sm:p-8 md:p-10 ${card.bgClass} flex flex-col justify-between min-h-[240px] sm:min-h-[260px] shadow-xl group transition-all`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-current/10 flex items-center justify-center mb-5 sm:mb-6 ${card.iconBg} group-hover:scale-110 transition-transform`}>
                  {getIcon(card.icon)}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2 sm:mb-3">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed opacity-90">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 border-t border-current/15 flex items-center justify-between text-xs font-medium opacity-80">
                <span>Product solutions</span>
                <span>✦</span>
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
            <span>Next: for institutes</span>
            <span className="group-hover:translate-x-1 transition-transform text-[#c8ff25]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
