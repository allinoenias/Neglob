import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ParallaxShapesProps {
  currentSectionIndex?: number;
}

export const ParallaxShapes: React.FC<ParallaxShapesProps> = () => {
  const { scrollYProgress } = useScroll();

  // Smooth physics spring damping to eliminate scroll jank/lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.2
  });

  // Scroll transforms for floating organic shapes from the brochure
  const yVioletRaw = useTransform(smoothProgress, [0, 1], [0, 320]);
  const scaleVioletRaw = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.08, 0.94]);

  const yCoralRingRaw = useTransform(smoothProgress, [0, 1], [0, -260]);
  const rotateCoralRaw = useTransform(smoothProgress, [0, 1], [0, 90]);

  const yLimeRaw = useTransform(smoothProgress, [0, 1], [0, -180]);
  const scaleLimeRaw = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.15, 0.95]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Top Right Violet Sphere (from PDF Cover, Page 6 & 8) */}
      <motion.div
        style={{
          y: yVioletRaw,
          scale: scaleVioletRaw,
          willChange: 'transform'
        }}
        className="absolute -top-24 -right-24 sm:-top-28 sm:-right-28 md:-top-36 md:-right-36 w-48 h-48 sm:w-80 sm:h-80 md:w-[460px] md:h-[460px]"
      >
        <motion.div
          animate={{
            x: [0, 12, -8, 0],
            y: [0, -15, 8, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut"
          }}
          className="w-full h-full rounded-full bg-[#7b5cfa] opacity-40 sm:opacity-75"
          style={{
            filter: 'drop-shadow(0 0 50px rgba(123, 92, 250, 0.2))'
          }}
        />
      </motion.div>

      {/* 2. Mid Right Hollow Coral Ring (from PDF Page 1) - Positioned safely so it never clashes on mobile */}
      <motion.div
        style={{
          y: yCoralRingRaw,
          rotate: rotateCoralRaw,
          willChange: 'transform'
        }}
        className="absolute top-[58vh] sm:top-[48vh] -right-16 sm:right-[3vw] md:right-[6vw] w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64"
      >
        <motion.div
          animate={{
            scale: [1, 1.04, 0.98, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          className="w-full h-full rounded-full border-[8px] sm:border-[14px] md:border-[18px] border-[#ff5c77] opacity-30 sm:opacity-80"
          style={{
            filter: 'drop-shadow(0 0 35px rgba(255, 92, 119, 0.15))'
          }}
        />
      </motion.div>

      {/* 3. Lower Electric Lime Sphere (from PDF Page 1, 2, 5) */}
      <motion.div
        style={{
          y: yLimeRaw,
          scale: scaleLimeRaw,
          willChange: 'transform'
        }}
        className="absolute top-[82vh] sm:top-[74vh] right-[8vw] sm:right-[18vw] md:right-[24vw] w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36"
      >
        <motion.div
          animate={{
            y: [0, 16, -10, 0],
            x: [0, -10, 6, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 11,
            ease: "easeInOut"
          }}
          className="w-full h-full rounded-full bg-[#c8ff25] opacity-50 sm:opacity-85"
          style={{
            filter: 'drop-shadow(0 0 35px rgba(200, 255, 37, 0.2))'
          }}
        />
      </motion.div>

      {/* Subtle Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0f0f1d]/30 to-[#0f0f1d]/85 pointer-events-none" />
    </div>
  );
};
