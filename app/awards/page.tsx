import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Awards } from '@/components/sections/Awards';
import { RecognizedBy } from '@/components/sections/RecognizedBy';
import { Commitment } from '@/components/sections/Commitment';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function AwardsPage() {
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.AwardsBreadcrumb} />

      <Awards data={sectionData.Awards?.variants?.WanderlyAwards1} />
      <RecognizedBy data={sectionData.RecognizedBy?.variants?.WanderlyRecognizedBy1} />
      <Commitment data={sectionData.Commitment?.variants?.WanderlyCommitment1} />

      <Footer data={commonData?.Footer} />
    </main>
  );
}
