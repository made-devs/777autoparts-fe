'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group relative block h-full"
    >
      {/* --- CARD CONTAINER (CHAMFERED) --- */}
      <div className="relative h-full bg-neutral-900 border border-neutral-800 transition-all duration-300 group-hover:border-voltage group-hover:-translate-y-1 overflow-hidden">
        {/* Sudut Dekoratif Tech */}
        <div className="absolute top-0 right-0 p-2 z-20">
          <div className="w-2 h-2 bg-neutral-800 group-hover:bg-voltage transition-colors"></div>
        </div>

        {/* --- IMAGE AREA --- */}
        <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden border-b border-neutral-800">
          {/* Badge: Stock Status */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-black/80 backdrop-blur text-white text-[10px] font-mono px-2 py-1 border border-neutral-700 uppercase tracking-widest">
              {product.inStock ? 'IN_STOCK' : 'OUT_OF_STOCK'}
            </span>
          </div>

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
          />

          {/* Scanline Overlay (Tipis banget) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-size-[100%_4px] pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </div>

        {/* --- DETAILS AREA --- */}
        <div className="p-5 flex flex-col h-[calc(100%-aspect-square)]">
          {/* Category Tag */}
          <span className="text-xs font-mono text-neutral-500 mb-1 uppercase tracking-wider group-hover:text-voltage transition-colors">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold italic text-white uppercase leading-tight mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Spacer biar harga di bawah */}
          <div className="grow"></div>

          {/* Price & Action */}
          <div className="flex items-end justify-between mt-4 border-t border-neutral-800 pt-4 group-hover:border-neutral-600 transition-colors">
            <div>
              <span className="block text-[10px] text-neutral-500 font-mono mb-1">
                UNIT PRICE
              </span>
              <span className="text-lg font-mono text-voltage">
                ${product.price.toLocaleString()}
              </span>
            </div>

            {/* Add Button (Arrow Icon) */}
            <div className="w-8 h-8 bg-neutral-800 flex items-center justify-center text-white group-hover:bg-voltage group-hover:text-black transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
