'use client';

export default function ProductInfo({ product }) {
  return (
    <div className="mb-10">
      {/* Breadcrumb / ID */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-2 h-2 bg-voltage animate-pulse"></span>
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
          PID: {product.id.toString().padStart(4, '0')} {'// '}
          {product.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-black italic uppercase text-white leading-none mb-6">
        {product.name}
      </h1>

      {/* Price & Stock */}
      <div className="flex items-end justify-between border-b border-neutral-800 pb-6 mb-6">
        <div>
          <span className="block font-mono text-xs text-neutral-500 mb-1">
            UNIT COST
          </span>
          <span className="text-3xl font-mono text-voltage font-bold">
            Rp {product.price.toLocaleString()}
          </span>
        </div>
        <div className="text-right">
          <span
            className={`font-mono text-xs px-2 py-1 border ${
              product.inStock
                ? 'border-green-500 text-green-500'
                : 'border-red-500 text-red-500'
            } bg-black uppercase`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-400 leading-relaxed mb-8 border-l-2 border-neutral-800 pl-4">
        {product.description}
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="flex-1 bg-voltage text-black font-bold uppercase py-4 hover:bg-white transition-colors clip-path-button relative overflow-hidden group">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Add to Manifest
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </span>
        </button>
        <button className="w-16 border border-neutral-700 flex items-center justify-center hover:border-voltage hover:text-voltage transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
