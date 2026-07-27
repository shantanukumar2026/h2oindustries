"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, Microscope, Layers, Compass } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Microscope,
  Layers,
  Network,
  Compass
};

export default function ResearchDevelopment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, features, metrics } = homeData.research;

  return (
    <section 
      id="research" 
      style={{ 
        position: "relative",
        background: "#ffffff", 
        padding: "48px 0",
        overflow: "hidden",
        borderTop: "1px solid #E2E8F0"
      }}
    >
      {/* Blueprint Grid Overlay */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundSize: "40px 40px",
          backgroundImage: `
            linear-gradient(to right, rgba(21, 101, 192, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(21, 101, 192, 0.04) 1px, transparent 1px)
          `,
          zIndex: 0
        }}
      />

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        <div ref={ref} style={{ display: "flex", flexWrap: "wrap", gap: 60, alignItems: "center" }}>
          
          {/* Text Content */}
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
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#0B1929", lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "#1565C0" }}>{header.highlight}</span>
            </h2>
            
            <p style={{ color: "#4A6375", fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 540, fontWeight: 500 }}>
              {header.subtitle}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {features.map((feature, i) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] || Compass;
                return (
                  <div key={i} style={{ display: "flex", gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "8px", background: "rgba(21, 101, 192, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(21, 101, 192, 0.15)" }}>
                      <Icon size={20} color="#1565C0" />
                    </div>
                    <div>
                      <h4 style={{ color: "#0B1929", fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{feature.title}</h4>
                      <p style={{ color: "#4A6375", fontSize: 13, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Graphic Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ flex: "1 1 500px", display: "flex", justifyContent: "center", position: "relative" }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: 600, aspectRatio: "1/1" }}>
              {/* Abstract blueprint visual */}
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" stroke="#1565C0" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="140" stroke="#2196F3" strokeWidth="2" />
                <circle cx="200" cy="200" r="100" stroke="#2196F3" strokeWidth="1" strokeDasharray="2 6" />
                
                <path d="M200 20 L200 380" stroke="#1565C0" strokeWidth="1" />
                <path d="M20 200 L380 200" stroke="#1565C0" strokeWidth="1" />
                
                <path d="M72.7 72.7 L327.3 327.3" stroke="#1565C0" strokeWidth="1" />
                <path d="M72.7 327.3 L327.3 72.7" stroke="#1565C0" strokeWidth="1" />
                
                {/* Tech node points */}
                <circle cx="200" cy="60" r="6" fill="#1565C0" />
                <circle cx="340" cy="200" r="6" fill="#1565C0" />
                <circle cx="200" cy="340" r="6" fill="#1565C0" />
                <circle cx="60" cy="200" r="6" fill="#1565C0" />

                {/* Inner structure drawing */}
                <path d="M160 140 L240 140 L260 260 L140 260 Z" stroke="#2196F3" strokeWidth="2" fill="rgba(33, 150, 243, 0.08)" />
                <path d="M180 160 L220 160 L230 240 L170 240 Z" stroke="#1565C0" strokeWidth="1" />
              </svg>
              
              {/* Floating metrics */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: "15%", left: "5%", background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", padding: "12px 16px", border: "1px solid rgba(21, 101, 192, 0.2)", borderRadius: 8, boxShadow: "0 10px 30px rgba(6,35,71,0.05)" }}
              >
                <div style={{ color: "#1565C0", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4, fontWeight: 800 }}>Tensile Strength</div>
                <div style={{ color: "#0B1929", fontSize: 18, fontWeight: 900 }}>{metrics.tensile}</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: "absolute", bottom: "20%", right: "-5%", background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", padding: "12px 16px", border: "1px solid rgba(21, 101, 192, 0.2)", borderRadius: 8, boxShadow: "0 10px 30px rgba(6,35,71,0.05)" }}
              >
                <div style={{ color: "#1565C0", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4, fontWeight: 800 }}>Thermal Tolerance</div>
                <div style={{ color: "#0B1929", fontSize: 18, fontWeight: 900 }}>{metrics.thermal}</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
