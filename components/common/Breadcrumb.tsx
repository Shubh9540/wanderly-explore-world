'use client';

import React from 'react';
import Link from 'next/link';
import { BreadcrumbData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section 
      className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${data.bgImage || '/banner/bg-02.webp'})` }}
    >
      {/* Background Overlay just in case the image is too bright */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Box */}
      <div className="relative z-10 bg-black/35 backdrop-blur-sm px-10 md:px-16 py-6 md:py-8 rounded-2xl flex flex-col items-center justify-center shadow-2xl border border-white/10 mt-8">
        
        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white mb-4 lg:mb-6 tracking-wide">
          {data.title}
        </h1>
        
        <nav className="flex items-center gap-2 text-white/90 text-sm md:text-base font-medium">
          {data.paths.map((path, index) => (
            <React.Fragment key={index}>
              {path.url ? (
                <Link href={path.url} className="hover:text-[#fbbc04] transition-colors">
                  {path.label}
                </Link>
              ) : (
                <span className="text-white">{path.label}</span>
              )}
              
              {index < data.paths.length - 1 && (
                <FaArrowRight className="text-[10px] md:text-xs mx-1 font-light opacity-80" />
              )}
            </React.Fragment>
          ))}
        </nav>
        
      </div>
    </section>
  );
};
