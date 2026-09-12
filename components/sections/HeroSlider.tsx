'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeroSliderData } from '@/types/templates.types';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AirplaneTrackIcon } from '@/components/ui/AirplaneTrackIcon';

export const HeroSlider = ({ data }: { data?: HeroSliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!data || !data.slides || data.slides.length === 0) return null;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % data.slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? data.slides.length - 1 : prev - 1));

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [data.slides.length]);

  return (
    <section className="relative w-full h-[500px] lg:h-[650px] overflow-hidden">
      {/* Slides */}
      {data.slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url('${slide.bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Subtle dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Slide Content */}
          <div className="relative z-20 h-full w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-24 flex items-center">
            <div className="max-w-3xl text-white pt-10 md:pt-20 pb-16 md:pb-0">
              
              {/* Subtitle Line */}
              <div className="flex items-center gap-4 mb-4">
                <span className="font-['Caveat',_'Brush_Script_MT',_cursive] text-4xl lg:text-5xl text-[#f6b704] tracking-wide">
                  {slide.subtitleText}
                </span>
                {slide.subtitleSuffix === 'plane_path' && (
                  <div className="hidden sm:flex items-center opacity-80">
                    <AirplaneTrackIcon className="w-[120px] lg:w-[150px] text-white" />
                  </div>
                )}
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-[1.1] mb-8">
                {slide.titleLine1} <br />
                <span className="font-['Caveat',_'Brush_Script_MT',_cursive] relative inline-block font-normal mt-2">
                  {slide.titleLine2Highlight}
                  {/* Decorative Yellow Swoosh */}
                  <svg className="absolute w-[110%] h-[20px] -bottom-3 -left-[5%] text-[#f6b704]" viewBox="0 0 300 20" preserveAspectRatio="none">
                    <path d="M0,15 Q150,25 300,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                {slide.titleLine2Text && <span className="ml-4">{slide.titleLine2Text}</span>}
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl font-medium mb-12 max-w-lg leading-relaxed text-gray-100">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-6">
                {slide.buttonText && slide.buttonUrl && (
                  <Link 
                    href={slide.buttonUrl}
                    className="bg-[#f6b704] text-[#051024] font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center gap-2 hover:bg-white transition-colors"
                  >
                    <span>{slide.buttonText}</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                )}
                {/* Watch Video button is explicitly excluded per instructions */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Side Dots Navigation */}
      <div className="absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {data.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[14px] h-[14px] rounded-full border-2 transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#f6b704] border-white scale-125' 
                : 'bg-white border-white hover:bg-gray-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Right Arrows */}
      <div className="absolute right-2 md:right-4 lg:right-16 bottom-4 md:bottom-10 z-30 flex gap-2 md:gap-4">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#051024] transition-colors backdrop-blur-sm bg-black/10"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="text-xs md:text-sm mr-1" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white hover:text-[#051024] transition-colors backdrop-blur-sm bg-black/10"
          aria-label="Next Slide"
        >
          <FaChevronRight className="text-xs md:text-sm ml-1" />
        </button>
      </div>
    </section>
  );
};
