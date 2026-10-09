/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ParallaxShapes } from './components/ParallaxShapes';
import { PageIndicator } from './components/PageIndicator';
import { HeroSection } from './components/HeroSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { ServicesGrowSection } from './components/ServicesGrowSection';
import { ServicesBuildSection } from './components/ServicesBuildSection';
import { ProductBusinessesSection } from './components/ProductBusinessesSection';
import { InstitutesSection } from './components/InstitutesSection';
import { AlsoFromNeglobSection } from './components/AlsoFromNeglobSection';
import { ContactHowWeWorkSection } from './components/ContactHowWeWorkSection';
import { Footer } from './components/Footer';
import { InteractivePlannerModal } from './components/InteractivePlannerModal';
import { PresentationMode } from './components/PresentationMode';
import { SECTIONS } from './data/content';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | null>(null);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [presentationPage, setPresentationPage] = useState(0);

  // Scroll spy to update current page and active nav item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = SECTIONS[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sec.id);
            setCurrentSectionIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateIndex = (index: number) => {
    if (isPresentationMode) {
      setPresentationPage(index);
    } else {
      const targetSec = SECTIONS[index];
      if (targetSec) {
        scrollToSection(targetSec.id);
      }
    }
  };

  const handleTagClick = (tag: string) => {
    const tagMap: Record<string, string> = {
      'Business Development': 'services-grow',
      'Branding': 'services-grow',
      'Marketing': 'services-grow',
      'Social Media': 'services-build',
      'Software Development': 'services-build',
      'Website Development': 'services-build',
      'Package Design': 'products',
      'Institute Media': 'institutes',
      'Training and Hiring': 'also',
      'Digital Tools': 'also'
    };

    const targetId = tagMap[tag] || 'services-grow';
    scrollToSection(targetId);
  };

  const openPlannerWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForModal(serviceName);
    }
    setIsPlannerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0f0f1d] text-white selection:bg-[#c8ff25] selection:text-black font-sans relative">
      {/* Background Parallax Geometric Shapes */}
      <ParallaxShapes currentSectionIndex={currentSectionIndex} />

      {/* Top 3-Zone Navigation Bar */}
      <Navbar
        onOpenPlanner={() => openPlannerWithService()}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Flowing Scroll Content (All 8 Brochure Pages as Sections) */}
      <main className="relative z-10">
        <HeroSection
          onSelectTag={handleTagClick}
          onNextPage={() => scrollToSection('who-we-are')}
        />

        <WhoWeAreSection
          onNextPage={() => scrollToSection('services-grow')}
        />

        <ServicesGrowSection
          onNextPage={() => scrollToSection('services-build')}
          onSelectTag={handleTagClick}
        />

        <ServicesBuildSection
          onNextPage={() => scrollToSection('products')}
        />

        <ProductBusinessesSection
          onNextPage={() => scrollToSection('institutes')}
        />

        <InstitutesSection
          onNextPage={() => scrollToSection('also')}
        />

        <AlsoFromNeglobSection
          onNextPage={() => scrollToSection('work-contact')}
          onOpenPlanner={() => openPlannerWithService('Digital Tools at Discount Rates')}
        />

        <ContactHowWeWorkSection />
      </main>

      {/* Floating Dynamic Page Counter & Switcher (01/08 to 08/08) */}
      <PageIndicator
        currentIndex={currentSectionIndex}
        onNavigateIndex={handleNavigateIndex}
        isPresentationMode={isPresentationMode}
        onTogglePresentationMode={() => {
          setPresentationPage(currentSectionIndex);
          setIsPresentationMode(!isPresentationMode);
        }}
      />

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPlanner={() => openPlannerWithService()}
      />

      {/* Interactive Project Planner & Proposal Modal */}
      <InteractivePlannerModal
        isOpen={isPlannerOpen}
        onClose={() => {
          setIsPlannerOpen(false);
          setSelectedServiceForModal(null);
        }}
        initialService={selectedServiceForModal}
      />

      {/* Optional PDF Brochure Presentation Mode (Page-by-Page) */}
      {isPresentationMode && (
        <PresentationMode
          currentPage={presentationPage}
          onPageChange={setPresentationPage}
          onClose={() => setIsPresentationMode(false)}
          onOpenPlanner={() => openPlannerWithService()}
        />
      )}
    </div>
  );
}
