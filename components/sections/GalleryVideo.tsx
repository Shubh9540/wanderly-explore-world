'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VideoGalleryData } from '@/types/templates.types';
import { FaPlayCircle, FaEye, FaRegCalendarAlt, FaTimes } from 'react-icons/fa';

export const GalleryVideo = ({ data }: { data: VideoGalleryData }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Fallback YouTube video (4K Nature/Travel drone footage) if URL is missing or '#'
  const getEmbedUrl = (url?: string) => {
    if (!url || url === '#') return 'https://www.youtube.com/embed/35npVaFGHMY?autoplay=1';
    
    // If it's already an embed URL, just add autoplay
    if (url.includes('youtube.com/embed/')) {
      return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
    }
    
    // Convert standard youtube watch URL to embed
    const videoId = url.split('v=')[1];
    if (videoId) {
      const ampersandPosition = videoId.indexOf('&');
      const cleanId = ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
      return `https://www.youtube.com/embed/${cleanId}?autoplay=1`;
    }
    
    return 'https://www.youtube.com/embed/35npVaFGHMY?autoplay=1';
  };

  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-4">
        {data.videos.map((video) => (
          <div 
            key={video.id} 
            className="flex flex-col group cursor-pointer"
            onClick={() => setActiveVideo(getEmbedUrl(video.videoUrl))}
          >
            <div className="relative h-[180px] w-full rounded-2xl overflow-hidden shadow-sm mb-4">
              <Image 
                src={video.thumbnail} 
                alt={video.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Video Overlay / Play Icon */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/40">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white bg-black/20 backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg">
                  <FaPlayCircle className="text-2xl ml-1 drop-shadow-md" />
                </div>
              </div>
              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-bold px-2 py-1 rounded backdrop-blur-sm">
                {video.duration}
              </div>
            </div>
            <div>
              <h4 className="text-[#12424b] font-bold text-[15px] mb-2 group-hover:text-[#09a3c8] transition-colors">{video.title}</h4>
              <div className="flex items-center gap-4 text-gray-500 text-[12px]">
                <span className="flex items-center gap-1.5"><FaRegCalendarAlt className="text-[#09a3c8]" /> {video.date}</span>
                <span className="flex items-center gap-1.5"><FaEye className="text-[#09a3c8]" /> {video.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-12 animate-fadeIn">
          {/* Dark Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer" 
            onClick={() => setActiveVideo(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 md:top-4 md:right-4 z-20 text-white hover:text-[#fbbc04] transition-colors bg-black/50 hover:bg-black/80 rounded-full p-2"
              title="Close video"
            >
              <FaTimes className="text-xl" />
            </button>
            
            {/* YouTube Iframe */}
            <iframe 
              src={activeVideo}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
