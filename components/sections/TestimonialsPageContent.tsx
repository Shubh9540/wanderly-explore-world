'use client';

import React from 'react';
import Image from 'next/image';
import { TestimonialsData } from '@/types/templates.types';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const TestimonialsPageContent = ({ data }: { data?: TestimonialsData }) => {
  if (!data || !data.testimonials) return null;

  return (
    <section className="pt-12 lg:pt-12 pb-4 lg:pb-8 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 relative">

        <SectionHeading 
          subtitle={data.subtitle} 
          title={data.title as string} 
          description={data.description} 
          showPlaneTrack={true} 
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pb-10 px-2 lg:px-6 mt-6">
          {data.testimonials.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full flex flex-col relative border border-gray-100">

              {/* Top Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <FaQuoteRight className="w-12 h-12 text-[#0c5c6f]" />
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-[#0c5c6f] text-lg">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.location}</p>
                  <div className="flex gap-1 mt-1 text-[#fbbc04]">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed flex-grow text-[15px] font-medium">
                {item.text}
              </p>

              {/* Bottom overlapping quote button */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0c5c6f] border-4 border-white flex items-center justify-center text-white shadow-lg">
                <FaQuoteRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
