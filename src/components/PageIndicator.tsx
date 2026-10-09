import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SECTIONS } from '../data/content';
import { ChevronDown, ChevronUp, BookOpen, Layers } from 'lucide-react';

interface PageIndicatorProps {
  currentIndex: number;
  onNavigateIndex: (index: number) => void;
  isPresentationMode: boolean;
  onTogglePresentationMode: () => void;
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({
  currentIndex,
  onNavigateIndex,
  isPresentationMode,
  onTogglePresentationMode
}) => {
  const currentSection = SECTIONS[currentIndex] || SECTIONS[0];
  const nextSection = SECTIONS[currentIndex + 1];

  const handleNext = () => {
    if (currentIndex < SECTIONS.length - 1) {
      onNavigateIndex(currentIndex + 1);
    } else {
      onNavigateIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigateIndex(currentIndex - 1);
    }
  };

  return (
    <aside aria-label="Page navigation" className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-3">
      {/* View Mode Switcher (Brochure Slides vs Flowing Scroll) */}
      <button
        onClick={onTogglePresentationMode}
        className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full bg-[#171728]/95 hover:bg-[#202035] text-[#9494a8] hover:text-white border border-[#262640] backdrop-blur-md transition-all shadow-xl active:scale-95"
        title={isPresentationMode ? "Switch to Flowing Scroll Mode" : "Switch to PDF Brochure Presentation Mode"}
      >
        {isPresentationMode ? (
          <>
            <Layers className="w-3.5 h-3.5 text-[#c8ff25]" />
            <span>Scroll View</span>
          </>
        ) : (
          <>
            <BookOpen className="w-3.5 h-3.5 text-[#7b5cfa]" />
            <span>Brochure Mode</span>
          </>
        )}
      </button>

      {/* Page Index & Stepper Dock */}
      <motion.div 
        layout
        className="flex items-center gap-2 sm:gap-3 bg-[#171728]/95 border border-[#262640] hover:border-[#38385e] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md shadow-2xl text-white transition-colors"
      >
        {/* Current page index: 01 / 08 */}
        <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold tracking-widest tabular-nums pl-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSection.pageNum}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#c8ff25] font-black"
            >
              {currentSection.pageNum}
            </motion.span>
          </AnimatePresence>
          <span className="text-[#9494a8]">/</span>
          <span className="text-[#9494a8]">08</span>
        </div>

        <div className="w-[1px] h-3.5 sm:h-4 bg-[#262640]" />

        {/* Step Arrows */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-1.5 rounded-full text-[#9494a8] hover:text-white hover:bg-[#24243e] disabled:opacity-25 disabled:pointer-events-none transition-colors active:scale-90"
            aria-label="Previous Section"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-1.5 rounded-full text-[#9494a8] hover:text-[#c8ff25] hover:bg-[#24243e] transition-colors active:scale-90"
            aria-label="Next Section"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Next label hint on desktop */}
        {nextSection && (
          <button
            onClick={handleNext}
            className="hidden lg:inline-flex items-center gap-1 pl-1 text-xs text-[#9494a8] hover:text-[#c8ff25] transition-colors font-sans truncate max-w-[140px]"
          >
            <span>Next: {nextSection.label} →</span>
          </button>
        )}
      </motion.div>
    </aside>
  );
};
