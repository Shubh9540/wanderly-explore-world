import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { DestinationsContent } from '@/components/sections/DestinationsContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function DestinationsPage() {
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.DestinationsBreadcrumb} />
      
      <DestinationsContent data={sectionData.DestinationsPage?.variants?.WanderlyDestinationsPage1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
