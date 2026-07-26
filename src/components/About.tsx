"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const portfolioItems = [
  {
    title: "DEDICATED TO SAVING OUR OCEANS",
    subtitle: "THROUGH ENGINEERING",
    desc: "H2 Industries was founded with a single unwavering mission: to develop industrial water management products that actively reduce environmental harm.",
    video: "/portfolio/1.mp4",
    theme: "dark"
  },
  {
    title: "PRECISION ENGINEERING",
    subtitle: "FOR THE TOUGHEST ENVIRONMENTS",
    desc: "Every product is precision-engineered to meet the most demanding industrial and environmental standards.",
    video: "/portfolio/2.mp4",
    theme: "light"
  },
  {
    title: "MODULAR ENCLOSURES",
    subtitle: "BUILT TO LAST",
    desc: "We design for compatibility with emerging hydrogen and clean-energy projects, and for long-term protection of waterways.",
    video: "/portfolio/3.mp4",
    theme: "dark"
  },
  {
    title: "SUSTAINABLE IMPACT",
    subtitle: "GLOBAL REACH",
    desc: "We engineer products that reduce pollutant entry into stormwater systems, contributing to a cleaner, healthier planet.",
    video: "/portfolio/4.mp4",
    theme: "light"
  }
];

export default function About() {
  return (
    <div id="about" style={{ width: "100%" }}>
      {portfolioItems.map((item, index) => (
        <PortfolioSection key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function PortfolioSection({ item, index }: { item: any; index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const yVideo = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isDark = item.theme === "dark";
  const bgColor = isDark ? "#020f1f" : "#ffffff";
  const textColor = isDark ? "#FFFFFF" : "#0D3A73";
  const accentColor = isDark ? "#2196F3" : "#1565C0";
  const descColor = isDark ? "#90CAF9" : "#4A6375";

  return (
    <section
      ref={containerRef}
      style={{
        height: "100vh",
        width: "100%",
        background: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          maxWidth: 1720,
          width: "100%",
          margin: "0 auto",
          padding: "0 60px",
          display: "grid",
          gridTemplateColumns: index % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
          gap: 80,
          alignItems: "center",
          height: "100%"
        }}
        className="portfolio-grid"
      >
        {/* Content Side */}
        <motion.div
          style={{
            order: index % 2 === 0 ? 1 : 2,
            y: yText,
            opacity
          }}
          className="portfolio-content"
        >
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 900, color: textColor, lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase", letterSpacing: "0.01em" }}>
            {item.title} <br />
            <span style={{ color: accentColor, fontWeight: 300, fontStyle: "italic" }}>{item.subtitle}</span>
          </h2>
          <div style={{ width: 60, height: 3, background: accentColor, marginBottom: 32 }} />
          <p style={{ color: descColor, fontSize: 18, lineHeight: 1.8, fontWeight: 400, maxWidth: 500 }}>
            {item.desc}
          </p>
        </motion.div>

        {/* Media Side */}
        <div style={{ order: index % 2 === 0 ? 2 : 1, position: "relative", height: "70vh", width: "100%" }} className="portfolio-media">
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              y: yVideo,
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: isDark ? "0 40px 80px rgba(0,0,0,0.6)" : "0 40px 80px rgba(6,35,71,0.08)"
            }}
          >
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            padding: 100px 30px !important;
            gap: 40px !important;
          }
          .portfolio-content { order: 1 !important; }
          .portfolio-media { order: 2 !important; height: 40vh !important; }
        }
      `}</style>
    </section>
  );
}
