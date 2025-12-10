'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ContactInfo() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.info-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-12">
      {/* 1. COORDINATES (Address) */}
      <div className="info-item border-l-2 border-voltage pl-6">
        <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
          {`//`} HQ Coordinates
        </h3>
        <p className="text-xl font-bold text-white uppercase leading-tight mb-1">
          777 Operations Center
        </p>
        <p className="text-neutral-400 text-sm font-mono leading-relaxed">
          Jl. Otomotif No. 77
          <br />
          Jakarta Selatan, ID 12430
          <br />
          Sector 7 - Industrial Zone
        </p>
      </div>

      {/* 2. FREQUENCY (Contact) */}
      <div className="info-item border-l-2 border-neutral-700 pl-6 hover:border-voltage transition-colors group">
        <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
          {`//`} Secure Channels
        </h3>
        <div className="space-y-2 font-mono text-sm">
          <div>
            <span className="text-neutral-600 block text-[10px]">
              EMAIL UPLINK
            </span>
            <a
              href="mailto:support@777autoparts.com"
              className="text-white hover:text-voltage transition-colors"
            >
              support@777autoparts.com
            </a>
          </div>
          <div className="mt-4">
            <span className="text-neutral-600 block text-[10px]">HOTLINE</span>
            <a
              href="tel:+6221777888"
              className="text-white hover:text-voltage transition-colors"
            >
              +62 21 777-888
            </a>
          </div>
        </div>
      </div>

      {/* 3. OPERATING HOURS */}
      <div className="info-item border-l-2 border-neutral-700 pl-6 hover:border-voltage transition-colors">
        <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
          {`//`} Operational Time
        </h3>
        <ul className="text-sm font-mono text-neutral-400 space-y-1">
          <li className="flex justify-between w-48">
            <span>MON - FRI</span>
            <span className="text-white">09:00 - 18:00</span>
          </li>
          <li className="flex justify-between w-48">
            <span>SAT</span>
            <span className="text-white">10:00 - 15:00</span>
          </li>
          <li className="flex justify-between w-48 text-neutral-600">
            <span>SUN</span>
            <span>OFFLINE</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
