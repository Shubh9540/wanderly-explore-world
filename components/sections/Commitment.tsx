'use client';

import React from 'react';
import { CoreValuesData } from '@/types/templates.types';
import { FaBullseye, FaLightbulb, FaHandshake, FaHeart } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBullseye': return <FaBullseye />;
    case 'FaLightbulb': return <FaLightbulb />;
    case 'FaHandshake': return <FaHandshake />;
    case 'FaHeart': return <FaHeart />;
    default: return <FaBullseye />;
  }
};

export const Commitment = ({ data }: { data?: CoreValuesData }) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12424b] mb-4">
            {data.title || 'Our Commitment to Excellence'}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-[2px] bg-[#12424b]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
            <div className="w-10 h-[2px] bg-[#12424b]/40"></div>
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {data.items.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center px-6 relative opacity-0 animate-fade-in-up ${index !== data.items.length - 1 ? 'lg:border-r lg:border-gray-200' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >

              {/* Icon */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-6"
                style={{ backgroundColor: `${item.color}15`, color: item.color }}
              >
                {renderIcon(item.icon)}
              </div>

              {/* Title */}
              <h4
                className="text-lg font-bold mb-3"
                style={{ color: item.color }}
              >
                {item.title}
              </h4>

              {/* Small Divider */}
              <div
                className="w-6 h-[2px] mb-4"
                style={{ backgroundColor: item.color }}
              ></div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
