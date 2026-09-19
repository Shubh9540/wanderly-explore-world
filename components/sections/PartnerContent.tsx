import React from 'react';
import { PartnerData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';

export const PartnerContent = ({ data }: { data?: PartnerData }) => {
  if (!data || !data.logos || data.logos.length === 0) return null;

  return (
    <section className="pt-16 lg:pt-12 pb-0 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10">

        {/* Standard Global Heading */}
        <SectionHeading
          subtitle={data.subtitle}
          title={data.titlePart1 + (data.titleHighlight ? ` ${data.titleHighlight}` : '')}
          description={data.description}
          showPlaneTrack={false}
        />

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
          {data.logos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex items-center justify-center p-4 lg:p-6 h-28 lg:h-36 group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.image}
                  alt={logo.name || 'Partner Logo'}
                  fill
                  className="object-contain transition-all duration-300 p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
