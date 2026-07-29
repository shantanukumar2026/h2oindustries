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
  CheckCircle2,
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
    <section id="solutions" style={{ background: "#FAFCFF", padding: "64px 0", position: "relative", borderTop: "1px solid #E2E8F0" }}>
      {/* Background blueprint grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(rgba(0, 133, 244, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 133, 244, 0.15) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

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

        <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 32 }} className="solutions-layout">
          
          {/* Left Column: Interactive Category Tabs */}
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
                    background: isActive 
                      ? "linear-gradient(135deg, #0085f4 0%, #004aad 100%)" 
                      : "#ffffff",
                    border: "1.5px solid",
                    borderColor: isActive ? "#0085f4" : "#E2E8F0",
                    padding: "22px 24px",
                    borderRadius: "16px",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    position: "relative",
                    boxShadow: isActive ? "0 14px 32px rgba(0, 133, 244, 0.22)" : "0 2px 10px rgba(6, 35, 71, 0.02)"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#F4F8FF";
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
                      width: 42, 
                      height: 42, 
                      background: isActive ? "rgba(255,255,255,0.2)" : "#EFF6FF", 
                      borderRadius: "10px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      transition: "background 0.3s",
                      backdropFilter: isActive ? "blur(4px)" : "none"
                    }}>
                      <Icon size={22} color={isActive ? "#ffffff" : "#0085f4"} />
                    </div>

                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: isActive ? "rgba(255, 255, 255, 0.2)" : "#EFF6FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isActive ? "#ffffff" : "#0085f4",
                      transition: "all 0.2s"
                    }}>
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: isActive ? "#E0F2FE" : "#0085f4", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
                      {sol.category}
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 900, color: isActive ? "#ffffff" : "#004aad", marginBottom: 6, letterSpacing: "-0.01em" }}>
                      {sol.title}
                    </div>
                    <div style={{ fontSize: 13, color: isActive ? "rgba(255, 255, 255, 0.88)" : "#546E7A", lineHeight: 1.45, fontWeight: 500 }}>
                      {sol.tabSubtitle || sol.desc.slice(0, 60) + "..."}
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right Main Container */}
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
                  padding: "18px 36px", 
                  borderBottom: "1px solid #E2E8F0", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  background: "#F8FAFC" 
                }}>
                  <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                    {Object.entries(activeSolution.specs).map(([key, val]) => (
                      <div key={key}>
                        <div style={{ fontSize: 10, color: "#0085f4", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3, fontWeight: 800 }}>{key}</div>
                        <div style={{ fontSize: 14, color: "#004aad", fontWeight: 800 }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ fontSize: 13, color: "#0085f4", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "monospace" }}>
                    SYS-0{solutions.findIndex(s => s.id === activeTab) + 1}
                  </div>
                </div>

                {/* 2. Main Content & Inspection Panel Split */}
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr" }} className="solution-split-grid">
                  
                  {/* Left Main Details Column */}
                  <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 32, borderRight: "1px solid #E2E8F0" }}>
                    
                    {/* Title & Description */}
                    <div>
                      <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", marginBottom: 14, fontStyle: "italic", lineHeight: 1.08, letterSpacing: "0.01em" }}>
                        {activeSolution.title}
                      </h3>
                      <p style={{ fontSize: 15, color: "#0085f4", lineHeight: 1.7, margin: 0, fontWeight: 500, maxWidth: 680 }}>
                        {activeSolution.desc}
                      </p>
                    </div>

                    {/* HOW IT WORKS Section (4 Steps) */}
                    {activeSolution.howItWorks && (
                      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 24 }}>
                        <div style={{ fontSize: 11, fontWeight: 900, color: "#0085f4", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>
                          HOW IT WORKS
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }} className="steps-grid">
                          {activeSolution.howItWorks.map((st, idx) => (
                            <div key={st.step} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 10 }}>
                              {/* Step Card Graphic Box */}
                              <div style={{ 
                                background: "#F8FAFC", 
                                border: "1px solid #E2E8F0", 
                                borderRadius: 10, 
                                padding: 12,
                                position: "relative",
                                height: 110,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                              }}>
                                {/* Step number badge */}
                                <div style={{ 
                                  position: "absolute", 
                                  top: 8, 
                                  left: 8, 
                                  background: "#0085f4", 
                                  color: "#fff", 
                                  width: 20, 
                                  height: 20, 
                                  borderRadius: "50%", 
                                  fontSize: 11, 
                                  fontWeight: 900, 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  boxShadow: "0 2px 6px rgba(0,133,244,0.3)"
                                }}>
                                  {st.step}
                                </div>

                                {/* Step Diagram Graphic */}
                                <div style={{ position: "relative", width: "100%", height: 70 }}>
                                  <Image
                                    src={activeSolution.image}
                                    alt={`Step ${st.step}`}
                                    fill
                                    style={{ objectFit: "contain", opacity: 0.95 }}
                                  />
                                </div>
                              </div>

                              {/* Description Text */}
                              <div style={{ fontSize: 11, color: "#546E7A", lineHeight: 1.4, fontWeight: 500 }}>
                                {st.text}
                              </div>

                              {/* Arrow Connector to next step */}
                              {idx < activeSolution.howItWorks.length - 1 && (
                                <div style={{ position: "absolute", right: -9, top: 45, zIndex: 5 }} className="step-arrow">
                                  <ArrowRight size={14} color="#0085f4" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* KEY BENEFITS Section */}
                    {activeSolution.keyBenefits && (
                      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 24 }}>
                        <div style={{ fontSize: 11, fontWeight: 900, color: "#0085f4", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>
                          KEY BENEFITS
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="benefits-grid">
                          {activeSolution.keyBenefits.map((ben, idx) => {
                            const BenIcon = iconMap[ben.icon] || ShieldCheck;
                            return (
                              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                <div style={{ 
                                  width: 36, 
                                  height: 36, 
                                  borderRadius: "8px", 
                                  border: "1.5px solid #90CAF9", 
                                  background: "#EFF6FF", 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  marginBottom: 4
                                }}>
                                  <BenIcon size={18} color="#0085f4" />
                                </div>
                                <div style={{ fontSize: 13, fontWeight: 900, color: "#004aad", lineHeight: 1.2 }}>
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
                  <div style={{ padding: 32, background: "#FAFCFF", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, position: "relative" }}>
                    
                    {/* Main Image & Hotspot Container Card */}
                    <div style={{ 
                      background: "#ffffff", 
                      border: "1px solid #E2E8F0", 
                      borderRadius: 14, 
                      padding: 24, 
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      boxShadow: "0 4px 20px rgba(6, 35, 71, 0.02)"
                    }}>
                      {/* Options Button Top Right */}
                      <div style={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}>
                        <button style={{ 
                          width: 30, 
                          height: 30, 
                          borderRadius: "50%", 
                          border: "1px solid #E2E8F0", 
                          background: "#ffffff", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center",
                          cursor: "pointer",
                          color: "#0085f4",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
                        }}>
                          <MoreHorizontal size={15} />
                        </button>
                      </div>

                      {/* 3D Rendering + Hotspots */}
                      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 20, alignItems: "center", flex: 1, position: "relative" }}>
                        
                        {/* 3D Image Box */}
                        <div style={{ position: "relative", height: 320, width: "100%" }}>
                          <Image
                            src={activeSolution.image}
                            alt={activeSolution.title}
                            fill
                            style={{ objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(0, 74, 173, 0.18))" }}
                            priority
                          />
                        </div>

                        {/* Hotspot Callout Markers */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                          {activeSolution.callouts?.map((call, idx) => {
                            const CallIcon = iconMap[call.icon] || ShieldCheck;
                            return (
                              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10, position: "relative" }}>
                                <div style={{ 
                                  width: 28, 
                                  height: 28, 
                                  borderRadius: "50%", 
                                  background: "#EFF6FF", 
                                  border: "1.5px solid #90CAF9", 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  marginTop: 1,
                                  boxShadow: "0 2px 6px rgba(0,133,244,0.15)"
                                }}>
                                  <CallIcon size={14} color="#0085f4" />
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
                      background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", 
                      border: "1px solid #BEE3F8", 
                      borderRadius: 12, 
                      padding: "18px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: 16
                    }}>
                      <div style={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: "10px", 
                        background: "#0085f4", 
                        color: "#fff", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 12px rgba(0,133,244,0.3)"
                      }}>
                        <Building2 size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 900, color: "#0085f4", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 2 }}>
                          IDEAL FOR
                        </div>
                        <div style={{ fontSize: 12, color: "#004aad", fontWeight: 800, lineHeight: 1.45 }}>
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
        @media (max-width: 1280px) {
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
