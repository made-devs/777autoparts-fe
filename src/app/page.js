import Brands from '@/components/Home/Brands';
import Categories from '@/components/Home/Categories';
import Hero from '@/components/Home/Hero';
import Marquee from '@/components/Home/Marquee';
import Promo from '@/components/Home/Promo';
import Stats from '@/components/Home/Stats';
import Testimonials from '@/components/Home/Testimonials';
import FilterSearch from '../components/Home/FilterSearch';
import FeaturedProduct from '../components/Home/FeaturedProduct';
import NewsSection from '../components/Home/NewsSection';
import CTASection from '../components/Layout/CTASection';

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white selection:bg-[#FFF10A] selection:text-black">
      <Hero />
      <FilterSearch />
      <Marquee />
      <Promo />
      <Brands />
      <Categories />
      <FeaturedProduct />
      <Stats />
      <Testimonials />
      <NewsSection />
      <CTASection
        title={'Push The <span class="text-yellow-400">Limits</span>.'}
      />
    </main>
  );
}
