import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TestimonialsPageContent } from '@/components/sections/TestimonialsPageContent';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function TestimonialsPage() {
  const templateData: WanderlyTemplateData = rawData as unknown as WanderlyTemplateData;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-[#fdfaf6]">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.TestimonialsBreadcrumb} />
      
      <TestimonialsPageContent data={sectionData.TestimonialsPage?.variants?.WanderlyTestimonialsPage1} />
      <CTA data={sectionData.CTA?.variants?.WanderlyCTA1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
