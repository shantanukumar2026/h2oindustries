"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplet, Recycle, Wind, TreePine } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Droplet,
  Recycle,
  Wind,
  TreePine
};

export default function Sustainability() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, initiatives } = homeData.sustainability;

  return (
    <section 
      id="sustainability" 
      style={{ 
        background: "#020B14", 
        padding: "48px 0",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        
        <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255, 255, 255, 0.05)", padding: "6px 16px", marginBottom: 20, borderLeft: "2px solid #42A5F5" }}>
              <span style={{ color: "#90CAF9", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {header.tagline}
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20, textTransform: "uppercase" }}>
              {header.title} <span style={{ color: "#2196F3" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#90CAF9", fontSize: 16, maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {initiatives.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Droplet;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ height: "100%" }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderTop: "4px solid #1565C0",
                    padding: "40px 32px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                    <div style={{ width: 56, height: 56, background: "rgba(33, 150, 243, 0.1)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(33, 150, 243, 0.2)" }}>
                      <Icon size={28} color="#42A5F5" />
                    </div>
                    <div style={{ color: "#42A5F5", fontSize: 48, fontWeight: 900, fontStyle: "italic", lineHeight: 1, opacity: 0.15 }}>
                      {item.value}
                    </div>
                  </div>
                  
                  <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 12, textTransform: "uppercase" }}>{item.title}</h3>
                  <p style={{ color: "#64B5F6", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
