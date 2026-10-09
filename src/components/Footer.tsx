import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SECTIONS } from '../data/content';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPlanner }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0a14] border-t border-[#202036] pt-16 pb-12 text-[#9494a8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#202036]">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-sm max-w-sm text-[#9494a8] leading-relaxed mb-6 font-normal">
              One partner for business development, branding, marketing, social media, software and websites. Built in Jorhat, made to scale anywhere.
            </p>
            <div className="text-xs text-[#c8ff25] font-semibold tracking-wider uppercase font-mono">
              {COMPANY_INFO.kicker}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Sections
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SECTIONS.slice(1, 7).map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => onNavigate(sec.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {sec.pageNum}. {sec.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Coordinates Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c8ff25] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7b5cfa] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff5c77] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onOpenPlanner}
                className="px-4 py-2 rounded-full text-xs font-bold text-[#0f0f1d] bg-[#c8ff25] hover:bg-[#d8ff4f] transition-colors"
              >
                Inquire With Neglob Partners
              </button>
            </div>
          </div>
        </div>

        {/* Bottom sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 Neglob Partners. All rights reserved. Jorhat, Assam, India.
          </div>

          <div className="flex items-center gap-6">
            <span>Brochure 2026</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
