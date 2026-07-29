import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Plus_Jakarta_Sans, Outfit, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

import { SITE_URL } from "@/data/seoConfig";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "H2 Industries | Precision Water Management & Waterworks Infrastructure",
    template: "%s | H2 Industries",
  },
  description:
    "H2 Industries designs and manufactures precision-engineered water management infrastructure — from modular sampling stations to AWWA ductile iron pipe fittings and curb inlet castings.",
  keywords: [
    "H2 Industries",
    "waterworks castings",
    "water management engineering",
    "modular sampling stations",
    "stormwater drainage infrastructure",
    "AWWA gate valves",
    "mechanical joint restraint gland",
    "curb box Minneapolis pattern",
    "ocean conservation engineering",
    "municipal water infrastructure"
  ],
  icons: {
    icon: "/Ww_Fevicon.png",
    shortcut: "/Ww_Fevicon.png",
    apple: "/Ww_Fevicon.png",
  },
  openGraph: {
    title: "H2 Industries | Precision Water Management Engineering",
    description:
      "Precision-engineered water management infrastructure dedicated to saving our oceans.",
    type: "website",
    locale: "en_US",
    siteName: "H2 Industries",
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${barlowCondensed.variable} ${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
