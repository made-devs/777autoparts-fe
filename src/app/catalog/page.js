import CatalogHeader from '@/components/Catalog/CatalogHeader';
import FilterSidebar from '@/components/Catalog/FilterSidebar';
import ProductGrid from '@/components/Catalog/ProductGrid';
import { products } from '@/data/products';

export default function CatalogPage() {
  return (
    <main className="bg-neutral-950 min-h-screen pt-24 pb-20">
      {/* 1. Page Title & Info */}
      <CatalogHeader totalItems={products.length} />

      {/* 2. Main Content Layout */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Left Panel: Filters */}
        <FilterSidebar />

        {/* Right Panel: Products */}
        <ProductGrid items={products} />
      </div>
    </main>
  );
}
