'use client';

import React from 'react';
import Image from 'next/image';
import { WhyWeExistData } from '@/types/templates.types';
import { FaHeartbeat, FaHandsHelping, FaHandHoldingHeart } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHeartbeat': return <FaHeartbeat />;
    case 'FaHandsHelping': return <FaHandsHelping />;
    case 'FaHandHoldingHeart': return <FaHandHoldingHeart />;
    default: return <FaHandHoldingHeart />;
  }
};

export const WhyWeExist = ({ data }: { data?: WhyWeExistData }) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-10 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-[#f4fbfc] border border-gray-100 flex flex-col md:flex-row items-stretch">
          
          {/* Left Content */}
          <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center relative z-10 md:pr-16">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
              
              {/* Circular Icon with dotted border */}
              <div className="relative shrink-0 w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center">
                {/* Dotted border with rotation animation */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#12424b]/40 animate-[spin_12s_linear_infinite]"></div>
                {/* Inner circle */}
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-[#12424b] flex items-center justify-center text-[#fbbc04] text-4xl lg:text-5xl z-10 shadow-lg">
                  {renderIcon(data.icon)}
                </div>
                {/* Yellow dot on border (placed relative to the container so it doesn't spin, or we can make it spin with the border) */}
                <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#fbbc04]"></div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#12424b] mb-2">
                  {data.title}
                </h3>
                
                {/* Custom Divider */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-[2px] bg-[#fbbc04]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
                  <div className="w-10 h-[2px] bg-[#fbbc04]"></div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                  {data.description}
                </p>
              </div>

            </div>

          </div>

          {/* Right Slanted Image Container */}
          <div className="w-full md:w-[45%] h-[250px] md:h-auto relative shrink-0">
             
             {/* The slant effect using CSS clip-path */}
             <div 
               className="absolute inset-0 w-full h-full z-10 hidden md:block" 
               style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
             >
                <Image src={data.image} alt={data.title} fill className="object-cover" />
             </div>

             {/* Mobile image without slant */}
             <div className="absolute inset-0 w-full h-full z-10 md:hidden block">
                <Image src={data.image} alt={data.title} fill className="object-cover" />
             </div>

             {/* Decorative slanted lines on Desktop */}
             <div className="absolute top-0 bottom-0 left-[12%] w-1 bg-white z-20 hidden md:block transform -skew-x-[12deg]"></div>
             <div className="absolute top-0 bottom-0 left-[11%] w-[2px] bg-[#12424b] z-20 hidden md:block transform -skew-x-[12deg]"></div>
          </div>

        </div>

      </div>
    </section>
  );
};
