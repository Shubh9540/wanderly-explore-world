import React from 'react';
import { ContactAssistanceData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaPlane, FaSuitcaseRolling, FaHeadset } from 'react-icons/fa';

export const ContactAssistance = ({ data }: { data?: ContactAssistanceData }) => {
  if (!data || !data.cards || data.cards.length === 0) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaPlane': return <FaPlane className="text-3xl text-[#0c5c6f]" />;
      case 'FaSuitcaseRolling': return <FaSuitcaseRolling className="text-3xl text-[#0c5c6f]" />;
      case 'FaHeadset': return <FaHeadset className="text-3xl text-[#0c5c6f]" />;
      default: return null;
    }
  };

  return (
    <section className="py-16 lg:py-12 relative overflow-hidden bg-white">

      {/* Background Dots Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0c5c6f 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* Background gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/20 z-0 pointer-events-none"></div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <SectionHeading
          subtitle={data.subtitle}
          title={data.title}
          showPlaneTrack={false}
        />

        {/* Assistance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {data.cards.map((card) => (
            <div key={card.id} className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 p-8 lg:p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">

              <div className="flex items-center gap-6 w-full mb-6">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-[#e8f4f6] flex items-center justify-center flex-shrink-0 text-[#0c5c6f]">
                  {renderIcon(card.icon)}
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-[#0c5c6f] leading-tight">
                  {card.title}
                </h3>
              </div>

              {/* Separator */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
                <div className="w-8 h-[2px] bg-[#e5e7eb]"></div>
              </div>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                {card.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
