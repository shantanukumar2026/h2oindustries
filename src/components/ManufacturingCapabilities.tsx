"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import homeData from "../data/home.json";

export default function ManufacturingCapabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { header, items } = homeData.capabilities;

  return (
    <section 
      id="capabilities" 
      style={{ 
        background: "#F5F7FA", 
        padding: "48px 0",
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        
        <div ref={ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32, marginBottom: 64 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #E0E0E0", padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ width: 8, height: 8, background: "#1565C0", borderRadius: "50%" }} />
              <span style={{ color: "#4A6375", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {header.tagline}
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#0D3A73", lineHeight: 1.1, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "#1565C0" }}>{header.highlight}</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} style={{ maxWidth: 500 }}>
            <p style={{ color: "#4A6375", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="capabilities-grid">
          {items.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ height: "100%" }}
            >
              <CapabilityCard cap={cap} />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1200px) {
          .capabilities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function CapabilityCard({ cap }: { cap: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: hovered ? "0 20px 40px rgba(13, 58, 115, 0.1)" : "0 4px 12px rgba(13, 58, 115, 0.05)",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "1px solid #E0E0E0"
      }}
    >
      {/* Visual Image Placeholder Area */}
      <div style={{ height: 240, background: cap.imageColor, position: "relative", overflow: "hidden" }}>
        {/* Placeholder graphic simulating machinery/industrial process */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.4, backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)", backgroundSize: "20px 20px" }} />
        <div style={{ position: "absolute", bottom: -20, right: -20, width: 120, height: 120, borderRadius: "50%", border: "20px solid rgba(255,255,255,0.1)" }} />
        
        <div style={{ position: "absolute", top: 20, left: 20, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", padding: "4px 12px", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
          ISO 9001 Facility
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 32, flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0D3A73", marginBottom: 16, textTransform: "uppercase" }}>{cap.title}</h3>
        <p style={{ fontSize: 15, color: "#4A6375", lineHeight: 1.6, margin: 0 }}>{cap.desc}</p>
        
        <div style={{ marginTop: "auto", paddingTop: 24 }}>
          <div style={{ width: 40, height: 2, background: hovered ? "#1565C0" : "#E0E0E0", transition: "all 0.3s" }} />
        </div>
      </div>
    </div>
  );
}
