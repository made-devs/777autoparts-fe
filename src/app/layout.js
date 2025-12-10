import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import './globals.css';
// Import font yang sesuai dengan karakter "Bold & Technical"
import { Inter, Oswald, JetBrains_Mono } from 'next/font/google';

// 1. Body Font: Bersih, Modern
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// 2. Display Font: Agresif, Lebar, Maskulin (Untuk Heading)
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

// 3. Technical Font: Engineering look (Untuk Specs/Numbers)
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: '777 Auto Part | High Performance Components',
  description:
    'Premium aftermarket components for the modern enthusiast. Engineered for speed.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[#0A0A0A] text-white antialiased overflow-x-hidden selection:bg-[#FFF10A] selection:text-black">
        {/* Background Global Texture (Grid Halus ala Blueprint) */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
