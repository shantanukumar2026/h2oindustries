"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cog, Droplets, Globe, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Cog,
    title: "ENGINEERING EXCELLENCE",
    desc: "Every product is precision-engineered to meet the most demanding industrial and environmental standards.",
  },
  {
    icon: Droplets,
    title: "OCEAN CONSERVATION",
    desc: "Our mission is embedded in every design decision — protecting waterways and marine ecosystems through smarter infrastructure.",
  },
  {
    icon: Globe,
    title: "SUSTAINABLE IMPACT",
    desc: "We engineer products that reduce pollutant entry into stormwater systems, contributing to a cleaner, healthier planet.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about-section" style={{ background: "#F0F7FF", position: "relative" }}>
      {/* Decorative Top Border */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 8, background: "#0D2B55" }} />
      <div style={{ position: "absolute", top: 8, left: 0, width: "100%", height: 2, background: "#1565C0" }} />

      <div className="about-container" style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Top: split layout */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 80,
            marginBottom: 80,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#0D2B55",
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <div style={{ width: 12, height: 2, background: "#2196F3" }} />
              <span
                style={{
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Who We Are
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1,
                color: "#0D3A73",
                marginBottom: 32,
                textTransform: "uppercase",
                fontStyle: "italic",
                letterSpacing: "0.02em",
              }}
            >
              DEDICATED TO <br />
              <span style={{ color: "#1565C0" }}>SAVING OUR OCEANS</span><br />
              THROUGH ENGINEERING
            </h2>

            {/* Blue Divider */}
            <div style={{ width: 80, height: 4, background: "#2196F3", marginBottom: 32 }} />

            <p style={{ color: "#1565C0", fontSize: 16, lineHeight: 1.8, marginBottom: 20, fontWeight: 500 }}>
              H2 Industries was founded with a single unwavering mission: to develop industrial water management products that actively reduce environmental harm. We saw a gap in the market — stormwater systems that were purely functional but ignored their ecological footprint.
            </p>
            <p style={{ color: "#1565C0", fontSize: 16, lineHeight: 1.8, marginBottom: 40, fontWeight: 500 }}>
              Today, H2 Industries engineers and manufactures a comprehensive range of water sampling stations, modular enclosures, and precision drainage infrastructure — all designed from the ground up to protect our waterways and oceans.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="#products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#1565C0",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "16px 32px",
                  fontSize: 14,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#0D47A1")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1565C0")}
              >
                View Our Products <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: Sharp Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", zIndex: 1 }}
          >
            {/* Background Offset Block */}
            <div
              className="about-image-offset"
              style={{
                position: "absolute",
                background: "#0D2B55",
                zIndex: -1,
              }}
            />
            {/* Image Container */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/3",
              background: "#062347",
              border: "8px solid #fff",
              boxShadow: "0 20px 40px rgba(6,35,71,0.1)",
            }}>
              <Image
                src="/images/2.jpeg"
                alt="H2 Industries industrial setting"
                fill
                style={{ objectFit: "cover", opacity: 0.9 }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Sharp industrial badge */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                background: "#1565C0",
                padding: "16px 24px",
                display: "inline-block",
              }}>
                <p style={{ fontSize: 12, fontWeight: 800, color: "#90CAF9", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                  EST. INDUSTRY LEADER
                </p>
                <p style={{ fontSize: 18, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", margin: 0, marginTop: 4 }}>
                  H2 INDUSTRIES
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars / Feature Blocks */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
          marginTop: 100,
        }}>
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                style={{
                  background: "#fff",
                  padding: "40px 32px",
                  borderTop: "4px solid #1565C0",
                  boxShadow: "0 10px 30px rgba(6,35,71,0.05)",
                  position: "relative",
                }}
              >
                <div style={{
                  width: 56,
                  height: 56,
                  background: "#E0F0FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  border: "1px solid #90CAF9",
                }}>
                  <Icon size={24} color="#0D2B55" />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 900, fontStyle: "italic", color: "#0D3A73", marginBottom: 16, letterSpacing: "0.02em" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#1976D2", fontWeight: 500, margin: 0 }}>
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .about-section { padding: 100px 0; }
        .about-container { padding: 0 60px; }
        .about-image-offset { top: 24px; right: -24px; bottom: -24px; left: 24px; }
        
        @media (max-width: 1023px) {
          .about-grid {
            gap: 40px !important;
            margin-bottom: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .about-section { padding: 60px 0; }
          .about-container { padding: 0 24px; }
          .about-image-offset { top: 12px; right: -12px; bottom: -12px; left: 12px; }
        }
      `}</style>
    </section>
  );
}
