"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold">Bed & Bath Linen</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-600">About</a>
          <a href="#choose" className="hover:text-gray-600">Why Choose Us</a>
          <a href="#help" className="hover:text-gray-600">Help</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col px-6 pb-4 space-y-4 md:hidden bg-white">
          <a href="#about" className="hover:text-gray-600">About</a>
          <a href="#choose" className="hover:text-gray-600">Why Choose Us</a>
          <a href="#help" className="hover:text-gray-600">Help</a>
        </div>
      )}
    </nav>
  );
}
