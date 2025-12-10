'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProduct() {
  const containerRef = useRef(null);
  const specsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi Gambar Masuk (Scale Up halus)
      gsap.fromTo(
        '.featured-img',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animasi Spesifikasi (Muncul satu-satu)
      gsap.fromTo(
        '.spec-row',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: specsRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden"
    >
      {/* Background Decor (Blueprint Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* --- LEFT: PRODUCT IMAGE (HEROIC) --- */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Circle Glow di belakang */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-voltage rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>

            <div className="relative aspect-square w-full featured-img">
              <Image
                src="/turbocharger.webp"
                alt="Garrett G-Series Turbo"
                fill
                className="object-contain drop-shadow-2xl z-10"
              />

              {/* Decorative Lines (Pointer ke part) */}
              <div className="absolute top-[20%] right-[10%] w-24 h-px bg-voltage/50 hidden md:block">
                <span className="absolute -right-2 -top-1 w-2 h-2 bg-voltage rounded-full"></span>
              </div>
              <div className="absolute bottom-[30%] left-[10%] w-32 h-px bg-white/30 hidden md:block">
                <span className="absolute -left-2 -top-1 w-2 h-2 bg-white rounded-full"></span>
              </div>
            </div>
          </div>

          {/* --- RIGHT: TECHNICAL SPECS --- */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <span className="text-voltage font-mono text-xs uppercase tracking-widest mb-2 block">
                {`/// Component Spotlight`}
              </span>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white leading-none mb-4">
                Garrett <br /> G25-660
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                The most powerful small-frame turbocharger on the market.
                Engineered for 1.4L - 3.0L engines seeking response and peak
                power.
              </p>
            </div>

            {/* Spec Table */}
            <div ref={specsRef} className="border-t border-neutral-700 mb-8">
              {[
                { label: 'Horsepower Rating', value: '350 - 660 HP' },
                { label: 'Displacement', value: '1.4L - 3.0L' },
                { label: 'Compressor Inducer', value: '54mm' },
                { label: 'Compressor Exducer', value: '67mm' },
                { label: 'Turbine Wheel', value: 'Mar-M 105 Alloy' },
                { label: 'Bearing System', value: 'Ceramic Dual Ball' },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="spec-row flex justify-between items-center py-3 border-b border-neutral-800 group hover:bg-neutral-800/50 transition-colors px-2"
                >
                  <span className="text-neutral-500 font-mono text-xs uppercase tracking-wider group-hover:text-white transition-colors">
                    {spec.label}
                  </span>
                  <span className="text-white font-bold font-mono text-sm text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link
                href="/catalog/garrett-g25-660"
                className="flex-1 bg-voltage text-black font-bold uppercase py-4 text-center tracking-widest hover:bg-white transition-colors clip-path-button relative overflow-hidden group"
              >
                <span className="relative z-10">View Schematics</span>
              </Link>
              <button className="w-14 border border-neutral-700 flex items-center justify-center hover:border-voltage hover:text-voltage transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
