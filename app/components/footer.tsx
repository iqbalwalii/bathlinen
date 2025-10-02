import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white relative overflow-hidden before:absolute before:w-72 before:h-72 before:rounded-full before:bg-amber-300/10 before:blur-3xl before:-top-20 before:-left-20 after:absolute after:w-72 after:h-72 after:rounded-full after:bg-blue-400/10 after:blur-3xl after:-bottom-20 after:-right-20">
      {/* Glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-300/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 relative z-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-amber-300">WarmKet</h2>
          <p className="mt-3 text-sm text-blue-400">
            Experience unrivaled comfort with our luxury collection.  
            Crafted for your everyday elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-400">
            <li><a href="/" className="hover:text-amber-300 transition">Home</a></li>
            <li><a href="/products" className="hover:text-amber-300 transition">Products</a></li>
            <li><a href="/about" className="hover:text-amber-300 transition">About</a></li>
            <li><a href="/contact" className="hover:text-amber-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">Connect With Us</h3>
          <p className="text-sm text-blue-400 mb-4">
            support@warmket.com  
            <br /> +91 98765 43210
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-300 transition"><Facebook /></a>
            <a href="#" className="hover:text-amber-300 transition"><Instagram /></a>
            <a href="#" className="hover:text-amber-300 transition"><Twitter /></a>
            <a href="mailto:support@war.com" className="hover:text-amber-300 transition"><Mail /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-8 py-6 text-center text-sm text-blue-400">
        © {new Date().getFullYear()} Warmket. All rights reserved.
      </div>
    </footer>
  );
}
