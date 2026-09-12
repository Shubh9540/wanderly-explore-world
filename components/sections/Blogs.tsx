'use client';

import React from 'react';
import { BlogsData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaRegCalendarAlt, FaRegClock, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export const Blogs = ({ data }: { data?: BlogsData }) => {
  if (!data || !data.blogs || data.blogs.length === 0) return null;

  return (
    <section className="py-16 lg:py-12 bg-[#f4f9fa] relative overflow-hidden">

      {/* Background Decorators */}
      {/* Left Dots */}
      <div className="absolute left-4 lg:left-12 bottom-8 opacity-20">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0c5c6f]"></div>
          ))}
        </div>
      </div>

      {/* Right Waves */}
      <div className="absolute right-4 lg:right-12 bottom-12 opacity-30">
        <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 10 Q 10 0 20 10 T 40 10 T 60 10 T 80 10" stroke="#0c5c6f" strokeWidth="2" fill="none" />
          <path d="M 0 15 Q 10 5 20 15 T 40 15 T 60 15 T 80 15" stroke="#0c5c6f" strokeWidth="2" fill="none" />
          <path d="M 0 20 Q 10 10 20 20 T 40 20 T 60 20 T 80 20" stroke="#0c5c6f" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <SectionHeading
          subtitle={data.subtitle}
          title={data.titlePart1 + (data.titleHighlight ? ` ${data.titleHighlight}` : '')}
          description={data.description}
          showPlaneTrack={true}
        />

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {data.blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl overflow-visible flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.06)] group border border-gray-50">

              {/* Image Section */}
              <div className="relative h-60 w-full rounded-t-2xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlapping Calendar Icon */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0c5c6f] text-white flex items-center justify-center border-4 border-white shadow-md z-10">
                  <FaRegCalendarAlt className="w-5 h-5" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-10 flex flex-col flex-grow">

                {/* Meta Info */}
                <div className="flex items-center justify-center gap-4 text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="text-gray-400" />
                    <span>{blog.date}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-2">
                    <FaRegClock className="text-gray-400" />
                    <span>{blog.category}</span>
                  </div>
                </div>

                {/* Title */}
                <Link href={blog.linkUrl} className="block mb-4">
                  <h3 className="text-xl font-bold text-[#0c5c6f] hover:text-[#c49250] transition-colors leading-snug text-center">
                    {blog.title}
                  </h3>
                </Link>

                <div className="mt-auto">
                  <Link
                    href={blog.linkUrl}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0c5c6f] uppercase border-b-2 border-transparent hover:border-[#fbbc04] pb-1 transition-all"
                  >
                    {blog.linkText}
                    <FaArrowRight className="text-[#fbbc04]" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {data.viewAllText && data.viewAllLink && (
          <div className="text-center mt-14">
            <Link
              href={data.viewAllLink}
              className="inline-flex items-center gap-2 bg-[#0c5c6f] hover:bg-[#094857] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
            >
              {data.viewAllText}
              <FaArrowRight />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
