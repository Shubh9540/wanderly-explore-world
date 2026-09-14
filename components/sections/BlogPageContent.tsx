'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPageData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaRegCalendarAlt, FaRegClock, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const BlogPageContent = ({ data }: { data?: BlogPageData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  if (!data || !data.blogs) return null;

  const totalPages = Math.ceil(data.blogs.length / postsPerPage);
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-12 lg:py-20 bg-[#fdfaf6]">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        
        {/* Header using global SectionHeading */}
        <SectionHeading 
          subtitle={data.subtitle}
          title={data.title}
          description={data.description}
          showPlaneTrack={true}
        />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {currentPosts.map((blog) => (
            <div key={blog.id} className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              {/* Image & Icon Section */}
              <div className="relative w-full">
                {/* Image Container with Overflow Hidden */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                </div>
                
                {/* Overlapping Icon */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[var(--color-primary)] border-4 border-white text-[var(--color-accent)] flex items-center justify-center z-10">
                  <FaRegCalendarAlt className="text-lg" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-12 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4 tracking-wide uppercase">
                  <span className="flex items-center gap-1.5"><FaRegCalendarAlt className="text-[var(--color-accent)]" /> {blog.date}</span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1.5"><FaRegClock className="text-[var(--color-accent)]" /> {blog.category}</span>
                </div>
                
                <h3 className="text-xl font-extrabold text-[var(--color-primary)] mb-4 leading-tight group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                  <Link href={blog.linkUrl}>{blog.title}</Link>
                </h3>
                
                <div className="mt-auto">
                  <Link href={blog.linkUrl} className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm hover:text-[var(--color-accent)] transition-colors">
                    {blog.linkText} <FaArrowRight className="text-[var(--color-accent)] text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[var(--color-primary)]"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-sm transition-colors ${
                  currentPage === i + 1 
                    ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white' 
                    : 'border-gray-200 text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[var(--color-primary)]"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
};
