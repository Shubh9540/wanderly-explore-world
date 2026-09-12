import React from 'react';
import { WhyChooseUsData } from '@/types/templates.types';
import { FaSuitcaseRolling, FaHeadset, FaPlane, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { AirplaneTrackIcon } from '@/components/ui/AirplaneTrackIcon';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaSuitcaseRolling': return <FaSuitcaseRolling className="w-6 h-6 lg:w-8 lg:h-8" />;
    case 'FaHeadset': return <FaHeadset className="w-6 h-6 lg:w-8 lg:h-8" />;
    case 'FaPlane': return <FaPlane className="w-5 h-5" />;
    default: return null;
  }
};

export const WhyChooseUs = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section className="py-12 md:py-16 lg:py-12 bg-[var(--color-bg-light)] overflow-hidden relative">
      
      {/* Right side dot pattern */}
      <div className="absolute bottom-12 right-12 grid grid-cols-4 gap-3 z-0 opacity-20 hidden lg:grid">
        {[...Array(24)].map((_, i) => (
          <div key={`dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></div>
        ))}
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column - Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full max-w-[500px] mx-auto lg:mx-0 bg-gray-200">
              <Image
                src={data.image1}
                alt="Main Why Choose Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Overlay Content */}
              <div className="absolute top-0 left-0 p-6 md:p-8 w-full z-10">
                <div className="relative w-[150px] md:w-[180px] h-[50px] mb-6">
                  <Image
                    src={data.logo}
                    alt="Logo"
                    fill
                    className="object-contain object-left drop-shadow-md"
                  />
                </div>
                <h3 className="text-[var(--color-accent)] text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight max-w-[300px] drop-shadow-sm">
                  {data.overlayTitle}
                </h3>
                <p className="text-[var(--color-accent)] font-semibold text-sm md:text-base mt-2 max-w-[200px] drop-shadow-sm">
                  {data.overlaySubtitle}
                </p>
              </div>

              {/* Dots Pattern (Bottom Left) */}
              <div className="absolute bottom-6 left-6 grid grid-cols-4 gap-2 z-10">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                ))}
              </div>
            </div>

            {/* Overlapping Small Image */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 lg:-right-12 w-[60%] max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-gray-200 z-20">
              <Image
                src={data.image2}
                alt="Travelers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h4 className="text-transparent font-black text-4xl sm:text-5xl lg:text-6xl text-center tracking-wider w-full text-outline">
                  {data.overlayBottomText}
                </h4>
              </div>
            </div>

            {/* Plane Path Graphic */}
            <div className="absolute -bottom-16 -left-12 z-0 hidden sm:block">
              <AirplaneTrackIcon className="w-[150px] lg:w-[200px] text-[var(--color-primary)] opacity-50" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase">
                {data.subtitle}
              </span>
              <div className="flex-1 max-w-[100px] h-[2px] bg-[var(--color-accent)] relative">
                {data.subtitleSuffix === 'plane_path' && (
                  <div className="absolute -right-6 -top-2.5 text-[var(--color-primary)]">
                    <FaPlane className="w-5 h-5 -rotate-45" />
                  </div>
                )}
              </div>
            </div>

            <h2 className="text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              {data.titlePart1} <span className="text-[var(--color-accent)]">{data.titleHighlight}</span> {data.titlePart2}
            </h2>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-[2px] bg-[var(--color-primary)]"></div>
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
              <div className="w-6 h-[2px] bg-[var(--color-primary)]"></div>
            </div>

            <p className="text-[var(--color-text-light)] text-base lg:text-lg mb-10 leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {data.features.map((feature) => (
                <div key={feature.id} className="relative bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex items-start gap-4 overflow-hidden group">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                    {renderIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{feature.title}</h3>
                    <p className="text-[var(--color-text-light)] text-sm">{feature.description}</p>
                  </div>
                  {/* Folded Corner Effect */}
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[var(--color-primary)] rotate-45 transform origin-center"></div>
                </div>
              ))}
            </div>

            <Link href={data.buttonLink} className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-accent)] transition-colors duration-300">
              <FaHeadset className="w-5 h-5" />
              {data.buttonText}
              <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>

          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .text-outline {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
      `}} />
    </section>
  );
};
