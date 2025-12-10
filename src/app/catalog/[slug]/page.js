import { products } from '@/data/products';
import ProductGallery from '@/components/ProductDetail/ProductGallery';
import ProductInfo from '@/components/ProductDetail/ProductInfo';
import TechSpecs from '@/components/ProductDetail/TechSpecs';
import Link from 'next/link';

export default async function ProductDetailPage({ params }) {
  // Await params di Next.js 15+ (kalau masih Next 14 kebawah bisa langsung akses)
  const { slug } = await params;

  // Cari produk berdasarkan slug
  const product = products.find((p) => p.slug === slug);

  // Jika tidak ditemukan (Bisa ganti komponen Not Found custom nanti)
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white font-mono">
        SYSTEM ERROR: PRODUCT NOT FOUND
      </div>
    );
  }

  return (
    <main className="bg-neutral-950 min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-voltage font-mono text-xs uppercase tracking-widest mb-8 transition-colors"
        >
          ← Return to Database
        </Link>

        {/* --- MAIN LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Gallery */}
          <ProductGallery image={product.image} name={product.name} />

          {/* Right Column: Info & Specs */}
          <div className="w-full lg:w-1/2">
            <ProductInfo product={product} />
            <TechSpecs specs={product.specs} />
          </div>
        </div>
      </div>
    </main>
  );
}
