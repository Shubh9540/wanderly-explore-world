import React from 'react';
import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { LegalContent } from '@/components/sections/LegalContent';
import { CTA } from '@/components/sections/CTA';

export const metadata = {
  title: 'Privacy Policy - Wanderly Explore World',
  description: 'Read our Privacy Policy to learn more about our practices and policies.',
};

export default function PrivacyPolicyPage() {
  const templateData = rawData as unknown as WanderlyTemplateData;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;
  const breadcrumbData = commonData?.breadcrumbs?.['Breadcrumb_privacy-policy'];

  if (!sectionData) return <div>{commonData?.globalUI?.loading || 'Loading...'}</div>;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      <LegalContent data={sectionData.LegalContent?.variants?.WanderlyPrivacyPolicy} />
      
      <CTA data={sectionData.CTA?.variants?.WanderlyCTA1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
