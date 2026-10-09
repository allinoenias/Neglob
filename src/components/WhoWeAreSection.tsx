import React from 'react';
import { motion } from 'motion/react';
import { Target, Star, Code2, Users2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface WhoWeAreSectionProps {
  onNextPage: () => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ onNextPage }) => {
  return (
    <section id="who-we-are" className="relative min-h-screen py-24 border-t border-[#262640]/40 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-8">
          <span className="text-[#7b5cfa] font-bold tracking-widest">WHO WE ARE</span>
          <span className="font-mono text-[#9494a8]">02 / 08</span>
        </div>

        {/* Headline & Bio */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.05]"
          >
            The team behind the momentum.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-[#a0a0b8] leading-relaxed font-normal"
          >
            Neglob Partners is a software and growth company from Jorhat, Assam. We pair sharp business thinking with design and engineering, so the brand you build and the product you ship pull in the same direction.
          </motion.p>
        </div>

        {/* Three Signature Pillar Cards from PDF Page 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Card 1: Strategy first */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-8 bg-[#171728] border border-[#262640] text-white flex flex-col justify-between min-h-[300px] shadow-xl group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0f0f1d] border border-[#2c2c48] flex items-center justify-center text-[#c8ff25] mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Strategy first</h3>
              <p className="text-sm text-[#a0a0b8] leading-relaxed">
                We start with your goal and your customer, then pick the channels. Never the other way round.
              </p>
            </div>
            <div className="pt-6 border-t border-[#262640]/60 flex items-center justify-between text-xs text-[#9494a8]">
              <span>Customer centric</span>
              <span className="text-[#c8ff25]">✦</span>
            </div>
          </motion.div>

          {/* Card 2: Bold creative (Vibrant Violet Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 bg-[#7b5cfa] text-white flex flex-col justify-between min-h-[300px] shadow-[0_12px_32px_rgba(123,92,250,0.3)] group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Bold creative</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Brands and content with a point of view, made to be remembered and shared.
              </p>
            </div>
            <div className="pt-6 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
              <span>Distinctive identity</span>
              <span>✦</span>
            </div>
          </motion.div>

          {/* Card 3: Real engineering (Coral Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 bg-[#ff5c77] text-white flex flex-col justify-between min-h-[300px] shadow-[0_12px_32px_rgba(255,92,119,0.3)] group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Real engineering</h3>
              <p className="text-sm text-white/95 leading-relaxed">
                Software and websites built in-house, fast to launch and ready to grow with you.
              </p>
            </div>
            <div className="pt-6 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
              <span>Production grade</span>
              <span>✦</span>
            </div>
          </motion.div>
        </div>

        {/* Leadership Section from PDF Page 2 */}
        <div className="pt-10 border-t border-[#262640]/80">
          <div className="text-xs font-bold tracking-widest uppercase text-[#7b5cfa] mb-6 flex items-center gap-2">
            <Users2 className="w-4 h-4 text-[#7b5cfa]" />
            <span>LEADERSHIP</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
            {COMPANY_INFO.directors.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white tracking-tight">{member.name}</span>
                  <ShieldCheck className="w-4 h-4 text-[#c8ff25]" />
                </div>
                <span className="text-sm text-[#9494a8] mt-1 font-medium">{member.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Page Footer Navigation */}
        <div className="mt-16 pt-6 border-t border-[#262640]/50 flex items-center justify-between text-xs text-[#9494a8]">
          <span>neglob partners · Jorhat, Assam</span>
          <button
            onClick={onNextPage}
            className="group flex items-center gap-1.5 text-white hover:text-[#c8ff25] transition-colors"
          >
            <span>Next: grow the business</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
