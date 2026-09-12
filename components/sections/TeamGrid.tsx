'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TeamGridData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const TeamGrid = ({ data }: { data?: TeamGridData }) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        
        <SectionHeading 
          subtitle={data.subtitle}
          title={data.title}
          description={data.description}
        />

        {/* Team Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16">
            {data.members.map((member, index) => (
              <Link href={`/team/${member.id}`} key={member.id} className="block group">
                <div 
                  className="relative mt-20 transition-transform duration-300 group-hover:-translate-y-2 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  
                  {/* Dark Teal Background Card */}
                  <div className="bg-[#12424b] rounded-[20px] pt-[110px] pb-6 px-4 flex flex-col items-center shadow-lg w-full">
                    
                    {/* Overflowing Image at the Top */}
                    <div className="absolute -top-[75px] left-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-full border-[6px] border-[#fbbc04] overflow-hidden shadow-xl bg-white">
                      <Image src={member.image} alt={member.name} fill className="object-cover" />
                    </div>

                    {/* Light Blue Name Card at Bottom */}
                    <div className="bg-[#f2f8fb] w-full rounded-[14px] py-4 px-2 text-center mt-4">
                      <h3 className="text-[#12424b] font-bold text-[19px] mb-1">{member.name}</h3>
                      <p className="text-gray-600 text-[14px] font-medium">{member.title}</p>
                    </div>

                  </div>
                </div>
              </Link>
            ))}
        </div>

      </div>
    </section>
  );
};
