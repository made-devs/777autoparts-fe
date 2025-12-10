'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

// Dummy Data Promo (Ganti dengan aset 4:5 lo nanti)
const promos = [
  {
    id: 1,
    title: 'Flash Sale Turbo',
    img: 'https://images.unsplash.com/photo-1600706432502-78b97599df72?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Brake Kits Bundle',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Oil Change Special',
    img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Interior Detailing',
    img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80',
  },
];

export default function Promo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // -- GSAP ANIMATION HANDLE --
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hitung pergeseran: lebar card (300px) + gap (24px)
      // Kita geser supaya card aktif ada di tengah atau awal,
      // Disini gue buat simple logic: geser ke kiri berdasarkan index
      const xValue = -(activeIndex * 320); // 300px width + 20px gap

      gsap.to(sliderRef.current, {
        x: xValue,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, [activeIndex]);

  // Handle Prev/Next
  const nextSlide = () => {
    if (activeIndex < promos.length - 1) setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  return (
    <section
      ref={containerRef}
      className="py-20 bg-neutral-900 border-y border-neutral-800 overflow-hidden relative"
    >
      {/* Background Decor (Stripes) */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-size-[20px_20px] pointer-events-none"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        {/* --- LEFT SIDE: TEXT INFO --- */}
        <div className="w-full md:w-1/3 z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#FFF10A] animate-pulse"></span>
            <span className="text-[#FFF10A] font-mono text-xs uppercase tracking-widest">
              Limited Offers
            </span>
          </div>
          <h2 className="text-5xl font-black italic uppercase text-white leading-none mb-6">
            Special <br /> Operations.
          </h2>
          <p className="text-neutral-400 mb-8 border-l-2 border-[#FFF10A] pl-4">
            Exclusive deals on high-performance parts. Grab them before the
            timer runs out.
          </p>

          {/* CONTROLS (Tombol Geser) */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className="w-12 h-12 border border-neutral-700 flex items-center justify-center hover:bg-[#FFF10A] hover:text-black hover:border-[#FFF10A] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              disabled={activeIndex === promos.length - 1}
              className="w-12 h-12 border border-neutral-700 flex items-center justify-center hover:bg-[#FFF10A] hover:text-black hover:border-[#FFF10A] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: SLIDER (4:5 CARDS) --- */}
        <div className="w-full md:w-2/3 overflow-hidden pl-4 md:pl-0">
          {/* Slider Track */}
          <div ref={sliderRef} className="flex gap-5 w-max touch-pan-x">
            {promos.map((promo, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={promo.id}
                  onClick={() => setActiveIndex(index)} // Klik card buat jadi active
                  className={`relative w-[280px] md:w-[300px] aspect-4/5 shrink-0 transition-all duration-500 cursor-pointer group
                                ${
                                  isActive
                                    ? 'scale-100 opacity-100 z-10'
                                    : 'scale-95 opacity-50 grayscale hover:grayscale-0'
                                }`}
                >
                  {/* BINGKAI INDUSTRIAL (HUD) */}
                  <div
                    className={`absolute inset-0 border-2 transition-colors duration-300 z-20 pointer-events-none
                                ${
                                  isActive
                                    ? 'border-[#FFF10A]'
                                    : 'border-neutral-700'
                                }`}
                  >
                    {/* Sudut Siku */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-current"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-current"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-current"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-current"></div>
                  </div>

                  {/* IMAGE WRAPPER */}
                  <div className="relative w-full h-full bg-neutral-800 overflow-hidden">
                    <Image
                      src={promo.img}
                      alt={promo.title}
                      fill
                      className="object-cover"
                    />

                    {/* OVERLAY: SCAN LINE EFFECT (Hanya muncul kalau active) */}
                    {isActive && (
                      <div className="absolute inset-0 z-30 pointer-events-none">
                        <div className="w-full h-0.5 bg-voltage shadow-[0_0_15px_var(--color-voltage)] animate-scan"></div>
                        <div className="absolute top-4 right-4 bg-[#FFF10A] text-black text-[10px] font-bold px-2 py-1">
                          ACTIVE
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
