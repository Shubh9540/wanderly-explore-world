'use client';

import React from 'react';
import { ContactFormData } from '@/types/templates.types';
import { AirplaneTrackIcon } from '@/components/ui/AirplaneTrackIcon';
import Image from 'next/image';
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaArrowRight, FaPlane } from 'react-icons/fa';

export const ContactPageContent = ({ data }: { data?: ContactFormData }) => {
  if (!data) return null;

  return (
    <section className="pt-16 lg:pt-12 pb-12 bg-white relative overflow-hidden">

      {/* Background Decorator / Watermark Waves - mimicking the left side cyan wave graphic */}
      <div className="absolute left-0 bottom-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M0,500 C150,400 250,600 500,450 L500,800 L0,800 Z" fill="#0c5c6f" />
          <path d="M0,600 C200,450 300,700 500,550 L500,800 L0,800 Z" fill="#0c5c6f" />
        </svg>
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10">

        {/* Top Split Section - 40/60 approx */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">

          {/* Left Column (Text & Icon) ~ 40% */}
          <div className="w-full lg:w-2/5 pt-8">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[#0c5c6f] font-bold text-sm tracking-wider uppercase">
                {data.subtitle}
              </h4>
              <div className="flex items-center gap-2">
                <div className="w-12 h-[2px] bg-[#fbbc04]"></div>
                <FaPlane className="text-[#0c5c6f] transform -rotate-45" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#051024] mb-6">
              {data.title}
            </h2>

            {/* Standard Divider */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-[2px] bg-[#0c5c6f]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fbbc04]"></div>
              <div className="w-10 h-[2px] bg-[#0c5c6f]"></div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-sm mb-12">
              {data.description}
            </p>

            {/* Large Plane Track SVG */}
            <div className="w-64 h-32 text-[#0c5c6f] opacity-80 hidden md:block">
              <AirplaneTrackIcon className="w-full h-full" />
            </div>
          </div>

          {/* Right Column (Form Card) ~ 60% */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-gray-100">

              <h3 className="text-3xl font-bold text-[#0c5c6f] mb-4">
                {data.formTitle}
              </h3>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
                <div className="w-8 h-[2px] bg-[#e5e7eb]"></div>
              </div>

              <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">
                {data.formSubtitle}
              </p>

              {/* Form Grid */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0c5c6f]">Full Name</label>
                  <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] bg-gray-50/50" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0c5c6f]">Email Address</label>
                  <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] bg-gray-50/50" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0c5c6f]">Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] bg-gray-50/50" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0c5c6f]">Subject</label>
                  <input type="text" placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] bg-gray-50/50" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-[#0c5c6f]">Message</label>
                  <textarea placeholder="Type your message here..." rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] bg-gray-50/50 resize-none"></textarea>
                </div>
                <div className="md:col-span-2 mt-2">
                  <button type="submit" className="w-full bg-[#fbbc04] hover:bg-[#e0a800] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg">
                    Send Message <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Office Info Card */}
        <div className="w-full bg-[#093544] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">

          {/* Left Image Section */}
          <div className="w-full md:w-[45%] relative h-64 md:h-auto min-h-[350px]">

            <Image
              src={data.officeInfo.image}
              alt="Office Location"
              fill
              className="object-cover"
            />

            {/* Curved overlay mimicking design */}
            <div className="absolute top-0 bottom-0 right-0 w-16 hidden md:block">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#093544] fill-current">
                <path d="M100,0 L0,0 C100,50 100,50 0,100 L100,100 Z" />
              </svg>
              {/* Optional White Border curve */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 right-0 w-full h-full text-white fill-none stroke-current" strokeWidth="3">
                <path d="M0,0 C100,50 100,50 0,100" />
              </svg>
            </div>

            {/* Overlay Text on Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#093544] via-[#093544]/80 to-transparent z-0 flex flex-col justify-center p-8 md:p-10">
              <div className="mb-3">
                <FaMapMarkerAlt className="text-[#fbbc04] text-4xl" />
                {/* Small dots path below marker to mimic design */}
                <svg width="60" height="20" viewBox="0 0 60 20" className="mt-1 opacity-70">
                  <path d="M 5 5 Q 15 15, 30 10 T 55 10" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2,2" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3 relative z-10">{data.officeInfo.title}</h3>
              <div className="flex items-center gap-2 mb-4 relative z-10">
                <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
                <div className="w-8 h-[2px] bg-[#3a7587]"></div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed max-w-[250px] relative z-10">
                {data.officeInfo.description}
              </p>
            </div>
          </div>

          {/* Right Info Section - Highly Compact */}
          <div className="w-full md:w-[55%] py-8 px-6 md:px-10 flex flex-col justify-center relative z-20">

            <div className="flex flex-col gap-5">

              {/* Email */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white relative flex-shrink-0">
                  <FaRegEnvelope className="text-lg" />
                  {/* Yellow half circle accent */}
                  <svg className="absolute inset-0 w-full h-full transform -rotate-45" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#fbbc04" strokeWidth="4" strokeDasharray="100 200" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">Email Us</h4>
                  <a href={`mailto:${data.officeInfo.email}`} className="text-white/80 text-sm hover:text-white transition-colors">{data.officeInfo.email}</a>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 border-dashed border-t border-white/20 bg-transparent"></div>

              {/* Call */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white relative flex-shrink-0">
                  <FaPhoneAlt className="text-lg" />
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#fbbc04" strokeWidth="4" strokeDasharray="120 200" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">Call Us</h4>
                  <a href={`tel:${data.officeInfo.phone}`} className="text-white/80 text-sm hover:text-white transition-colors">{data.officeInfo.phone}</a>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 border-dashed border-t border-white/20 bg-transparent"></div>

              {/* Address */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white relative flex-shrink-0">
                  <FaMapMarkerAlt className="text-lg" />
                  <svg className="absolute inset-0 w-full h-full transform -rotate-[135deg]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#fbbc04" strokeWidth="4" strokeDasharray="140 200" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">Office Address</h4>
                  <p className="text-white/80 text-sm leading-snug pr-2">{data.officeInfo.address}</p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 border-dashed border-t border-white/20 bg-transparent"></div>

              {/* Business Hours */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white relative flex-shrink-0">
                  <FaRegClock className="text-lg" />
                  <svg className="absolute inset-0 w-full h-full transform rotate-180" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#fbbc04" strokeWidth="4" strokeDasharray="160 200" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">Business Hours</h4>
                  <p className="text-white/80 text-sm whitespace-pre-line leading-snug">{data.officeInfo.hours}</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
