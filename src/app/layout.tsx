import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "H2 Industries | Precision Water Management Engineering",
  description:
    "H2 Industries designs and manufactures precision-engineered water management infrastructure — from modular sampling stations to stormwater inlet systems — dedicated to saving our oceans.",
  keywords:
    "H2 Industries, water management, sampling stations, stormwater drainage, ocean conservation, industrial manufacturing, water infrastructure",
  openGraph: {
    title: "H2 Industries | Precision Water Management Engineering",
    description:
      "Precision-engineered water management infrastructure dedicated to saving our oceans.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable} scroll-smooth`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
