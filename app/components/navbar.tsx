"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Modal from "./modal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
                <div className="flex flex-row items-center">
                  <img src="/logo.svg" width={50} height={50} className="text-amber-900"/>
                  
                          <h1 className="text-xl md:text-2xl font-bold">WarmKet</h1>
                </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center justify-center">
          <a href="/" className="hover:text-gray-600">Home</a>
          <a href="/about" className="hover:text-gray-600">About</a>
          <a href="/products" className="hover:text-gray-600">Products</a>
          <button onClick={() => setIsModalOpen(true)} className="bg-stone-950 text-white  p-2 rounded hover:bg-amber-200 hover:text-stone-800">Get a Quote</button>
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
          <a href="/" className="hover:text-gray-600">Home</a>
          <a href="/about" className="hover:text-gray-600">About</a>
          <a href="/products" className="hover:text-gray-600">Products</a>
          <button onClick={() => setIsModalOpen(true)} className="bg-stone-950 text-white  p-2 rounded hover:bg-amber-200 hover:text-stone-800">Get a Quote</button>
        </div>
      )}
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-semibold mb-4">Get a Quote</h2>
        <p className="text-gray-600 mb-4">
          Fill out the form below and we’ll get back to you with a personalized quote.
        </p>
        <form className="space-y-4 flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <textarea
            placeholder="Your Requirements"
            rows={4}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-30 bg-amber-300 hover:bg-blue-400 hover:text-white text-black-700- font-bold py-2 px-4 rounded transition"
          >
            Submit
          </button>
        </form>
      </Modal>
    </nav>
  );
}
