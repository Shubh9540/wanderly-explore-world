'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import { FaStar, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AirplaneTrackIcon } from '@/components/ui/AirplaneTrackIcon';

export const Testimonials = ({ data }: { data?: TestimonialsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    if (!data?.testimonials) return;
    setActiveIndex((prev) =>
      prev >= data.testimonials.length - cardsToShow ? 0 : prev + 1
    );
  }, [cardsToShow, data?.testimonials]);

  const prevSlide = () => {
    if (!data?.testimonials) return;
    setActiveIndex((prev) =>
      prev === 0 ? data.testimonials.length - cardsToShow : prev - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!data || !data.testimonials || data.testimonials.length === 0) return null;

  const maxDots = Math.max(1, data.testimonials.length - cardsToShow + 1);

  return (
    <section
      className="py-16 lg:py-12 relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url("/banner/bg-11.webp")' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#f4f9fa]/90 backdrop-blur-[2px]"></div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <SectionHeading
          subtitle={data.subtitle}
          title={data.title as string}
          description={data.description}
          showPlaneTrack={true}
        />

        {/* Slider Container */}
        <div className="relative group mx-0 lg:mx-8">
          {/* Arrow Left */}
          <button
            onClick={prevSlide}
            className="absolute left-[-10px] md:left-[-30px] lg:left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0c5c6f] text-white flex items-center justify-center z-20 transition-all hover:bg-[#094857] shadow-[0_4px_15px_rgba(12,92,111,0.3)]"
          >
            <FaChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>

          {/* Slider Wrapper */}
          <div className="overflow-hidden pb-16 pt-2 px-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / cardsToShow)}%)` }}
            >
              {data.testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-full flex flex-col relative mt-6 border border-gray-50/50">

                    {/* Top Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <FaQuoteRight className="w-12 h-12 text-[#0c5c6f]" />
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gray-200" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0c5c6f] text-lg">{item.name}</h4>
                        <p className="text-gray-500 text-sm">{item.location}</p>
                        <div className="flex gap-1 mt-1 text-[#fbbc04]">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <FaStar key={i} className="w-4 h-4" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 leading-relaxed flex-grow text-sm md:text-base font-medium">
                      {item.text}
                    </p>

                    {/* Bottom overlapping quote button */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0c5c6f] border-4 border-white flex items-center justify-center text-white shadow-lg">
                      <FaQuoteRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Right */}
          <button
            onClick={nextSlide}
            className="absolute right-[-10px] md:right-[-30px] lg:right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0c5c6f] text-white flex items-center justify-center z-20 transition-all hover:bg-[#094857] shadow-[0_4px_15px_rgba(12,92,111,0.3)]"
          >
            <FaChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {[...Array(maxDots)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx
                  ? 'bg-[#0c5c6f] scale-125'
                  : 'bg-[#0c5c6f]/20 hover:bg-[#0c5c6f]/50'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
