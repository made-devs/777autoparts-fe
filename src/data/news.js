// src/data/news.js
export const newsItems = [
  {
    id: 1,
    title: 'DYNO REPORT: HKS Hi-Power Spec-L II pada GR Yaris',
    slug: 'hks-gr-yaris-dyno-test',
    date: '2025.03.01',
    category: 'TECH_LOG',
    author: 'Chief Engineer',
    image: '/Home/exhaust.webp',
    content: `
      <p>Pengujian Dynojet hari ini mengonfirmasi kenaikan performa signifikan pada platform GR Yaris menggunakan sistem pembuangan HKS Hi-Power Spec-L II.</p>
      <h3>Data Telemetri:</h3>
      <ul>
        <li><strong>Peak Power:</strong> +8.5 HP @ 6500 RPM</li>
        <li><strong>Weight Reduction:</strong> -4.2 kg dibanding stock</li>
        <li><strong>Sound Level:</strong> 92dB (Street Legal)</li>
      </ul>
      <p>Material SUS304 yang digunakan sangat ringan, dengan ketebalan dinding pipa hanya 0.8mm namun tetap mempertahankan rigiditas struktural. Aliran gas buang meningkat 15% berkat desain straight-through muffler.</p>
      <p>Unit ini sekarang tersedia untuk pre-order di Inventory kami.</p>
    `,
    excerpt:
      'Analisa lengkap kenaikan HP dan torsi serta pengurangan bobot pada GR Yaris setelah instalasi exhaust system HKS.',
  },
  {
    id: 2,
    title: 'RESTOCK ALERT: Rays Volk Racing TE37 Saga S-Plus',
    slug: 'rays-te37-restock',
    date: '2025.02.28',
    category: 'INVENTORY',
    author: 'Logistics',
    image: '/Home/wheel.webp',
    content: `
      <p>Kargo baru dari Jepang telah mendarat. Batch terbaru TE37 Saga S-Plus kini tersedia dalam spesifikasi agresif untuk chassis GT-R dan Supra.</p>
      <h3>Spesifikasi Masuk:</h3>
      <ul>
        <li>18x9.5J +22 5x114.3 (Bronze)</li>
        <li>18x10.5J +15 5x114.3 (Diamond Dark Gunmetal)</li>
        <li>19x9.5J +25 5x112 (Matte Black - Supra Spec)</li>
      </ul>
      <p>Velg ini menggunakan metode *Mold-Form Forging* paten Rays yang memberikan kekuatan struktural superior untuk penggunaan track berat. Stok sangat terbatas.</p>
    `,
    excerpt:
      'Batch baru mendarat dari Jepang. Spesifikasi agresif untuk R35, Supra A90, dan Civic Type R kini tersedia.',
  },
  {
    id: 3,
    title: 'PROJECT UPDATE: BMW M4 Competition Track Build',
    slug: 'bmw-m4-track-build',
    date: '2025.02.25',
    category: 'WORKSHOP',
    author: 'Head Mechanic',
    image: '/Home/braking.webp',
    content: `
      <p>Fase 1 dari project M4 "Track Weapon" telah selesai. Fokus utama minggu ini adalah upgrade sistem pengereman untuk menangani panas ekstrem di Sentul.</p>
      <p>Kami menginstalasi kit Brembo GT 6-Piston dengan rotor 380mm type-3 slot. Pad menggunakan Endless ME20 untuk gigitan awal yang tajam namun modulasi yang presisi.</p>
      <p>Selanjutnya: Suspensi KW Clubsport 3-Way akan dipasang minggu depan untuk menyempurnakan corner weighting.</p>
    `,
    excerpt:
      'Instalasi Brembo GT Kit dan setup awal kaki-kaki untuk persiapan track day di Sirkuit Sentul.',
  },
];
