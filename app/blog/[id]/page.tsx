import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: WanderlyTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>{commonData?.globalUI?.loading || 'Loading...'}</div>;

  const blogPageData = sectionData.BlogPage?.variants?.WanderlyBlogPage1;
  const breadcrumbData = commonData?.breadcrumbs?.BlogDetailBreadcrumb;
  
  const blogPost = blogPageData?.blogs.find(b => b.id === id);
  
  if (!blogPost) return <div>{commonData?.globalUI?.notFound || 'Blog not found'}</div>;

  // Clone breadcrumb data and update the last item's label to the blog title
  const dynamicBreadcrumb = breadcrumbData ? {
    ...breadcrumbData,
    title: blogPost.title,
    paths: breadcrumbData.paths.map((p, i) => 
      i === breadcrumbData.paths.length - 1 ? { ...p, label: blogPost.title } : p
    )
  } : undefined;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      {dynamicBreadcrumb && <Breadcrumb data={dynamicBreadcrumb} />}
      
      <BlogDetailContent 
        blog={blogPost} 
        sidebar={blogPageData?.sidebar} 
      />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
