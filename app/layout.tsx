import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Warmket",
  description:
    "Discover exquisite bed, bath, and table linens crafted for everyday elegance. Bed & Bath Linen offers luxury, comfort, and style for your home.",
  keywords: [
    "Bed Linen",
    "Bath Linen",
    "Table Linen",
    "Luxury Bedding",
    "Premium Towels",
    "Home Decor",
    "Linen",
    "hotel linen",
    "hotel bedding",
    "300TC"
  ],
  authors: [{ name: "Warmket" }],
  openGraph: {
    title: "warmket",
    description:
      "Experience unrivaled comfort with our luxury bed, bath, and table linens.",
    url: "https://warmket.com",
    siteName: "warmket",
    images: [
      {
        url: "/og-image.jpg", // Create this image later (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Luxury Bed & Bath Linen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bed & Bath Linen",
    description:
      "Luxury bed, bath, and table linens — crafted for your everyday elegance.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
