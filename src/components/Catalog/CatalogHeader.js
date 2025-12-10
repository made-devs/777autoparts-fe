export default function CatalogHeader({ totalItems }) {
  return (
    <div className="container mx-auto px-6 mb-12">
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-voltage font-mono text-xs tracking-widest uppercase mb-2 block">
            / System / Inventory
          </span>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase text-white leading-none">
            Part <span className="text-yellow-400">Database.</span>
          </h1>
        </div>
        <div className="text-right">
          <p className="text-neutral-400 font-mono text-xs uppercase">
            Items Loaded: <span className="text-white">{totalItems}</span>
          </p>
          <p className="text-neutral-600 font-mono text-[10px] mt-1">
            LAST UPDATE: 2025-03-10 14:00
          </p>
        </div>
      </div>
    </div>
  );
}
