'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryPageData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaImage, FaPlayCircle } from 'react-icons/fa';
import { GalleryImage } from './GalleryImage';
import { GalleryVideo } from './GalleryVideo';

export const GalleryTabs = ({ data }: { data?: GalleryPageData }) => {
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');

  if (!data) return null;

  return (
    <section className="pt-12 lg:pt-20 pb-4 lg:pb-8 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 relative">

        <SectionHeading 
          subtitle={data.subtitle} 
          title={data.title} 
          description={data.description} 
          showPlaneTrack={true} 
        />

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
