'use client';
import Link from 'next/link';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection({
  title = 'Push The Limits.',
  subtitle = 'Stock parts are built for compromise. Our inventory is built for victory. Upgrade your machine today.',
  primaryBtnText = 'Start Building',
  primaryBtnLink = '/catalog',
  secondaryBtnText = 'Consult Expert',
  secondaryBtnLink = '/contact',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-neutral-900 border-y border-neutral-800 relative overflow-hidden"
    >
      {/* Background Ambience (Noise & Vignette) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] opacity-80 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center cta-content">
        {/* Status Label */}
        <div className="inline-flex items-center gap-2 mb-8 border border-neutral-700 bg-black/30 px-4 py-2 rounded-sm backdrop-blur-sm">
          <span className="w-2 h-2 bg-voltage rounded-full animate-pulse shadow-[0_0_10px_#FFF10A]"></span>
          <span className="text-voltage font-mono text-xs uppercase tracking-[0.2em]">
            System Upgrade Available
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-8xl font-black italic uppercase text-white tracking-tighter leading-[0.9] mb-8 drop-shadow-xl">
          {/* Kita split title biar bisa di-styling kalau ada <br/> */}
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-neutral-400 font-mono text-sm leading-relaxed mb-12 border-t border-neutral-800 pt-8">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Primary Button (Voltage) */}
          <Link
            href={primaryBtnLink}
            className="group relative bg-voltage text-black font-bold uppercase py-4 px-10 tracking-[0.15em] overflow-hidden clip-path-button"
          >
            <span className="relative z-10 flex items-center gap-2">
              {primaryBtnText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
            {/* Hover Glitch Effect (White Sweep) */}
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </Link>

          {/* Secondary Button (Outline) */}
          <Link
            href={secondaryBtnLink}
            className="group border border-neutral-700 text-neutral-500 font-bold uppercase py-4 px-10 tracking-[0.15em] hover:text-white hover:border-white transition-colors"
          >
            {secondaryBtnText}
          </Link>
        </div>
      </div>
    </section>
  );
}
