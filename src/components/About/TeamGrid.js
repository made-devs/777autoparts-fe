'use client';
import Image from 'next/image';

const teamMembers = [
  { name: 'Alex Wijaya', role: 'Founder & Lead Engineer', id: 'OP-01' },
  { name: 'Sarah N.', role: 'Logistics Commander', id: 'OP-02' },
  { name: "Deni 'Turbo'", role: 'Technical Specialist', id: 'OP-03' },
];

export default function TeamGrid() {
  return (
    <section className="py-24 bg-neutral-950 px-6">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <span className="text-voltage font-mono text-xs uppercase tracking-widest">
            Chain of Command
          </span>
          <h2 className="text-4xl font-black italic uppercase text-white mt-2">
            The Specialists.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group bg-neutral-900 border border-neutral-800 hover:border-voltage transition-all duration-300"
            >
              {/* Photo Area */}
              <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden border-b border-neutral-800">
                {/* Placeholder Image (Siluet/Generic) */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-neutral-800 opacity-50"></div>

                {/* Tech Overlay */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-neutral-600 bg-black/50 px-2 py-1 border border-neutral-800">
                  ID: {member.id}
                </div>
              </div>

              {/* Info Area */}
              <div className="p-6 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neutral-950 border border-voltage rotate-45 group-hover:scale-125 transition-transform"></div>
                <h3 className="text-xl font-bold uppercase text-white mb-1 group-hover:text-voltage transition-colors">
                  {member.name}
                </h3>
                <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
