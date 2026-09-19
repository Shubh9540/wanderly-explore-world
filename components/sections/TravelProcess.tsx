'use client';

import React from 'react';
import { TravelProcessData } from '@/types/templates.types';
import { FaGlobeAmericas, FaClipboardList, FaTicketAlt, FaSuitcaseRolling, FaPlane } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaGlobeAmericas': return <FaGlobeAmericas />;
    case 'FaClipboardList': return <FaClipboardList />;
    case 'FaTicketAlt': return <FaTicketAlt />;
    case 'FaSuitcaseRolling': return <FaSuitcaseRolling />;
    default: return <FaGlobeAmericas />;
  }
};

export const TravelProcess = ({ data }: { data?: TravelProcessData }) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12424b] mb-4">
            {data.title}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-[2px] bg-[#fbbc04]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
            <div className="w-10 h-[2px] bg-[#fbbc04]"></div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 w-full">
          
          {/* Custom Animation Styles */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes flyPlane {
              0% { left: 0%; opacity: 0; }
              5% { opacity: 1; }
              95% { opacity: 1; }
              100% { left: 100%; opacity: 0; }
            }
            .animate-fly-plane {
              animation: flyPlane 12s linear infinite;
            }
            
            @keyframes pulseNode {
              0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(9, 113, 184, 0); }
              50% { transform: scale(1.05); box-shadow: 0 0 15px 5px rgba(9, 113, 184, 0.3); }
            }
            .node-pulse-1 { animation: pulseNode 12s infinite; animation-delay: 0s; }
            .node-pulse-2 { animation: pulseNode 12s infinite; animation-delay: 3s; }
            .node-pulse-3 { animation: pulseNode 12s infinite; animation-delay: 6s; }
            .node-pulse-4 { animation: pulseNode 12s infinite; animation-delay: 9s; }
          `}} />

          {/* Dotted Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[5%] right-[5%] border-t-2 border-dashed border-[#0971b8] z-0"></div>

          {/* Animated Airplane */}
          <div className="hidden md:block absolute top-[38px] w-full z-10 pointer-events-none">
             <div className="absolute animate-fly-plane text-[#12424b] text-2xl">
                <FaPlane className="rotate-90 md:rotate-0" />
             </div>
          </div>

          {data.steps.map((step, index) => (
            <div 
              key={step.id} 
              className="relative z-20 flex-1 flex flex-col items-center text-center group"
            >
              
              {/* Icon Circle */}
              <div className={`w-24 h-24 rounded-full bg-white border-[3px] border-[#eff5fc] flex items-center justify-center text-5xl text-[#12424b] mb-4 shadow-sm group-hover:border-[#0971b8] transition-all relative node-pulse-${index + 1}`}>
                {renderIcon(step.icon)}
                
                {/* Step Number Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#fbbc04] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {step.stepNumber}
                </div>
              </div>

              {/* Title */}
              <h4 className="text-[15px] font-bold mt-4 mb-2 text-[#12424b]">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-gray-500 text-[13px] leading-relaxed max-w-[200px]">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
