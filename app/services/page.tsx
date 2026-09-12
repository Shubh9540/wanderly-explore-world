import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Services } from '@/components/sections/Services';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  const breadcrumbData = {
    title: 'Our Services',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Our Services' }
    ],
    bgImage: '/banner/bg-02.webp'
  };

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      <Breadcrumb data={breadcrumbData} />
      
      {/* Services Grid Section reused from Home */}
      <Services data={sectionData.Services?.variants?.WanderlyServices1} hideButton={true} />
      
      <CTA data={sectionData.CTA?.variants?.WanderlyCTA1} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
