'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FAQPageData } from '@/types/templates.types';
import { FaPlus, FaMinus, FaHeadset, FaArrowRight } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const FAQPageContent = ({ data }: { data?: FAQPageData }) => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First item open by default

  if (!data) return null;

  return (
    <section className="pt-12 lg:pt-12 pb-4 lg:pb-8 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 relative">

        <SectionHeading 
          subtitle={data.subtitle} 
          title={data.title} 
          description={data.description} 
          showPlaneTrack={true} 
        />

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-8 pb-10">

          {/* Left Column: Images & Contact Box */}
          <div className="flex flex-col gap-6 relative w-full lg:w-[90%] mx-auto lg:mx-0">
            {/* Main Image */}
            <div className="relative h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-lg z-0">
              <Image src={data.mainImage} alt="Travel Destination" fill className="object-cover" />
            </div>

            {/* Still Have Questions Box */}
            <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row items-start gap-6 w-full relative z-0">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0 shadow-lg mt-1">
                <FaHeadset className="text-3xl" />
              </div>
              <div className="flex-1 text-left pr-4 sm:pr-24">
                <h4 className="text-[var(--color-primary)] font-bold text-xl mb-2">{data.contactBox.title}</h4>
                <p className="text-[var(--color-primary)]/80 text-[15px] font-medium leading-relaxed mb-6">
                  {data.contactBox.description}
                </p>
                <Link href={data.contactBox.buttonUrl}>
                  <button className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white font-bold py-3 px-8 rounded-full shadow-[0_8px_20px_-6px_rgba(248,161,20,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(248,161,20,0.6)] hover:-translate-y-1 transition-all text-[14px] inline-flex items-center justify-center gap-2">
                    {data.contactBox.buttonText} <FaArrowRight className="text-xs" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Overlapping Small Image */}
            <div className="absolute top-[calc(350px+12px)] md:top-[calc(450px+12px)] right-0 translate-x-[15%] md:translate-x-[25%] -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-[8px] border-white overflow-hidden shadow-2xl z-10 hidden sm:block">
              <Image src={data.smallImage} alt="Travel Detail" fill className="object-cover" />
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="flex flex-col gap-4">
            {data.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-[var(--color-primary)] shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors ${isOpen ? 'bg-[var(--color-primary)] text-white' : 'bg-white text-[var(--color-primary)]'}`}
                  >
                    <span className="font-bold text-[15px]">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                      {isOpen ? (
                        <FaMinus className="text-[var(--color-primary)] text-sm" />
                      ) : (
                        <FaPlus className="text-[var(--color-primary)] text-sm" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="bg-[#f4f9fa] px-6 py-6 text-gray-600 text-[14px] leading-relaxed border-t border-[var(--color-primary)]/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
