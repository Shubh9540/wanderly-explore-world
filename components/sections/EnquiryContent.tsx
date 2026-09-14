'use client';

import React from 'react';
import { EnquiryData } from '@/types/templates.types';
import { FaUser, FaSuitcaseRolling, FaFileAlt, FaCheckCircle, FaTags, FaHeadset, FaShieldAlt, FaThumbsUp, FaRegPaperPlane } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/SectionHeading';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaTags': return <FaTags />;
    case 'FaHeadset': return <FaHeadset />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaThumbsUp': return <FaThumbsUp />;
    default: return <FaTags />;
  }
};

export const EnquiryContent = ({ data }: { data?: EnquiryData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-16 bg-[#f4f7f6] relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">

        {/* Header Title Section */}
        <SectionHeading
          subtitle={data.subtitle}
          title={data.title}
          description={data.description}
          showPlaneTrack={true}
        />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column - Enquiry Form */}
          <div className="w-full lg:w-[65%] bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* 01 Personal Information */}
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                   <div className="w-8 h-8 rounded-full bg-[#0a4860] text-white flex items-center justify-center text-sm shadow-sm">
                     <FaUser />
                   </div>
                   <h3 className="font-bold text-[#051024] text-base">01 Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter your full name" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="Enter your email address" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Phone Number <span className="text-red-500">*</span></label>
                    <div className="flex w-full">
                       <select className="px-2 py-2.5 rounded-l-lg border border-gray-200 border-r-0 focus:outline-none text-sm bg-gray-50/50 min-w-[70px]">
                         <option>🇮🇳 +91</option>
                         <option>🇺🇸 +1</option>
                       </select>
                       <input type="tel" placeholder="Enter your phone number" className="w-full px-3 py-2.5 rounded-r-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Alternate Number</label>
                    <input type="tel" placeholder="Enter alternate number (optional)" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50" />
                  </div>
                </div>
              </div>

              {/* 02 Tour Preferences */}
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                   <div className="w-8 h-8 rounded-full bg-[#3582ce] text-white flex items-center justify-center text-sm shadow-sm">
                     <FaSuitcaseRolling />
                   </div>
                   <h3 className="font-bold text-[#051024] text-base">02 Tour Preferences</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Destination Type <span className="text-red-500">*</span></label>
                    <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50 appearance-none">
                      <option value="">Select destination type</option>
                      <option value="domestic">Domestic</option>
                      <option value="international">International</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Destination <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter destination name" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Tour Type <span className="text-red-500">*</span></label>
                    <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50 appearance-none">
                      <option value="">Select tour type</option>
                      <option value="honeymoon">Honeymoon</option>
                      <option value="family">Family</option>
                      <option value="adventure">Adventure</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Preferred Travel Date <span className="text-red-500">*</span></label>
                    <input type="date" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50 text-gray-500" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Duration <span className="text-red-500">*</span></label>
                    <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50 appearance-none">
                      <option value="">Select duration</option>
                      <option value="3-5">3 - 5 Days</option>
                      <option value="5-7">5 - 7 Days</option>
                      <option value="7+">7+ Days</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Number of Travelers <span className="text-red-500">*</span></label>
                    <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50 appearance-none">
                      <option value="">Select number of travelers</option>
                      <option value="1-2">1 - 2</option>
                      <option value="3-5">3 - 5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 03 Additional Information */}
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                   <div className="w-8 h-8 rounded-full bg-[#3582ce] text-white flex items-center justify-center text-sm shadow-sm">
                     <FaFileAlt />
                   </div>
                   <h3 className="font-bold text-[#051024] text-base">03 Additional Information</h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">Any Specific Requirements?</label>
                    <textarea placeholder="Tell us about your preferences, special requests, budget, etc." rows={3} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50 resize-none"></textarea>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#051024]">How did you hear about us?</label>
                    <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0c5c6f] text-sm bg-gray-50/50 appearance-none">
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend / Family</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <button type="submit" className="w-full bg-[#fbbc04] hover:bg-[#e0a800] text-[#051024] font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg shadow-md">
                  <FaRegPaperPlane className="text-xl" /> Enquiry Now
                </button>
                <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                  🔒 Your information is safe with us. We never share your details.
                </p>
              </div>

            </form>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6 sticky top-24">
            
            {/* Why Travel With Us Card */}
            <div className="bg-[#f4f7f6] rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-extrabold text-[#051024] text-lg mb-6">{data.whyTravelWithUsTitle}</h3>
              
              <div className="flex flex-col gap-5">
                {data.sidebarItems.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#3582ce] text-white flex items-center justify-center flex-shrink-0 text-lg mt-0.5 shadow-sm">
                      {renderIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#051024] text-sm mb-0.5">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-snug">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-[#093544] rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-xl relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3582ce]/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-center gap-3 mb-4 relative z-10">
                <FaHeadset className="text-4xl text-white opacity-90" />
                <h3 className="font-bold text-white text-xl">{data.helpBox.title}</h3>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                {data.helpBox.description}
              </p>
              
              <Link href="/contact" className="text-[#fbbc04] text-2xl font-black mb-6 hover:text-[#ffd659] transition-colors relative z-10 tracking-wide">
                {data.helpBox.phone}
              </Link>
              
              <Link href="/contact" className="w-full block text-center bg-white hover:bg-gray-100 text-[#051024] font-bold py-3.5 rounded-lg transition-colors text-sm shadow-md relative z-10">
                {data.helpBox.buttonText}
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
