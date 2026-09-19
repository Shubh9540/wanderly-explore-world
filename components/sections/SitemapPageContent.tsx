import React from 'react';
import Link from 'next/link';
import { SitemapData } from '@/types/templates.types';
import { FaHome, FaInfoCircle, FaUsers, FaBriefcase, FaMapMarkedAlt, FaGlobe, FaQuestionCircle, FaBalanceScale, FaAngleRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaInfoCircle': return <FaInfoCircle />;
    case 'FaUsers': return <FaUsers />;
    case 'FaBriefcase': return <FaBriefcase />;
    case 'FaMapMarkedAlt': return <FaMapMarkedAlt />;
    case 'FaGlobe': return <FaGlobe />;
    case 'FaQuestionCircle': return <FaQuestionCircle />;
    case 'FaBalanceScale': return <FaBalanceScale />;
    default: return <FaAngleRight />;
  }
};

export const SitemapPageContent = ({ data }: { data?: SitemapData }) => {
  if (!data) return null;

  // Split categories into rows of 5 for desktop layout
  const colsPerRow = 5;
  const rows = [];
  for (let i = 0; i < data.categories.length; i += colsPerRow) {
    rows.push(data.categories.slice(i, i + colsPerRow));
  }

  return (
    <section className="py-12 lg:py-20 bg-[var(--color-bg-alt)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-[var(--color-accent)] font-bold tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-[var(--color-accent)]"></span>
            {data.subtitle}
            <span className="w-8 h-[2px] bg-[var(--color-accent)]"></span>
          </h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6 capitalize leading-tight">
            {data.titlePart1} <span className="text-[var(--color-accent)]">{data.titleHighlight}</span> {data.titlePart2}
          </h2>
          {data.description && (
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {data.description}
            </p>
          )}
        </div>

        {/* Tree Layout Structure */}
        <div className="relative pt-6 md:pt-10 flex flex-col items-center">
          
          {/* Home Node (Root) */}
          <div className="relative z-10 flex flex-col items-center">
            <Link href="/" className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full py-4 px-12 shadow-[0_8px_20px_-6px_rgba(248,161,20,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(248,161,20,0.6)] flex items-center gap-3 hover:-translate-y-1 transition-all group text-white font-bold text-xl md:text-2xl relative z-20">
              <FaHome className="text-2xl md:text-3xl group-hover:text-[var(--color-primary)] transition-colors" />
              Home
            </Link>
          </div>

          {/* Rows Container */}
          <div className="w-full flex flex-col items-center relative mt-10 lg:mt-0">
            
            {/* Main Vertical Trunk from Home to bottom of the grid (Desktop Only) */}
            <div className="hidden lg:block absolute top-[-40px] bottom-0 left-1/2 -translate-x-1/2 w-0 z-0">
              <svg width="2" height="100%" className="overflow-visible">
                <line x1="0" y1="0" x2="0" y2="100%" stroke="var(--color-primary)" strokeWidth="2" />
              </svg>
            </div>

            {rows.map((rowCategories, rowIndex) => {
              const isFirstRow = rowIndex === 0;
              return (
                <div key={rowIndex} className={`w-full flex flex-wrap justify-center gap-6 relative z-10 ${!isFirstRow ? 'mt-12 lg:mt-24' : ''}`}>
                  
                  {rowCategories.map((category, index) => {
                    const isFirstInRow = index === 0;
                    const isLastInRow = index === rowCategories.length - 1;
                    const isOnlyItem = isFirstInRow && isLastInRow;

                    return (
                      <div key={category.id} className="relative flex flex-col pt-4 lg:pt-12 w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)]">
                        
                        {/* SVG Connectors for Desktop */}
                        <div className="hidden lg:block absolute top-0 left-0 h-12 z-0" style={{ width: 'calc(100% + 24px)' }}>
                          <svg width="100%" height="100%" className="overflow-visible">
                            {/* Horizontal connecting line spanning to next column */}
                            {!isOnlyItem && (
                              <line 
                                x1={isFirstInRow ? "50%" : "0"} 
                                y1="0" 
                                x2={isLastInRow ? "50%" : "100%"} 
                                y2="0" 
                                stroke="var(--color-primary)" 
                                strokeWidth="2" 
                              />
                            )}
                            
                            {/* Vertical drop down to the category icon */}
                            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="var(--color-primary)" strokeWidth="2" />
                            {/* Small circular dot at the connection point */}
                            <circle cx="50%" cy="100%" r="4" fill="var(--color-primary)" />
                            {/* Small circular dot at the top intersection */}
                            <circle cx="50%" cy="0" r="3" fill="var(--color-primary)" />
                          </svg>
                        </div>

                        {/* Icon Badge */}
                        <div className="absolute top-0 lg:top-[48px] left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-2 border-[var(--color-primary)] rounded-full flex items-center justify-center text-2xl text-[var(--color-primary)] shadow-md z-20">
                          {renderIcon(category.icon)}
                        </div>

                        {/* Card Content */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex-1 flex flex-col mt-8 lg:mt-12 hover:shadow-xl transition-shadow relative z-20">
                          <div className="bg-[var(--color-primary)] text-white text-center py-5 px-4 pt-10">
                            <h3 className="font-bold text-lg leading-tight">{category.title}</h3>
                          </div>
                          <div className="p-6 flex-1 bg-white">
                            <ul className="flex flex-col gap-4">
                              {category.links.map((link) => (
                                <li key={link.id}>
                                  <Link href={link.url} className="flex items-start gap-3 text-gray-600 hover:text-[var(--color-accent)] font-medium transition-colors group">
                                    <FaAngleRight className="text-[var(--color-accent)] text-sm mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};
