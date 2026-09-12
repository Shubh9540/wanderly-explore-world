import React from 'react';
import { TopBarData } from '@/types/templates.types';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaRegClock': return <FaRegClock />;
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaTwitter': return <FaTwitter />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    default: return null;
  }
};

const getSocialBgClass = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return 'bg-[#1877F2]';
    case 'FaInstagram': return 'bg-gradient-to-tr from-[#FD1D1D] to-[#C13584]'; // Simplified instagram gradient
    case 'FaTwitter': return 'bg-[#1DA1F2]';
    case 'FaLinkedinIn': return 'bg-[#0A66C2]';
    case 'FaYoutube': return 'bg-[#FF0000]';
    default: return 'bg-primary';
  }
};

export const TopBar = ({ data }: { data?: TopBarData }) => {
  if (!data) return null;

  return (
    <div className="hidden lg:flex bg-white text-text py-3 px-4 md:px-8 border-b border-gray-100">
      <div className="max-w-[1250px] mx-auto w-full flex items-center justify-between">
        
        {/* Left Side: Address & Working Hours */}
        <div className="flex items-center gap-4">
          {data.address && (
            <div className="flex items-center gap-2 text-[14px] font-medium text-text">
              <span className="text-primary-dark text-[16px]">{renderIcon(data.addressIcon || 'FaMapMarkerAlt')}</span>
              <span>{data.address}</span>
            </div>
          )}

          {data.address && data.workingHours && (
            <div className="w-[1px] h-[16px] bg-gray-300"></div>
          )}

          {data.workingHours && (
            <div className="flex items-center gap-2 text-[14px] font-medium text-text">
              <span className="text-primary-dark text-[16px]">{renderIcon(data.workingHoursIcon || 'FaRegClock')}</span>
              <span>{data.workingHours}</span>
            </div>
          )}
        </div>

        {/* Right Side: Follow Us & Social Links */}
        <div className="flex items-center">
          {data.socialTitle && <span className="mr-3 text-[14px] font-medium text-text">{data.socialTitle}</span>}
          {data.socialLinks && data.socialLinks.length > 0 && (
            <div className="flex items-center gap-2">
              {data.socialLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.url} 
                  className={`w-[28px] h-[28px] rounded-full text-white flex items-center justify-center hover:opacity-80 transition-opacity text-[13px] ${getSocialBgClass(link.icon)}`}
                  aria-label={link.id}
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
