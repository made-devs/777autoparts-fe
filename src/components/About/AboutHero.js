'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutHero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }, titleRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-40 pb-20 bg-neutral-950 px-6 border-b border-neutral-800">
      <div className="container mx-auto text-center" ref={titleRef}>
        <div className="inline-flex items-center gap-2 mb-6 border border-neutral-800 bg-neutral-900/50 px-4 py-1 rounded-full">
          <span className="w-2 h-2 bg-voltage rounded-full animate-pulse"></span>
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
            Company Profile // Est. 2025
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-none mb-8 tracking-tighter">
          More Than Just <br />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
            Parts.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-neutral-400 font-mono text-sm leading-relaxed">
          Kami bukan sekadar pedagang. Kami adalah insinyur, pembalap, dan
          antusias yang mengerti bahwa setiap milimeter presisi menentukan
          kemenangan di lintasan.
        </p>
      </div>
    </section>
  );
}
