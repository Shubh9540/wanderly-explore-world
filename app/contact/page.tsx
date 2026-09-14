import React from 'react';
import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactPageContent } from '@/components/sections/ContactPageContent';
import { ContactAssistance } from '@/components/sections/ContactAssistance';

export const metadata = {
  title: 'Contact Us - Wanderly Explore World',
  description: 'Get in touch with us for any travel inquiries or support.',
};

export default function ContactPage() {
  const templateData = rawData as unknown as WanderlyTemplateData;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;
  const breadcrumbData = commonData?.breadcrumbs?.ContactBreadcrumb;

  if (!sectionData) return <div>{commonData?.globalUI?.loading || 'Loading...'}</div>;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      <ContactPageContent data={sectionData.ContactForm?.variants?.WanderlyContactForm1} />
      
      <ContactAssistance data={sectionData.ContactAssistance?.variants?.WanderlyContactAssistance1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
