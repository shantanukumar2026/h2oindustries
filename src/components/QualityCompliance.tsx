"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldAlert, CheckCircle, Search, Award } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Search,
  ShieldAlert,
  CheckCircle,
  Award
};

export default function QualityCompliance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, workflow } = homeData.quality;

  return (
    <section 
      id="quality" 
      style={{ 
        background: "#020B14", 
        padding: "100px 0",
        position: "relative"
      }}
    >
      {/* Decorative Top Border */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, background: "#1565C0" }} />

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        
        <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 60 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(21, 101, 192, 0.3)", padding: "6px 16px", marginBottom: 24, border: "1px solid rgba(33, 150, 243, 0.2)" }}>
              <span style={{ color: "#90CAF9", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {header.tagline}
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20, textTransform: "uppercase", fontStyle: "italic" }}>
              {header.title} <span style={{ color: "#2196F3" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#90CAF9", fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Workflow Timeline */}
        <div style={{ position: "relative", padding: "40px 0" }}>
          {/* Connecting Line Desktop */}
          <div style={{ display: "none", position: "absolute", top: 80, left: "10%", right: "10%", height: 2, background: "rgba(33, 150, 243, 0.2)" }} className="qc-line" />
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, position: "relative", zIndex: 10 }}>
            {workflow.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || Search;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                >
                  <div style={{ 
                    width: 80, 
                    height: 80, 
                    background: "#0D274D", 
                    borderRadius: "50%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    border: "2px solid #2196F3",
                    marginBottom: 24,
                    position: "relative"
                  }}>
                    <Icon size={32} color="#42A5F5" />
                  
                  {/* Step Number Badge */}
                  <div style={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    width: 28,
                    height: 28,
                    background: "#2196F3",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 12,
                    boxShadow: "0 0 0 4px #062347"
                  }}>
                    {i + 1}
                  </div>
                </div>

                  <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 12, textTransform: "uppercase" }}>{step.title}</h3>
                  <p style={{ color: "#64B5F6", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style>{`
        @media (min-width: 768px) {
          .qc-line { display: block !important; }
        }
      `}</style>
    </section>
  );
}
