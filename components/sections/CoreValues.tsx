'use client';

import React from 'react';
import { CoreValuesData } from '@/types/templates.types';
import { FaShieldAlt, FaAward, FaStopwatch, FaUsers, FaLightbulb } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaAward': return <FaAward />;
    case 'FaStopwatch': return <FaStopwatch />;
    case 'FaUsers': return <FaUsers />;
    case 'FaLightbulb': return <FaLightbulb />;
    default: return <FaShieldAlt />;
  }
};

export const CoreValues = ({ data }: { data?: CoreValuesData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-16 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.items.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex flex-col items-center text-center p-8 transition-transform hover:-translate-y-2 opacity-0 animate-fade-in-up border border-gray-100"
              style={{ 
                borderBottomWidth: '4px',
                borderBottomStyle: 'solid',
                borderBottomColor: item.color,
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Icon */}
              <div 
                className="text-5xl mb-6 flex justify-center items-center"
                style={{ color: item.color }}
              >
                {renderIcon(item.icon)}
              </div>

              {/* Title */}
              <h4 
                className="text-xl font-bold mb-4"
                style={{ color: item.color }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
