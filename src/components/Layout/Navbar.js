'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

// UPDATE: Menu items sesuai request (Home, Catalog, Gallery, News, About us, Contact)
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Catalog', href: '/catalog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News', href: '/news' },
  { name: 'About us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linkRef = useRef(null);
  const pathname = usePathname();

  // -- GSAP ANIMATION FOR MOBILE MENU --
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        // OPEN: Reveal dengan efek lingkaran membesar (Industrial Shutter)
        gsap.to(menuRef.current, {
          clipPath: 'circle(150% at 100% 0%)',
          duration: 1,
          ease: 'power2.inOut',
        });

        // Links muncul berurutan
        gsap.fromTo(
          '.mobile-link',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3 }
        );
      } else {
        // CLOSE: Tutup balik ke pojok kanan atas
        gsap.to(menuRef.current, {
          clipPath: 'circle(0% at 100% 0%)',
          duration: 0.8,
          ease: 'power3.inOut',
        });
      }
    });
    return () => ctx.revert();
  }, [isOpen]);

  // Toggle Menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* --- DESKTOP/MAIN BAR --- */}
      <nav className="relative z-50 w-full px-6 py-4 flex items-center justify-between bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-1">
          <div className="w-8 h-8 bg-[#FFF10A] flex items-center justify-center font-black text-black italic text-lg -skew-x-12">
            7
          </div>
          <span className="font-black italic text-xl tracking-tighter text-white group-hover:text-[#FFF10A] transition-colors">
            777{' '}
            <span className="text-neutral-500 font-normal not-italic text-sm tracking-widest ml-1">
              PARTS
            </span>
          </span>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm font-bold uppercase tracking-wider hover:text-[#FFF10A] transition-colors ${
                pathname === link.href ? 'text-[#FFF10A]' : 'text-neutral-400'
              }`}
            >
              {link.name}
              {/* Active Dot */}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FFF10A] rounded-full shadow-[0_0_5px_#FFF10A]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* ICONS & ACTIONS */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Icon */}
          <button className="text-white hover:text-[#FFF10A] transition-colors">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          {/* Cart Icon + Badge */}
          <button className="relative text-white hover:text-[#FFF10A] transition-colors">
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-[#FFF10A] text-black text-[10px] font-bold px-1 rounded-sm">
              2
            </span>
          </button>

          {/* HAMBURGER BUTTON (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col items-end gap-[5px] group z-50 relative"
          >
            {/* Animated Lines */}
            <span
              className={`w-8 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-[7px] bg-[#FFF10A]' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-8 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[7px] bg-[#FFF10A]' : ''
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU (GSAP Controlled) --- */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-neutral-900 z-40 flex flex-col justify-center items-center [clip-path:circle(0%_at_100%_0%)]"
      >
        {/* Decorative Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <span className="text-[40vw] font-black italic text-white leading-none">
            777
          </span>
        </div>

        {/* Menu Links */}
        <div className="relative z-10 flex flex-col gap-6 text-center">
          <div className="mb-8 text-neutral-500 font-mono text-xs tracking-[0.3em] uppercase mobile-link">
            Navigation System
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link text-5xl font-black uppercase italic text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-500 hover:to-[#FFF10A] transition-all"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-12 mobile-link">
            <button className="bg-[#FFF10A] text-black font-bold py-3 px-8 uppercase tracking-widest [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]">
              Login / Join
            </button>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="absolute bottom-10 w-full text-center mobile-link">
          <p className="text-neutral-600 text-sm font-mono">
            EST. 2025 • JAKARTA, ID
          </p>
        </div>
      </div>
    </header>
  );
}
