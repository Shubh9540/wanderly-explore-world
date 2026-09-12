'use client';

import React from 'react';
import { CallToActionData } from '@/types/templates.types';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { AirplaneTrackIcon } from '@/components/ui/AirplaneTrackIcon';
import Link from 'next/link';
import Image from 'next/image';

export const CTA = ({ data }: { data?: CallToActionData }) => {
  if (!data) return null;

  return (
    <section className="py-16 px-4 md:px-6 relative overflow-hidden bg-white">
      <div className="max-w-[1250px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#093544]">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={data.bgImage || "/banner/hero_bg_1.jpg"} 
              alt="CTA Background" 
              fill 
              className="object-cover opacity-60"
            />
            {/* Gradient Overlay for better readability on left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#031d26] via-[#031d26]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 px-8 py-14 lg:px-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Content */}
            <div className="max-w-2xl relative">
              {/* Airplane Icon */}
              <div className="absolute -left-12 lg:-left-20 -top-8 w-24 h-24 lg:w-32 lg:h-32 text-[#fbbc04]">
                <AirplaneTrackIcon className="w-full h-full transform scale-x-[-1] -rotate-[15deg] opacity-80" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight relative z-10">
                {data.titlePart1} <br />
                <span className="text-[#fbbc04]">{data.titleHighlight}</span> {data.titlePart2}
              </h2>

              {/* Separator Line */}
              <div className="flex items-center gap-2 mb-6 mt-4">
                <div className="w-16 h-[2px] bg-[#0c5c6f]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#fbbc04]"></div>
                <div className="w-16 h-[2px] bg-[#0c5c6f]"></div>
              </div>

              <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
                {data.description}
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 flex-shrink-0">
              
              {/* Main Button */}
              {data.buttonText && data.buttonLink && (
                <Link 
                  href={data.buttonLink}
                  className="bg-[#fbbc04] hover:bg-[#e0a800] text-black font-bold py-3.5 px-8 rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg whitespace-nowrap"
                >
                  {data.buttonText} <FaArrowRight />
                </Link>
              )}

              {/* Outline Button / Phone */}
              {data.phone && (
                <a 
                  href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`}
                  className="bg-transparent border border-white/50 hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg whitespace-nowrap"
                >
                  <FaPhoneAlt /> {data.phone}
                </a>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
