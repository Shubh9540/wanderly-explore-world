'use client';

import React from 'react';
import { TravelAdvantagesData } from '@/types/templates.types';
import { FaDollarSign, FaMapMarkerAlt, FaShieldAlt, FaUserTie } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaDollarSign': return <FaDollarSign />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaUserTie': return <FaUserTie />;
    default: return <FaMapMarkerAlt />;
  }
};

export const TravelAdvantages = ({ data }: { data?: TravelAdvantagesData }) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-[#fcfdfe] relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12424b] mb-4">
            {data.title}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-[2px] bg-[#fbbc04]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
            <div className="w-10 h-[2px] bg-[#fbbc04]"></div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-[0_4px_25px_rgb(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center p-8 opacity-0 animate-fade-in-up transition-transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-[#eaf4f3] flex items-center justify-center text-5xl mb-6 relative">
                {/* Specific Colors based on index for the mockup look */}
                <div className={`${index % 2 === 0 ? 'text-[#fbbc04]' : 'text-[#0971b8]'}`}>
                  {renderIcon(item.icon)}
                </div>
              </div>

              {/* Title */}
              <h4 className="text-base font-bold mb-3 text-[#12424b]">
                {item.title}
              </h4>
              
              {/* Small Divider */}
              <div className="flex items-center gap-1 mb-4">
                <div className="w-4 h-[1px] bg-[#fbbc04]"></div>
                <div className="w-1 h-1 rounded-full bg-[#fbbc04]"></div>
                <div className="w-4 h-[1px] bg-[#fbbc04]"></div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[13px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
