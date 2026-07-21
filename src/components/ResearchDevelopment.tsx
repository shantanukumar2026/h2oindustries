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
        background: "#062347", 
        padding: "48px 0",
        overflow: "hidden"
      }}
    >
      {/* Blueprint Grid Overlay */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundSize: "40px 40px",
          backgroundImage: `
            linear-gradient(to right, rgba(33, 150, 243, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(33, 150, 243, 0.05) 1px, transparent 1px)
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1565C0", padding: "4px 16px", marginBottom: 24 }}>
              <div style={{ width: 12, height: 2, background: "#fff" }} />
              <span style={{ color: "#fff", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {header.tagline}
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "#42A5F5" }}>{header.highlight}</span>
            </h2>
            
            <p style={{ color: "#90CAF9", fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 540 }}>
              {header.subtitle}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {features.map((feature, i) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] || Compass;
                return (
                  <div key={i} style={{ display: "flex", gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "8px", background: "rgba(33, 150, 243, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(33, 150, 243, 0.2)" }}>
                      <Icon size={20} color="#42A5F5" />
                    </div>
                    <div>
                      <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{feature.title}</h4>
                      <p style={{ color: "#64B5F6", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{feature.desc}</p>
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
                <circle cx="200" cy="200" r="100" stroke="#42A5F5" strokeWidth="1" strokeDasharray="2 6" />
                
                <path d="M200 20 L200 380" stroke="#1565C0" strokeWidth="1" />
                <path d="M20 200 L380 200" stroke="#1565C0" strokeWidth="1" />
                
                <path d="M72.7 72.7 L327.3 327.3" stroke="#1565C0" strokeWidth="1" />
                <path d="M72.7 327.3 L327.3 72.7" stroke="#1565C0" strokeWidth="1" />
                
                {/* Tech node points */}
                <circle cx="200" cy="60" r="6" fill="#42A5F5" />
                <circle cx="340" cy="200" r="6" fill="#42A5F5" />
                <circle cx="200" cy="340" r="6" fill="#42A5F5" />
                <circle cx="60" cy="200" r="6" fill="#42A5F5" />

                {/* Inner structure drawing */}
                <path d="M160 140 L240 140 L260 260 L140 260 Z" stroke="#90CAF9" strokeWidth="2" fill="rgba(33, 150, 243, 0.1)" />
                <path d="M180 160 L220 160 L230 240 L170 240 Z" stroke="#fff" strokeWidth="1" />
              </svg>
              
              {/* Floating metrics */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: "15%", left: "5%", background: "rgba(6, 35, 71, 0.8)", backdropFilter: "blur(4px)", padding: "12px 16px", border: "1px solid #2196F3", borderRadius: 4 }}
              >
                <div style={{ color: "#90CAF9", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Tensile Strength</div>
                <div style={{ color: "#fff", fontSize: 18, fontWeight: 800 }}>{metrics.tensile}</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: "absolute", bottom: "20%", right: "-5%", background: "rgba(6, 35, 71, 0.8)", backdropFilter: "blur(4px)", padding: "12px 16px", border: "1px solid #42A5F5", borderRadius: 4 }}
              >
                <div style={{ color: "#90CAF9", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Thermal Tolerance</div>
                <div style={{ color: "#fff", fontSize: 18, fontWeight: 800 }}>{metrics.thermal}</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
