import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogItem, BlogSidebarData } from '@/types/templates.types';
import { FaRegCalendarAlt, FaUser, FaHeadset, FaPlane, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaSun': return <span className="text-xl">☀️</span>;
    case 'FaLeaf': return <span className="text-xl">🌿</span>;
    case 'FaTint': return <span className="text-xl">💧</span>;
    default: return <span className="text-xl">🌿</span>;
  }
};

export const BlogDetailContent = ({ blog, sidebar }: { blog: BlogItem; sidebar?: BlogSidebarData }) => {
  if (!blog) return null;

  return (
    <section className="py-12 lg:py-16 bg-[#fdfaf6]">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">
          
          {/* Main Content (Left) */}
          <div className="w-full lg:w-2/3">
            
            {/* Featured Image */}
            <div className="relative h-[300px] md:h-[450px] w-full rounded-[32px] overflow-hidden shadow-lg mb-8">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" />
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-500 mb-4 tracking-wide">
              {blog.author && (
                <span className="flex items-center gap-2">
                  <FaUser className="text-[var(--color-primary)]" /> By {blog.author}
                </span>
              )}
              <span className="text-gray-300 hidden sm:block">|</span>
              <span className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-[var(--color-primary)]" /> {blog.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] flex-1 bg-gray-200"></div>
              <FaPlane className="text-[var(--color-primary)] opacity-30 w-5 h-5 -rotate-45" />
              <div className="h-[1px] flex-1 bg-gray-200"></div>
            </div>

            {/* Content Body */}
            <div className="prose prose-lg max-w-none text-gray-600 mb-10">
              {blog.introduction && (
                <p className="mb-8 leading-relaxed font-medium text-gray-700">
                  {blog.introduction}
                </p>
              )}
              
              {blog.sections?.map((section, idx) => (
                <div key={section.id} className="mb-10">
                  {section.title && (
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[var(--color-primary)] text-xl">🌿</span>
                      <h3 className="text-2xl font-bold text-[var(--color-primary)] m-0">{section.title}</h3>
                    </div>
                  )}
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="mb-6 leading-relaxed">{p}</p>
                  ))}
                  {section.image && (
                    <div className="relative h-[250px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image src={section.image} alt={section.title || 'Blog Section Image'} fill className="object-cover" />
                    </div>
                  )}
                  
                  {/* Insert Quote after first section if available */}
                  {idx === 0 && blog.quote && (
                    <div className="my-10 bg-[var(--color-primary)]/5 rounded-2xl p-8 md:p-10 border-l-4 border-[var(--color-primary)] relative">
                      <div className="absolute top-6 left-6 text-6xl text-[var(--color-primary)] opacity-10 font-serif leading-none">"</div>
                      <p className="text-lg md:text-xl font-medium text-gray-700 italic relative z-10 mb-4 pl-6">
                        {blog.quote.text}
                      </p>
                      <p className="font-bold text-[var(--color-primary)] pl-6">— {blog.quote.author}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Eco Initiatives Section */}
              {blog.ecoInitiatives && blog.ecoInitiatives.length > 0 && (
                <div className="my-10">
                  {blog.ecoInitiativesTitle && (
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[var(--color-primary)] text-xl">🌿</span>
                      <h3 className="text-2xl font-bold text-[var(--color-primary)] m-0">{blog.ecoInitiativesTitle}</h3>
                    </div>
                  )}
                  {blog.ecoInitiativesDescription && (
                    <p className="mb-6 leading-relaxed">{blog.ecoInitiativesDescription}</p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {blog.ecoInitiatives.map((eco) => (
                      <div key={eco.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                          {renderIcon(eco.icon)}
                        </div>
                        <h4 className="font-bold text-[var(--color-primary)] mb-2">{eco.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{eco.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Sidebar (Right) */}
          {sidebar && (
            <div className="w-full lg:w-1/3 flex flex-col gap-8 sticky top-28">
              
              {/* Recent Posts Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
                <h4 className="font-bold text-[var(--color-primary)] text-xl mb-6 flex flex-col items-start gap-1">
                  {sidebar.recentPostsTitle}
                  <div className="w-10 h-1 bg-[var(--color-accent)] rounded-full"></div>
                </h4>
                
                <div className="flex flex-col gap-6">
                  {sidebar.recentPosts.map((post) => (
                    <Link href={post.linkUrl} key={post.id} className="flex items-center gap-4 group">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-[var(--color-primary)] text-sm leading-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                          {post.title}
                        </h5>
                        <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                          <FaRegCalendarAlt className="text-[var(--color-accent)]" /> {post.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Help Box CTA */}
              <div className="bg-[var(--color-primary)] rounded-2xl p-8 md:p-10 text-center text-white relative overflow-hidden shadow-xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('/banner/pattern.png')] bg-cover mix-blend-overlay"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20 backdrop-blur-sm">
                    <FaHeadset className="text-3xl text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-2">{sidebar.helpBox.title}</h4>
                  <p className="text-white/80 font-medium mb-6">{sidebar.helpBox.subtitle}</p>
                  
                  <div className="relative w-40 h-12 mb-6">
                    <Image src={sidebar.helpBox.logo} alt="Logo" fill className="object-contain" />
                  </div>
                  
                  <div className="w-full h-px bg-white/20 mb-6"></div>
                  
                  <p className="text-sm font-semibold tracking-wide uppercase text-white/70 mb-2">
                    {sidebar.helpBox.phoneText}
                  </p>
                  <p className="text-2xl font-black mb-8 text-[var(--color-accent)]">
                    {sidebar.helpBox.phoneNumber}
                  </p>
                  
                  <Link href={sidebar.helpBox.buttonLink}>
                    <button className="bg-[var(--color-accent)] hover:bg-[#a67a42] text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2 shadow-lg w-full">
                      {sidebar.helpBox.buttonText} <FaArrowRight className="text-xs" />
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};
