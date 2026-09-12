import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DestinationGridData } from '@/types/templates.types';
import { FaFlag, FaArrowRight } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const DestinationGrid = ({ data }: { data?: DestinationGridData }) => {
  if (!data || !data.destinations) return null;

  return (
    <section className="py-12 lg:py-12 bg-[var(--color-bg-alt)]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-24">

        {/* Header Section */}
        <SectionHeading
          subtitle={data.subtitle}
          title={data.title}
          description={data.description}
          showPlaneTrack={data.subtitleSuffix === 'plane_path'}
        />

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl p-3 flex items-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              {/* Left Image */}
              <div className="w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0 relative rounded-xl overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.city}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="pl-4 flex-1 flex flex-col justify-center relative">
                <h3 className="text-lg lg:text-xl font-bold text-[var(--color-primary)] mb-1">
                  {dest.city}
                </h3>
                {/* Orange underline */}
                <div className="w-8 h-[2px] bg-[var(--color-accent)] mb-3"></div>

                <div className="flex items-center text-sm text-[var(--color-text-light)] font-medium">
                  <FaFlag className="text-[var(--color-primary)] mr-2" />
                  {dest.tourCount}
                </div>

                {/* Arrow Button */}
                <Link
                  href={dest.url}
                  className="absolute right-0 bottom-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors"
                  aria-label={`View tours in ${dest.city}`}
                >
                  <FaArrowRight className="text-[10px] transform -rotate-45" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {data.viewAllButton && (
          <div className="mt-12 lg:mt-16">
            <Button href={data.viewAllButton.url} variant="decorated">
              {data.viewAllButton.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
