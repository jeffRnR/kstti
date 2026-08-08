// src/components/home/Stats.tsx

const stats = [
  { value: "2", label: "Campuses" },
  { value: "100%", label: "Practical Learning" },
  { value: "Small", label: "Class Sizes" },
  { value: "Career", label: "Focused Training" },
];

export default function Stats() {
  return (
    <section className="section bg-[#0A0A0A]">
      <div className="container-xl">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-2 bg-white/5 px-8 py-12 text-center"
            >
              <span className="font-[family:var(--font-serif)] text-5xl font-bold text-[#E5AD23]">
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}