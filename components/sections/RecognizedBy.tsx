'use client';

import React from 'react';
import Image from 'next/image';
import { RecognizedByData } from '@/types/templates.types';
import { FaMedal } from 'react-icons/fa';

export const RecognizedBy = ({ data }: { data?: RecognizedByData }) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        
        <div className="bg-[#f7fbfa] rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 border border-[#e5f1f0]">
          
          {/* Left Text Content */}
          <div className="flex items-center gap-6 lg:w-[40%] shrink-0 lg:border-r border-gray-200 lg:pr-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#12424b] flex items-center justify-center text-white text-4xl shrink-0 shadow-lg">
              <FaMedal />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#12424b] leading-tight mb-2">
                {data.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word} {i === 1 && <br className="hidden md:block" />}
                  </React.Fragment>
                ))}
              </h3>
              <div className="flex items-center gap-1 mb-3">
                <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
                <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
              </div>
              <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>

          {/* Right Logos Content */}
          <div className="flex-1 flex flex-wrap items-center justify-center lg:justify-between gap-4 md:gap-6 w-full">
            {data.logos.map((logo) => (
              <div 
                key={logo.id} 
                className="bg-white rounded-2xl w-[120px] h-[90px] md:w-[140px] md:h-[100px] flex items-center justify-center p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-full">
                  {/* We use an image if present, or generic text fallback */}
                  <Image src={logo.image} alt="Organization Logo" fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
