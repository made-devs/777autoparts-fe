import GalleryGrid from '@/components/Gallery/GalleryGrid';

export default function GalleryPage() {
  return (
    <main className="bg-neutral-950 min-h-screen pt-32 pb-20">
      {/* PAGE HEADER */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-voltage font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
          Visual Archive
        </span>
        <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-none mb-6">
          The{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-700">
            Showroom.
          </span>
        </h1>
        <p className="text-neutral-400 font-mono text-sm max-w-xl mx-auto">
          A curated collection of our finest builds, parts close-ups, and track
          day captures. Authenticity captured in high resolution.
        </p>
      </div>

      {/* GALLERY COMPONENT */}
      <div className="container mx-auto px-4">
        <GalleryGrid />
      </div>
    </main>
  );
}
