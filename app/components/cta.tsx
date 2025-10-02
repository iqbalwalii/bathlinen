// components/CTA.tsx
export default function CTA() {
  return (
    <section className="mt-12 mb-20 bg-stone-950 text-white rounded-2xl p-8 md:p-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Ready to experience linen reimagined?</h3>
          <p className="mt-2 text-sm md:text-base text-stone-50/90 max-w-xl">
            Get in touch for bespoke collections, bulk pricing, and curated samples. We love collaborating with designers and retailers.
          </p>
        </div>

        <div className="flex gap-3">
          <a href="/contact" className="px-5 py-3 rounded-lg bg-amber-300 text-stone-950 font-semibold hover:bg-amber-400 transition">
            Contact Sales
          </a>
          <a href="/products" className="px-5 py-3 rounded-lg border-2 border-blue-400 text-blue-400 hover:bg-blue-50 transition">
            Shop Collections
          </a>
        </div>
      </div>
    </section>
  );
}
