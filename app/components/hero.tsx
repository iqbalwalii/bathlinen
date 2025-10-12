    "use client";

import { useState, useEffect } from "react";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.png",
]; // replace with your images

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[650px] w-full overflow-hidden">
      {/* Background images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
     <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 text-left text-white">
        <p className="text-xs sm:text-lg md:text-sm font-bold mb-4">
          Welcome to WarmKet
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium mb-2 text-amber-300">
          Experience Unrivaled <br/> Comfort with Our <br/>Luxury Collection
        </h1>
        <p className="text-sm sm:text-lg md:text-xl max-w-xl">
          Discover Exquisite Bed, Bath, and Table Linens    
          <br />
          Crafted for Your Everyday Elegance
        </p>
      </div>
    </section>
  );
}
