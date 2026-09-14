import React, { useState } from 'react';
import Image from 'next/image';
import { PhotoGalleryData } from '@/types/templates.types';
import { FaSyncAlt } from 'react-icons/fa';

export const GalleryImage = ({ data }: { data: PhotoGalleryData }) => {
  const [visiblePhotos, setVisiblePhotos] = useState(8);

  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {data.photos.slice(0, visiblePhotos).map((photo) => (
          <div key={photo.id} className="relative h-[250px] w-full rounded-2xl overflow-hidden shadow-sm group cursor-pointer">
            <Image 
              src={photo.src} 
              alt={photo.alt || "Gallery Photo"} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      
      {visiblePhotos < data.photos.length && (
        <div className="text-center mb-4">
          <button 
            onClick={() => setVisiblePhotos(prev => prev + 4)}
            className="border border-[#09a3c8] text-[#09a3c8] hover:bg-[#09a3c8] hover:text-white font-bold py-3 px-8 rounded-full transition-colors text-[14px] inline-flex items-center gap-2"
          >
            Load More <FaSyncAlt className="text-sm" />
          </button>
        </div>
      )}
    </div>
  );
};
