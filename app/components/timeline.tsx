// components/Timeline.tsx
export default function Timeline() {
  const items = [
    { year: "2007", title: "Born from a small studio", desc: "Our founder began designing bedding for local boutiques." },
    { year: "2012", title: "First linen collection", desc: "We launched our first signature linen collection to critical praise." },
    { year: "2018", title: "Sustainable shift", desc: "Started sourcing organic and low-impact fibers in our core lines." },
    { year: "2024", title: "Global reach", desc: "Expanded to major retail partners and launched our direct-to-customer site." },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Our Journey</h2>

      <ol className="relative border-l-2 border-stone-950/10 ml-4 md:ml-8">
        {items.map((it, idx) => (
          <li key={idx} className="mb-8 ml-6">
            <span className="absolute -left-[1.15rem] flex items-center justify-center w-7 h-7 rounded-full bg-blue-400 text-white font-bold text-xs">
              {it.year}
            </span>

            <h3 className="text-lg font-semibold text-stone-950">{it.title}</h3>
            <p className="text-sm text-stone-950/75 mt-1">{it.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
