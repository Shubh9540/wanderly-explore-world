import React from 'react';
import { AirplaneTrackIcon } from './AirplaneTrackIcon';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  showPlaneTrack?: boolean;
}

export const SectionHeading = ({ subtitle, title, description, showPlaneTrack }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-10 lg:mb-14 flex flex-col items-center">
      {/* Subtitle Row */}
      {subtitle && (
        <div className="flex items-center justify-center gap-3 mb-1 relative">
          {/* Left Decorative Line */}
          <div className="hidden sm:block">
            <svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 5 15 Q 35 5 65 10" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          
          <span 
            className="text-[40px] lg:text-[50px] text-[var(--color-accent)] leading-none tracking-wide" 
            style={{ fontFamily: 'var(--font-cursive)' }}
          >
            {subtitle}
          </span>

          {/* Right Decorative Line */}
          <div className="hidden sm:block">
            <svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 5 10 Q 35 5 65 15" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          
          {/* Right Airplane Track */}
          {showPlaneTrack && (
            <div className="absolute left-full top-[-15px] hidden md:block pl-3">
              <AirplaneTrackIcon className="w-[140px] lg:w-[160px] text-[var(--color-primary)] opacity-60" />
            </div>
          )}
        </div>
      )}
      
      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[var(--color-primary)] mb-6 leading-tight">
        {title}
      </h2>
      
      {/* Decorative Separator (Line - Dot - Line) */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-16 h-[2px] bg-gray-300/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]"></div>
        <div className="w-16 h-[2px] bg-gray-300/80"></div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-[var(--color-text-light)] font-medium max-w-xl text-center text-base lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};
