"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statItems = [
  {
    id: 1,
    label: "SYSTEM INVENTORY",
    target: 15000,
    prefix: "",
    suffix: "+",
    description: "Parts Ready to Ship",
  },
  {
    id: 2,
    label: "DISPATCH LATENCY",
    target: 24,
    prefix: "< ",
    suffix: " HRS",
    description: "Fast Processing Time",
  },
  {
    id: 3,
    label: "QUALITY SCORE",
    target: 99.9,
    prefix: "",
    suffix: "%",
    decimals: 1, // Khusus desimal
    description: "Customer Satisfaction",
  },
];

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Select semua elemen yang punya class 'stat-value'
      const items = gsap.utils.toArray(".stat-value");

      items.forEach((item) => {
        const targetValue = parseFloat(item.getAttribute("data-target"));
        const isDecimal = item.getAttribute("data-decimals") === "1";

        // Object proxy untuk animasi angka
        const proxy = { val: 0 };

        gsap.to(proxy, {
          val: targetValue,
          duration: 2, // Durasi counter
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", // Mulai pas section agak masuk layar
          },
          onUpdate: () => {
            // Format angka saat animasi berjalan
            if (isDecimal) {
              item.innerText = proxy.val.toFixed(1);
            } else {
              item.innerText = Math.floor(proxy.val).toLocaleString(); // Tambah koma ribuan
            }
          },
        });
      });

      // Animasi Garis Dekorasi
      gsap.fromTo(
        ".stat-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: { trigger: containerRef.current, start: "top 85%" },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden"
    >
      {/* Background Grid Halus (Telemetry Style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header Kecil */}
        <div className="flex items-center gap-2 mb-12 opacity-50">
          <div className="w-2 h-2 bg-voltage animate-pulse"></div>
          <span className="font-mono text-xs tracking-[0.2em] uppercase">
            Telemetry Data // Live Feed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {statItems.map((stat, index) => (
            <div
              key={stat.id}
              className="relative flex flex-col items-center md:items-start md:px-10 group"
            >
              {/* Border Pemisah Antar Kolom (Hanya di Desktop) */}
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-neutral-800 stat-line origin-top"></div>
              )}

              {/* Label Teknis */}
              <span className="font-mono text-neutral-500 text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                {stat.label}
                {/* Status Light Kecil */}
                <span className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_5px_lime]"></span>
              </span>

              {/* Angka Besar (Animated) */}
              <div className="text-5xl md:text-7xl font-black italic tracking-tighter text-voltage mb-2 drop-shadow-[0_0_15px_rgba(255,241,10,0.2)]">
                {stat.prefix}
                <span
                  className="stat-value"
                  data-target={stat.target}
                  data-decimals={stat.decimals ? "1" : "0"}
                >
                  0
                </span>
                {stat.suffix}
              </div>

              {/* Keterangan */}
              <p className="text-neutral-400 text-sm font-medium border-l-2 border-neutral-700 pl-3 group-hover:border-voltage transition-colors">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Bar */}
        <div className="mt-16 w-full h-[1px] bg-neutral-800 relative stat-line">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-neutral-900 px-4 text-[10px] font-mono text-neutral-600">
            SYNC_RATE: 100%
          </div>
        </div>
      </div>
    </section>
  );
}
