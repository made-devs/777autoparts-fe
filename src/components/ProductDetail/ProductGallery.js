'use client';
import Image from 'next/image';

export default function ProductGallery({ image, name }) {
  return (
    <div className="w-full lg:w-1/2">
      <div className="sticky top-28">
        {/* Main Image Frame */}
        <div className="relative aspect-square w-full bg-neutral-900 border border-neutral-800 overflow-hidden group">
          {/* Tech Overlay */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] font-mono text-voltage border border-voltage px-2 py-1 bg-black/50 backdrop-blur">
              IMG_SOURCE: 01
            </span>
          </div>

          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
            priority
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-[0.03] pointer-events-none"></div>
        </div>

        {/* Thumbnails (Dummy) */}
        <div className="flex gap-4 mt-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-20 w-20 border ${
                i === 1 ? 'border-voltage' : 'border-neutral-800'
              } bg-neutral-900 cursor-pointer hover:border-neutral-500 transition-colors`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
