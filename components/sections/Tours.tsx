import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ToursData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const Tours = ({ data }: { data?: ToursData }) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfaf6] py-16 lg:py-12">
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-[450px] lg:h-[500px] z-0">
        <Image
          src={data.bgImage}
          alt="Background"
          fill
          className="object-cover object-center"
        />
        {/* Teal overlay (using hex so Tailwind opacity works correctly) */}
        <div className="absolute inset-0 bg-[#086a7a]/85"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-24 relative z-10 flex flex-col items-center">

        {/* Heading Section */}
        <div className="mb-12 lg:mb-0 w-full text-white [&_h2]:text-white [&_p]:text-white/90">
          <SectionHeading
            subtitle={data.subtitle}
            title={`${data.titlePart1} ${data.titlePart2}`}
            description={data.description}
            showPlaneTrack={true}
          />
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full mb-12 items-start">
          {data.tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white p-3 lg:p-4 rounded-[28px] shadow-2xl flex flex-col group border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-44 lg:h-52 overflow-hidden rounded-[16px]">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="pt-4 pb-2 px-1 flex flex-col">
                <h4 className="text-[var(--color-primary)] font-bold text-base md:text-lg mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                  {tour.title}
                </h4>



                {/* Price */}
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-xl font-extrabold text-[var(--color-primary)]">
                    {tour.price}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {tour.priceSuffix}
                  </span>
                </div>

                <div className="w-full border-t border-dashed border-gray-300 mb-4"></div>

                {/* Book Now Button */}
                <div>
                  <Link
                    href={tour.buttonUrl}
                    className="w-full py-1.5 px-4 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
                  >
                    {tour.buttonText} <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center w-full mt-4 relative z-10">
          <Button href={data.viewAllButton.url} variant="decorated" className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)]">
            {data.viewAllButton.text}
          </Button>
        </div>

      </div>
    </section>
  );
};
