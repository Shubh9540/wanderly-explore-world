'use client';

import React from 'react';
import Image from 'next/image';
import { MissionVisionData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaCheckCircle, FaBullseye, FaEye } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBullseye': return <FaBullseye />;
    case 'FaEye': return <FaEye />;
    default: return <FaBullseye />;
  }
};

export const MissionVision = ({ data }: { data?: MissionVisionData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-white relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">

        <SectionHeading
          subtitle={data.subtitle}
          title={`${data.titlePart1} ${data.titleHighlight} ${data.titlePart2}`.trim()}
          description={data.description}
        />

        {/* Mission and Vision Container */}
        <div className="mt-16 relative flex flex-col lg:flex-row gap-8 lg:gap-24 items-stretch justify-center">

          {/* Mission Card (Left) */}
          <div className="flex-1 bg-[#12424b] rounded-[30px] p-8 md:p-12 lg:pr-24 relative z-10 shadow-2xl flex flex-col justify-center">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#12424b] text-3xl shrink-0 shadow-lg border-4 border-white/20">
                {renderIcon(data.mission.icon)}
              </div>
              <h3 className="text-3xl font-bold text-white relative">
                {data.mission.title}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#fbbc04] rounded-full"></div>
              </h3>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed font-medium">
              {data.mission.description1}
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed font-medium">
              {data.mission.description2}
            </p>

            <ul className="flex flex-col gap-3">
              {data.mission.points.map(point => (
                <li key={point.id} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#fbbc04] text-lg mt-1 shrink-0" />
                  <span className="text-gray-300 font-medium">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Absolute Center Image overlapping both cards (Desktop) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-30">
            <div className="w-[320px] h-[320px] rounded-full p-4 bg-white shadow-2xl relative flex items-center justify-center">

              {/* Rotating Outer Ring */}
              <div className="absolute inset-2 rounded-full border-[3px] border-transparent border-t-[#fbbc04] border-b-[#12424b] animate-[spin_8s_linear_infinite]">
                {/* Dots on the ring */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#12424b] border-2 border-white"></div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#fbbc04] border-2 border-white"></div>
              </div>

              {/* Inner Image (Static) */}
              <div className="w-[280px] h-[280px] rounded-full overflow-hidden relative z-10 border-4 border-white">
                <Image src={data.centerImage} alt="Mission and Vision" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Mobile Image (Visible only on small screens) */}
          <div className="lg:hidden flex items-center justify-center -my-8 relative z-30">
            <div className="w-[220px] h-[220px] rounded-full p-3 bg-white shadow-xl relative flex items-center justify-center">
              <div className="absolute inset-1.5 rounded-full border-[3px] border-transparent border-t-[#fbbc04] border-b-[#12424b] animate-[spin_8s_linear_infinite]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#12424b] border border-white"></div>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#fbbc04] border border-white"></div>
              </div>
              <div className="w-[190px] h-[190px] rounded-full overflow-hidden relative z-10 border-4 border-white">
                <Image src={data.centerImage} alt="Mission and Vision" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Vision Card (Right) */}
          <div className="flex-1 bg-[#0971b8] rounded-[30px] p-8 md:p-12 lg:pl-24 relative z-10 shadow-2xl flex flex-col justify-center">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#0971b8] text-3xl shrink-0 shadow-lg border-4 border-white/20">
                {renderIcon(data.vision.icon)}
              </div>
              <h3 className="text-3xl font-bold text-white relative">
                {data.vision.title}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#fbbc04] rounded-full"></div>
              </h3>
            </div>

            <p className="text-white/90 mb-4 leading-relaxed font-medium">
              {data.vision.description1}
            </p>
            <p className="text-white/90 mb-8 leading-relaxed font-medium">
              {data.vision.description2}
            </p>

            <ul className="flex flex-col gap-3">
              {data.vision.points.map(point => (
                <li key={point.id} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#fbbc04] text-lg mt-1 shrink-0" />
                  <span className="text-white/90 font-medium">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
