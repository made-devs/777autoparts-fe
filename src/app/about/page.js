import AboutHero from '@/components/About/AboutHero';
import CompanyStory from '@/components/About/CompanyStory';
import TeamGrid from '@/components/About/TeamGrid';
import Brands from '@/components/Home/Brands'; // Reuse Brands karena relevan

export default function AboutPage() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <AboutHero />
      <CompanyStory />

      {/* Brands section di-reuse untuk menunjukkan partner/supplier */}
      <div className="py-10 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-6 mb-4 text-center">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
            Trusted Partners
          </span>
        </div>
        <Brands />
      </div>

      <TeamGrid />

      {/* CTA Footer khusus About */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-black italic uppercase text-white mb-6">
          Ready to Upgrade?
        </h2>
        <a
          href="/catalog"
          className="inline-block bg-voltage text-black font-bold uppercase py-3 px-8 hover:bg-white transition-colors clip-path-button"
        >
          Explore Inventory
        </a>
      </section>
    </main>
  );
}
