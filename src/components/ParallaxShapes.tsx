import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxShapesProps {
  currentSectionIndex?: number;
}

export const ParallaxShapes: React.FC<ParallaxShapesProps> = () => {
  const { scrollYProgress } = useScroll();

  // Scroll transforms for floating organic shapes
  const yViolet = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const scaleViolet = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 0.9]);
  
  const yCoralRing = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotateCoral = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  const yLime = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scaleLime = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.95]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Right Violet Sphere (from PDF Cover, Page 6 & 8) */}
      <motion.div
        style={{ y: yViolet, scale: scaleViolet }}
        animate={{
          x: [0, 15, 0],
          y: [0, -20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }}
        className="absolute -top-24 -right-24 md:-top-32 md:-right-32 w-80 h-80 md:w-[480px] md:h-[480px] rounded-full bg-[#7b5cfa] opacity-80 blur-[0.5px] shadow-[0_0_120px_rgba(123,92,250,0.3)]"
      />

      {/* Mid Right Hollow Coral Ring (from PDF Page 1) */}
      <motion.div
        style={{ y: yCoralRing, rotate: rotateCoral }}
        animate={{
          scale: [1, 1.05, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut"
        }}
        className="absolute top-[48vh] -right-16 md:right-[6vw] w-48 h-48 md:w-64 md:h-64 rounded-full border-[14px] md:border-[18px] border-[#ff5c77] opacity-85 shadow-[0_0_80px_rgba(255,92,119,0.25)]"
      />

      {/* Lower Electric Lime Sphere (from PDF Page 1, 2, 5) */}
      <motion.div
        style={{ y: yLime, scale: scaleLime }}
        animate={{
          y: [0, 25, 0],
          x: [0, -10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
        className="absolute top-[78vh] right-[18vw] md:right-[26vw] w-24 h-24 md:w-36 md:h-36 rounded-full bg-[#c8ff25] opacity-90 shadow-[0_0_90px_rgba(200,255,37,0.3)]"
      />

      {/* Subtle Ambient Vignette & Grain Tint */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0f0f1d]/40 to-[#0f0f1d]/90 pointer-events-none" />
    </div>
  );
};
