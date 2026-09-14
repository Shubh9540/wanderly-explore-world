import React from 'react';
import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CTA } from '@/components/sections/CTA';
import { PartnerContent } from '@/components/sections/PartnerContent';

export const metadata = {
  title: 'Partners - Wanderly Explore World',
  description: 'Our trusted partners in the travel industry.',
};

export default function PartnerPage() {
  const templateData = rawData as unknown as WanderlyTemplateData;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;
  const breadcrumbData = commonData?.breadcrumbs?.PartnerBreadcrumb;

  if (!sectionData) return <div>{commonData?.globalUI?.loading || 'Loading...'}</div>;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      <PartnerContent data={sectionData.Partner?.variants?.WanderlyPartner1} />
      
      <CTA data={sectionData.CTA?.variants?.WanderlyCTA1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
