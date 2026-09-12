import React from 'react';
import rawData from '@/data/templates.json';
import { WanderlyTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSlider } from '@/components/sections/HeroSlider';
import { DestinationGrid } from '@/components/sections/DestinationGrid';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Tours } from '@/components/sections/Tours';
import { Services } from '@/components/sections/Services';
import { Counter } from '@/components/sections/Counter';
import { Testimonials } from '@/components/sections/Testimonials';
import { Blogs } from '@/components/sections/Blogs';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/common/Footer';
export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: WanderlyTemplateData = rawData as WanderlyTemplateData;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      <HeroSlider data={sectionData.HeroSlider?.variants?.WanderlyHeroSlider1} />
      <DestinationGrid data={sectionData.DestinationGrid?.variants?.WanderlyDestinationGrid1} />
      <AboutUs data={sectionData.AboutUs?.variants?.WanderlyAboutUs1} />
      <Tours data={sectionData.Tours?.variants?.WanderlyTours1} />
      <Services data={sectionData.Services?.variants?.WanderlyServices1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.WanderlyWhyChooseUs1} />
      <Counter data={sectionData.Counter?.variants?.WanderlyCounter1} />
      <Testimonials data={sectionData.Testimonials?.variants?.WanderlyTestimonials1} />
      <Blogs data={sectionData.Blogs?.variants?.WanderlyBlogs1} />
      <CTA data={sectionData.CTA?.variants?.WanderlyCTA1} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
