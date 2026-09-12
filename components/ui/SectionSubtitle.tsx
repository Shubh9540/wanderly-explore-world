import React from 'react';
import { FaTools } from 'react-icons/fa';

interface SectionSubtitleProps {
  text: string;
  textColor?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionSubtitle = ({ 
  text, 
  textColor = 'text-[#051024]', 
  className = '',
  align = 'center'
}: SectionSubtitleProps) => {
  const justifyClass = align === 'center' ? 'justify-center' : align === 'left' ? 'justify-start' : 'justify-end';
  
  return (
    <div className={`flex items-center ${justifyClass} gap-3 mb-4 ${className}`}>
      <FaTools className="text-[#FFC107] text-lg flex-shrink-0" />
      <span className={`${textColor} font-extrabold tracking-widest uppercase text-sm lg:text-base`}>
        {text}
      </span>
      <FaTools className="text-[#FFC107] text-lg flex-shrink-0" />
    </div>
  );
};
