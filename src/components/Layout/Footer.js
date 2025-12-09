"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi Reveal saat scroll sampai bawah
      gsap.fromTo(
        footerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%", // Muncul pas footer mulai kelihatan dikit
          },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-neutral-950 text-white border-t border-neutral-800 pt-20 pb-10 overflow-hidden"
    >
      {/* BACKGROUND DECOR (Technical Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* TOP SECTION: CTA & NEWSLETTER (Terminal Style) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
              Join The <span className="text-voltage">Syndicate.</span>
            </h2>
            <p className="text-neutral-400 text-sm">
              Receive latest intel on drops, restocks, and secret sales.
            </p>
          </div>

          {/* Terminal Input Box */}
          <div className="w-full md:w-auto">
            <div className="flex items-center border-b-2 border-neutral-700 hover:border-voltage transition-colors group w-full md:w-[400px]">
              <span className="text-voltage font-mono mr-2 text-lg">{`>`}</span>
              <input
                type="email"
                placeholder="Enter Email address"
                className="bg-transparent border-none outline-none text-white font-mono placeholder:text-neutral-600 w-full py-3 uppercase tracking-wider"
              />
              <button className="text-neutral-500 font-bold text-xs uppercase hover:text-voltage transition-colors p-2">
                [ENTER]
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-neutral-800 pt-12">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-voltage flex items-center justify-center font-black text-black italic text-xs -skew-x-12">
                7
              </div>
              <span className="font-black italic text-lg tracking-tighter">
                777 PARTS
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Premium aftermarket components for the modern enthusiast.
              Engineered for speed, built to last.
            </p>
            <div className="flex gap-4">
              {/* Social Icons (Placeholder Boxes) */}
              {[1, 2, 3].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-neutral-700 flex items-center justify-center text-neutral-500 hover:bg-voltage hover:text-black hover:border-voltage transition-all"
                >
                  <span className="text-[10px]">IG</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="font-mono text-voltage text-xs uppercase tracking-widest mb-6 border-l-2 border-voltage pl-2">
              Inventory
            </h4>
            <ul className="space-y-3">
              {[
                "Engine Bay",
                "Suspension",
                "Aero Kits",
                "Wheels",
                "Merchandise",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white hover:translate-x-1 transition-transform inline-block text-sm uppercase font-bold tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-mono text-voltage text-xs uppercase tracking-widest mb-6 border-l-2 border-voltage pl-2">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                "Track Order",
                "Shipping Policy",
                "Returns",
                "Installation Guide",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white hover:translate-x-1 transition-transform inline-block text-sm uppercase font-bold tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-mono text-voltage text-xs uppercase tracking-widest mb-6 border-l-2 border-voltage pl-2">
              HQ Contact
            </h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-mono">
              <li>
                <span className="block text-neutral-600 text-xs mb-1">
                  LOCATION
                </span>
                Jl. Otomotif No. 77
                <br />
                Jakarta Selatan, ID 12430
              </li>
              <li>
                <span className="block text-neutral-600 text-xs mb-1">
                  EMERGENCY
                </span>
                support@777autopart.com
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-mono border-t border-neutral-900 pt-8">
          <p>&copy; 2025 777 AUTO PART. ALL SYSTEMS ONLINE.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-voltage">
              PRIVACY
            </a>
            <a href="#" className="hover:text-voltage">
              TERMS
            </a>
            <a href="#" className="hover:text-voltage">
              SITEMAP
            </a>
          </div>
        </div>
      </div>

      {/* GIANT WATERMARK (Massive Footer Foundation) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[20vw] font-black italic text-neutral-900 pointer-events-none select-none leading-none z-0 opacity-50">
        777
      </div>
    </footer>
  );
}
