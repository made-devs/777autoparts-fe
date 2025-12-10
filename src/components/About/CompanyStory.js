'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CompanyStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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
      className="py-24 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: IMAGE COMPOSITION */}
          <div className="story-item relative group">
            <div className="absolute -inset-4 border border-voltage/30 opacity-50 group-hover:opacity-100 transition-opacity rounded-sm"></div>
            <div className="relative aspect-[4/5] bg-neutral-800 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src="/Home/mesin.webp"
                alt="Engine Room"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black/80 p-4 border-t border-r border-voltage">
                <p className="text-voltage font-mono text-xs">
                  SOURCE: HQ_JAKARTA
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="space-y-12">
            <div className="story-item">
              <h2 className="text-3xl font-bold uppercase text-white mb-4 flex items-center gap-3">
                <span className="text-voltage">01.</span> The Origin
              </h2>
              <p className="text-neutral-400 leading-relaxed border-l-2 border-neutral-800 pl-4">
                777 Auto Part lahir dari rasa frustrasi akan sulitnya
                mendapatkan komponen performa tinggi yang autentik di Indonesia.
                Dimulai dari garasi kecil di Jakarta Selatan, kami tumbuh
                menjadi kurator *aftermarket parts* terpercaya untuk komunitas
                *tuning* tanah air.
              </p>
            </div>

            <div className="story-item">
              <h2 className="text-3xl font-bold uppercase text-white mb-4 flex items-center gap-3">
                <span className="text-voltage">02.</span> Our Philosophy
              </h2>
              <p className="text-neutral-400 leading-relaxed border-l-2 border-neutral-800 pl-4">
                <strong>&quot;Precision or Nothing.&quot;</strong> Kami hanya
                menjual apa yang kami sendiri berani pakai di mobil kami. Setiap
                baut, setiap turbin, dan setiap kampas rem telah melalui kurasi
                ketat. Tidak ada barang KW, tidak ada kompromi.
              </p>
            </div>

            {/* STATS ROW */}
            <div className="story-item grid grid-cols-2 gap-6 pt-6 border-t border-neutral-800">
              <div>
                <span className="block text-4xl font-black italic text-white">
                  100%
                </span>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Authentic Parts
                </span>
              </div>
              <div>
                <span className="block text-4xl font-black italic text-white">
                  24/7
                </span>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Expert Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
