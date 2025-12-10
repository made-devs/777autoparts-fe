// src/components/Home/NewsSection.js
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// FIX: Import 'newsItems' bukan 'latestNews'
import { newsItems } from '@/data/news';

gsap.registerPlugin(ScrollTrigger);

export default function NewsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi Judul
      gsap.fromTo(
        '.news-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Animasi Kartu Berita (Stagger)
      gsap.fromTo(
        '.news-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.news-grid',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-neutral-950 border-b border-neutral-800 relative"
    >
      <div className="container mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 news-header">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-voltage animate-pulse"></span>
              <span className="text-voltage font-mono text-xs uppercase tracking-widest">
                System Broadcast
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white leading-none">
              Latest <span className="text-voltage">News.</span>
            </h2>
          </div>

          <Link
            href="/news"
            className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mt-4 md:mt-0"
          >
            <span className="font-mono text-xs uppercase tracking-widest border-b border-transparent group-hover:border-voltage pb-1">
              View All News
            </span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* NEWS GRID */}
        <div className="news-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FIX: Mapping pakai data 'newsItems' dan batasi 3 item aja buat home */}
          {newsItems.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="news-card group block"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full bg-neutral-900 border border-neutral-800 overflow-hidden mb-6 group-hover:border-voltage transition-colors duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay Date Badge */}
                <div className="absolute top-0 left-0 bg-neutral-950/80 backdrop-blur border-r border-b border-neutral-800 px-3 py-2">
                  <span className="text-voltage font-mono text-xs">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2 border border-neutral-800 px-2 py-1 rounded-sm group-hover:border-neutral-600 transition-colors">
                  [{item.category}]
                </span>
                <h3 className="text-xl font-bold uppercase text-white leading-tight group-hover:text-voltage transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
