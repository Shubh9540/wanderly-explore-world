import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaCompass, FaPlane } from 'react-icons/fa';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Page Not Found - Wanderly',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  const templateData: WanderlyTemplateData = rawData as WanderlyTemplateData;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="flex flex-col min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />

      <section className="relative flex-grow flex items-center justify-center py-24 min-h-[600px] bg-[#051024] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner/bg-16.webp"
            alt="404 Background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#051024]/90"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1250px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">

          {/* Left Side: 404 Visual */}
          <div className="relative flex items-center justify-center font-black text-white text-[120px] sm:text-[160px] md:text-[200px] leading-none tracking-tight">

            {/* Plane and Dotted Line Graphic */}
            <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-32 h-32 md:w-48 md:h-48">
              <svg className="w-full h-full text-white/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
                <path d="M10 80 Q 20 20 50 50 T 90 20" />
              </svg>
              <FaPlane className="absolute top-[15%] right-[5%] text-[#fbbc04] text-3xl md:text-5xl transform rotate-[30deg] z-10 drop-shadow-lg" />
            </div>

            <span className="drop-shadow-2xl">4</span>
            <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-8 border-white mx-3 relative shadow-2xl flex-shrink-0">
              <Image src="/banner/bg-02.webp" alt="Lost" fill className="object-cover" />
            </div>
            <span className="drop-shadow-2xl">4</span>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col text-center lg:text-left text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
              {commonData?.globalUI?.notFound?.title} <span className="text-[#fbbc04]">{commonData?.globalUI?.notFound?.subtitle}</span>
            </h1>

            {/* Divider */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="w-12 h-[2px] bg-white"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#fbbc04] shadow-[0_0_8px_rgba(251,188,4,0.6)]"></div>
              <div className="w-12 h-[2px] bg-white"></div>
            </div>

            <p
              className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: commonData?.globalUI?.notFound?.description || '' }}
            ></p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href={commonData?.globalUI?.notFound?.homeButtonUrl || "/"}
                className="bg-[#fbbc04] hover:bg-[#e0a800] text-[#051024] px-7 py-3.5 rounded-lg font-bold flex items-center justify-center gap-2.5 transition-colors duration-300 w-full sm:w-auto shadow-lg text-sm md:text-base"
              >
                <FaHome className="text-lg" /> {commonData?.globalUI?.notFound?.homeButtonText}
              </Link>
              <Link
                href={commonData?.globalUI?.notFound?.exploreButtonUrl || "/tour-packages"}
                className="bg-transparent hover:bg-white/10 border border-white text-white px-7 py-3.5 rounded-lg font-bold flex items-center justify-center gap-2.5 transition-colors duration-300 w-full sm:w-auto text-sm md:text-base"
              >
                <FaCompass className="text-lg" /> {commonData?.globalUI?.notFound?.exploreButtonText}
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer data={commonData?.Footer} />
    </main>
  );
}
