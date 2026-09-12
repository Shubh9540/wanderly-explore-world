'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TourDetailData } from '@/types/templates.types';
import { 
  FaMapMarkerAlt, FaClock, FaCheckCircle, FaTimesCircle, FaAngleRight, 
  FaAngleLeft, FaAngleDown, FaPlaneArrival, FaFlag, FaCalendarAlt, 
  FaGlobe, FaMountain, FaLanguage, FaRegCheckCircle, FaUsers, 
  FaShieldAlt, FaThumbsUp, FaHeadset, FaPhoneAlt, FaUser, FaEnvelope, 
  FaCalendarDay, FaUserFriends, FaMapPin
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRegCheckCircle': return <FaRegCheckCircle />;
    case 'FaUsers': return <FaUsers />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaThumbsUp': return <FaThumbsUp />;
    default: return <FaCheckCircle />;
  }
};

export const TourDetail = ({ data }: { data?: TourDetailData }) => {
  const [activeDay, setActiveDay] = useState<string | null>('day-1');

  if (!data) return null;

  return (
    <section className="py-8 lg:py-16 bg-[#fcfdfe]">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        
        {/* TOP GALLERY */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden">
            <Image src={data.mainImage} alt={data.title} fill className="object-cover" />
            <div className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-[#12424b] cursor-pointer hover:bg-white shadow-md transition-colors">
              <FaAngleLeft />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-[#12424b] cursor-pointer hover:bg-white shadow-md transition-colors">
              <FaAngleRight />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 md:gap-4">
            {data.topGallery.map((img, i) => (
              <div key={i} className="relative h-[60px] md:h-[100px] rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#12424b] transition-all">
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* MAIN TWO COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10 relative">
          
          {/* LEFT COLUMN - CONTENT */}
          <div className="flex-1 flex flex-col gap-10">
            
            {/* Header & Desc */}
            <div>
              <h1 className="text-3xl md:text-[42px] font-bold text-[#12424b] mb-4">{data.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-700 font-bold text-[15px] mb-6">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#09a3c8] text-lg" />
                  <span>{data.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#09a3c8] text-lg" />
                  <span>{data.duration}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {data.description.map((p, i) => (
                  <p key={i} className="text-gray-600 text-[15px] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-[#12424b] mb-4">## Highlights</h3>
              <div className="flex flex-col gap-4">
                {data.highlights.map((p, i) => (
                  <p key={i} className="text-gray-600 text-[15px] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            {/* Basic Information */}
            <div>
              <h3 className="text-2xl font-bold text-[#12424b] mb-4">## Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#09a3c8] text-2xl shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[#12424b] font-bold text-[14px]">Destination</h5>
                    <p className="text-gray-500 text-[13px]">{data.basicInfo.destination}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaFlag className="text-[#09a3c8] text-2xl shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[#12424b] font-bold text-[14px]">End Point</h5>
                    <p className="text-gray-500 text-[13px]">{data.basicInfo.endPoint}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaClock className="text-[#09a3c8] text-2xl shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[#12424b] font-bold text-[14px]">Duration</h5>
                    <p className="text-gray-500 text-[13px]">{data.basicInfo.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaCalendarAlt className="text-[#09a3c8] text-2xl shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[#12424b] font-bold text-[14px]">Tour Type</h5>
                    <p className="text-gray-500 text-[13px]">{data.basicInfo.tourType}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaPlaneArrival className="text-[#09a3c8] text-2xl shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[#12424b] font-bold text-[14px]">Start Point</h5>
                    <p className="text-gray-500 text-[13px]">{data.basicInfo.startPoint}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaCalendarDay className="text-[#09a3c8] text-2xl shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[#12424b] font-bold text-[14px]">Best Time To Visit</h5>
                    <p className="text-gray-500 text-[13px]">{data.basicInfo.bestTimeToVisit}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaGlobe className="text-[#09a3c8] text-2xl shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[#12424b] font-bold text-[14px]">Tour Category</h5>
                    <p className="text-gray-500 text-[13px]">{data.basicInfo.tourCategory}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaLanguage className="text-[#09a3c8] text-2xl shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[#12424b] font-bold text-[14px]">Language</h5>
                    <p className="text-gray-500 text-[13px]">{data.basicInfo.language}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaMountain className="text-[#09a3c8] text-2xl shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[#12424b] font-bold text-[14px]">Tour Difficulty</h5>
                    <p className="text-gray-500 text-[13px]">{data.basicInfo.tourDifficulty}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Included & Excluded */}
            <div>
              <h3 className="text-2xl font-bold text-[#12424b] mb-4">## Included and Excluded</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Included */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="bg-[#009b86] text-white font-bold px-5 py-3 flex items-center gap-2 text-[15px]">
                    <FaCheckCircle /> Included
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    {data.included.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#009b86] shrink-0 mt-1" />
                        <span className="text-gray-600 text-[14px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Excluded */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="bg-[#fbbc04] text-white font-bold px-5 py-3 flex items-center gap-2 text-[15px]">
                    <FaTimesCircle /> Excluded
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    {data.excluded.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <FaTimesCircle className="text-[#fbbc04] shrink-0 mt-1" />
                        <span className="text-gray-600 text-[14px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Tour Plan */}
            <div>
              <h3 className="text-2xl font-bold text-[#12424b] mb-4">### Tour Plan</h3>
              <div className="flex flex-col gap-3">
                {data.tourPlan.map((day) => {
                  const isOpen = activeDay === day.id;
                  return (
                    <div key={day.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                      <div 
                        className="flex items-center cursor-pointer select-none"
                        onClick={() => setActiveDay(isOpen ? null : day.id)}
                      >
                        <div className="bg-[#12424b] text-white font-bold w-[80px] shrink-0 py-4 text-center">
                          Day {day.dayNumber}
                        </div>
                        <div className="flex-1 px-4 py-3 flex items-center justify-between">
                          <div>
                            <h4 className="text-[#12424b] font-bold text-[15px]">{day.title}</h4>
                            {!isOpen && <p className="text-gray-500 text-[13px] line-clamp-1 mt-0.5">{day.description}</p>}
                          </div>
                          <FaAngleDown className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                      {isOpen && (
                        <div className="p-4 pl-[96px] text-gray-600 text-[14px] leading-relaxed border-t border-gray-100 bg-[#f9fbfc]">
                          {day.description}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-2xl font-bold text-[#12424b] mb-4">### Location</h3>
              <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-full md:w-1/2 relative h-[300px] rounded-xl overflow-hidden">
                  <Image src={data.mapImage} alt="Map" fill className="object-cover" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
                  {data.locations.map((loc) => (
                    <div key={loc.id} className="flex items-start gap-4">
                      <FaMapPin className="text-[#09a3c8] text-xl shrink-0 mt-1" />
                      <div>
                        <h4 className="text-[#12424b] font-bold text-[15px] mb-1">{loc.name}</h4>
                        <p className="text-gray-500 text-[13px] leading-relaxed">{loc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Gallery */}
            <div>
              <h3 className="text-2xl font-bold text-[#12424b] mb-4">Gallery</h3>
              <div className="grid grid-cols-5 gap-2 md:gap-4 relative">
                {data.bottomGallery.map((img, i) => (
                  <div key={i} className="relative h-[80px] md:h-[120px] rounded-lg overflow-hidden cursor-pointer">
                    <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                  </div>
                ))}
                <div className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#12424b] cursor-pointer shadow-md">
                  <FaAngleRight />
                </div>
              </div>
            </div>

          </div>


          {/* RIGHT SIDEBAR (STICKY) */}
          <div className="w-full lg:w-[380px] shrink-0 sticky top-24 h-fit flex flex-col gap-8 pb-10">
            
            {/* Form Box */}
            <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 md:p-8">
              <h3 className="text-[22px] font-bold text-[#12424b] mb-2">{data.sidebar.formTitle}</h3>
              <p className="text-gray-500 text-[13px] mb-6">{data.sidebar.formSubtitle}</p>

              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white focus-within:border-[#12424b] transition-colors">
                  <FaUser className="text-[#09a3c8] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] text-[#12424b] font-bold uppercase tracking-wider mb-0.5">Full Name</span>
                    <input type="text" placeholder="Enter your full name" className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 placeholder-gray-400" />
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white focus-within:border-[#12424b] transition-colors">
                  <FaEnvelope className="text-[#09a3c8] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] text-[#12424b] font-bold uppercase tracking-wider mb-0.5">Email Address</span>
                    <input type="email" placeholder="Enter your email" className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 placeholder-gray-400" />
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white focus-within:border-[#12424b] transition-colors">
                  <FaPhoneAlt className="text-[#09a3c8] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] text-[#12424b] font-bold uppercase tracking-wider mb-0.5">Phone Number</span>
                    <input type="tel" placeholder="Enter your phone number" className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 placeholder-gray-400" />
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white focus-within:border-[#12424b] transition-colors">
                  <FaCalendarAlt className="text-[#09a3c8] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] text-[#12424b] font-bold uppercase tracking-wider mb-0.5">Travel Date</span>
                    <input type="date" className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 placeholder-gray-400" />
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white focus-within:border-[#12424b] transition-colors">
                  <FaUserFriends className="text-[#09a3c8] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] text-[#12424b] font-bold uppercase tracking-wider mb-0.5">Number of Travelers</span>
                    <select className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 font-medium appearance-none">
                      <option value="">Select number of travelers</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4+">4+ Persons</option>
                    </select>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg px-4 py-3 bg-white focus-within:border-[#12424b] transition-colors">
                  <span className="text-[10px] text-[#12424b] font-bold uppercase tracking-wider mb-1 block">Message (Optional)</span>
                  <textarea rows={3} placeholder="Tell us about your requirements..." className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 placeholder-gray-400 resize-none"></textarea>
                </div>

                <button type="button" className="w-full bg-[#12424b] hover:bg-[#0d3138] text-white font-bold py-4 rounded-lg mt-2 transition-colors shadow-md">
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* Why Wanderly */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-[20px] font-bold text-[#12424b] mb-6">{data.sidebar.whyWanderlyTitle}</h3>
              <div className="flex flex-col gap-6">
                {data.sidebar.whyWanderlyFeatures.map((feat) => (
                  <div key={feat.id} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#eaf4f7] text-[#09a3c8] flex items-center justify-center text-xl shrink-0">
                      {renderIcon(feat.icon)}
                    </div>
                    <div>
                      <h4 className="text-[#12424b] font-bold text-[14px] mb-1">{feat.title}</h4>
                      <p className="text-gray-500 text-[13px] leading-relaxed pr-2">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Help Box */}
            <div className="bg-[#09a3c8] rounded-2xl p-6 md:p-8 text-center text-white flex flex-col items-center shadow-lg relative overflow-hidden">
              {/* Optional background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#12424b] opacity-10 rounded-full -ml-8 -mb-8 pointer-events-none"></div>
              
              <div className="flex items-center justify-center gap-3 mb-4 relative z-10">
                <FaHeadset className="text-4xl" />
              </div>
              <h4 className="font-bold text-[22px] mb-2 relative z-10">{data.sidebar.helpBox.title}</h4>
              <p className="text-white/80 text-[14px] leading-relaxed mb-4 relative z-10">
                {data.sidebar.helpBox.description}
              </p>
              <div className="font-bold text-[26px] text-[#fbbc04] mb-6 relative z-10 drop-shadow-sm">
                {data.sidebar.helpBox.phone}
              </div>
              <button className="w-full bg-white text-[#12424b] hover:bg-gray-100 font-bold py-3.5 rounded-lg transition-colors text-[15px] shadow-sm relative z-10">
                {data.sidebar.helpBox.buttonText}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
