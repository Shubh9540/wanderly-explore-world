'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AboutUsData } from '@/types/templates.types';
import { FaShieldAlt, FaBriefcase, FaHeadset, FaUserAlt, FaArrowRight, FaPlane } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaBriefcase': return <FaBriefcase />;
    case 'FaHeadset': return <FaHeadset />;
    case 'FaUserAlt': return <FaUserAlt />;
    default: return null;
  }
};

export const AboutUs = ({ data, hideButton = false }: { data?: AboutUsData, hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-16 bg-white relative overflow-hidden z-0">
      {/* Global Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <Image
          src="/about/bbg.png"
          alt="About Us Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">

        {/* Left Side: Content (Takes 5 columns) */}
        <div className="flex flex-col lg:col-span-5 relative z-20 mt-10 lg:mt-0">
          {/* Subtitle */}
          <div className="mb-4">
            <span className="text-[var(--color-primary)] font-extrabold uppercase tracking-widest text-sm">{data.subtitle}</span>
            <div className="w-16 h-[2px] bg-[var(--color-accent)] mt-2"></div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-[50px] font-extrabold text-[var(--color-primary)] leading-[1.2] mb-6">
            {data.title} <br className="hidden md:block" />
            {data.titleCursive && (
              <span className="font-[family-name:var(--font-cursive)] text-[var(--color-accent)] font-normal text-[60px] md:text-[75px] block -mt-2">
                {data.titleCursive}
              </span>
            )}
          </h2>

          {/* Description */}
          <p className="text-[#4a4a4a] mb-10 leading-relaxed text-sm md:text-base pr-4">
            {data.description}
          </p>

          {/* Features */}
          {data.features && data.features.length > 0 && (
            <div className="flex flex-col gap-4 mb-10">
              {data.features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0 text-sm shadow-md">
                    {renderIcon(feature.icon)}
                  </div>
                  <span className="font-bold text-[#111] text-sm md:text-[15px]">{feature.title}</span>
                </div>
              ))}
            </div>
          )}

          {/* Button */}
          {!hideButton && (
            <div className="flex items-center gap-4 relative">
              {data.button && (
                <Link
                  href={data.button.url}
                  className="bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-3 hover:bg-[var(--color-accent)] transition-colors duration-300 w-fit text-sm shadow-xl z-20 relative"
                >
                  {data.button.text} <FaArrowRight className="text-[12px]" />
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Images Composition (Takes 7 columns) */}
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px] flex items-center justify-center lg:col-span-7 mt-16 lg:mt-0 z-20">

          {/* CSS Grid for Images */}
          <div className="grid grid-cols-12 grid-rows-2 gap-4 h-full w-full py-6 lg:py-10 relative z-10">

            {/* Main vertical image - spans 2 rows, takes 7 cols */}
            <div className="row-span-2 col-span-7 relative w-full h-full rounded-[30px] overflow-hidden shadow-xl border-4 border-white bg-gray-200">
              <Image
                src={data.image1}
                alt="Travel Destination 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right Image - takes 5 cols */}
            <div className="relative col-span-5 w-full h-full rounded-[30px] overflow-hidden shadow-md border-4 border-white bg-gray-200">
              <Image
                src={data.image2}
                alt="Travel Destination 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right Image - takes 5 cols */}
            <div className="relative col-span-5 w-full h-full rounded-[30px] overflow-hidden shadow-md border-4 border-white bg-gray-200">
              {data.image3 && (
                <Image
                  src={data.image3}
                  alt="Travel Destination 3"
                  fill
                  className="object-cover"
                />
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};