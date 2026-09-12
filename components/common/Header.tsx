'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderData } from '@/types/templates.types';
import { FaChevronDown, FaArrowRight, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);

  if (!data) return null;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm w-full h-[80px] lg:h-[90px]">
      
      {/* Mobile Header Version */}
      <div className="w-full h-full px-4 flex lg:hidden items-center justify-between bg-primary-dark">
        <Link href="/" className="flex-shrink-0">
          {data.image && (
            <Image
              src={data.image}
              alt={data.imageAlt || 'Logo'}
              width={150}
              height={40}
              className="h-[40px] w-auto object-contain"
              priority
            />
          )}
        </Link>
        <button
          className="text-white text-2xl p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Header Version */}
      <div className="hidden lg:flex w-full h-full max-w-[1920px] mx-auto items-center justify-between">
        
        {/* Left: Logo with Mask */}
        <div 
          className="relative h-full flex items-center pr-8 xl:pr-16 pl-4 xl:pl-8 z-10 bg-no-repeat bg-right bg-[length:100%_100%] w-[280px] xl:w-[350px]"
          style={{ backgroundImage: `url('/main logo/mask.webp')` }}
        >
          <Link href="/" className="flex-shrink-0">
            {data.image && (
              <Image
                src={data.image}
                alt={data.imageAlt || 'Logo'}
                width={220}
                height={60}
                className="h-[50px] xl:h-[60px] w-auto object-contain"
                priority
              />
            )}
          </Link>
        </div>

        {/* Middle: Navigation */}
        <div className="flex-1 h-full flex items-center justify-center bg-transparent z-20">
          <nav className="flex items-center gap-6 xl:gap-8 h-full">
            {data.navLinks?.map((link) => (
              <div key={link.id} className="relative group h-full flex items-center">
                {link.subLinks ? (
                  <>
                    <div className="flex items-center gap-1.5 cursor-pointer text-primary-dark hover:text-accent font-bold text-[15px] xl:text-[16px] transition-colors py-8 select-none">
                      {link.label}
                      <FaChevronDown className="text-[11px] mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
                    </div>
                    {/* Dropdown Panel */}
                    <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-xl min-w-[220px] py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.url}
                          className="flex items-center gap-2 px-4 py-2.5 text-[14px] text-gray-600 font-medium hover:bg-accent/10 hover:text-primary-dark transition-colors"
                        >
                          <FaChevronRight className="text-accent text-[10px] flex-shrink-0" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.url || '#'}
                    className={`text-primary-dark hover:text-accent font-bold text-[15px] xl:text-[16px] transition-colors py-8 flex items-center justify-center relative ${
                      link.label === 'Home' ? 'text-primary-dark' : ''
                    }`}
                  >
                    {link.label}
                    {/* Active Underline for Home */}
                    {link.label === 'Home' && (
                      <span className="absolute bottom-[30px] left-0 w-full h-[2px] bg-primary-dark"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right: CTA Button with Mask */}
        <div 
          className="relative h-full flex items-center pl-8 xl:pl-16 pr-4 xl:pr-8 z-10 bg-no-repeat bg-left bg-[length:100%_100%] w-[220px] xl:w-[280px] justify-end"
          style={{ backgroundImage: `url('/main logo/maskright.webp')` }}
        >
          {data.contactButton && (
            <Link
              href={data.contactButton.url}
              className="bg-accent text-white font-bold text-[15px] xl:text-[16px] px-6 xl:px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#e6ae06] transition-colors shadow-sm whitespace-nowrap"
            >
              <span>{data.contactButton.text}</span>
              <FaArrowRight className="text-[14px] ml-1 font-light" />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden flex flex-col border-t border-gray-100 max-h-[80vh] overflow-y-auto z-50">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {data.navLinks?.map((link) => (
              <div key={link.id} className="border-b border-gray-50">
                {link.subLinks ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between text-primary-dark font-semibold text-[15px] py-3"
                      onClick={() => setOpenMobileSubMenu(openMobileSubMenu === link.id ? null : link.id)}
                    >
                      {link.label}
                      <FaChevronDown className={`text-[12px] transition-transform duration-200 ${openMobileSubMenu === link.id ? 'rotate-180' : ''}`} />
                    </button>
                    {openMobileSubMenu === link.id && (
                      <div className="flex flex-col pl-4 pb-2 gap-1">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.url}
                            className="flex items-center gap-2 py-2 text-[13px] text-gray-600 font-medium hover:text-primary-dark transition-colors"
                            onClick={() => { setIsMobileMenuOpen(false); setOpenMobileSubMenu(null); }}
                          >
                            <FaChevronRight className="text-accent text-[10px] flex-shrink-0" />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.url || '#'}
                    className="block text-primary-dark font-semibold text-[15px] py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="px-6 pb-6 pt-2">
            {data.contactButton && (
              <Link
                href={data.contactButton.url}
                className="bg-accent text-white font-bold text-[15px] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#e6ae06] transition-colors shadow-sm w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{data.contactButton.text}</span>
                <FaArrowRight className="text-[14px]" />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
