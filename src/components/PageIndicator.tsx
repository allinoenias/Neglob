import React from 'react';
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
    <aside aria-label="Page navigation" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* View Mode Switcher (Brochure Slides vs Flowing Scroll) */}
      <button
        onClick={onTogglePresentationMode}
        className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-full bg-[#171728]/90 hover:bg-[#202035] text-[#9494a8] hover:text-white border border-[#262640] backdrop-blur-md transition-all shadow-lg"
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
      <div className="flex items-center gap-3 bg-[#171728]/95 border border-[#262640] rounded-full px-4 py-2 backdrop-blur-md shadow-2xl text-white">
        {/* Current page index: 01 / 08 */}
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest tabular-nums">
          <span className="text-[#c8ff25]">{currentSection.pageNum}</span>
          <span className="text-[#9494a8]">/</span>
          <span className="text-[#9494a8]">08</span>
        </div>

        <div className="w-[1px] h-4 bg-[#262640]" />

        {/* Step Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-1 rounded-full text-[#9494a8] hover:text-white hover:bg-[#24243e] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            aria-label="Previous Section"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded-full text-[#9494a8] hover:text-[#c8ff25] hover:bg-[#24243e] transition-colors"
            aria-label="Next Section"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Next label hint on desktop */}
        {nextSection && (
          <button
            onClick={handleNext}
            className="hidden lg:inline-flex items-center gap-1 pl-1 text-xs text-[#9494a8] hover:text-[#c8ff25] transition-colors font-sans"
          >
            <span>Next: {nextSection.label} →</span>
          </button>
        )}
      </div>
    </aside>
  );
};
