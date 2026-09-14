import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WanderlyServiceDetail } from '@/types/templates.types';
import {
  FaUserTie, FaFileAlt, FaClock, FaCheckCircle,
  FaComments, FaPercentage, FaBolt, FaHeadset,
  FaFileSignature, FaClipboardList, FaSearch, FaCheckDouble,
  FaLightbulb, FaFileContract, FaPenNib, FaSearchLocation, FaThumbsUp,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaIdCard, FaAngleRight,
  FaPlane, FaBuilding, FaMapMarkedAlt, FaBus, FaPassport, FaShieldAlt
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUserTie': return <FaUserTie />;
    case 'FaFileAlt': return <FaFileAlt />;
    case 'FaClock': return <FaClock />;
    case 'FaCheckCircle': return <FaCheckCircle />;
    case 'FaComments': return <FaComments />;
    case 'FaPercentage': return <FaPercentage />;
    case 'FaBolt': return <FaBolt />;
    case 'FaHeadset': return <FaHeadset />;
    case 'FaFileSignature': return <FaFileSignature />;
    case 'FaClipboardList': return <FaClipboardList />;
    case 'FaSearch': return <FaSearch />;
    case 'FaCheckDouble': return <FaCheckDouble />;
    case 'FaLightbulb': return <FaLightbulb />;
    case 'FaFileContract': return <FaFileContract />;
    case 'FaPenNib': return <FaPenNib />;
    case 'FaSearchLocation': return <FaSearchLocation />;
    case 'FaThumbsUp': return <FaThumbsUp />;
    case 'FaPlane': return <FaPlane />;
    case 'FaBuilding': return <FaBuilding />;
    case 'FaMapMarkedAlt': return <FaMapMarkedAlt />;
    case 'FaBus': return <FaBus />;
    case 'FaPassport': return <FaPassport />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    default: return <FaCheckCircle />;
  }
};

export const ServiceDetail = ({ data }: { data?: WanderlyServiceDetail }) => {
  if (!data) return null;

  // Split title to highlight the last two words in light blue
  const words = data.title.split(' ');
  const lastTwo = words.splice(-2).join(' ');
  const firstPart = words.join(' ');

  // Hardcoded related services for now
  const relatedServices = [
    { title: 'Flight Booking', desc: 'Book domestic and international flights', icon: 'FaPlane', url: '/services/flight-booking', img: '/service/1.jpg' },
    { title: 'Hotel Booking', desc: 'Comfortable stays worldwide', icon: 'FaBuilding', url: '/services/hotel-booking', img: '/service/2.jpg' },
    { title: 'Tour Packages', desc: 'Curated packages for every traveler', icon: 'FaMapMarkedAlt', url: '/services/tour-packages', img: '/service/3.jpg' },
    { title: 'Transport Services', desc: 'Airport transfers and local transport', icon: 'FaBus', url: '/services/transport-services', img: '/service/4.jpg' },
  ];

  const Divider = () => (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-[2px] bg-[#0971b8]"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-[#fbbc04]"></div>
      <div className="w-8 h-[2px] bg-[#0971b8]"></div>
    </div>
  );

  return (
    <section className="pt-8 lg:pt-12 pb-4 lg:pb-8 bg-[#fcfdfe] relative">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">

        {/* ================= ROW 1 (TOP HEADER & IMAGE) ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-start relative z-0">

          {/* Left Column (Header Text) */}
          <div className="w-full lg:w-[45%] flex flex-col gap-10 pb-8 mt-4 lg:mt-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaPlane className="text-[#09a3c8] text-2xl transform -rotate-45" />
                <h2 className="text-[#fbbc04] text-3xl md:text-4xl font-serif italic">{data.tagline}</h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#12424b] leading-[1.2] mb-8">
                {firstPart} <span className="text-[#09a3c8]">{lastTwo}</span>
              </h1>

              <Divider />

              <p className="text-gray-600 text-[18px] md:text-[20px] leading-[1.8] max-w-2xl">
                {data.description}
              </p>
            </div>
          </div>

          {/* Right Column (Large Image Only) */}
          <div className="w-full lg:w-[55%] shrink-0">
            <div className="relative h-[300px] lg:h-[480px] w-full rounded-[24px] overflow-hidden shadow-md">
              <Image src={data.sidebar.image} alt="Service Image" fill className="object-cover" />
            </div>
          </div>
        </div>


        {/* ================= ROW 2 (POINTS/WHY CHOOSE US & FORM/HELP BOX) ================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-start relative z-10">

          {/* LEFT CONTENT (Main) */}
          <div className="flex-1 flex flex-col gap-10 lg:gap-12 pb-6">

            {/* Top Features Grid (Points) */}
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-8 lg:mt-0">
              {data.topFeatures.map((feat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-[60px] h-[60px] rounded-[16px] bg-[#eaf4f7] text-[#12424b] flex items-center justify-center text-2xl mb-4 shadow-sm border border-[#d6eef5]">
                    {renderIcon(feat.icon)}
                  </div>
                  <h4 className="text-[#12424b] font-bold text-[14px] mb-1.5">{feat.title}</h4>
                  <p className="text-gray-500 text-[12px] leading-relaxed px-1">{feat.description}</p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-[28px] font-bold text-[#12424b] mb-2">{data.whyChooseUs.title}</h3>
              <Divider />
              <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-2xl">
                {data.whyChooseUs.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                {data.whyChooseUs.features.map((feat, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#eaf4f7] text-[#12424b] flex items-center justify-center text-xl shrink-0">
                      {renderIcon(feat.icon)}
                    </div>
                    <div>
                      <h4 className="text-[#12424b] font-bold text-[15px] mb-1.5">{feat.title}</h4>
                      <p className="text-gray-500 text-[13px] leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Timeline */}
            <div>
              <h3 className="text-[28px] font-bold text-[#12424b] mb-2">{data.process.title}</h3>
              <Divider />

              <div className="flex flex-col md:flex-row gap-4 relative mt-4">
                {data.process.steps.map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex-1 flex flex-col items-center text-center relative z-10">
                      <div className="w-[70px] h-[70px] rounded-full bg-[#eef6fa] text-[#12424b] flex items-center justify-center text-3xl mb-5 relative">
                        {renderIcon(step.icon)}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#12424b] text-white text-[11px] font-bold flex items-center justify-center border-2 border-white">
                          0{i + 1}
                        </div>
                      </div>
                      <h4 className="text-[#12424b] font-bold text-[15px] mb-2">{step.title}</h4>
                      <p className="text-gray-500 text-[13px] leading-relaxed px-1">{step.description}</p>
                    </div>
                    {/* Dashed Arrow */}
                    {i < data.process.steps.length - 1 && (
                      <div className="hidden md:flex items-center justify-center relative mt-8 text-[#fbbc04]">
                        <div className="border-t-[2px] border-dashed border-[#fbbc04] w-6 lg:w-10"></div>
                        <FaAngleRight className="text-lg -ml-2" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-[28px] font-bold text-[#12424b] mb-2">{data.included.title}</h3>
              <Divider />

              <div className="flex flex-col md:flex-row gap-4 relative mt-4">
                {data.included.items.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="flex-1 flex flex-col items-center text-center relative z-10">
                      <div className="w-[70px] h-[70px] rounded-full bg-[#eef6fa] text-[#12424b] flex items-center justify-center text-3xl mb-5">
                        {renderIcon(item.icon)}
                      </div>
                      <h4 className="text-[#12424b] font-bold text-[15px] mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-[13px] leading-relaxed px-1">{item.description}</p>
                    </div>
                    {/* Dashed Arrow */}
                    {i < data.included.items.length - 1 && (
                      <div className="hidden md:flex items-center justify-center relative mt-8 text-[#fbbc04]">
                        <div className="border-t-[2px] border-dashed border-[#fbbc04] w-6 lg:w-10"></div>
                        <FaAngleRight className="text-lg -ml-2" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR (Reverted to a smaller width, not 500px, to prevent overflow) */}
          <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-8 lg:mr-6">

            {/* Form Box */}
            <div className="bg-white rounded-[24px] shadow-[0_15px_40px_rgb(0,0,0,0.1)] border border-gray-100 p-6 md:p-8 lg:-mt-36">
              <h3 className="text-2xl font-bold text-[#12424b] mb-2">{data.sidebar.form.title}</h3>
              <p className="text-gray-500 text-[13px] mb-6">{data.sidebar.form.subtitle}</p>

              <form className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white hover:border-[#12424b] transition-colors">
                  <FaUserTie className="text-[#12424b] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] uppercase text-[#12424b] font-bold tracking-wider mb-0.5">Full Name</span>
                    <input type="text" placeholder="Enter your full name" className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 font-medium placeholder-gray-400" />
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white hover:border-[#12424b] transition-colors">
                  <FaEnvelope className="text-[#12424b] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] uppercase text-[#12424b] font-bold tracking-wider mb-0.5">Email Address</span>
                    <input type="email" placeholder="Enter your email" className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 font-medium placeholder-gray-400" />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white hover:border-[#12424b] transition-colors">
                  <FaPhoneAlt className="text-[#12424b] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] uppercase text-[#12424b] font-bold tracking-wider mb-0.5">Phone Number</span>
                    <input type="tel" placeholder="Enter your phone number" className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 font-medium placeholder-gray-400" />
                  </div>
                </div>

                {/* Destination */}
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white hover:border-[#12424b] transition-colors">
                  <FaGlobe className="text-[#12424b] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] uppercase text-[#12424b] font-bold tracking-wider mb-0.5">Destination Country</span>
                    <select className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 font-medium appearance-none">
                      <option value="">Select country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                    </select>
                  </div>
                </div>

                {/* Visa Type */}
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white hover:border-[#12424b] transition-colors">
                  <FaIdCard className="text-[#12424b] shrink-0" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] uppercase text-[#12424b] font-bold tracking-wider mb-0.5">Visa Type</span>
                    <select className="bg-transparent border-none outline-none text-[14px] text-gray-800 w-full p-0 font-medium appearance-none">
                      <option value="">Select visa type</option>
                      <option value="tourist">Tourist Visa</option>
                      <option value="business">Business Visa</option>
                      <option value="student">Student Visa</option>
                    </select>
                  </div>
                </div>

                <button type="button" className="w-full bg-[#fbbc04] hover:bg-[#e0a800] text-white font-bold py-4 rounded-lg mt-3 transition-colors shadow-md">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Help Box */}
            <div className="bg-[#eef6fa] rounded-[24px] p-6 md:p-8 flex flex-col gap-6">
              <div className="flex items-start gap-5">
                <div className="w-[70px] h-[70px] rounded-full bg-[#12424b] text-white flex items-center justify-center text-3xl shrink-0 shadow-md">
                  <FaHeadset />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[22px] font-bold text-[#12424b] mb-1.5">{data.sidebar.helpBox.title}</h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed mb-3 pr-2">
                    {data.sidebar.helpBox.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-[#09a3c8] font-bold text-xl">
                    <FaPhoneAlt />
                    <span>{data.sidebar.helpBox.phone}</span>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="w-full block text-center bg-transparent border-[2px] border-[#12424b] text-[#12424b] hover:bg-[#12424b] hover:text-white font-bold py-3.5 rounded-[12px] transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Related Services */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#edf3f6] shadow-sm">
              <h3 className="text-[22px] font-bold text-[#12424b] mb-6">{data.sidebar.relatedServicesTitle}</h3>
              <div className="flex flex-col gap-5">
                {relatedServices.map((srv, i) => (
                  <Link href={srv.url} key={i} className="group">
                    <div className="flex items-center gap-4 group-hover:bg-[#fcfdfe] transition-all rounded-lg">
                      <div className="w-[85px] h-[65px] rounded-lg overflow-hidden relative shrink-0 shadow-sm">
                        <Image src={srv.img} alt={srv.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-[#12424b] font-bold text-[15px] group-hover:text-[#09a3c8] transition-colors">{srv.title}</h4>
                        <p className="text-gray-500 text-[13px] mt-1 line-clamp-1">{srv.desc}</p>
                      </div>
                      <FaAngleRight className="text-[#09a3c8] text-lg ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
