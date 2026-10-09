import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const pillDimensions = {
    sm: 'w-6 h-4 px-1',
    md: 'w-7 h-5 px-1',
    lg: 'w-9 h-6 px-1.5'
  };

  const dotSize = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3'
  };

  const textSize = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight text-white select-none ${className}`}>
      {/* Iconic Neglob Pill with center circle from PDF */}
      <span 
        className={`inline-flex items-center justify-center bg-[#c8ff25] rounded-full transition-transform hover:scale-105 ${pillDimensions[size]}`}
        aria-hidden="true"
      >
        <span className={`rounded-full bg-[#0f0f1d] ${dotSize[size]}`} />
      </span>
      <span className={`font-extrabold ${textSize[size]}`}>
        Neglob Partners
      </span>
    </div>
  );
};
