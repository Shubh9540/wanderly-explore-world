'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterData } from '@/types/templates.types';
import { 
  FaPhoneAlt, 
  FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, 
  FaChevronRight, FaMapMarkerAlt, FaEnvelope
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return <FaChevronRight />;
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  if (!data) return null;

  // We want 6 images for the Instagram grid. 
  // If we don't have 6, we'll duplicate the recent posts to fill the grid.
  const instagramImages = [];
  if (data.middleSection.recentPosts && data.middleSection.recentPosts.length > 0) {
    for (let i = 0; i < 6; i++) {
      instagramImages.push(data.middleSection.recentPosts[i % data.middleSection.recentPosts.length]);
    }
  }

  return (
    <footer className="w-full bg-[#12424b] text-white">
      
      {/* Main Footer Section */}
      <div className="pt-16 pb-12">
        <div className="max-w-[1250px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Column 1: About/Logo */}
            <div className="flex flex-col">
              <Link href="/" className="mb-6 inline-block w-[200px]">
                <Image 
                  src={data.middleSection.logo || "/main logo/header-logo.png"} 
                  alt="Wanderly Logo" 
                  width={200} 
                  height={60} 
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 pr-4">
                {data.middleSection.description}
              </p>
              <div className="flex gap-3">
                {data.middleSection.socialLinks.map((social) => (
                  <a 
                    key={social.id} 
                    href={social.url}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#fbbc04] hover:text-black transition-all duration-300 text-sm"
                  >
                    {renderIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col lg:pl-8">
              <h3 className="text-white font-semibold text-xl mb-6">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-4">
                {data.middleSection.exploreLinks.slice(0, 5).map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="flex items-center gap-3 text-gray-300 hover:text-[#fbbc04] transition-colors group text-sm font-medium">
                      <FaChevronRight className="text-[#fbbc04] text-[10px]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Get In Touch */}
            <div className="flex flex-col lg:pl-4">
              <h3 className="text-white font-semibold text-xl mb-6">
                Get In Touch
              </h3>
              <ul className="flex flex-col gap-6">
                {/* Phone */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fbbc04] flex items-center justify-center text-black flex-shrink-0">
                    <FaPhoneAlt className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    {data.middleSection.phoneLines.map((line, i) => (
                      <a key={i} href={`tel:${line.replace(/\s+/g, '')}`} className="text-gray-300 text-sm hover:text-[#fbbc04] transition-colors font-medium">
                        {line}
                      </a>
                    ))}
                  </div>
                </li>
                
                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fbbc04] flex items-center justify-center text-black flex-shrink-0">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a href={`mailto:${data.middleSection.email}`} className="text-gray-300 text-sm hover:text-[#fbbc04] transition-colors font-medium">
                      {data.middleSection.email}
                    </a>
                    {/* Hardcoding second email to match design, ideally would come from JSON if it was an array */}
                    <a href="mailto:enquiry@wanderly.com" className="text-gray-300 text-sm hover:text-[#fbbc04] transition-colors font-medium">
                      enquiry@wanderly.com
                    </a>
                  </div>
                </li>

                {/* Address */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fbbc04] flex items-center justify-center text-black flex-shrink-0">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium max-w-[200px] mt-0.5">
                    {data.middleSection.address}
                  </p>
                </li>
              </ul>
            </div>

            {/* Column 4: Instagram Post */}
            <div className="flex flex-col lg:pl-8">
              <h3 className="text-white font-semibold text-xl mb-6">
                Instagram Post
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {instagramImages.map((post, index) => (
                  <Link key={`${post.id}-${index}`} href={post.url} className="block relative aspect-square rounded-md overflow-hidden group">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    {/* Instagram Overlay on hover */}
                    <div className="absolute inset-0 bg-[#12424b]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <FaInstagram className="text-white text-xl" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0e353c] py-5 border-t border-white/5">
        <div className="max-w-[1250px] mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <div className="text-gray-300 text-sm font-medium text-center md:text-left">
            {data.bottomSection.copyright}
          </div>

          {/* Payment */}
          <div className="flex items-center gap-4">
            <span className="text-white text-sm font-semibold">We Accept</span>
            <div className="flex items-center gap-2">
               {/* Since paymentImage in JSON is a single image, we'll use that if it exists. 
                   Otherwise we can fallback to standard icons. The design shows multiple cards. */}
               <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
                  <Image src="/main logo/fopay.webp" alt="Payments" width={140} height={24} className="h-5 w-auto object-contain" />
               </div>
            </div>
          </div>

        </div>
      </div>
      
    </footer>
  );
};
