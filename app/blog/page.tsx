import { WanderlyTemplateData, BlogPageData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BlogPageContent } from '@/components/sections/BlogPageContent';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>{commonData?.globalUI?.loading || 'Loading...'}</div>;

  const blogData = sectionData.BlogPage?.variants?.WanderlyBlogPage1;
  const breadcrumbData = commonData?.breadcrumbs?.BlogBreadcrumb;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      {blogData && <BlogPageContent data={blogData} />}
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
