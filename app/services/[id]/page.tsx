import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetail } from '@/components/sections/ServiceDetail';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/common/Footer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  // Find the matching service detail data
  const servicesList = sectionData.ServiceDetails?.variants?.WanderlyServiceDetails1?.services || [];
  
  // Note: the `id` from the URL is like "flight-booking"
  // but in templates.json, the data is stored in the list.
  // Wait, in my generator script I gave them id `srv-1`, `srv-2`, etc.
  // We need to match it. Actually, `flight-booking` etc was the base id in my script, 
  // but I set `id: srv-1`. However, the url in the Grid is `/services/flight-booking`.
  // Wait, let's map it based on the URL or title. 
  // We will find the service that matches the URL param `id`.
  // Since we don't have the exact slug in `WanderlyServiceDetail`, let's check `title` or just use a mapping.
  // Let's just find the service whose title converted to slug matches `id`.
  
  const targetService = servicesList.find(s => {
    // "Flight Booking" -> "flight-booking"
    const slug = s.title.replace('Hassle-Free ', '').replace(' Support For Your Dream Journey', '').toLowerCase().replace(/\s+/g, '-');
    return slug === id;
  });

  if (!targetService) {
    notFound();
  }

  const breadcrumbData = {
    title: targetService.title.replace('Hassle-Free ', '').replace(' Support For Your Dream Journey', ''),
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services' },
      { label: targetService.title.replace('Hassle-Free ', '').replace(' Support For Your Dream Journey', '') }
    ],
    bgImage: '/banner/bg-03.webp'
  };

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      <Breadcrumb data={breadcrumbData} />
      
      <ServiceDetail data={targetService} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
