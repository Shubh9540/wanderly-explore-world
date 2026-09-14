import React from 'react';
import { LegalData } from '@/types/templates.types';
import { AirplaneTrackIcon } from '@/components/ui/AirplaneTrackIcon';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight, FaUserCheck, FaCog, FaUsers, FaShieldAlt, FaUserCog, FaInfoCircle } from 'react-icons/fa';

export const LegalContent = ({ data }: { data?: LegalData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaUserCheck': return <FaUserCheck />;
      case 'FaCog': return <FaCog />;
      case 'FaUsers': return <FaUsers />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaUserCog': return <FaUserCog />;
      default: return <FaInfoCircle />;
    }
  };

  return (
    <section className="py-12 lg:py-12 bg-[#f8fafa] relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left Column - Legal Content (Scrolling) */}
          <div className="w-full lg:w-[65%] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

            {/* Title & Intro */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#051024] mb-4">
              {data.title}
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {data.introText}
            </p>

            {/* Standard Divider */}
            <div className="flex items-center gap-2 mb-8 max-w-[200px]">
              <div className="flex-1 h-[2px] bg-[#0c5c6f]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fbbc04]"></div>
              <div className="flex-1 h-[2px] bg-[#0c5c6f]"></div>
            </div>

            {/* Legal Sections List */}
            <div className="space-y-6">
              {data.sections.map((section, index) => (
                <div key={section.id} className="flex gap-5 group">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#f4f9fa] flex items-center justify-center text-[#0c5c6f] text-xl flex-shrink-0 group-hover:bg-[#0c5c6f] group-hover:text-white transition-colors duration-300 shadow-sm border border-gray-100">
                    {renderIcon(section.icon)}
                  </div>
                  {/* Content */}
                  <div className="pb-6 border-b border-gray-100 w-full group-last:border-none group-last:pb-0">
                    <h3 className="text-[#051024] font-bold text-base mb-1">{section.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Effective Date (Optional) */}
            {data.effectiveDate && (
              <div className="mt-8 bg-[#f4f9fa] rounded-xl p-5 border border-gray-100 flex gap-4 items-start">
                <div className="text-[#0c5c6f] text-xl mt-0.5">
                  <FaInfoCircle />
                </div>
                <div>
                  <h4 className="font-bold text-[#051024] text-sm mb-1">Effective Date: {data.effectiveDate}</h4>
                  <p className="text-gray-500 text-xs">Thank you for trusting Wanderly with your travel plans.</p>
                </div>
              </div>
            )}

          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="w-full lg:w-[35%] sticky top-24">
            <div className="bg-[#093544] rounded-2xl overflow-hidden shadow-xl relative min-h-[500px] flex flex-col justify-between">

              {/* Background Image overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={data.sidebar.image}
                  alt="Sidebar Background"
                  fill
                  className="object-cover opacity-30 mix-blend-overlay"
                />
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#093544] via-[#093544]/80 to-[#093544]"></div>
              </div>

              {/* Sidebar Header */}
              <div className="relative z-10 p-8 pb-4">
                <h3 className="text-3xl font-bold text-white leading-tight mb-2">
                  {data.sidebar.title} <br />
                  {data.sidebar.subtitle}
                </h3>

                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
                </div>

                <p className="text-white/80 text-sm leading-relaxed">
                  {data.sidebar.description}
                </p>
              </div>

              {/* Sidebar Contact Info */}
              <div className="relative z-10 px-8 py-4 flex-grow flex flex-col gap-6 justify-center">

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#fbbc04] flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <FaRegEnvelope />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">Email Us</h4>
                    <a href={`mailto:${data.sidebar.email}`} className="text-white/80 text-xs hover:text-white transition-colors">{data.sidebar.email}</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#fbbc04] flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">Call Us</h4>
                    <a href={`tel:${data.sidebar.phone}`} className="text-white/80 text-xs hover:text-white transition-colors">{data.sidebar.phone}</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#fbbc04] flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">Office Address</h4>
                    <p className="text-white/80 text-xs leading-snug pr-2">{data.sidebar.address}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Button */}
              <div className="relative z-10 p-8 pt-4">
                <Link
                  href={data.sidebar.buttonLink}
                  className="w-full bg-[#fbbc04] hover:bg-[#e0a800] text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg text-sm"
                >
                  {data.sidebar.buttonText} <FaArrowRight />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
