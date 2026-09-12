import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbData } from '@/types/templates.types';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section className="relative w-full h-[200px] sm:h-[240px] lg:h-[280px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#283685]/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1250px] mx-auto w-full px-4 md:px-6">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
          {data.title}
        </h1>

        {/* Breadcrumb Pill */}
        <div className="inline-flex items-center bg-[#1C2A5E]/80 rounded-full px-5 py-2.5 gap-2 text-sm">
          {data.paths.map((path, idx) => (
            <React.Fragment key={idx}>
              {path.url ? (
                <Link href={path.url} className="text-[#FFC107] font-medium hover:text-white transition-colors">
                  {path.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{path.label}</span>
              )}
              {idx < data.paths.length - 1 && (
                <span className="text-white/60 mx-1">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
