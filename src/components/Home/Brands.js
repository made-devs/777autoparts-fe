"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Dummy Brands (Ganti SVG ini dengan Logo asli lo nanti)
// Disini gue pake Text SVG biar langsung kelihatan bentuknya tanpa perlu file eksternal
const brands = [
  { id: 1, name: "TOYOTA" },
  { id: 2, name: "HONDA" },
  { id: 3, name: "NISSAN" },
  { id: 4, name: "BMW" },
  { id: 5, name: "MERCEDES" },
  { id: 6, name: "PORSCHE" },
  { id: 7, name: "SUBARU" },
  { id: 8, name: "MAZDA" },
  { id: 9, name: "AUDI" },
  { id: 10, name: "CHEVROLET" },
  { id: 11, name: "BYD" },
  { id: 12, name: "WULING" },
];

export default function Brands() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi Grid Masuk (Stagger)
      gsap.fromTo(
        ".brand-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Efek Glitch saat Hover (Mouse Enter)
  const handleMouseEnter = (e) => {
    const logo = e.currentTarget.querySelector(".brand-logo");
    gsap.to(logo, {
      skewX: -10, // Miring dikit
      x: -2,
      duration: 0.1,
      yoyo: true,
      repeat: 3, // Getar 3x
      onComplete: () => gsap.to(logo, { skewX: 0, x: 0 }), // Balik normal
    });
  };

  return (
    <section
      ref={containerRef}
      className="py-20 bg-neutral-950 border-b border-neutral-800 relative z-10"
    >
      {/* Header Kecil */}
      <div className="container mx-auto px-6 mb-12 flex items-center justify-between border-b border-neutral-900 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-neutral-600 rounded-sm"></span>
          <h3 className="text-neutral-500 font-mono text-xs uppercase tracking-[0.2em]">
            Authorized Supply Chain
          </h3>
        </div>
        <span className="text-neutral-700 font-mono text-[10px]">
          DB_VER_2.4
        </span>
      </div>

      {/* THE GRID */}
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[1px] bg-neutral-800 border border-neutral-800">
        {brands.map((brand) => (
          <div
            key={brand.id}
            onMouseEnter={handleMouseEnter}
            className="brand-item group relative h-32 bg-neutral-950 flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-colors hover:bg-neutral-900"
          >
            {/* Crosshair Decor di pojok */}
            <div className="absolute top-2 left-2 w-1 h-1 bg-neutral-800 group-hover:bg-voltage transition-colors"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-neutral-800 group-hover:bg-voltage transition-colors"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-neutral-800 group-hover:bg-voltage transition-colors"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-neutral-800 group-hover:bg-voltage transition-colors"></div>

            {/* Logo Container */}
            <div className="brand-logo opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform flex items-center justify-center w-full h-full">
              <Image
                src={`/Home/Logo/${brand.name.toLowerCase()}.webp`}
                alt={brand.name + " logo"}
                width={80}
                height={80}
                className="object-contain w-20 h-20"
                priority={brand.id < 7}
              />
            </div>

            {/* Status Text (Muncul pas hover) */}
            <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[9px] font-mono text-neutral-400 tracking-widest bg-neutral-900 px-1 border border-neutral-700">
                VERIFIED
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Teks berjalan pelan di background (Sangat tipis) */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none opacity-[0.02] overflow-hidden select-none">
        <div className="whitespace-nowrap font-black italic text-9xl uppercase leading-none">
          Compatibility Check /// System Online /// Global Logistics ///
        </div>
      </div>
    </section>
  );
}
