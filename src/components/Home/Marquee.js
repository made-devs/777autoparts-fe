"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GiElectric } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";
import { TbSquareRotated } from "react-icons/tb";

export default function Marquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Animasi Infinite Scroll sederhana dengan GSAP
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50, // Geser setengah panjang total
        repeat: -1,
        duration: 15, // Speed (makin kecil makin ngebut)
        ease: "linear",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-[#FFF10A] overflow-hidden py-3 md:py-4 border-y-4 border-black z-30">
      {/* Container yang akan digeser */}
      <div className="flex whitespace-nowrap" ref={marqueeRef}>
        {/* Kita duplikasi teksnya biar looping-nya mulus (Seamless) */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            <span className="text-black font-black italic uppercase text-2xl md:text-4xl tracking-tighter">
              Genuine Parts
            </span>
            <GiElectric className="w-6 h-6 md:w-8 md:h-8 text-black" />
            <span className="text-black font-black italic uppercase text-2xl md:text-4xl tracking-tighter">
              Worldwide Shipping
            </span>
            <MdElectricBolt className="w-6 h-6 md:w-8 md:h-8 text-black" />
            <span className="text-black font-black italic uppercase text-2xl md:text-4xl tracking-tighter">
              High Performance
            </span>
            <TbSquareRotated className="w-4 h-4 md:w-5 md:h-5 text-black" />
          </div>
        ))}
      </div>
    </div>
  );
}
