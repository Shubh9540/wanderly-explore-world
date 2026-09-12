'use client';

import React from 'react';
import Image from 'next/image';
import { WanderlyTeamMember } from '@/types/templates.types';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaFlag, FaUser, FaCog, FaBriefcase, FaTrophy, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaPlane } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaTwitter': return <FaTwitter />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return <FaGlobe />;
  }
};

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUser': return <FaUser />;
    case 'FaCog': return <FaCog />;
    case 'FaBriefcase': return <FaBriefcase />;
    case 'FaTrophy': return <FaTrophy />;
    case 'FaPaperPlane': return <FaPaperPlane />;
    default: return <FaTrophy />;
  }
};

export const TeamDetail = ({ data }: { data?: WanderlyTeamMember }) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-[#fcfdfe] relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        
        <div className="flex flex-col gap-16">
          
          {/* ================= TOP ROW ================= */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            
            {/* Top Left: Image Sidebar (Narrow) */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="bg-[#12424b] rounded-[30px] p-8 pb-6 flex flex-col items-center relative shadow-xl overflow-hidden">
                <div className="w-[260px] h-[260px] rounded-full border-[6px] border-[#fbbc04] overflow-hidden relative mb-12 shadow-inner bg-white z-10">
                  <Image src={data.image} alt={data.name} fill className="object-cover" />
                </div>

                <div className="bg-white rounded-[20px] w-full py-4 px-6 flex items-center justify-center gap-4 z-10 shadow-sm">
                  {data.socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#eaf4f3] text-[#12424b] flex items-center justify-center hover:bg-[#12424b] hover:text-white transition-colors text-[17px]"
                    >
                      {renderSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Right: Header + Quick Info (Wide) */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-[#fbbc04] tracking-wider uppercase">MEET OUR EXPERTS</span>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-[2px] bg-[#0971b8]"></div>
                    <FaPlane className="text-[#0971b8] text-xs rotate-45" />
                    <div className="w-6 h-[2px] bg-[#0971b8]"></div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-[#12424b] mb-2">{data.name}</h1>
                <h3 className="text-xl text-[#0971b8] font-semibold mb-6">{data.title}</h3>
                
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#fbbc04]"></div>
                  <div className="w-16 h-[2px] bg-gray-200"></div>
                </div>

                <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
                  {data.bio}
                </p>

                {/* Quick Info Cards */}
                <div className="bg-[#f4f9fb] rounded-xl py-6 px-4 md:px-8 flex flex-wrap md:flex-nowrap items-center justify-between gap-6 border border-[#edf3f6]">
                  {[
                    { icon: <FaCalendarAlt />, label: 'Experience', value: data.experience },
                    { icon: <FaMapMarkerAlt />, label: 'Specialization', value: data.specialization },
                    { icon: <FaGlobe />, label: 'Languages', value: data.languages },
                    { icon: <FaFlag />, label: 'Nationality', value: data.nationality }
                  ].map((info, i) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center text-center w-[40%] md:w-auto">
                        <div className="text-[#12424b] text-2xl mb-2 opacity-80">{info.icon}</div>
                        <span className="text-gray-500 text-[12px] font-medium mb-1">{info.label}</span>
                        <span className="text-[#12424b] text-[15px] font-bold">{info.value}</span>
                      </div>
                      {i !== 3 && (
                        <div className="hidden md:block w-[1px] h-12 bg-gray-200"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM ROW ================= */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            
            {/* Bottom Left: About + Skills + Experience (Wide) */}
            <div className="flex-1 flex flex-col gap-12">
              
              {/* About */}
              <div className="mt-2">
                <div className="flex items-center gap-3 mb-4">
                  <FaUser className="text-[#12424b] text-2xl" />
                  <h3 className="text-2xl font-bold text-[#12424b]">About {data.name.split(' ')[0]}</h3>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                  <div className="w-8 h-[2px] bg-[#0971b8]"></div>
                </div>
                <p className="text-gray-600 text-[14px] leading-relaxed pb-8 border-b border-dashed border-gray-200">
                  {data.about}
                </p>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaCog className="text-[#12424b] text-2xl" />
                  <h3 className="text-2xl font-bold text-[#12424b]">Skills & Expertise</h3>
                </div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                  <div className="w-8 h-[2px] bg-[#0971b8]"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  {data.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2 text-[12px] font-semibold text-gray-600">
                        <span>{skill.name}</span>
                        <span className="text-[#0971b8]">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#0971b8] h-full rounded-full" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <FaBriefcase className="text-[#12424b] text-2xl" />
                  <h3 className="text-2xl font-bold text-[#12424b]">Experience</h3>
                </div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                  <div className="w-8 h-[2px] bg-[#0971b8]"></div>
                </div>
                
                <div className="flex flex-col gap-8 relative border-l-2 border-gray-200 ml-3 pl-8">
                  {data.experienceTimeline.map((exp, i) => (
                    <div key={i} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-[#12424b] border-[3px] border-white shadow-sm"></div>
                      
                      <h4 className="text-[#0971b8] font-bold text-[15px] mb-1">{exp.role}</h4>
                      <div className="text-[13px] text-gray-500 font-medium mb-2">
                        <span className="text-gray-700">{exp.company}</span> | {exp.duration}
                      </div>
                      <p className="text-gray-600 text-[13px] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Right: Achievements + Contact (Narrow) */}
            <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-12">

            {/* Achievements */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#edf3f6] shadow-[0_4px_25px_rgb(0,0,0,0.02)]">
              <div className="flex items-center gap-3 mb-4">
                <FaTrophy className="text-[#12424b] text-2xl" />
                <h3 className="text-2xl font-bold text-[#12424b]">Achievements</h3>
              </div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                <div className="w-8 h-[2px] bg-[#0971b8]"></div>
              </div>
              
              <div className="flex flex-col gap-8">
                {data.achievements.map((ach, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-14 h-14 rounded-full bg-[#fffbf2] text-[#fbbc04] flex items-center justify-center shrink-0 text-2xl border border-[#ffe9be]">
                      {renderIcon(ach.icon)}
                    </div>
                    <div>
                      <h4 className="text-[#0971b8] font-bold text-[16px] mb-2">{ach.title}</h4>
                      <p className="text-gray-600 text-[14px] leading-relaxed">{ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#f4f9fb] rounded-3xl p-6 md:p-8 border border-[#edf3f6]">
              <div className="flex items-center gap-3 mb-4">
                <FaPaperPlane className="text-[#12424b] text-2xl" />
                <h3 className="text-2xl font-bold text-[#12424b]">Contact {data.name.split(' ')[0]}</h3>
              </div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-[2px] bg-[#fbbc04]"></div>
                <div className="w-8 h-[2px] bg-[#0971b8]"></div>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#12424b] text-white flex items-center justify-center shrink-0 text-lg">
                    <FaPhoneAlt />
                  </div>
                  <span className="text-gray-700 font-medium">{data.contact.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#12424b] text-white flex items-center justify-center shrink-0 text-lg">
                    <FaEnvelope />
                  </div>
                  <span className="text-gray-700 font-medium">{data.contact.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#12424b] text-white flex items-center justify-center shrink-0 text-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <span className="text-gray-700 font-medium">{data.contact.location}</span>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// need to add FaPlane import
