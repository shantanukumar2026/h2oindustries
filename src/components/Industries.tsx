"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Waves, Construction, Leaf, Flame, Sprout } from "lucide-react";

const industries = [
  { icon: Building2, title: "MUNICIPAL WATER", desc: "Stormwater sampling stations and drainage systems for councils and local authorities managing public water infrastructure.", accent: "#2196F3" },
  { icon: Waves, title: "MARINE & COASTAL", desc: "Ocean-focused water quality monitoring products designed to prevent marine pollution at the stormwater source.", accent: "#0288D1" },
  { icon: Construction, title: "CIVIL INFRASTRUCTURE", desc: "Heavy-duty drainage and access solutions for roads, bridges, and major civil construction projects.", accent: "#607D8B" },
  { icon: Leaf, title: "ENVIRONMENTAL", desc: "Precision sampling systems for environmental engineers conducting comprehensive water quality assessments.", accent: "#43A047" },
  { icon: Flame, title: "INDUSTRIAL FACILITIES", desc: "Robust water management infrastructure for industrial sites requiring compliant stormwater management.", accent: "#EF6C00" },
  { icon: Sprout, title: "AGRICULTURAL", desc: "Durable drainage and sampling products engineered to withstand agricultural environments and protect waterways.", accent: "#558B2F" },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="industries-section" style={{ background: "#062347", position: "relative" }}>
      {/* Top Border Accent */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, background: "#2196F3" }} />

      <div className="industries-container" style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div ref={ref} style={{ marginBottom: 64, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            {/* Rigid Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1565C0",
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <div style={{ width: 12, height: 2, background: "#fff" }} />
              <span
                style={{
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Industries We Serve
              </span>
            </div>
            
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1,
                marginBottom: 24,
                textTransform: "uppercase",
                fontStyle: "italic",
                letterSpacing: "0.02em",
              }}
            >
              BUILT FOR THE INDUSTRIES<br />
              <span style={{ color: "#2196F3" }}>THAT SHAPE OUR WORLD</span>
            </h2>
            <p style={{ color: "#42A5F5", fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.6, fontWeight: 500 }}>
              H2 Industries products are deployed across a broad range of sectors — wherever precision water management matters most.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
              >
                <IndustryCard ind={ind} Icon={Icon} />
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        .industries-section { padding: 100px 0; }
        .industries-container { padding: 0 60px; }
        @media (max-width: 768px) {
          .industries-section { padding: 60px 0; }
          .industries-container { padding: 0 24px; }
        }
      `}</style>
    </section>
  );
}

function IndustryCard({ ind, Icon }: { ind: typeof industries[0]; Icon: React.ElementType }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "32px",
        background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
        border: "1px solid",
        borderColor: hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
        borderTop: `4px solid ${ind.accent}`,
        transition: "all 0.2s ease",
        cursor: "default",
      }}
    >
      <div style={{
        width: 48,
        height: 48,
        background: "rgba(255,255,255,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        border: "1px solid rgba(255,255,255,0.1)",
      }}>
        <Icon size={24} color={ind.accent} />
      </div>

      <h3 style={{ fontSize: 18, fontWeight: 900, fontStyle: "italic", color: "#fff", marginBottom: 12, letterSpacing: "0.02em" }}>
        {ind.title}
      </h3>
      <p style={{ fontSize: 15, color: "#42A5F5", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
        {ind.desc}
      </p>
    </div>
  );
}
