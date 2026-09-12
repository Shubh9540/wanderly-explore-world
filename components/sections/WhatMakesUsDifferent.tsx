'use client';

import React from 'react';
import Image from 'next/image';
import { WhatMakesUsDifferentData } from '@/types/templates.types';
import { FaCheckCircle } from 'react-icons/fa';

export const WhatMakesUsDifferent = ({ data }: { data?: WhatMakesUsDifferentData }) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={data.image} 
                alt={data.title} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#12424b] mb-4">
              {data.title}
            </h2>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-[2px] bg-[#12424b]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
              <div className="w-16 h-[2px] bg-[#fbbc04]"></div>
            </div>

            <ul className="flex flex-col">
              {data.items.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-center gap-4 py-4 ${index !== data.items.length - 1 ? 'border-b border-dashed border-gray-200' : ''}`}
                >
                  <div className="text-[#12424b] text-xl shrink-0">
                    <FaCheckCircle />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};
