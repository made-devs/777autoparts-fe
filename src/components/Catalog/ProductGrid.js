'use client';
import ProductCard from './ProductCard';

export default function ProductGrid({ items }) {
  return (
    <div className="w-full lg:w-3/4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((product) => (
          <div key={product.id} className="h-[450px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Pagination / Load More */}
      <div className="mt-16 text-center">
        <button className="text-neutral-500 font-mono text-xs uppercase tracking-widest hover:text-voltage animate-pulse">
          [ LOAD MORE DATA ]
        </button>
      </div>
    </div>
  );
}
