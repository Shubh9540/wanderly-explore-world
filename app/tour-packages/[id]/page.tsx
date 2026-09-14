import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TourDetail } from '@/components/sections/TourDetail';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function TourPackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  // We are using the dummy data for all IDs as requested
  const tourDetailData = sectionData.TourDetail?.variants?.WanderlyTourDetail1;

  if (!tourDetailData) return <div>Data not found</div>;

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.TourPackageDetailBreadcrumb} />
      
      <TourDetail data={tourDetailData} />
      
      <CTA data={sectionData.CTA?.variants?.WanderlyCTA1} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
