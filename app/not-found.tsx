import { WanderlyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Page Not Found - Wanderly',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  const templateData: WanderlyTemplateData = rawData as WanderlyTemplateData;
  const sectionData = templateData?.categories?.Wanderly?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return null;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.WanderlyTopBar1} />
      <Header data={sectionData.Header?.variants?.WanderlyHeader1} />
      
      <div className="flex-grow flex flex-col items-center justify-center py-20 text-center px-4">
        <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link 
          href="/" 
          className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
