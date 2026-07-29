"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Settings, 
  Maximize, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Droplet, 
  Target, 
  Building2, 
  MoreHorizontal,
  LucideIcon 
} from "lucide-react";
import homeData from "@/data/home.json";

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Activity,
  Maximize,
  ShieldCheck,
  Layers,
  Droplet,
  Target,
  Building2
};

export default function Solutions() {
  const solutions = homeData.solutions.items;
  const header = homeData.solutions.header;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section id="solutions" style={{ background: "#F8FAFC", padding: "64px 0", position: "relative", borderTop: "1px solid #E2E8F0" }}>
      {/* Background blueprint grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "linear-gradient(rgba(21, 101, 192, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(21, 101, 192, 0.15) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        
        {/* Header */}
        <div ref={ref} style={{ marginBottom: 40, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="pill-tag" style={{ marginBottom: 20 }}>
              <span className="dot" />
              {header.tagline}
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 900, color: "#004aad", lineHeight: 1.1, textTransform: "uppercase", fontStyle: "italic" }}>
              {header.title}<br />
              <span style={{ color: "#0085f4" }}>
                {header.highlight}
              </span>
            </h2>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 32 }} className="solutions-layout">
          
          {/* Left Column: Interactive Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
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
                    background: isActive ? "linear-gradient(135deg, #0085f4 0%, #004aad 100%)" : "#ffffff",
                    border: "1px solid",
                    borderColor: isActive ? "#0085f4" : "#E2E8F0",
                    padding: "20px",
                    borderRadius: "14px",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    position: "relative",
                    boxShadow: isActive ? "0 12px 30px rgba(0, 133, 244, 0.25)" : "0 2px 10px rgba(6, 35, 71, 0.02)"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#F8FAFC";
                      e.currentTarget.style.borderColor = "#90CAF9";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#ffffff";
                      e.currentTarget.style.borderColor = "#E2E8F0";
                    }
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ 
                      width: 38, 
                      height: 38, 
                      background: isActive ? "#ffffff" : "#E3F2FD", 
                      borderRadius: "8px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      transition: "background 0.3s",
                      boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.1)" : "none"
                    }}>
                      <Icon size={20} color={isActive ? "#0085f4" : "#0085f4"} />
                    </div>

                    <ArrowRight size={18} color={isActive ? "#ffffff" : "#0085f4"} style={{ opacity: isActive ? 1 : 0.6, transition: "opacity 0.2s" }} />
                  </div>

                  <div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: isActive ? "#E3F2FD" : "#0085f4", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                      {sol.category}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: isActive ? "#ffffff" : "#004aad", marginBottom: 6 }}>
                      {sol.title}
                    </div>
                    <div style={{ fontSize: 12, color: isActive ? "rgba(255, 255, 255, 0.85)" : "#546E7A", lineHeight: 1.4, fontWeight: 500 }}>
                      {sol.tabSubtitle || sol.desc.slice(0, 60) + "..."}
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right Main Container (Card + Inspection Panel) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ 
              background: "#ffffff", 
              borderRadius: "16px", 
              border: "1px solid #E2E8F0", 
              boxShadow: "0 12px 40px rgba(6, 35, 71, 0.04)", 
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}
              >
                {/* 1. Tech Specs Header Bar */}
                <div style={{ 
                  padding: "16px 32px", 
                  borderBottom: "1px solid #E2E8F0", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  background: "#F8FAFC" 
                }}>
                  <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                    {Object.entries(activeSolution.specs).map(([key, val]) => (
                      <div key={key}>
                        <div style={{ fontSize: 10, color: "#0085f4", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3, fontWeight: 800 }}>{key}</div>
                        <div style={{ fontSize: 13, color: "#004aad", fontWeight: 800 }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ fontSize: 12, color: "#0085f4", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "monospace" }}>
                    SYS-0{solutions.findIndex(s => s.id === activeTab) + 1}
                  </div>
                </div>

                {/* 2. Main Content & Inspection Panel Split */}
                <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr" }} className="solution-split-grid">
                  
                  {/* Left Main Details Column */}
                  <div style={{ padding: 36, display: "flex", flexDirection: "column", gap: 28, borderRight: "1px solid #E2E8F0" }}>
                    
                    {/* Title & Description */}
                    <div>
                      <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", marginBottom: 12, fontStyle: "italic", lineHeight: 1.1 }}>
                        {activeSolution.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "#0085f4", lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                        {activeSolution.desc}
                      </p>
                    </div>

                    {/* HOW IT WORKS Section (4 Steps) */}
                    {activeSolution.howItWorks && (
                      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 20 }}>
                        <div style={{ fontSize: 11, fontWeight: 900, color: "#0085f4", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                          HOW IT WORKS
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="steps-grid">
                          {activeSolution.howItWorks.map((st, idx) => (
                            <div key={st.step} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 8 }}>
                              {/* Step Card Graphic Box */}
                              <div style={{ 
                                background: "#F8FAFC", 
                                border: "1px solid #E2E8F0", 
                                borderRadius: 8, 
                                padding: 10,
                                position: "relative",
                                height: 100,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                              }}>
                                {/* Step number badge */}
                                <div style={{ 
                                  position: "absolute", 
                                  top: 6, 
                                  left: 6, 
                                  background: "#0085f4", 
                                  color: "#fff", 
                                  width: 18, 
                                  height: 18, 
                                  borderRadius: "50%", 
                                  fontSize: 10, 
                                  fontWeight: 800, 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center" 
                                }}>
                                  {st.step}
                                </div>

                                {/* Step Diagram Graphic */}
                                <div style={{ position: "relative", width: "100%", height: 60 }}>
                                  <Image
                                    src={activeSolution.image}
                                    alt={`Step ${st.step}`}
                                    fill
                                    style={{ objectFit: "contain", opacity: 0.9 }}
                                  />
                                </div>
                              </div>

                              {/* Description Text */}
                              <div style={{ fontSize: 11, color: "#546E7A", lineHeight: 1.35, fontWeight: 500 }}>
                                {st.text}
                              </div>

                              {/* Arrow Connector to next step */}
                              {idx < activeSolution.howItWorks.length - 1 && (
                                <div style={{ position: "absolute", right: -8, top: 40, zIndex: 5 }} className="step-arrow">
                                  <ArrowRight size={12} color="#0085f4" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* KEY BENEFITS Section */}
                    {activeSolution.keyBenefits && (
                      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 20 }}>
                        <div style={{ fontSize: 11, fontWeight: 900, color: "#0085f4", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                          KEY BENEFITS
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="benefits-grid">
                          {activeSolution.keyBenefits.map((ben, idx) => {
                            const BenIcon = iconMap[ben.icon] || ShieldCheck;
                            return (
                              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                <div style={{ 
                                  width: 32, 
                                  height: 32, 
                                  borderRadius: "6px", 
                                  border: "1.5px solid #90CAF9", 
                                  background: "#E3F2FD", 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  marginBottom: 4
                                }}>
                                  <BenIcon size={16} color="#0085f4" />
                                </div>
                                <div style={{ fontSize: 12, fontWeight: 800, color: "#004aad", lineHeight: 1.2 }}>
                                  {ben.title}
                                </div>
                                <div style={{ fontSize: 11, color: "#546E7A", lineHeight: 1.35, fontWeight: 500 }}>
                                  {ben.desc}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right Column: Visual Product Diagram & Hotspot Callouts */}
                  <div style={{ padding: 28, background: "#F8FAFC", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20, position: "relative" }}>
                    
                    {/* Card Outer Container */}
                    <div style={{ 
                      background: "#ffffff", 
                      border: "1px solid #E2E8F0", 
                      borderRadius: 12, 
                      padding: 24, 
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1
                    }}>
                      {/* Options Button Top Right */}
                      <div style={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}>
                        <button style={{ 
                          width: 28, 
                          height: 28, 
                          borderRadius: "50%", 
                          border: "1px solid #E2E8F0", 
                          background: "#ffffff", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center",
                          cursor: "pointer",
                          color: "#0085f4"
                        }}>
                          <MoreHorizontal size={14} />
                        </button>
                      </div>

                      {/* Product Main Interactive Rendering + Callouts */}
                      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20, alignItems: "center", flex: 1, position: "relative", padding: "16px 0" }}>
                        
                        {/* 3D Image Rendering Box */}
                        <div style={{ position: "relative", height: 280, width: "100%" }}>
                          <Image
                            src={activeSolution.image}
                            alt={activeSolution.title}
                            fill
                            style={{ objectFit: "contain", filter: "drop-shadow(0 15px 30px rgba(0, 74, 173,0.15))" }}
                            priority
                          />
                        </div>

                        {/* Dashed Hotspot Callout Markers */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                          {activeSolution.callouts?.map((call, idx) => {
                            const CallIcon = iconMap[call.icon] || ShieldCheck;
                            return (
                              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10, position: "relative" }}>
                                <div style={{ 
                                  width: 26, 
                                  height: 26, 
                                  borderRadius: "50%", 
                                  background: "#E3F2FD", 
                                  border: "1px solid #90CAF9", 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  marginTop: 2
                                }}>
                                  <CallIcon size={13} color="#0085f4" />
                                </div>
                                <div>
                                  <div style={{ fontSize: 11, fontWeight: 900, color: "#004aad", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.2 }}>
                                    {call.title}
                                  </div>
                                  <div style={{ fontSize: 11, color: "#546E7A", lineHeight: 1.35, marginTop: 2, fontWeight: 500 }}>
                                    {call.desc}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    </div>

                    {/* Bottom "IDEAL FOR" Card */}
                    <div style={{ 
                      background: "#E3F2FD", 
                      border: "1px solid #90CAF9", 
                      borderRadius: 10, 
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 14
                    }}>
                      <div style={{ 
                        width: 36, 
                        height: 36, 
                        borderRadius: "8px", 
                        background: "#0085f4", 
                        color: "#fff", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                        <Building2 size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 900, color: "#0085f4", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                          IDEAL FOR
                        </div>
                        <div style={{ fontSize: 12, color: "#004aad", fontWeight: 700, lineHeight: 1.4 }}>
                          {activeSolution.idealFor || "Municipal drainage systems, roadway catch basins, industrial sites, parks, and urban infrastructure projects."}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .solutions-layout { grid-template-columns: 1fr !important; }
          .solutions-tabs { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; }
          .solution-split-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .solutions-tabs { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .step-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
