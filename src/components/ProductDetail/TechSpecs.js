export default function TechSpecs({ specs }) {
  if (!specs) return null;

  return (
    <div className="bg-neutral-900 border border-neutral-800 p-6">
      <h3 className="font-mono text-xs text-voltage uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="w-1 h-1 bg-voltage rounded-full"></span>
        Technical Specifications
      </h3>

      <div className="space-y-3">
        {specs.map((spec, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b border-neutral-800 pb-2 last:border-0 font-mono text-sm"
          >
            <span className="text-neutral-500 uppercase">{spec.label}</span>
            <span className="text-white text-right">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
