"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookmarkCheck, FileText, Anchor } from "lucide-react";
import homeData from "../data/home.json";

export default function TechnicalStandards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, button, items } = homeData.standards;

  return (
    <section id="standards" className="standards-section" style={{ 
        background: "#062347", 
        padding: "48px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        <div ref={ref} style={{ display: "flex", flexWrap: "wrap", gap: 60, alignItems: "center" }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6 }}
            style={{ flex: "1 1 400px" }}
          >
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "#42A5F5" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#90CAF9", fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>
              {header.subtitle}
            </p>

            <div style={{ display: "flex", gap: 24, marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <BookmarkCheck size={24} color="#2196F3" />
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Tested & Rated</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Anchor size={24} color="#2196F3" />
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Structural Integrity</span>
              </div>
            </div>

            <button 
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(33, 150, 243, 0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              style={{ 
                background: "transparent", 
                border: "1px solid #2196F3", 
                color: "#2196F3", 
                padding: "14px 28px", 
                fontSize: 14, 
                fontWeight: 800, 
                textTransform: "uppercase", 
                letterSpacing: 1, 
                display: "flex", 
                alignItems: "center", 
                gap: 12,
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              <FileText size={18} />
              {button}
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: "1 1 500px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}
          >
            {items.map((std, i) => (
              <div key={i} style={{ 
                background: "rgba(255,255,255,0.03)", 
                border: "1px solid rgba(255,255,255,0.05)", 
                padding: "32px 24px", 
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                transition: "all 0.3s",
                height: "100%"
              }}>
                <div style={{ width: 12, height: 4, background: "#1565C0", marginBottom: 16 }} />
                <h4 style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 8, letterSpacing: 0.5 }}>{std.name}</h4>
                <p style={{ color: "#64B5F6", fontSize: 13, margin: 0, fontWeight: 500 }}>{std.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
