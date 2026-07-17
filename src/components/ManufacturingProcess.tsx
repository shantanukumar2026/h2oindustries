"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Ruler, Cog, FlaskConical, Truck } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Ruler,
  Cog,
  FlaskConical,
  Truck
};

export default function ManufacturingProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, steps } = homeData.process;

  return (
    <section id="process" style={{ background: "#F5F7FA", padding: "60px 0 120px 0" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="pill-tag" style={{ marginBottom: 20, display: "inline-flex" }}>
              <span className="dot" /> {header.tagline}
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(1.8rem, 8vw, 3.2rem)", fontWeight: 900, color: "#0D3A73", lineHeight: 1.0, marginBottom: 16, textTransform: "uppercase" }}
            >
              {header.title}<br />
              <span style={{ color: "#1565C0" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#4A6375", fontSize: 17, maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Desktop timeline */}
        <div className="process-desktop" style={{ display: "none", position: "relative" }}>
          {/* Connector */}
          <div style={{
            position: "absolute",
            top: 48,
            left: "calc(10% + 40px)",
            right: "calc(10% + 40px)",
            height: 2,
            background: "linear-gradient(90deg, #1565C0 0%, #2196F3 50%, #1565C0 100%)",
          }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || Lightbulb;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                >
                  {/* Circle */}
                  <div style={{
                    position: "relative",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "#fff",
                    border: "3px solid #90CAF9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    boxShadow: "0 4px 20px rgba(21,101,192,0.12)",
                    zIndex: 1,
                  }}>
                    <div style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1565C0, #2196F3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <Icon size={22} color="#fff" />
                    </div>
                    {/* Number */}
                    <div style={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#0D47A1",
                      color: "#fff",
                      fontSize: 9,
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      {step.num}
                    </div>
                  </div>
                  <h3
                    className="font-display"
                    style={{ fontSize: 20, fontWeight: 900, color: "#0D3A73", marginBottom: 10, textTransform: "uppercase" }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#4A6375", lineHeight: 1.65, marginBottom: 10 }}>{step.desc}</p>
                  <p style={{ fontSize: 11, color: "#1565C0", fontWeight: 600 }}>{step.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="process-mobile" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Lightbulb;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                style={{ display: "flex", gap: 20 }}
              >
                {/* Left */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1565C0, #2196F3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 16px rgba(21,101,192,0.3)",
                  }}>
                    <Icon size={20} color="#fff" />
                  </div>
                  {i < 4 && (
                    <div style={{
                      width: 2,
                      flex: 1,
                      minHeight: 32,
                      background: "linear-gradient(to bottom, #1565C0, #2196F3)",
                      margin: "8px 0",
                    }} />
                  )}
                </div>
                {/* Content */}
                <div style={{ paddingBottom: i < 4 ? 32 : 0, paddingTop: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: "#1565C0", letterSpacing: "0.1em" }}>{step.num}</span>
                    <h3
                      className="font-display"
                      style={{ fontSize: 22, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#4A6375", lineHeight: 1.65, marginBottom: 8 }}>{step.desc}</p>
                  <p style={{ fontSize: 12, color: "#1565C0", fontWeight: 600 }}>{step.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .process-desktop { display: block !important; }
          .process-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}
