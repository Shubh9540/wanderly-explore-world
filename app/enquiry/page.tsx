
import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { EnquiryContent } from '@/components/sections/EnquiryContent';
import { CTA } from '@/components/sections/CTA';

export const dynamic = 'force-dynamic';

export default function EnquiryPage() {
  const templateData = rawData as unknown as WanderlyTemplateData;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  const breadcrumbData = commonData?.breadcrumbs?.['Breadcrumb_enquiry'];

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      <EnquiryContent data={sectionData.EnquiryContent?.variants?.WanderlyEnquiry1} />
      <CTA data={sectionData.CTA?.variants?.WanderlyCTA1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
