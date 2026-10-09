import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Image, Video, Database } from 'lucide-react';
import { INSTITUTE_SERVICES } from '../data/content';

interface InstitutesSectionProps {
  onNextPage: () => void;
}

export const InstitutesSection: React.FC<InstitutesSectionProps> = ({ onNextPage }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'book':
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'image':
        return <Image className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'video':
        return <Video className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'database':
        return <Database className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section id="institutes" className="relative min-h-0 lg:min-h-screen py-10 sm:py-16 lg:py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-6 sm:mb-8">
          <span className="text-[#c8ff25] font-bold tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff25]" />
            FOR INSTITUTES
          </span>
          <span className="font-mono text-[#9494a8]">06 / 08</span>
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
            Tell your<br />
            <span className="text-[#7b5cfa]">institute's story.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-[#a0a0b8] leading-relaxed"
          >
            Schools, colleges and coaching centres get a media and data team that makes admissions season easier.
          </motion.p>
        </div>

        {/* 4 Row Items from PDF Page 6 with dividers */}
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          {INSTITUTE_SERVICES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
              className="p-5 sm:p-7 rounded-2xl bg-[#171728]/70 hover:bg-[#1a1a32] border border-[#262640] hover:border-[#38385e] transition-all flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.iconColor} shadow-md group-hover:scale-105 transition-transform`}>
                {getIcon(item.icon)}
              </div>

              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#a0a0b8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="hidden sm:block text-[#9494a8] group-hover:text-[#c8ff25] group-hover:translate-x-1 transition-all text-xl">
                →
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
            <span>Next: more from Neglob</span>
            <span className="group-hover:translate-x-1 transition-transform text-[#c8ff25]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
