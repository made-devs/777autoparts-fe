export const products = [
  {
    id: 1,
    name: 'Garrett G25-660 Turbocharger',
    category: 'Engine Bay',
    price: 39200000, // Rp 39.200.000
    inStock: true,
    slug: 'garrett-g25-660',
    image: '/turbocharger.webp',
    description:
      'The G-Series G25-660 advanced small frame ball bearing turbocharger encompasses the most modern technology and engineering achievements in turbocharging. Designed for 1.4L - 3.0L engines.',
    specs: [
      { label: 'Horsepower', value: '350 - 660 HP' },
      { label: 'Displacement', value: '1.4L - 3.0L' },
      { label: 'Compressor Inducer', value: '54mm' },
      { label: 'Compressor Exducer', value: '67mm' },
      { label: 'Turbine Wheel', value: 'Mar-M 105 Alloy' },
    ],
  },
  {
    id: 2,
    name: 'Brembo GT Big Brake Kit 6-Piston',
    category: 'Braking',
    price: 60800000, // Rp 60.800.000
    inStock: true,
    slug: 'brembo-gt-kit',
    image: '/Home/braking.webp',
    description:
      'Complete braking upgrade system designed for track-day enthusiasts. Features monobloc 6-piston calipers and drilled floating discs for maximum heat dissipation.',
    specs: [
      { label: 'Caliper Type', value: '6-Piston Monobloc' },
      { label: 'Disc Size', value: '380mm x 34mm' },
      { label: 'Disc Type', value: 'Drilled / Slotted' },
      { label: 'Material', value: 'Cast Aluminum' },
    ],
  },
  {
    id: 3,
    name: 'HKS Hi-Power Spec-L II Exhaust',
    category: 'Exhaust',
    price: 19200000, // Rp 19.200.000
    inStock: false,
    slug: 'hks-exhaust-spec-l',
    image: '/Home/exhaust.webp',
    description:
      'Ultra-lightweight stainless steel exhaust system. Designed to reduce weight and improve exhaust flow for naturally aspirated and turbocharged engines.',
    specs: [
      { label: 'Material', value: 'SUS304 Stainless' },
      { label: 'Pipe Diameter', value: '65mm - 50mm x 2' },
      { label: 'Tip Size', value: '94mm Titanium' },
      { label: 'Noise Level', value: '92dB' },
    ],
  },
  {
    id: 4,
    name: 'Öhlins Road & Track Coilovers',
    category: 'Suspension',
    price: 46400000, // Rp 46.400.000
    inStock: true,
    slug: 'ohlins-road-track',
    image: '/Home/suspension.webp',
    description:
      'Dual Flow Valve (DFV) technology provides the perfect balance between track performance and road comfort. Fully adjustable ride height and damping.',
    specs: [
      { label: 'Technology', value: 'DFV (Dual Flow Valve)' },
      { label: 'Adjustment', value: '20 Clicks Rebound' },
      { label: 'Spring Rate F/R', value: '10kg / 8kg' },
      { label: 'Mounts', value: 'Pillowball Upper' },
    ],
  },
  {
    id: 5,
    name: 'Wiseco Forged Piston Set',
    category: 'Engine Bay',
    price: 13600000, // Rp 13.600.000
    inStock: true,
    slug: 'wiseco-pistons',
    image: '/Home/piston1.webp',
    description:
      'Forged from 2618 aerospace alloy for superior strength-to-weight ratio. Includes armor glide skirt coating for reduced friction.',
    specs: [
      { label: 'Bore Size', value: '86.0mm / 86.5mm' },
      { label: 'Compression', value: '10.0:1 / 12.5:1' },
      { label: 'Material', value: '2618 Alloy' },
      { label: 'Pin Diameter', value: '22mm' },
    ],
  },
  {
    id: 6,
    name: 'Rays Volk Racing TE37',
    category: 'Wheels',
    price: 15200000, // Rp 15.200.000
    inStock: true,
    slug: 'volk-te37',
    image: '/Home/wheel.webp',
    description:
      'The original forged sports wheel. Lightweight, rigid, and timeless design. The benchmark for all touring car racing wheels.',
    specs: [
      { label: 'Size', value: '18x9.5J' },
      { label: 'Offset', value: '+38 / +22' },
      { label: 'PCD', value: '5x114.3' },
      { label: 'Weight', value: '8.2kg approx' },
    ],
  },
];
