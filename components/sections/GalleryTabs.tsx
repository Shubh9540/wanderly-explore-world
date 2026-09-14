'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AirplaneTrackIcon } from '@/components/ui/AirplaneTrackIcon';
import { GalleryPageData } from '@/types/templates.types';
import { FaImage, FaPlayCircle } from 'react-icons/fa';
import { GalleryImage } from './GalleryImage';
import { GalleryVideo } from './GalleryVideo';

export const GalleryTabs = ({ data }: { data?: GalleryPageData }) => {
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');

  if (!data) return null;

  return (
    <section className="pt-12 lg:pt-20 pb-4 lg:pb-8 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 relative">

        {/* Decorative Airplane Icon (Left Side) */}
        <div className="absolute -left-10 lg:left-10 top-0 w-32 lg:w-40 h-32 lg:h-40 text-[#09a3c8] opacity-70 hidden md:block">
          <AirplaneTrackIcon className="w-full h-full transform -scale-x-100 rotate-[30deg]" />
        </div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
          <h4 className="text-[#09a3c8] font-bold text-[14px] tracking-wider uppercase mb-3 flex flex-col items-center gap-1.5">
            {data.subtitle}
            <span className="w-10 h-[2px] bg-[#fbbc04]"></span>
          </h4>
          <h2 className="text-[#12424b] text-3xl md:text-5xl font-bold mb-6">{data.title}</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            {data.description}
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-12 h-[2px] bg-[#09a3c8]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#fbbc04]"></div>
            <div className="w-12 h-[2px] bg-[#09a3c8]"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('photo')}
            className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-[14px] transition-all duration-300 w-full sm:w-auto ${activeTab === 'photo'
              ? 'bg-[#12424b] text-white shadow-md'
              : 'bg-white text-[#12424b] border border-[#12424b] hover:bg-gray-50'
              }`}
          >
            <FaImage className="text-lg" />
            PHOTO GALLERY
          </button>

          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-[14px] transition-all duration-300 w-full sm:w-auto ${activeTab === 'video'
              ? 'bg-[#12424b] text-white shadow-md'
              : 'bg-white text-[#12424b] border border-[#12424b] hover:bg-gray-50'
              }`}
          >
            <FaPlayCircle className="text-lg" />
            VIDEO GALLERY
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'photo' && <GalleryImage data={data.photoGallery} />}
          {activeTab === 'video' && <GalleryVideo data={data.videoGallery} />}
        </div>

      </div>
    </section>
  );
};
