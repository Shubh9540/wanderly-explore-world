import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServicesData } from '@/types/templates.types';
import { FaArrowRight, FaPlane, FaBuilding, FaMapMarkedAlt, FaBus, FaPassport, FaShieldAlt, FaUserTie, FaHeadset } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPlane': return <FaPlane />;
    case 'FaBuilding': return <FaBuilding />;
    case 'FaMapMarkedAlt': return <FaMapMarkedAlt />;
    case 'FaBus': return <FaBus />;
    case 'FaPassport': return <FaPassport />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaUserTie': return <FaUserTie />;
    case 'FaHeadset': return <FaHeadset />;
    default: return <FaPlane />;
  }
};

export const Services = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfaf6] py-12 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-24 relative z-10 flex flex-col items-center">
        
        {/* Heading Section */}
        <div className="mb-8 lg:mb-10 w-full">
          <SectionHeading 
            subtitle={data.subtitle}
            title={`${data.titlePart1} ${data.titlePart2}`.trim()}
            description={data.description}
            showPlaneTrack={true}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full mb-12 items-start">
          {data.services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-3 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col group border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative"
            >
              {/* Image & Icon Wrapper (overflow visible for the overlapping icon) */}
              <div className="relative w-full h-[130px] lg:h-[140px] mb-6">
                {/* Image Container with rounded corners */}
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Icon positioned exactly on the bottom edge of the image */}
                <div className="absolute -bottom-5 left-3 w-10 h-10 bg-[#086a7a] text-white rounded-full flex items-center justify-center shadow-md z-20 text-base border-2 border-white group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  {renderIcon(service.icon)}
                </div>
              </div>

              {/* Content Container */}
              <div className="px-2 pb-2 flex flex-col flex-grow">
                <h4 className="text-[var(--color-primary)] font-bold text-[16px] lg:text-[17px] mb-1.5 group-hover:text-[var(--color-accent)] transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-500 text-[13px] mb-4 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <Link 
                    href={service.url}
                    className="inline-flex items-center text-[#086a7a] hover:text-[var(--color-primary)] transition-colors duration-300"
                  >
                    <FaArrowRight className="text-xs" />
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
