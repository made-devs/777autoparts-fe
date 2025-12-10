import { newsItems } from '@/data/news';
import Image from 'next/image';
import Link from 'next/link';

export default async function NewsDetailPage({ params }) {
  // Await params untuk Next.js terbaru
  const { slug } = await params;
  const news = newsItems.find((item) => item.slug === slug);

  if (!news) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white font-mono">
        ERROR: LOG NOT FOUND
      </div>
    );
  }

  return (
    <main className="bg-neutral-950 min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Navigasi Balik */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-voltage font-mono text-xs uppercase tracking-widest mb-8 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{' '}
          Return to Log
        </Link>

        {/* Header Artikel */}
        <div className="mb-10 border-l-4 border-voltage pl-6 md:pl-10">
          <div className="flex flex-wrap gap-4 mb-4 font-mono text-xs text-neutral-400 uppercase tracking-wider">
            <span className="text-voltage">[{news.category}]</span>
            <span>
              {`//`} {news.date}
            </span>
            <span>
              {`//`} {news.author}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white leading-none">
            {news.title}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video bg-neutral-900 border border-neutral-800 mb-12 group overflow-hidden">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
          {/* Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-size-[100%_4px] pointer-events-none"></div>
        </div>

        {/* Konten Artikel */}
        <article className="prose prose-invert prose-lg max-w-none font-mono text-neutral-300">
          {/* Kita pakai dangerouslySetInnerHTML karena kontennya HTML string */}
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        </article>

        {/* Footer Artikel */}
        <div className="mt-20 pt-10 border-t border-neutral-800 flex justify-between items-center">
          <div className="text-xs font-mono text-neutral-500">
            END OF TRANSMISSION
          </div>
          <div className="flex gap-4">
            {/* Tombol Share Dummy */}
            <button className="text-white hover:text-voltage font-bold uppercase text-xs tracking-widest">
              Share Log
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
