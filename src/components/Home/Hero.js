"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroLayered() {
  const containerRef = useRef(null);

  // Refs untuk Parallax Groups
  const backPartsRef = useRef(null);
  const frontPartsRef = useRef(null);

  // Refs untuk Konten Teks
  const textContainerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. SETUP AWAL
      // Sembunyikan elemen teks dulu biar bisa di-reveal
      gsap.set([badgeRef.current, titleRef.current, btnRef.current], {
        y: 50,
        opacity: 0,
      });

      // 2. ENTRANCE ANIMATION (Sequence)
      // Parts masuk duluan (Explosion effect pelan)
      tl.fromTo(
        backPartsRef.current.children,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, stagger: 0.1 }
      )
        .fromTo(
          frontPartsRef.current.children,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, stagger: 0.1 },
          "<"
        )

        // Teks masuk setelahnya
        .to(badgeRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=1")
        .to(titleRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.6")
        .to(btnRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8");

      // 3. MOUSE MOVE PARALLAX
      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 2;
        const yPos = (clientY / window.innerHeight - 0.5) * 2;

        // Layer Belakang (Gerak Lambat & Berlawanan)
        gsap.to(backPartsRef.current, {
          x: -xPos * 25,
          y: -yPos * 25,
          duration: 1,
          ease: "power1.out",
        });

        // Layer Teks (Gerak Sedikit Banget - sebagai jangkar)
        gsap.to(textContainerRef.current, {
          x: -xPos * 10,
          y: -yPos * 10,
          duration: 1,
        });

        // Layer Depan (Gerak Cepat - Efek Dekat Mata)
        gsap.to(frontPartsRef.current, {
          x: xPos * 40,
          y: yPos * 40,
          duration: 0.8,
          ease: "power1.out",
        });
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-neutral-950 border-b border-neutral-800"
    >
      {/* --- ATMOSPHERE (Background) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFF10A] rounded-full blur-[200px] opacity-10 pointer-events-none z-0"></div>

      {/* --- LAYER 1: BACK PARTS (z-10) --- */}
      {/* Gambar-gambar ini ada DI BELAKANG teks */}
      <div
        ref={backPartsRef}
        className="absolute inset-0 z-10 pointer-events-none w-full h-full"
      >
        {/* Gear 1 (Kiri Atas - Jauh) */}
        <div className="absolute top-[15%] left-[10%] w-32 h-32 opacity-40 blur-[2px]">
          <Image
            src="/home/gear1.webp"
            fill
            alt="gear"
            className="object-contain animate-[spin_30s_linear_infinite]"
          />
        </div>

        {/* Piston 2 (Kanan Atas - Jauh) */}
        <div className="absolute top-[20%] right-[15%] w-40 h-40 opacity-30 rotate-12 blur-[1px]">
          <Image
            src="/home/piston2.webp"
            fill
            alt="piston"
            className="object-contain"
          />
        </div>

        {/* Belt (Tengah Bawah - Samar) */}
        <div className="absolute bottom-[10%] left-[40%] w-80 h-80 opacity-40 blur-[2px] rotate-90">
          <Image
            src="/home/belt.webp"
            fill
            alt="belt"
            className="object-contain"
          />
        </div>
      </div>

      {/* --- LAYER 2: MAIN CONTENT (z-20) --- */}
      {/* Ini kode text layout yang kamu request */}
      <div
        ref={textContainerRef}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        {/* Technical Label */}
        <div
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 border border-neutral-800 bg-neutral-900/80 px-4 py-1 backdrop-blur-md rounded-sm"
        >
          <span className="w-2 h-2 bg-[#FFF10A] animate-pulse rounded-full shadow-[0_0_10px_#FFF10A]"></span>
          <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
            System Online • V.7.0
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8 drop-shadow-2xl"
        >
          Precision <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 relative">
            Performance
            {/* Dekorasi garis tipis di belakang teks biar manis */}
            <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-[#FFF10A]/20"></span>
          </span>
        </h1>

        {/* CTA Button (Tactical Shape) */}
        <div ref={btnRef} className="mt-8 relative inline-block">
          <button
            className="group relative bg-[#FFF10A] text-black font-bold uppercase tracking-wider py-4 px-12 
            hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,241,10,0.4)]
            [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Parts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* --- LAYER 3: FRONT PARTS (z-30) --- */}
      {/* Gambar-gambar ini MENIMPA/OVERLAP sedikit dengan teks biar kerasa 3D */}
      <div
        ref={frontPartsRef}
        className="absolute inset-0 z-30 pointer-events-none w-full h-full"
      >
        {/* Mesin (Hero - Kanan Bawah) */}
        {/* Posisinya sengaja agak keluar layar biar gak nutupin tombol CTA */}
        <div className="absolute -bottom-[10%] -right-[5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] drop-shadow-2xl">
          <Image
            src="/home/mesin.webp"
            fill
            alt="Engine Block"
            className="object-contain"
            priority
          />
        </div>

        {/* Piston 1 (Kiri Tengah - Floating dekat teks "Precision") */}
        <div className="absolute top-[35%] -left-[5%] md:left-[5%] w-48 h-48 md:w-64 md:h-64 drop-shadow-xl rotate-12">
          <Image
            src="/home/piston1.webp"
            fill
            alt="Piston"
            className="object-contain"
          />
        </div>

        {/* Gear 2 (Kecil - Dekat Judul Atas) */}
        <div className="absolute top-[15%] right-[25%] w-20 h-20 md:w-28 md:h-28 animate-[spin_10s_linear_infinite_reverse] drop-shadow-lg opacity-80">
          <Image
            src="/home/gear2.webp"
            fill
            alt="Small Gear"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
