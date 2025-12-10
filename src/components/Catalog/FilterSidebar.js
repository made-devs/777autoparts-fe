'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import {
  FiChevronDown,
  FiChevronUp,
  FiFilter,
  FiRefreshCw,
} from 'react-icons/fi';

// Sub-component: Filter Section (Accordion)
const FilterSection = ({ title, isOpen, toggle, children }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        duration: 0.4,
        ease: 'power3.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-neutral-800 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-4 group hover:bg-neutral-900 transition-colors px-2"
      >
        <span className="font-bold uppercase tracking-wider text-xs text-white group-hover:text-voltage flex items-center gap-2">
          {/* Lampu indikator kecil */}
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isOpen ? 'bg-voltage shadow-[0_0_8px_#FFF10A]' : 'bg-neutral-600'
            }`}
          ></span>
          {title}
        </span>
        <span className="text-neutral-500 group-hover:text-white transition-colors">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden h-0">
        <div className="pb-6 px-2">{children}</div>
      </div>
    </div>
  );
};

// Sub-component: Technical Checkbox
const TechCheckbox = ({ label, count }) => (
  <label className="flex items-center justify-between cursor-pointer group mb-3 last:mb-0">
    <div className="flex items-center gap-3">
      <div className="relative w-4 h-4 border border-neutral-600 group-hover:border-voltage transition-colors flex items-center justify-center">
        <input
          type="checkbox"
          className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer z-10"
        />
        <div className="w-2 h-2 bg-voltage opacity-0 peer-checked:opacity-100 transition-opacity"></div>
      </div>
      <span className="text-neutral-400 font-mono text-xs uppercase group-hover:text-white transition-colors">
        {label}
      </span>
    </div>
    {count && (
      <span className="text-[10px] text-neutral-600 font-mono">[{count}]</span>
    )}
  </label>
);

export default function FilterSidebar() {
  // State untuk accordion
  const [openSections, setOpenSections] = useState({
    category: true,
    brand: true,
    price: true,
    availability: false,
  });

  // Generate random counts sekali saat mount
  const [categoryCounts] = useState(() =>
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 50) + 1)
  );

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="w-full lg:w-1/4 shrink-0">
      <div className="sticky top-24 bg-neutral-950 border border-neutral-800 p-1">
        {/* --- HEADER PANEL --- */}
        <div className="bg-neutral-900 p-4 border-b border-neutral-800 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <FiFilter className="text-voltage" />
            <span className="font-black italic uppercase tracking-tighter text-sm">
              Control Panel
            </span>
          </div>
          <button className="text-[10px] font-mono text-neutral-500 hover:text-voltage flex items-center gap-1 uppercase tracking-wider group">
            <FiRefreshCw className="group-hover:rotate-180 transition-transform duration-500" />
            Reset
          </button>
        </div>

        {/* --- FILTERS CONTAINER --- */}
        <div className="px-2">
          {/* 1. CATEGORIES */}
          <FilterSection
            title="System Type"
            isOpen={openSections.category}
            toggle={() => toggleSection('category')}
          >
            <div className="flex flex-col">
              {[
                'Engine Bay',
                'Suspension',
                'Braking',
                'Exhaust',
                'Wheels',
                'Aero Kits',
              ].map((cat, i) => (
                <TechCheckbox key={i} label={cat} count={categoryCounts[i]} />
              ))}
            </div>
          </FilterSection>

          {/* 2. BRAND / MANUFACTURER */}
          <FilterSection
            title="Manufacturer"
            isOpen={openSections.brand}
            toggle={() => toggleSection('brand')}
          >
            <div className="flex flex-col">
              {[
                'HKS',
                'Garrett',
                'Brembo',
                'Öhlins',
                'Rays Engineering',
                'GReddy',
              ].map((brand, i) => (
                <TechCheckbox key={i} label={brand} />
              ))}
            </div>
          </FilterSection>

          {/* 3. PRICE RANGE (Technical Slider Input) */}
          <FilterSection
            title="Budget Range"
            isOpen={openSections.price}
            toggle={() => toggleSection('price')}
          >
            <div className="space-y-4">
              {/* Visual Bar Graph (Dekoratif) */}
              <div className="flex items-end gap-1 h-8 opacity-30">
                {[20, 40, 30, 70, 50, 80, 40, 60, 20, 10].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-voltage"
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <span className="absolute -top-3 left-0 text-[9px] text-neutral-500 font-mono">
                    MIN
                  </span>
                  <div className="flex items-center border border-neutral-700 bg-neutral-900 px-2 py-1 focus-within:border-voltage transition-colors">
                    <span className="text-neutral-500 text-xs">$</span>
                    <input
                      type="number"
                      className="w-full bg-transparent text-white font-mono text-xs outline-none text-right"
                      placeholder="0"
                    />
                  </div>
                </div>
                <span className="text-neutral-600 font-mono">-</span>
                <div className="relative flex-1">
                  <span className="absolute -top-3 left-0 text-[9px] text-neutral-500 font-mono">
                    MAX
                  </span>
                  <div className="flex items-center border border-neutral-700 bg-neutral-900 px-2 py-1 focus-within:border-voltage transition-colors">
                    <span className="text-neutral-500 text-xs">$</span>
                    <input
                      type="number"
                      className="w-full bg-transparent text-white font-mono text-xs outline-none text-right"
                      placeholder="5000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FilterSection>

          {/* 4. AVAILABILITY */}
          <FilterSection
            title="Stock Status"
            isOpen={openSections.availability}
            toggle={() => toggleSection('availability')}
          >
            <div className="flex flex-col">
              <TechCheckbox label="Ready to Ship" count={120} />
              <TechCheckbox label="Pre-Order" count={15} />
            </div>
          </FilterSection>
        </div>

        {/* --- APPLY BUTTON --- */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-900/50">
          <button className="w-full relative group overflow-hidden bg-white text-black font-bold uppercase py-3 px-4 text-xs tracking-widest hover:bg-voltage transition-colors clip-path-button">
            <span className="relative z-10">Apply Configuration</span>
            {/* Hover Glitch Effect */}
            <div className="absolute inset-0 bg-voltage translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </button>
        </div>
      </div>
    </aside>
  );
}
