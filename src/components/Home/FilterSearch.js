'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FilterSearch() {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  // State dummy untuk simulasi interaksi
  const [selectedYear, setSelectedYear] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animasi Masuk Panel (Slide Up + Fade)
      gsap.fromTo(
        containerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
          },
        }
      );

      // 2. Stagger Input Fields
      gsap.fromTo(
        '.filter-input',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleScan = (e) => {
    e.preventDefault();
    setIsScanning(true);
    // Simulasi loading scan
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <section
      ref={containerRef}
      className="relative z-30 -mt-10 mb-20 container mx-auto px-6"
    >
      {/* --- DIAGNOSTIC PANEL CONTAINER --- */}
      <div className="relative bg-neutral-900 border border-neutral-800 p-8 shadow-2xl overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[1rem_1rem] opacity-20 pointer-events-none"></div>

        {/* Animated Scanner Bar (Garis Kuning Jalan) */}
        {isScanning && (
          <div className="absolute top-0 left-0 w-full h-0.5 bg-voltage shadow-[0_0_20px_#FFF10A] animate-scan z-0"></div>
        )}

        {/* --- HEADER: TECHNICAL LABEL --- */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-8 border-b border-neutral-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`w-2 h-2 rounded-sm ${
                  isScanning ? 'bg-voltage animate-ping' : 'bg-neutral-500'
                }`}
              ></span>
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                System Status: {isScanning ? 'SCANNING...' : 'STANDBY'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black italic uppercase text-white leading-none">
              Compatibility <span className="text-yellow-400">Check</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-voltage text-right mt-4 md:mt-0">
            [ OBD-II INTERFACE V.2.4 ]
          </div>
        </div>

        {/* --- FORM INPUTS --- */}
        <form
          ref={formRef}
          onSubmit={handleScan}
          className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
        >
          {/* Input 1: Year */}
          <div className="filter-input group">
            <label className="block text-[10px] font-mono text-neutral-500 mb-2 uppercase tracking-wider group-hover:text-voltage transition-colors">
              Year
            </label>
            <select
              className="w-full bg-neutral-950 border border-neutral-700 text-neutral-300 font-mono text-sm py-3 px-4 outline-none focus:border-voltage focus:text-white transition-all uppercase rounded-none appearance-none cursor-pointer hover:border-neutral-500"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>

          {/* Input 2: Make */}
          <div className="filter-input group">
            <label className="block text-[10px] font-mono text-neutral-500 mb-2 uppercase tracking-wider group-hover:text-voltage transition-colors">
              Make
            </label>
            <select className="w-full bg-neutral-950 border border-neutral-700 text-neutral-300 font-mono text-sm py-3 px-4 outline-none focus:border-voltage focus:text-white transition-all uppercase rounded-none appearance-none cursor-pointer hover:border-neutral-500">
              <option value="">Select Make</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="BMW">BMW</option>
            </select>
          </div>

          {/* Input 3: Model */}
          <div className="filter-input group">
            <label className="block text-[10px] font-mono text-neutral-500 mb-2 uppercase tracking-wider group-hover:text-voltage transition-colors">
              Model
            </label>
            <select className="w-full bg-neutral-950 border border-neutral-700 text-neutral-300 font-mono text-sm py-3 px-4 outline-none focus:border-voltage focus:text-white transition-all uppercase rounded-none appearance-none cursor-pointer hover:border-neutral-500">
              <option value="">Select Model</option>
              <option value="Supra">Supra</option>
              <option value="Civic Type R">Civic Type R</option>
              <option value="M4">M4 Competition</option>
            </select>
          </div>

          {/* Input 4: Trim (Optional) */}
          <div className="filter-input group">
            <label className="block text-[10px] font-mono text-neutral-500 mb-2 uppercase tracking-wider group-hover:text-voltage transition-colors">
              Trim / Engine
            </label>
            <select className="w-full bg-neutral-950 border border-neutral-700 text-neutral-300 font-mono text-sm py-3 px-4 outline-none focus:border-voltage focus:text-white transition-all uppercase rounded-none appearance-none cursor-pointer hover:border-neutral-500">
              <option value="">All Specs</option>
              <option value="3.0L Turbo">3.0L Turbo</option>
              <option value="2.0L NA">2.0L NA</option>
            </select>
          </div>

          {/* ACTION BUTTON */}
          <div className="filter-input">
            <button
              type="submit"
              disabled={isScanning}
              className="w-full bg-voltage text-black font-bold uppercase tracking-widest py-3 px-4 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
            >
              {isScanning ? 'ANALYZING...' : 'INITIATE SCAN'}
            </button>
          </div>
        </form>

        {/* DECORATIVE CORNERS */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-voltage pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-voltage pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-voltage pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-voltage pointer-events-none"></div>
      </div>
    </section>
  );
}
