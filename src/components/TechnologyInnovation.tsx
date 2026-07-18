"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Activity, ShieldCheck, LucideIcon } from "lucide-react";
import homeData from "@/data/home.json";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
};

export default function TechnologyInnovation() {
  const technologies = homeData.technology.items;
  const header = homeData.technology.header;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      id="technology" 
      style={{ 
        background: "#FAFAFA",
        padding: "120px 0",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        
        <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 80 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(21, 101, 192, 0.1)", border: "1px solid rgba(21, 101, 192, 0.3)", padding: "6px 16px", marginBottom: 24 }}>
              <Zap size={14} color="#1565C0" />
              <span style={{ color: "#1565C0", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {header.tagline}
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)", fontWeight: 900, color: "#0D3A73", lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase", fontStyle: "italic" }}>
              {header.title} <span style={{ color: "#2196F3" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#4A6375", fontSize: 16, maxWidth: 680, margin: "0 auto", lineHeight: 1.6, fontWeight: 500 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {technologies.map((tech, i) => {
            const Icon = iconMap[tech.icon] || Cpu;
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #E0E0E0",
                  padding: "40px",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  boxShadow: "0 10px 30px rgba(6,35,71,0.03)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(33, 150, 243, 0.03)";
                  e.currentTarget.style.borderColor = "#64B5F6";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(33, 150, 243, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.borderColor = "#E0E0E0";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(6,35,71,0.03)";
                }}
              >
                {/* Decorative top-right accent */}
                <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: 60, background: "linear-gradient(135deg, transparent 50%, rgba(33, 150, 243, 0.1) 50%)" }} />
                
                <div style={{ width: 64, height: 64, background: "#F0F7FF", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, border: "1px solid #90CAF9" }}>
                  <Icon size={28} color="#1565C0" />
                </div>
                
                <h3 style={{ color: "#0D3A73", fontSize: 20, fontWeight: 900, marginBottom: 12, textTransform: "uppercase", fontStyle: "italic" }}>{tech.title}</h3>
                <p style={{ color: "#4A6375", fontSize: 15, lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{tech.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
