"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Wrench, Layers, Settings, CheckCircle2, Play } from "lucide-react";
import Image from "next/image";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Wrench,
  Layers
};

export default function CurbBoxFeature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { header, watermark, image, badges, specs, button } = homeData.curbbox;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yWatermark = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="curb-box" className="curbbox-section" style={{ background: "#F5F7FA", position: "relative", overflow: "hidden", height: "100vh", display: "flex", alignItems: "center" }}>
      
      {/* Background Typography Watermark */}
      <motion.div className="watermark" style={{ y: yWatermark, position: "absolute", top: "10%", left: "-5%", fontSize: "clamp(10rem, 20vw, 25rem)", fontWeight: 900, color: "rgba(13, 58, 115, 0.03)", whiteSpace: "nowrap", fontStyle: "italic", pointerEvents: "none", zIndex: 0 }}>
        {watermark}
      </motion.div>

      <div className="curbbox-container" style={{ maxWidth: 1600, margin: "0 auto", position: "relative" }}>
        <div
          ref={ref}
          className="curbbox-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Left: Product Image Showcase with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: yImage, position: "relative", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                aspectRatio: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* Spinning Decorative Circle */}
              {/* Background Glow Orb behind Image */}
              <div style={{ position: "absolute", top: "50%", left: "50%", width: "90%", height: "90%", background: "radial-gradient(circle, rgba(33, 150, 243, 0.25) 0%, transparent 60%)", transform: "translate(-50%, -50%)", zIndex: 0 }} />

              <motion.div 
                initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
                animate={inView ? { scale: 1, opacity: 1, rotate: 360 } : {}}
                transition={{ duration: 40, delay: 0.2, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", width: "95%", height: "95%", borderRadius: "50%", background: "linear-gradient(135deg, rgba(33,150,243,0.08), transparent)", border: "2px dashed rgba(33,150,243,0.25)", borderTopColor: "rgba(33,150,243,0.6)" }} 
              />
              <motion.div 
                initial={{ scale: 0.7, opacity: 0, rotate: 360 }}
                animate={inView ? { scale: 0.9, opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 30, delay: 0.2, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", width: "75%", height: "75%", borderRadius: "50%", border: "2px solid rgba(33,150,243,0.15)", borderBottomColor: "rgba(33,150,243,0.5)" }} 
              />
              
              {/* Floating Product Image */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "relative", width: "100%", height: "100%", zIndex: 1, mixBlendMode: "multiply" }}
              >
                <Image
                  src={image}
                  alt={header.title}
                  fill
                  style={{ objectFit: "contain", filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.15))" }}
                />
              </motion.div>

              {/* Floating Tech Badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ position: "absolute", top: "22%", left: "-5%", zIndex: 10, display: "flex", alignItems: "center", gap: 12 }}
              >
                <div style={{ background: "#fff", padding: "10px 20px", borderRadius: 8, border: "1px solid #E0E0E0", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#2196F3", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>MATERIAL SPEC</span>
                  <span style={{ color: "#0D3A73", fontSize: 14, fontWeight: 800, textTransform: "uppercase" }}>{badges.materialSpec}</span>
                </div>
                <div style={{ width: 60, height: 2, background: "linear-gradient(to right, #2196F3, transparent)" }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ position: "absolute", bottom: "35%", right: "-15%", zIndex: 10, display: "flex", alignItems: "center", gap: 12 }}
              >
                <div style={{ width: 60, height: 2, background: "linear-gradient(to left, #2196F3, transparent)" }} />
                <div style={{ background: "#fff", padding: "10px 20px", borderRadius: 8, border: "1px solid #E0E0E0", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#2196F3", fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>ADAPTABILITY</span>
                  <span style={{ color: "#0D3A73", fontSize: 14, fontWeight: 800, textTransform: "uppercase" }}>{badges.adaptability}</span>
                </div>
              </motion.div>
              
              {/* Tech Lines */}
              <div style={{ position: "absolute", bottom: "10%", left: "-10%", width: "40%", height: "1px", background: "linear-gradient(to right, transparent, #2196F3, transparent)" }} />
              <div style={{ position: "absolute", top: "20%", right: "-10%", width: "40%", height: "1px", background: "linear-gradient(to right, transparent, #2196F3, transparent)" }} />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(21, 101, 192, 0.1)", padding: "6px 16px", marginBottom: 24 }}>
              <Settings size={14} color="#1565C0" />
              <span style={{ color: "#1565C0", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {header.tagline}
              </span>
            </div>

            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, color: "#0D3A73", lineHeight: 1.1, marginBottom: 16, textTransform: "uppercase", fontStyle: "italic" }}>
              {header.title}<br/>
              <span style={{ color: "#2196F3" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#4A6375", fontSize: 16, lineHeight: 1.6, marginBottom: 24, fontWeight: 500 }}>{header.subtitle}</p>

            {/* Feature List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {specs.map((s, i) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap] || ShieldCheck;
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                    key={s.label} 
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                      <div style={{ width: 28, height: 28, background: "rgba(33, 150, 243, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <CheckCircle2 size={14} color="#1565C0" />
                      </div>
                      <span style={{ color: "#0D3A73", fontWeight: 800, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</span>
                    </div>
                    <p style={{ color: "#4A6375", fontSize: 13, margin: 0, paddingLeft: 40, lineHeight: 1.5, fontWeight: 500 }}>Engineered for absolute reliability.</p>
                  </motion.div>
                );
              })}
            </div>

            <a
              href="#products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                background: "#1565C0",
                color: "#fff",
                textDecoration: "none",
                padding: "16px 40px",
                fontSize: 14,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(21,101,192,0.3)"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1E88E5"; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#1565C0"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              {button} <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .curbbox-section { padding: 40px 0; }
        .curbbox-container { padding: 0 40px; }
        @media (min-width: 1024px) {
          .curbbox-grid { grid-template-columns: 1.1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .curbbox-section { padding: 80px 0; }
          .curbbox-container { padding: 0 24px; }
        }
      `}</style>
    </section>
  );
}
