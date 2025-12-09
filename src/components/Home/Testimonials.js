"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

// Dummy Data: "Logs"
const logs = [
  {
    id: "LOG-001",
    pilot: "Asep.",
    vehicle: "Nissan S15 Silvia",
    mission: "Drift Spec Build",
    status: "SUCCESS",
    report:
      "Installed the Garrett G25-660. Spool time is non-existent. The responsiveness on the track is absolutely lethal. 777 delivered the parts in pristine condition.",
    date: "2024-11-02",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80",
  },
  {
    id: "LOG-002",
    pilot: "Sarah",
    vehicle: "BMW M4 Competition",
    mission: "Track Day Prep",
    status: "SUCCESS",
    report:
      "Braking performance increased by 40% after swapping to the Endless MX72 pads recommended by the team. Fade is gone. Pure stopping power.",
    date: "2024-12-15",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    id: "LOG-003",
    pilot: "Didi S.",
    vehicle: "Civic Type R FK8",
    mission: "Cooling System Upgrade",
    status: "SUCCESS",
    report:
      "Temperatures dropped 15 degrees celsius during heavy laps. The craftsmanship on the radiator is improved significant over stock. Essential upgrade.",
    date: "2025-01-20",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80",
  },
  {
    id: "LOG-004",
    pilot: "Suprapto",
    vehicle: "Subaru WRX STI",
    mission: "Suspension Tuning",
    status: "SUCCESS",
    report:
      "Coilovers arrived pre-set perfectly. Corner entry is sharper than a katana now. Highly recommend the setup service.",
    date: "2025-02-10",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Fungsi Scroll Manual (Button Click)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;

      // Pakai GSAP scrollTo biar smooth (tapi manipulasi scrollLeft property)
      gsap.to(current, {
        scrollLeft: current.scrollLeft + scrollAmount,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className="py-24 bg-neutral-950 border-b border-neutral-800 relative overflow-hidden">
      {/* Background Decor (Noise Texture) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#FFF10A] animate-pulse"></span>
              <span className="text-[#FFF10A] font-mono text-xs uppercase tracking-widest">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white leading-none">
              Driver <br /> Logs.
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-neutral-700 hover:border-voltage hover:bg-voltage hover:text-black flex items-center justify-center transition-all active:scale-95"
            >
              &lt;
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-neutral-700 hover:border-voltage hover:bg-voltage hover:text-black flex items-center justify-center transition-all active:scale-95"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* --- SCROLLABLE CONTAINER (DRAGGABLE FEEL) --- */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 cursor-grab active:cursor-grabbing scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar
        >
          {logs.map((log) => (
            <div
              key={log.id}
              className="relative min-w-[320px] md:min-w-[400px] bg-neutral-900/50 border border-neutral-800 p-6 flex flex-col justify-between snap-center group hover:border-neutral-600 transition-colors"
            >
              {/* Corner Markers (Technical Look) */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neutral-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neutral-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neutral-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-voltage opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* TOP METADATA */}
              <div className="flex justify-between items-start border-b border-neutral-800 pb-4 mb-4 font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                <div>
                  <span className="block text-neutral-400">ID: {log.id}</span>
                  <span className="block mt-1">DATE: {log.date}</span>
                </div>
                <div className="text-right">
                  <span className="block text-voltage">
                    STATUS: {log.status}
                  </span>
                  <span className="block mt-1 text-white">
                    UNIT: {log.vehicle}
                  </span>
                </div>
              </div>

              {/* REPORT CONTENT */}
              <div className="flex-grow mb-6">
                <p className="font-mono text-sm md:text-base text-neutral-300 leading-relaxed">
                  "{log.report}"
                </p>
              </div>

              {/* USER PROFILE (GRAYSCALE & HALFTONE STYLE) */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-800 border-dashed">
                <div className="relative w-12 h-12 overflow-hidden rounded-sm bg-neutral-800">
                  <Image
                    src={log.img}
                    alt={log.pilot}
                    fill
                    className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Dot/Scanline Overlay (Fake Halftone) */}
                  <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:3px_3px] opacity-30 pointer-events-none mix-blend-overlay"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm">
                    {log.pilot}
                  </h4>
                  <div className="flex text-voltage text-[10px] gap-1 mt-1">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                {/* Stamp */}
                <div className="ml-auto opacity-20 group-hover:opacity-50 transition-opacity">
                  <div className="border-2 border-white rounded-full w-10 h-10 flex items-center justify-center -rotate-12">
                    <span className="text-[8px] font-black uppercase text-white">
                      OK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer di akhir biar card terakhir ga mentok pinggir banget */}
          <div className="min-w-[50px]"></div>
        </div>
      </div>
    </section>
  );
}
