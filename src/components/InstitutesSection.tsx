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
        return <BookOpen className="w-5 h-5" />;
      case 'image':
        return <Image className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'database':
        return <Database className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="institutes" className="relative min-h-screen py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-8">
          <span className="text-[#c8ff25] font-bold tracking-widest">FOR INSTITUTES</span>
          <span className="font-mono text-[#9494a8]">06 / 08</span>
        </div>

        {/* Headline & Body */}
        <div className="max-w-3xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.05]"
          >
            Tell your<br />
            institute's story.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-[#a0a0b8] leading-relaxed"
          >
            Schools, colleges and coaching centres get a media and data team that makes admissions season easier.
          </motion.p>
        </div>

        {/* 4 Row Items from PDF Page 6 with dividers */}
        <div className="space-y-4 mb-16">
          {INSTITUTE_SERVICES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.35 }}
              whileHover={{ x: 6 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#171728]/60 hover:bg-[#1a1a30] border border-[#262640] transition-all flex flex-col sm:flex-row sm:items-center gap-6 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.iconColor} shadow-md group-hover:scale-105 transition-transform`}>
                {getIcon(item.icon)}
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-[#a0a0b8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="hidden sm:block text-[#9494a8] group-hover:text-[#c8ff25] group-hover:translate-x-1 transition-all">
                →
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
            <span>Next: more from Neglob</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
