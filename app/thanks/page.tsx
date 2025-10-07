"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 via-blue-50 to-white overflow-hidden relative">
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-300/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full" />

      {/* Logo Animation */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Top (Left Logo) */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mb-4"
        >
          <Image
            src="/logo-left.png" // top logo image
            alt="Warmket top logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </motion.div>

        {/* Bottom (Right Logo) */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
          <Image
            src="/logo-right.png" // bottom logo image
            alt="Warmket bottom logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Text Message */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-stone-950 mt-8 text-center"
      >
        Thank You! <br /> We’ve received your message.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="text-blue-600 mt-2 text-center text-sm md:text-base"
      >
        Redirecting you to home...
      </motion.p>
    </div>
  );
}
