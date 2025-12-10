import { newsItems } from '@/data/news';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <main className="bg-neutral-950 min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="mb-16 border-b border-neutral-800 pb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 bg-voltage animate-pulse"></span>
            <span className="text-voltage font-mono text-xs uppercase tracking-[0.2em]">
              System Broadcast
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-none">
            News <span className="text-yellow-400">Log.</span>
          </h1>
        </div>

        {/* NEWS LIST (Vertical Stack) */}
        <div className="flex flex-col gap-px bg-neutral-800 border border-neutral-800">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="group relative block bg-neutral-950 hover:bg-neutral-900 transition-colors p-6 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Image Thumbnail */}
                <div className="w-full md:w-80 aspect-video relative shrink-0 bg-neutral-900 overflow-hidden border border-neutral-800 group-hover:border-voltage/50 transition-colors">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                  {/* Category Tag Overlay */}
                  <div className="absolute top-0 left-0 bg-black/80 backdrop-blur px-3 py-1 border-r border-b border-neutral-800">
                    <span className="text-[10px] font-mono text-voltage uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="grow py-2">
                  <div className="flex items-center gap-4 mb-3 text-xs font-mono text-neutral-500">
                    <span>
                      {`//`} DATE: {item.date}
                    </span>
                    <span>
                      {`//`} AUTHOR: {item.author}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black italic uppercase text-white mb-4 group-hover:text-voltage transition-colors leading-[0.9]">
                    {item.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl font-mono border-l-2 border-neutral-800 pl-4 group-hover:border-voltage/50 transition-colors">
                    {item.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-voltage text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2.5 group-hover:translate-x-0 duration-300">
                    Read Transmission <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
