import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { Counter } from '@/components/sections/Counter';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.AboutBreadcrumb} />

      <AboutUs data={sectionData.AboutUs?.variants?.WanderlyAboutUs1} hideButton={true} />
      <Counter data={sectionData.Counter?.variants?.WanderlyCounter1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.WanderlyWhyChooseUs1} />
      <Testimonials data={sectionData.Testimonials?.variants?.WanderlyTestimonials1} />
      <CTA data={sectionData.CTA?.variants?.WanderlyCTA1} />

      <Footer data={commonData?.Footer} />
    </main>
  );
}
