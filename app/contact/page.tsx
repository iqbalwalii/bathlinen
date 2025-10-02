"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
<>
    <main className="font-sans bg-stone-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(253,224,71,0.3), transparent 40%), radial-gradient(circle at bottom right, rgba(96,165,250,0.3), transparent 40%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-amber-300 drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="mt-4 text-blue-400 text-lg max-w-2xl mx-auto">
            We’d love to hear from you. Whether you have questions, feedback, or a big idea — let’s connect.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 relative">
        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10">
          <h2 className="text-2xl font-bold text-amber-300 mb-6">Send us a Message</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-amber-300 to-blue-400 text-stone-950 shadow-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-amber-300" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-blue-400">support@warmket.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-blue-400">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-amber-300" />
              <div>
                <h3 className="font-semibold text-lg">Visit Us</h3>
                <p className="text-blue-400">
                  123 Linen Street, Mumbai, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Glows */}
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
      </section>
    </main>
    <Footer/>
    </>
  );
}
