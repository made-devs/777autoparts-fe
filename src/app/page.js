import Brands from "@/components/Home/Brands";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Marquee from "@/components/Home/Marquee";
import Promo from "@/components/Home/Promo";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white selection:bg-[#FFF10A] selection:text-black">
      <Hero />
      <Marquee />
      <Promo />
      <Brands />
      <Categories />
      <Stats />
      <Testimonials />

      {/* Spacer sementara buat test scroll */}
      <div className="h-[50vh] flex items-center justify-center text-neutral-800">
        More Content Coming Soon...
      </div>
    </main>
  );
}
