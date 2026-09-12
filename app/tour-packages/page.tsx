import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TourPackagesList } from '@/components/sections/TourPackagesList';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function TourPackagesPage() {
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  const breadcrumbData = {
    title: 'Tour Packages',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Tour Packages' }
    ],
    bgImage: '/banner/bg-01.jpg'
  };

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      <Breadcrumb data={breadcrumbData} />
      
      <TourPackagesList data={sectionData.TourPackagesPage?.variants?.WanderlyTourPackagesPage1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
