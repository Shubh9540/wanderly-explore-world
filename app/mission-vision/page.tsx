import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { MissionVision } from '@/components/sections/MissionVision';
import { Counter } from '@/components/sections/Counter';
import { WhyWeExist } from '@/components/sections/WhyWeExist';
import { CoreValues } from '@/components/sections/CoreValues';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function MissionVisionPage() {
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.MissionVisionBreadcrumb} />

      <MissionVision data={sectionData.MissionVision?.variants?.WanderlyMissionVision1} />
      <Counter data={sectionData.Counter?.variants?.WanderlyCounter1} />
      <WhyWeExist data={sectionData.WhyWeExist?.variants?.WanderlyWhyWeExist1} />
      <CoreValues data={sectionData.CoreValues?.variants?.WanderlyCoreValues1} />

      <Footer data={commonData?.Footer} />
    </main>
  );
}
