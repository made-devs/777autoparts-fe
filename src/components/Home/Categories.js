'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Data Kategori (Nanti bisa diganti API)
const categories = [
  {
    id: 1,
    title: 'Engine Bay',
    subtitle: 'Turbo, Pistons, Filters',
    img: '/Home/enginebay.webp',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Suspension',
    subtitle: 'Coilovers, Springs',
    img: '/Home/suspension.webp',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    title: 'Braking',
    subtitle: 'Calipers, Discs, Pads',
    img: '/Home/braking.webp',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 4,
    title: 'Exhaust',
    subtitle: 'Mufflers, Headers',
    img: '/Home/exhaust.webp',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    title: 'Wheels & Tires',
    subtitle: 'Rims, Bolts, Spacers',
    img: '/Home/wheel.webp',
    span: 'md:col-span-2 md:row-span-1',
  },
];

export default function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi Grid Items Muncul
      gsap.fromTo(
        '.cat-item',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // Mulai animasi saat elemen masuk 80% viewport
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-neutral-950 py-24 px-6 relative z-20"
    >
      {/* Header Section - Disamakan dengan Promo.js */}
      <div className="container mx-auto mb-16 flex flex-col md:flex-row items-end justify-between gap-6 border-b border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#FFF10A] animate-pulse"></span>
            <span className="text-[#FFF10A] font-mono text-xs uppercase tracking-widest">
              The Arsenal
            </span>
          </div>
          <h2 className="text-5xl font-black italic uppercase text-white leading-none">
            Upgrade <br /> Your Build.
          </h2>
        </div>
        <Link
          href="/catalog"
          className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-2"
        >
          <span className="uppercase tracking-widest text-sm font-bold">
            View Full Catalog
          </span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>

      {/* THE BENTO GRID */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/catalog/${cat.title.toLowerCase().replace(' ', '-')}`}
            className={`cat-item group relative overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#FFF10A] transition-colors duration-300 ${cat.span}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            {/* Content Text */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              {/* Title disamakan style-nya (font-black italic uppercase) */}
              <h3 className="text-3xl font-black italic uppercase text-white mb-2 leading-none">
                {cat.title}
              </h3>
              {/* Subtitle style disamakan dengan deskripsi Promo (border-l) */}
              <div className="border-l-2 border-[#FFF10A] pl-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <p className="text-neutral-300 text-xs font-mono uppercase tracking-wider">
                  {cat.subtitle}
                </p>
              </div>
            </div>

            {/* Decorative Corner Icon */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#FFF10A"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
