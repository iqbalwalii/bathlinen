// components/Values.tsx
import { Leaf, Award, Users } from "lucide-react";

const values = [
  {
    title: "Sustainable Sourcing",
    icon: Leaf,
    blurb:
      "We source fibers with respect for the planet — organic and responsibly harvested where possible.",
  },
  {
    title: "Craftsmanship & Detail",
    icon: Award,
    blurb:
      "Decades of experience go into each seam, stitch and finish — quality you can feel from the first touch.",
  },
  {
    title: "People First",
    icon: Users,
    blurb:
      "We invest in our people and partners — fair trade practices, safe factories, and transparent relationships.",
  },
];

export default function Values() {
  return (
    <section id="values" className="mt-8 grid gap-6 sm:grid-cols-3">
      {values.map((v, i) => {
        const Icon = v.icon;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-300/30">
              <Icon className="w-6 h-6 text-amber-300" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-stone-950">
              {v.title}
            </h3>

            <p className="mt-2 text-sm text-stone-950/80">{v.blurb}</p>
          </div>
        );
      })}
    </section>
  );
}
