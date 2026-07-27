"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe2, Ship, Plane, Truck } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Ship,
  Plane,
  Truck
};

export default function GlobalSupplyNetwork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, stats, modes } = homeData.globalNetwork;

  return (
    <section 
      id="global-network" 
      style={{ 
        background: "#ffffff", 
        padding: "48px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #E2E8F0"
      }}
    >
      {/* Background Map Graphic (Abstract CSS rendering) */}
      <div style={{ position: "absolute", top: "10%", right: "-10%", width: "70%", height: "80%", opacity: 0.1, pointerEvents: "none" }}>
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract map dot grid */}
          <pattern id="dotGrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#1565C0" />
          </pattern>
          <path d="M100,100 Q400,50 700,200 T750,500 Q400,600 150,450 Z" fill="url(#dotGrid)" />
          
          {/* Connection Lines */}
          <path d="M200,200 Q400,100 600,250" stroke="#1565C0" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          <path d="M300,300 Q500,400 700,300" stroke="#1565C0" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          <circle cx="200" cy="200" r="8" fill="#ffffff" stroke="#1565C0" strokeWidth="3" />
          <circle cx="600" cy="250" r="8" fill="#ffffff" stroke="#1565C0" strokeWidth="3" />
          <circle cx="300" cy="300" r="8" fill="#ffffff" stroke="#1565C0" strokeWidth="3" />
          <circle cx="700" cy="300" r="8" fill="#ffffff" stroke="#1565C0" strokeWidth="3" />
        </svg>
      </div>

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        <div ref={ref} style={{ display: "flex", flexWrap: "wrap", gap: 60, alignItems: "center" }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ flex: "1 1 500px" }}
          >
            <div className="pill-tag" style={{ marginBottom: 24 }}>
              <span className="dot" />
              {header.tagline}
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#0B1929", lineHeight: 1.1, marginBottom: 20, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "#1565C0" }}>{header.highlight}</span>
            </h2>
            
            <p style={{ color: "#4A6375", fontSize: 16, lineHeight: 1.7, marginBottom: 40, maxWidth: 540, fontWeight: 500 }}>
              {header.subtitle}
            </p>

            <div style={{ display: "flex", gap: 40, marginBottom: 48 }}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <div style={{ color: "#1565C0", fontSize: 36, fontWeight: 900, fontStyle: "italic", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "#4A6375", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5, marginTop: 8 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {modes.map((mode, i) => {
                const Icon = iconMap[mode.icon as keyof typeof iconMap] || Ship;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "#F8FAFC", padding: "8px 16px", borderRadius: 8, border: "1px solid #E2E8F0" }}>
                    <Icon size={16} color="#1565C0" />
                    <span style={{ color: "#0B1929", fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>{mode.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Map / Visual Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
          >
             <div style={{ width: "100%", height: 400, border: "1px solid #E2E8F0", background: "#F8FAFC", position: "relative", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(6,35,71,0.01)" }}>
                <div style={{ textAlign: "center", zIndex: 1 }}>
                  <Globe2 size={64} color="rgba(21, 101, 192, 0.15)" style={{ marginBottom: 16 }} />
                  <div style={{ color: "#0B1929", fontSize: 14, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase", fontStyle: "italic" }}>Live Network Routing</div>
                </div>

                {/* Radar sweep effect */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute",
                    top: "50%", left: "50%",
                    width: 300, height: 300,
                    marginLeft: -150, marginTop: -150,
                    borderRadius: "50%",
                    background: "conic-gradient(from 0deg, transparent 70%, rgba(21, 101, 192, 0.08) 100%)",
                    border: "1px solid rgba(21, 101, 192, 0.04)",
                    pointerEvents: "none"
                  }}
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
