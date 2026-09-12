'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TourPackagesPageData } from '@/types/templates.types';
import { 
  FaStar, FaStarHalfAlt, FaRegStar, FaAngleRight, FaAngleLeft,
  FaUsers, FaHeart, FaUsersCog, FaUserFriends, FaMountain, FaCrown,
  FaWallet, FaPlaceOfWorship, FaPaw, FaCalendarAlt, FaHeadset, FaPhoneAlt
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaHeart': return <FaHeart />;
    case 'FaUsersCog': return <FaUsersCog />;
    case 'FaUserFriends': return <FaUserFriends />;
    case 'FaMountain': return <FaMountain />;
    case 'FaCrown': return <FaCrown />;
    case 'FaWallet': return <FaWallet />;
    case 'FaPlaceOfWorship': return <FaPlaceOfWorship />;
    case 'FaPaw': return <FaPaw />;
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    default: return <FaAngleRight />;
  }
};

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-[#fbbc04]" />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-[#fbbc04]" />);
  }
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-[#fbbc04]" />);
  }
  return stars;
};

export const TourPackagesList = ({ data }: { data?: TourPackagesPageData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!data) return null;

  const totalPages = Math.ceil(data.tours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTours = data.tours.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-[#fcfdfe]">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
            
            {/* Categories List */}
            <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#12424b] text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image src="/icons/suitcase.svg" width={20} height={20} alt="icon" className="brightness-0 invert" />
                  <h3 className="font-bold text-[16px]">{data.sidebar.title}</h3>
                </div>
                <FaAngleRight className="transform rotate-90" />
              </div>
              <div className="flex flex-col">
                {data.sidebar.categories.map((cat, i) => (
                  <div key={cat.id} className={`flex items-center gap-3 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${i === 0 ? 'text-[#09a3c8]' : 'text-gray-600'}`}>
                    <span className="text-xl">{renderIcon(cat.icon)}</span>
                    <span className={`text-[14px] ${i === 0 ? 'font-bold' : 'font-medium'}`}>{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Box */}
            <div className="bg-[#eaf4f7] rounded-[16px] p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#12424b] text-white flex items-center justify-center text-2xl mb-4">
                <FaHeadset />
              </div>
              <h4 className="text-[#12424b] font-bold text-[18px] mb-2">{data.sidebar.helpBox.title}</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                {data.sidebar.helpBox.description}
              </p>
              <div className="text-[#09a3c8] font-bold text-[20px] mb-6">
                {data.sidebar.helpBox.phone}
              </div>
              <Link href={data.sidebar.helpBox.buttonUrl} className="w-full">
                <button className="w-full bg-transparent border-2 border-[#12424b] text-[#12424b] hover:bg-[#12424b] hover:text-white font-bold py-3 rounded-full transition-colors text-[14px] flex items-center justify-center gap-2">
                  {data.sidebar.helpBox.buttonText}
                  <FaAngleRight />
                </button>
              </Link>
            </div>
            
          </div>

          {/* RIGHT CONTENT (GRID & PAGINATION) */}
          <div className="flex-1 flex flex-col">
            
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentTours.map((tour) => (
                <div key={tour.id} className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden group">
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image src={tour.image} alt={tour.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="text-[#12424b] font-bold text-[18px] leading-snug">{tour.title}</h3>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[13px]">
                        {renderStars(tour.rating)}
                      </div>
                      <span className="text-gray-500 text-[12px]">{tour.ratingText}</span>
                    </div>

                    <div className="flex items-end gap-1 mt-2 mb-4">
                      <span className="text-[#09a3c8] font-bold text-[22px]">{tour.price}</span>
                      <span className="text-gray-500 text-[13px] mb-1">{tour.priceSuffix}</span>
                    </div>

                    <Link href={tour.url}>
                      <button className="w-full border border-[#12424b] text-[#12424b] hover:bg-[#12424b] hover:text-white font-bold py-2.5 rounded-full transition-colors text-[14px] flex items-center justify-center gap-2">
                        Book Now
                        <FaAngleRight />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#12424b] hover:text-[#12424b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaAngleLeft />
                </button>
                
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNumber = i + 1;
                  const isActive = currentPage === pageNumber;
                  // Show limited pages (first 5, and last if too many) - Simplified for this dummy
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-10 h-10 rounded border flex items-center justify-center text-[14px] transition-colors ${isActive ? 'bg-[#12424b] border-[#12424b] text-white font-bold' : 'border-gray-200 text-gray-600 hover:border-[#12424b] hover:text-[#12424b]'}`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#12424b] hover:text-[#12424b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaAngleRight />
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
