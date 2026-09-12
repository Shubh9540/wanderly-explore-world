import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TravelAdvantages } from '@/components/sections/TravelAdvantages';
import { Counter } from '@/components/sections/Counter';
import { TravelProcess } from '@/components/sections/TravelProcess';
import { WhatMakesUsDifferent } from '@/components/sections/WhatMakesUsDifferent';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function WhyChooseUsPage() {
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.WhyChooseUsBreadcrumb} />

      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.WanderlyWhyChooseUs1} />
      <TravelAdvantages data={sectionData.TravelAdvantages?.variants?.WanderlyTravelAdvantages1} />
      <Counter data={sectionData.Counter?.variants?.WanderlyCounter1} />
      <TravelProcess data={sectionData.TravelProcess?.variants?.WanderlyTravelProcess1} />
      <WhatMakesUsDifferent data={sectionData.WhatMakesUsDifferent?.variants?.WanderlyWhatMakesUsDifferent1} />
      <CTA data={sectionData.CTA?.variants?.WanderlyCTA1} />

      <Footer data={commonData?.Footer} />
    </main>
  );
}
