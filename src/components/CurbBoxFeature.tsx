"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Wrench, Layers } from "lucide-react";

const specs = [
  { icon: ShieldCheck, label: "Cast-iron & HDPE composite body" },
  { icon: Wrench, label: "Telescoping adjustable riser" },
  { icon: Layers, label: "Locking lid — traffic-rated" },
];

export default function CurbBoxFeature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="curb-box" className="curbbox-section" style={{ background: "#062347", position: "relative" }}>
      <div className="curbbox-container" style={{ maxWidth: 1720, margin: "0 auto" }}>
        <div
          ref={ref}
          className="curbbox-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Left: Product Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                background: "#031429",
                border: "8px solid #fff",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <video
                src="/videos/hero-bg-optimized.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(6,35,71,0.6) 0%, rgba(6,35,71,0) 40%)",
                }}
              />
              {/* Badge */}
              <div style={{ position: "absolute", bottom: 0, left: 0, background: "#1565C0", padding: "16px 24px" }}>
                <p style={{ fontSize: 12, fontWeight: 800, color: "#90CAF9", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                  Product In Action
                </p>
                <p style={{ fontSize: 18, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", margin: 0, marginTop: 4 }}>
                  H2 Curb Box
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
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
              <span style={{ color: "#fff", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Featured Product
              </span>
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1,
                color: "#fff",
                marginBottom: 24,
                textTransform: "uppercase",
                fontStyle: "italic",
                letterSpacing: "0.02em",
              }}
            >
              THE H2 <br />
              <span style={{ color: "#42A5F5" }}>CURB BOX</span>
            </h2>

            <div style={{ width: 80, height: 4, background: "#2196F3", marginBottom: 32 }} />

            <p style={{ color: "#90CAF9", fontSize: 16, lineHeight: 1.8, marginBottom: 32, fontWeight: 500, maxWidth: 560 }}>
              Engineered for durability and secure street-level access, the H2 Curb Box protects and controls water shut-off valves in municipal and residential water lines. Its telescoping riser adjusts to grade, while the traffic-rated locking lid keeps the valve secure from tampering and debris.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {specs.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      background: "rgba(33,150,243,0.15)",
                      border: "1px solid rgba(144,202,249,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={20} color="#42A5F5" />
                    </div>
                    <span style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>{s.label}</span>
                  </div>
                );
              })}
            </div>

            <a
              href="#products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#1565C0",
                color: "#fff",
                textDecoration: "none",
                padding: "16px 32px",
                fontSize: 14,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1E88E5")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1565C0")}
            >
              Explore The Range <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .curbbox-section { padding: 100px 0; }
        .curbbox-container { padding: 0 60px; }
        @media (min-width: 1024px) {
          .curbbox-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .curbbox-section { padding: 60px 0; }
          .curbbox-container { padding: 0 24px; }
        }
      `}</style>
    </section>
  );
}
