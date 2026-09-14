'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DestinationsPageData } from '@/types/templates.types';
import { 
  FaMapMarkerAlt, FaGlobe, FaPlaneDeparture, FaShieldAlt, 
  FaUsers, FaThumbsUp, FaHeadset, FaAngleRight 
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaGlobe': return <FaGlobe />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaUsers': return <FaUsers />;
    case 'FaThumbsUp': return <FaThumbsUp />;
    default: return <FaPlaneDeparture />;
  }
};

export const DestinationsContent = ({ data }: { data?: DestinationsPageData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-16 bg-[#fcfdfe]">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 relative items-start">
          
          {/* LEFT CONTENT (SCROLLABLE) */}
          <div className="flex-1 flex flex-col gap-12">
            
            {/* Domestic Destinations */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[#fbbc04] text-2xl">
                  {renderIcon(data.domestic.icon)}
                </div>
                <h2 className="text-2xl font-bold text-[#12424b]">{data.domestic.title}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {data.domestic.items.map((item) => (
                  <Link href={item.url} key={item.id} className="group flex flex-col gap-3">
                    <div className="relative h-[160px] w-full rounded-xl overflow-hidden shadow-sm">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center font-bold text-[#12424b] group-hover:text-[#09a3c8] transition-colors">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* International Destinations */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[#09a3c8] text-2xl">
                  {renderIcon(data.international.icon)}
                </div>
                <h2 className="text-2xl font-bold text-[#12424b]">{data.international.title}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {data.international.items.map((item) => (
                  <Link href={item.url} key={item.id} className="group flex flex-col gap-3">
                    <div className="relative h-[160px] w-full rounded-xl overflow-hidden shadow-sm">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center font-bold text-[#12424b] group-hover:text-[#09a3c8] transition-colors">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg mt-8">
              <div className="absolute inset-0">
                <Image src="/banner/hero_bg_1.jpg" alt="Banner bg" fill className="object-cover brightness-[0.4]" />
              </div>
              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white flex-1 flex gap-6 items-start">
                  <div className="text-[#fbbc04] text-4xl pt-2">
                    <FaPlaneDeparture />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{data.bottomBanner.title}</h3>
                    <h4 className="text-[#fbbc04] text-xl md:text-2xl font-bold mb-4">{data.bottomBanner.subtitle}</h4>
                    <p className="text-gray-200 text-sm md:text-base max-w-lg leading-relaxed">
                      {data.bottomBanner.description}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <Link href={data.bottomBanner.buttonUrl}>
                    <button className="w-full md:w-auto bg-[#fbbc04] hover:bg-[#e0a800] text-[#12424b] font-bold py-3.5 px-8 rounded-full transition-colors flex items-center justify-center gap-2 shadow-md">
                      {data.bottomBanner.buttonText}
                      <FaAngleRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR (STICKY) */}
          <div className="w-full lg:w-[350px] shrink-0 sticky top-24 flex flex-col gap-8 pb-10">
            
            {/* Why Travel With Us */}
            <div className="bg-[#f5f9fa] rounded-2xl p-6 border border-gray-100">
              <h3 className="text-[#12424b] font-bold text-xl mb-6">{data.sidebar.whyWanderlyTitle}</h3>
              <div className="flex flex-col gap-6">
                {data.sidebar.whyWanderlyFeatures.map(feat => (
                  <div key={feat.id} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-white text-[#09a3c8] shadow-sm flex items-center justify-center text-lg shrink-0">
                      {renderIcon(feat.icon)}
                    </div>
                    <div>
                      <h4 className="text-[#12424b] font-bold text-[14px] mb-1">{feat.title}</h4>
                      <p className="text-gray-500 text-[12px] leading-relaxed pr-2">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Help Box */}
            <div className="bg-[#0e2a36] rounded-2xl p-8 text-center text-white flex flex-col items-center shadow-lg">
              <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center mb-4">
                <FaHeadset className="text-3xl text-white" />
              </div>
              <h4 className="font-bold text-[20px] mb-2">{data.sidebar.helpBox.title}</h4>
              <p className="text-gray-300 text-[13px] leading-relaxed mb-6">
                {data.sidebar.helpBox.description}
              </p>
              <div className="text-[#fbbc04] font-bold text-[24px] mb-6">
                {data.sidebar.helpBox.phone}
              </div>
              <Link href={data.sidebar.helpBox.buttonUrl} className="w-full">
                <button className="w-full bg-white text-[#12424b] hover:bg-gray-100 font-bold py-3.5 rounded transition-colors text-[14px]">
                  {data.sidebar.helpBox.buttonText}
                </button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
