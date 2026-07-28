import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Plus_Jakarta_Sans, Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Waterworks Industries | Precision Water Management Engineering",
  description:
    "Waterworks Industries designs and manufactures precision-engineered water management infrastructure — from modular sampling stations to stormwater inlet systems — dedicated to saving our oceans.",
  keywords:
    "Waterworks Industries, H2 Industries, water management, sampling stations, stormwater drainage, ocean conservation, industrial manufacturing, water infrastructure",
  icons: {
    icon: "/Ww_Fevicon.png",
    shortcut: "/Ww_Fevicon.png",
    apple: "/Ww_Fevicon.png",
  },
  openGraph: {
    title: "Waterworks Industries | Precision Water Management Engineering",
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
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable} ${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
