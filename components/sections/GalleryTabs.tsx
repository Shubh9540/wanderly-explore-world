'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GalleryPageData } from '@/types/templates.types';
import { FaImage, FaPlayCircle, FaAngleRight } from 'react-icons/fa';
import { GalleryImage } from './GalleryImage';
import { GalleryVideo } from './GalleryVideo';

export const GalleryTabs = ({ data }: { data?: GalleryPageData }) => {
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');

  if (!data) return null;

  const { photoGallery, videoGallery, bottomBanner } = data;

  return (
    <section className="pt-12 lg:pt-20 pb-4 lg:pb-8 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-[#09a3c8] font-bold text-[14px] tracking-wider uppercase mb-3 inline-flex items-center">
            <span className="w-8 h-[2px] bg-[#09a3c8] mr-3"></span>
            {data.subtitle}
            <span className="w-8 h-[2px] bg-[#09a3c8] ml-3"></span>
          </h4>
          <h2 className="text-[#12424b] text-3xl md:text-5xl font-bold mb-6">{data.title}</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('photo')}
            className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-[14px] transition-all duration-300 w-full sm:w-auto ${
              activeTab === 'photo' 
                ? 'bg-[#12424b] text-white shadow-md' 
                : 'bg-white text-[#12424b] border border-[#12424b] hover:bg-gray-50'
            }`}
          >
            <FaImage className="text-lg" />
            PHOTO GALLERY
          </button>
          
          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-[14px] transition-all duration-300 w-full sm:w-auto ${
              activeTab === 'video' 
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
          {activeTab === 'photo' && <GalleryImage data={photoGallery} />}
          {activeTab === 'video' && <GalleryVideo data={videoGallery} />}
        </div>

      </div>
    </section>
  );
};
