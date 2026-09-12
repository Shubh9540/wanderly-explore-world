'use client';

import React from 'react';
import Image from 'next/image';
import { AwardsData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Awards = ({ data }: { data?: AwardsData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-white relative overflow-hidden">

      {/* Background Decorative Dots */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#12424b 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0971b8 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10">

        <SectionHeading
          subtitle={data.subtitle}
          title={`${data.titlePart1} ${data.titleHighlight} ${data.titlePart2}`.trim()}
          description={data.description}
        />

        {/* Subheading */}
        <div className="mt-8 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#12424b] mb-4">
            {data.subheading}
          </h3>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-[2px] bg-[#fbbc04]"></div>
            <div className="w-10 h-[2px] bg-[#12424b]"></div>
            <div className="w-10 h-[2px] bg-[#0971b8]"></div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {data.items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_25px_rgb(0,0,0,0.06)] pt-10 pb-6 px-4 flex flex-col items-center text-center relative transition-transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index % 5) * 100}ms` }}
            >

              {/* Ribbon (Top Center) */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 text-white text-xs font-bold rounded-sm shadow-md"
                style={{ backgroundColor: item.color }}
              >
                {item.year}
                {/* Fold effects for ribbon (pseudo-elements simulated with absolute divs) */}
                <div
                  className="absolute -left-1.5 top-0 border-r-[6px] border-b-[12px] border-l-0 border-t-0 border-solid"
                  style={{ borderRightColor: item.color, borderBottomColor: 'transparent', filter: 'brightness(0.7)' }}>
                </div>
                <div
                  className="absolute -right-1.5 top-0 border-l-[6px] border-b-[12px] border-r-0 border-t-0 border-solid"
                  style={{ borderLeftColor: item.color, borderBottomColor: 'transparent', filter: 'brightness(0.7)' }}>
                </div>
              </div>

              {/* Trophy Image */}
              <div className="relative w-24 h-28 mb-6">
                <Image src={item.image} alt={item.title} fill className="object-contain" />
              </div>

              {/* Text */}
              <h4
                className="text-sm font-bold mb-3 leading-tight"
                style={{ color: item.color }}
              >
                {item.title}
              </h4>
              <div className="w-8 h-[1px] bg-gray-200 mb-3"></div>
              <p className="text-gray-500 text-[11px] leading-tight font-medium uppercase tracking-wider">
                {item.organization}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
