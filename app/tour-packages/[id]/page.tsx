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
  const baseTourDetailData = sectionData.TourDetail?.variants?.WanderlyTourDetail1;
  const destinationsPageData = sectionData.DestinationsPage?.variants?.WanderlyDestinationsPage1;

  if (!baseTourDetailData || !destinationsPageData) return <div>Data not found</div>;

  // Format ID to Title Case (e.g. "delhi" -> "Delhi Tour Package")
  const formattedName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Determine if it is domestic or international, and grab its image
  const domesticItems = destinationsPageData.domestic.items;
  const intlItems = destinationsPageData.international.items;
  
  const domesticMatch = domesticItems.find(item => item.id === id);
  const intlMatch = intlItems.find(item => item.id === id);
  
  const currentItem = domesticMatch || intlMatch;
  const isDomestic = !!domesticMatch;
  
  // Choose images pool based on category
  const imagePool = isDomestic ? domesticItems.map(d => d.image) : intlItems.map(d => d.image);
  
  const mainImage = currentItem ? currentItem.image : baseTourDetailData.mainImage;
  const topGallery = imagePool.slice(0, 4);
  const bottomGallery = imagePool;
  
  // Helper to replace generic Greece terms with the destination name
  const replaceText = (text: string) => {
    if (!text) return text;
    return text
      .replace(/Greece/g, formattedName)
      .replace(/Athens/g, `${formattedName} City`)
      .replace(/Santorini/g, `Beautiful sights of ${formattedName}`)
      .replace(/Mykonos/g, `Local Attractions`)
      .replace(/Aegean Sea/g, `Local Wonders`);
  };

  const tourDetailData = {
    ...baseTourDetailData,
    title: `${formattedName} Tour Package`,
    location: formattedName,
    mainImage: mainImage,
    topGallery: topGallery.length > 0 ? topGallery : baseTourDetailData.topGallery,
    bottomGallery: bottomGallery.length > 0 ? bottomGallery : baseTourDetailData.bottomGallery,
    mapImage: mainImage,
    basicInfo: {
      ...baseTourDetailData.basicInfo,
      destination: formattedName
    },
    description: baseTourDetailData.description.map(replaceText),
    highlights: baseTourDetailData.highlights.map(replaceText),
    tourPlan: baseTourDetailData.tourPlan.map(plan => ({
      ...plan,
      title: replaceText(plan.title),
      description: replaceText(plan.description)
    })),
    locations: baseTourDetailData.locations.map((loc, index) => ({
      ...loc,
      name: index === 0 ? formattedName : replaceText(loc.name),
      description: replaceText(loc.description)
    }))
  };

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
