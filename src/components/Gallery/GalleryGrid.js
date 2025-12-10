'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryItems } from '@/data/gallery';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryGrid() {
  const [filter, setFilter] = useState('ALL');
  const containerRef = useRef(null);

  // Filter Logic
  const filteredItems =
    filter === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  // Animasi saat filter berubah
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-card',
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          overwrite: true,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [filter]);

  return (
    <section
      ref={containerRef}
      className="py-12 bg-neutral-950 px-6 min-h-screen"
    >
      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {['ALL', 'JDM', 'EURO', 'ENGINE', 'TECH'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 text-xs font-bold font-mono uppercase tracking-widest border transition-all duration-300 clip-path-button relative overflow-hidden group ${
              filter === cat
                ? 'bg-voltage text-black border-voltage'
                : 'bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-500 hover:text-white'
            }`}
          >
            <span className="relative z-10">{cat}</span>
            {filter !== cat && (
              <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
            )}
          </button>
        ))}
      </div>

      {/* MASONRY GRID */}
      {/* Kita pakai CSS columns untuk efek masonry simpel */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-card break-inside-avoid relative group bg-neutral-900 border border-neutral-800 overflow-hidden cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="relative w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
              />

              {/* Overlay HUD (Hover Effect) */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                {/* Tech Lines */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-voltage animate-pulse"></div>
                <div className="absolute top-4 left-4 w-16 h-px bg-white/50"></div>

                {/* Content Info */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-voltage font-mono text-[10px] uppercase tracking-widest mb-1 block">
                    [{item.category}] // {item.date}
                  </span>
                  <h3 className="text-xl font-black italic uppercase text-white leading-none mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono text-neutral-400 border border-neutral-700 px-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center text-neutral-500 font-mono py-20 uppercase tracking-widest">
          No Data Found in Archive
        </div>
      )}
    </section>
  );
}
