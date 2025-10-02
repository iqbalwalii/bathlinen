// components/AboutHero.tsx
import Image from "next/image";

export default function AboutHero() {
  return (
    <header className="relative h-[560px] md:h-[700px]">
      {/* Background image layer */}
      <div className="absolute inset-0">
        <Image
          src="/hero3.png" // replace with your hero image
          alt="About hero"
          fill
          className="object-cover"
          priority
        />
        {/* gradient wash using your theme colors */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,194,89,0.32) 0%, rgba(96,165,250,0.18) 45%, rgba(17,24,39,0.6) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl px-6 md:px-12 lg:px-20">
          <span className="inline-block bg-amber-300/60 text-stone-950 font-semibold px-3 py-1 rounded-full text-sm mb-4">
            Our Story
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-stone-950/95 mt-4">
            We craft linens that transform everyday routines into small rituals.
          </h1>

          <p className="mt-6 text-sm md:text-base lg:text-lg text-stone-950/85 max-w-2xl">
            Rooted in thoughtful design and meticulous sourcing, WarmKet blends
            heritage craftsmanship with modern textile innovation. Our collections are
            designed to feel familiar, look refined, and last — season after season.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#values"
              className="inline-block px-5 py-3 rounded-lg bg-amber-300 hover:bg-amber-400 transition font-semibold text-stone-950 shadow-md"
            >
              Explore Our Values
            </a>
            <a
              href="/products"
              className="inline-block px-5 py-3 rounded-lg border-2 border-blue-400 text-blue-400 hover:bg-blue-50 transition font-semibold"
            >
              View Products
            </a>
          </div>
        </div>
      </div>

      {/* subtle decorative starburst */}
      <div className="pointer-events-none absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-gradient-to-tr from-amber-300/30 to-blue-400/20 blur-3xl" />
    </header>
  );
}
