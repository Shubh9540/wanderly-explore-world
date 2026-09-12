import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TeamDetail } from '@/components/sections/TeamDetail';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/common/Footer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  const teamMembers = sectionData?.TeamGrid?.variants?.WanderlyTeamGrid1?.members || [];
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData?.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData?.Header?.variants?.WanderlyHeader1} />
      
      <Breadcrumb data={{
        title: "Team Details",
        bgImage: "/banner/bg-11.webp",
        paths: [
          { label: "Home", url: "/" },
          { label: "Team", url: "/team" },
          { label: member.name }
        ]
      }} />

      <TeamDetail data={member} />
      <CTA data={sectionData?.CTA?.variants?.WanderlyCTA1} />

      <Footer data={commonData?.Footer} />
    </main>
  );
}
