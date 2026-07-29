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
    <section id="solutions" style={{ background: "#FAFCFF", padding: "64px 0", position: "relative", borderTop: "1px solid #E2E8F0" }}>
      {/* Background blueprint grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        
        {/* Header */}
        <div ref={ref} style={{ marginBottom: 36, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="pill-tag" style={{ marginBottom: 16 }}>
              <span className="dot" />
              {header.tagline}
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 900, color: "#004aad", lineHeight: 1.1, textTransform: "uppercase", fontStyle: "italic" }}>
              {header.title}<br />
              <span style={{ color: "#2563EB" }}>
                {header.highlight}
              </span>
            </h2>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 32 }} className="solutions-layout">
          
          {/* ────── LEFT SIDEBAR: Interactive Tabs (Matching Image 2 light active state) ────── */}
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
                    background: isActive ? "#EBF3FF" : "#ffffff",
                    border: isActive ? "2px solid #2563EB" : "1px solid #E2E8F0",
                    padding: "24px",
                    borderRadius: "16px",
                    cursor: "pointer",
                    transition: "all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    position: "relative",
                    boxShadow: isActive ? "0 8px 24px rgba(37, 99, 235, 0.12)" : "0 2px 8px rgba(6, 35, 71, 0.02)"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#F8FAFC";
                      e.currentTarget.style.borderColor = "#CBD5E1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#ffffff";
                      e.currentTarget.style.borderColor = "#E2E8F0";
                    }
                  }}
                >
                  {/* Top Row: Left Icon Box + Right Circle Arrow */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ 
                      width: 44, 
                      height: 44, 
                      background: isActive ? "#2563EB" : "#EFF6FF", 
                      borderRadius: "10px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      boxShadow: isActive ? "0 4px 12px rgba(37, 99, 235, 0.3)" : "none"
                    }}>
                      <Icon size={22} color={isActive ? "#ffffff" : "#2563EB"} />
                    </div>

                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: isActive ? "#ffffff" : "#EFF6FF",
                      border: isActive ? "1px solid #BFDBFE" : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563EB",
                      boxShadow: isActive ? "0 2px 6px rgba(37,99,235,0.1)" : "none"
                    }}>
                      <ArrowRight size={16} />
                    </div>
                  </div>

                  {/* Content Group */}
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                      {sol.category}
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 900, color: "#1E3A8A", marginBottom: 6, letterSpacing: "-0.01em" }}>
                      {sol.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.45, fontWeight: 500 }}>
                      {sol.tabSubtitle || sol.desc.slice(0, 60) + "..."}
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* ────── RIGHT MAIN CONTAINER (Exact Matching Image 2) ────── */}
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
                  padding: "16px 36px", 
                  borderBottom: "1px solid #E2E8F0", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  background: "#F8FAFC" 
                }}>
                  <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                    {Object.entries(activeSolution.specs).map(([key, val]) => (
                      <div key={key}>
                        <div style={{ fontSize: 10, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3, fontWeight: 800 }}>{key}</div>
                        <div style={{ fontSize: 14, color: "#1E3A8A", fontWeight: 800 }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ fontSize: 13, color: "#2563EB", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "monospace" }}>
                    SYS-0{solutions.findIndex(s => s.id === activeTab) + 1}
                  </div>
                </div>

                {/* 2. Inner Split Layout */}
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr" }} className="solution-split-grid">
                  
                  {/* Left Column: Title, Subtitle, How It Works, Key Benefits */}
                  <div style={{ padding: 36, display: "flex", flexDirection: "column", gap: 28, borderRight: "1px solid #E2E8F0" }}>
                    
                    {/* Title & Description */}
                    <div>
                      <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#1E3A8A", textTransform: "uppercase", marginBottom: 14, fontStyle: "italic", lineHeight: 1.08 }}>
                        {activeSolution.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "#2563EB", lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                        {activeSolution.desc}
                      </p>
                    </div>

                    {/* HOW IT WORKS Section (4 Steps) */}
                    {activeSolution.howItWorks && (
                      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 20 }}>
                        <div style={{ fontSize: 11, fontWeight: 900, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
                          HOW IT WORKS
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="steps-grid">
                          {activeSolution.howItWorks.map((st, idx) => (
                            <div key={st.step} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 8 }}>
                              
                              {/* Step Card Graphic Box */}
                              <div style={{ 
                                background: "#F8FAFC", 
                                border: "1px solid #E2E8F0", 
                                borderRadius: 10, 
                                padding: 8,
                                position: "relative",
                                height: 115,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden"
                              }}>
                                {/* Step number badge */}
                                <div style={{ 
                                  position: "absolute", 
                                  top: 6, 
                                  left: 6, 
                                  background: "#2563EB", 
                                  color: "#fff", 
                                  width: 20, 
                                  height: 20, 
                                  borderRadius: "50%", 
                                  fontSize: 11, 
                                  fontWeight: 900, 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  boxShadow: "0 2px 6px rgba(37,99,235,0.3)"
                                }}>
                                  {st.step}
                                </div>

                                {/* Clean Technical SVG Diagram for Step */}
                                <StepSvgDiagram step={st.step} />
                              </div>

                              {/* Description Text */}
                              <div style={{ fontSize: 11, color: "#475569", lineHeight: 1.35, fontWeight: 500 }}>
                                {st.text}
                              </div>

                              {/* Arrow Connector */}
                              {idx < activeSolution.howItWorks.length - 1 && (
                                <div style={{ position: "absolute", right: -8, top: 48, zIndex: 5 }} className="step-arrow">
                                  <ArrowRight size={14} color="#2563EB" />
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
                        <div style={{ fontSize: 11, fontWeight: 900, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
                          KEY BENEFITS
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="benefits-grid">
                          {activeSolution.keyBenefits.map((ben, idx) => {
                            const BenIcon = iconMap[ben.icon] || ShieldCheck;
                            return (
                              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <div style={{ 
                                  width: 36, 
                                  height: 36, 
                                  borderRadius: "10px", 
                                  border: "1.5px solid #93C5FD", 
                                  background: "#EFF6FF", 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  marginBottom: 4
                                }}>
                                  <BenIcon size={18} color="#2563EB" />
                                </div>
                                <div style={{ fontSize: 13, fontWeight: 900, color: "#1E3A8A", lineHeight: 1.2 }}>
                                  {ben.title}
                                </div>
                                <div style={{ fontSize: 11, color: "#64748B", lineHeight: 1.35, fontWeight: 500 }}>
                                  {ben.desc}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right Column: Visual Product Diagram + Dashed Hotspot Lines */}
                  <div style={{ padding: 28, background: "#FAFCFF", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20, position: "relative" }}>
                    
                    {/* Main Interactive Card */}
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
                      {/* Options 3-Dots Button Top Right */}
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
                          color: "#2563EB",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
                        }}>
                          <MoreHorizontal size={15} />
                        </button>
                      </div>

                      {/* 3D Product Image + Connecting Dashed Lines + Callouts */}
                      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 16, alignItems: "center", flex: 1, position: "relative" }}>
                        
                        {/* 3D Casting Product Image */}
                        <div style={{ position: "relative", height: 340, width: "100%" }}>
                          <Image
                            src={activeSolution.image}
                            alt={activeSolution.title}
                            fill
                            style={{ objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(0, 74, 173, 0.16))" }}
                            priority
                          />
                        </div>

                        {/* Callout Badges with Dashed Lines */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 22, position: "relative" }}>
                          {activeSolution.callouts?.map((call, idx) => {
                            const CallIcon = iconMap[call.icon] || ShieldCheck;
                            return (
                              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10, position: "relative" }}>
                                
                                {/* Dashed indicator line pointing to product */}
                                <div 
                                  className="dashed-indicator"
                                  style={{ 
                                    position: "absolute", 
                                    left: -60, 
                                    top: 14, 
                                    width: 50, 
                                    borderTop: "2px dashed #93C5FD",
                                    pointerEvents: "none" 
                                  }} 
                                />

                                <div style={{ 
                                  width: 28, 
                                  height: 28, 
                                  borderRadius: "50%", 
                                  background: "#EFF6FF", 
                                  border: "1.5px solid #93C5FD", 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  marginTop: 1,
                                  boxShadow: "0 2px 6px rgba(37,99,235,0.15)"
                                }}>
                                  <CallIcon size={14} color="#2563EB" />
                                </div>

                                <div>
                                  <div style={{ fontSize: 11, fontWeight: 900, color: "#1E3A8A", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.2 }}>
                                    {call.title}
                                  </div>
                                  <div style={{ fontSize: 11, color: "#475569", lineHeight: 1.35, marginTop: 2, fontWeight: 500 }}>
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
                      border: "1px solid #BFDBFE", 
                      borderRadius: 12, 
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 14
                    }}>
                      <div style={{ 
                        width: 38, 
                        height: 38, 
                        borderRadius: "10px", 
                        background: "#2563EB", 
                        color: "#fff", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 12px rgba(37,99,235,0.3)"
                      }}>
                        <Building2 size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 900, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 2 }}>
                          IDEAL FOR
                        </div>
                        <div style={{ fontSize: 12, color: "#1E3A8A", fontWeight: 800, lineHeight: 1.45 }}>
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
          .dashed-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// ────── Step Diagram Component (Crisp technical SVG illustrations) ──────
function StepSvgDiagram({ step }: { step: number }) {
  if (step === 1) {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="10" width="30" height="40" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5"/>
        <rect x="22" y="14" width="16" height="32" rx="2" fill="#2563EB" opacity="0.8"/>
        <path d="M10 20H50" stroke="#64748B" strokeWidth="2" strokeDasharray="3 3"/>
        <path d="M20 5L30 14L40 5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="10" width="20" height="40" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5"/>
        <path d="M30 15V45" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M25 35L30 42L35 35" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 25C20 30 25 25 30 30" stroke="#60A5FA" strokeWidth="2"/>
      </svg>
    );
  }
  if (step === 3) {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="8" width="16" height="14" rx="2" fill="#2563EB"/>
        <rect x="20" y="24" width="20" height="14" rx="2" fill="#60A5FA"/>
        <rect x="18" y="40" width="24" height="14" rx="2" fill="#93C5FD"/>
        <path d="M10 20L10 40M10 20L7 24M10 20L13 24M10 40L7 36M10 40L13 36" stroke="#2563EB" strokeWidth="2"/>
      </svg>
    );
  }
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="20" height="34" rx="3" fill="#2563EB"/>
      <path d="M10 44H50V52H10V44Z" fill="#64748B"/>
      <circle cx="30" cy="48" r="3" fill="#60A5FA"/>
      <path d="M15 36L30 44L45 36" stroke="#38BDF8" strokeWidth="2" strokeDasharray="2 2"/>
    </svg>
  );
}
