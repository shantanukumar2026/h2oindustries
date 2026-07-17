"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import homeData from "../data/home.json";

export default function InfrastructureFacilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, facilities } = homeData.infrastructure;

  return (
    <section 
      id="infrastructure" 
      style={{ 
        background: "#F5F7FA", 
        padding: "120px 0 60px 0",
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        
        <div ref={ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 40, marginBottom: 64 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#0D3A73", lineHeight: 1.1, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "#1565C0" }}>{header.highlight}</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} style={{ maxWidth: 460 }}>
            <p style={{ color: "#4A6375", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: 24,
          gridAutoFlow: "dense"
        }}>
          {facilities.map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                gridColumn: `span ${fac.span}`,
                minHeight: fac.height,
                background: "#062347",
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                border: "1px solid #E0E0E0",
                boxShadow: "0 10px 30px rgba(6,35,71,0.08)"
              }}
              className="facility-card"
            >
              <video
                src={fac.video}
                autoPlay
                loop
                muted
                playsInline
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.6 }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13, 58, 115, 0.4), rgba(33, 150, 243, 0.3))", zIndex: 1, mixBlendMode: "multiply" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,13,28,0.9) 0%, transparent 70%)", zIndex: 2 }} />

              {/* Content Overlay */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 3 }}>
                <div style={{ maxWidth: "80%" }}>
                  <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 900, textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.02em", fontStyle: "italic" }}>{fac.title}</h3>
                  <p style={{ color: "#90CAF9", fontSize: 14, margin: 0, lineHeight: 1.6, fontWeight: 500 }}>{fac.desc}</p>
                </div>
                
                <div className="fac-icon-wrap" style={{ width: 48, height: 48, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", transition: "all 0.3s" }}>
                  <ArrowUpRight size={20} color="#fff" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .facility-card:hover .fac-icon-wrap {
          background: #2196F3 !important;
          border-color: #2196F3 !important;
          transform: rotate(45deg);
        }
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            gridTemplateColumns: "1fr 1fr" !important;
          }
          div[style*="gridColumn: span 2"] {
            gridColumn: "span 2" !important;
          }
        }
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            gridTemplateColumns: "1fr" !important;
            display: flex !important;
            flex-direction: column !important;
          }
          div[style*="gridColumn: span"] {
            gridColumn: "auto" !important;
          }
        }
      `}</style>
    </section>
  );
}
