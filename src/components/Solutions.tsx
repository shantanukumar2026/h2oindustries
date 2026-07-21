"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Settings, Maximize, Activity, LucideIcon } from "lucide-react";
import homeData from "@/data/home.json";

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Activity,
  Maximize,
};

export default function Solutions() {
  const solutions = homeData.solutions.items;
  const header = homeData.solutions.header;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section id="solutions" style={{ background: "#062347", padding: "48px 0", position: "relative", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Background blueprint grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "linear-gradient(rgba(33, 150, 243, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.2) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        
        {/* Header */}
        <div ref={ref} style={{ marginBottom: 40, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(33, 150, 243, 0.1)", border: "1px solid rgba(33, 150, 243, 0.3)", padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ color: "#90CAF9", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {header.tagline}
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, textTransform: "uppercase", fontStyle: "italic" }}>
              {header.title}<br />
              <span style={{ color: "#2196F3" }}>
                {header.highlight}
              </span>
            </h2>
          </motion.div>
        </div>

        <div style={{ display: "flex", gap: 60, flexDirection: "row" }} className="solutions-layout">
          
          {/* Left: Interactive Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: "0 0 400px", display: "flex", flexDirection: "column", gap: 16 }}
            className="solutions-tabs"
          >
            {solutions.map((sol) => {
              const isActive = activeTab === sol.id;
              const Icon = iconMap[sol.icon] || Settings;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(sol.id)}
                  style={{
                    textAlign: "left",
                    background: isActive ? "rgba(33, 150, 243, 0.1)" : "rgba(255, 255, 255, 0.02)",
                    border: "1px solid",
                    borderColor: isActive ? "rgba(33, 150, 243, 0.5)" : "rgba(255, 255, 255, 0.05)",
                    padding: "24px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                    }
                  }}
                >
                  <div style={{ width: 40, height: 40, background: isActive ? "#1565C0" : "rgba(255,255,255,0.05)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s" }}>
                    <Icon size={20} color={isActive ? "#fff" : "#90CAF9"} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: isActive ? "#42A5F5" : "#64B5F6", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                      {sol.category}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>
                      {sol.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right: Dynamic Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ flex: 1, position: "relative", minHeight: 600, background: "#06152a", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}
              >
                {/* Tech Header */}
                <div style={{ padding: "24px 40px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 24 }}>
                    {Object.entries(activeSolution.specs).map(([key, val]) => (
                      <div key={key}>
                        <div style={{ fontSize: 10, color: "#64B5F6", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{key}</div>
                        <div style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 12, color: "#42A5F5", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>
                    SYS-0{solutions.findIndex(s => s.id === activeTab) + 1}
                  </div>
                </div>

                <div style={{ flex: 1, display: "flex" }} className="solution-content-split">
                  {/* Info Box */}
                  <div style={{ flex: 1, padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{ fontSize: 32, fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 24, fontStyle: "italic", lineHeight: 1.1 }}>
                      {activeSolution.title}
                    </h3>
                    <p style={{ fontSize: 16, color: "#90CAF9", lineHeight: 1.7, marginBottom: 40 }}>
                      {activeSolution.desc}
                    </p>
                    <button style={{ 
                      alignSelf: "flex-start",
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: 8, 
                      background: "#2196F3", 
                      color: "#fff", 
                      padding: "14px 28px", 
                      fontSize: 14, 
                      fontWeight: 800, 
                      textTransform: "uppercase", 
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      transition: "background 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#1E88E5"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#2196F3"}
                    >
                      View Technical Specs <ArrowRight size={16} />
                    </button>
                  </div>
                  
                  {/* Image Display */}
                  <div style={{ flex: 1, position: "relative", background: "rgba(255,255,255,0.02)", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
                    {/* CAD-like overlay on image */}
                    <div style={{ position: "absolute", top: 20, right: 20, zIndex: 10 }}>
                      <div style={{ width: 40, height: 40, border: "2px solid rgba(33, 150, 243, 0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 4, height: 4, background: "#2196F3", borderRadius: "50%" }} />
                      </div>
                    </div>
                    <Image 
                      src={activeSolution.image} 
                      alt={activeSolution.title} 
                      fill 
                      style={{ objectFit: "contain", padding: 40, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }} 
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .solutions-layout { flex-direction: column !important; }
          .solutions-tabs { flex: none !important; display: grid !important; grid-template-columns: 1fr 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .solutions-tabs { grid-template-columns: 1fr; }
          .solution-content-split { flex-direction: column !important; }
          .solution-content-split > div:last-child { min-height: 400px; border-left: none !important; border-top: 1px solid rgba(255,255,255,0.05); }
        }
      `}</style>
    </section>
  );
}
