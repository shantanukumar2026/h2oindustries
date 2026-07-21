"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Settings, ArrowUpDown, Lock } from "lucide-react";
import Image from "next/image";
import homeData from "../data/home.json";

export default function CurbBoxFeature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const { header, image } = homeData.curbbox;

  return (
    <section
      id="curb-box"
      className="curbbox-section"
      style={{
        backgroundColor: "#f0f6ff",
        position: "relative",
        overflow: "hidden",
        padding: "48px 0",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Premium Layered Background ── */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 25% 50%, rgba(22,101,193,0.08) 0%, transparent 65%)", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 75% 40%, rgba(6,55,115,0.05) 0%, transparent 60%)", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 100%, rgba(22,101,193,0.06) 0%, transparent 40%)", zIndex: 0 }} />

      {/* Engineering Blueprint Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          backgroundImage: "linear-gradient(rgba(22,101,193,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(22,101,193,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          zIndex: 0,
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Decorative Floating Geometric Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", top: "15%", right: "8%", width: 200, height: 200, border: "1px solid rgba(22,101,193,0.08)", borderRadius: "50%", zIndex: 0 }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", bottom: "20%", left: "5%", width: 300, height: 300, border: "1px solid rgba(22,101,193,0.06)", borderRadius: "50%", zIndex: 0 }}
      />
      <div style={{ position: "absolute", top: "30%", left: "12%", width: 6, height: 6, background: "rgba(22,101,193,0.15)", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20%", right: "20%", width: 4, height: 4, background: "rgba(22,101,193,0.12)", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "25%", right: "12%", width: 8, height: 8, background: "rgba(22,101,193,0.1)", borderRadius: "50%", zIndex: 0 }} />

      {/* Main Content Area */}
      <div
        className="curbbox-container"
        style={{
          maxWidth: 1440,
          width: "100%",
          margin: "0 auto",
          padding: "0 60px",
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          ref={ref}
          className="curbbox-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 50,
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* ───────── LEFT: Product Showcase ───────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
              paddingBottom: "3%",
              minHeight: "450px"
            }}
          >
            {/* Glowing Halo Behind Product */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                right: "10%",
                bottom: "5%",
                background: "radial-gradient(circle, rgba(22,101,193,0.15) 0%, rgba(22,101,193,0.05) 40%, transparent 70%)",
                filter: "blur(40px)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Arch Background with Premium Gradient */}
            <div
              style={{
                position: "absolute",
                bottom: "3%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "min(380px, 80%)",
                height: "88%",
                background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(224,238,255,0.4) 50%, rgba(22,101,193,0.05) 100%)",
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                zIndex: 0,
                border: "1px solid rgba(22,101,193,0.06)",
                borderBottom: "none",
              }}
            />

            {/* Layered Blue Disc Platform */}
            <div style={{ position: "absolute", bottom: "3%", left: "50%", transform: "translateX(-50%)", width: "min(380px, 82%)", zIndex: 1 }}>
              {/* Shadow ring */}
              <div style={{ position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)", width: "110%", height: 30, background: "rgba(6,55,115,0.08)", borderRadius: "50%", filter: "blur(8px)" }} />
              {/* Outer ring */}
              <div style={{ position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)", width: "105%", height: 50, background: "linear-gradient(180deg, rgba(22,101,193,0.15), rgba(22,101,193,0.05))", borderRadius: "50%" }} />
              {/* Main disc */}
              <div style={{ position: "relative", width: "100%", height: 55, background: "linear-gradient(180deg, #2185d0, #1565C0)", borderRadius: "50%", boxShadow: "0 8px 32px rgba(22,101,193,0.35), inset 0 2px 8px rgba(255,255,255,0.2), inset 0 -4px 0 rgba(0,0,0,0.15)" }} />
            </div>

            {/* Product Image */}
            <div style={{ position: "absolute", bottom: "6%", width: "100%", height: "88%", zIndex: 2 }}>
              <Image
                src={image}
                alt={header.title}
                fill
                style={{ objectFit: "contain", filter: "drop-shadow(0 16px 32px rgba(6,55,115,0.2))" }}
                priority
              />
            </div>

            {/* Left Callout Badge — Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ position: "absolute", top: "28%", left: 0, zIndex: 10, display: "flex", alignItems: "center", transform: "translateX(-12%)" }}
            >
              <div style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid rgba(22,101,193,0.12)",
                boxShadow: "0 8px 32px rgba(6,55,115,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 10
              }}>
                <div style={{ background: "linear-gradient(135deg, #1565C0, #0D47A1)", borderRadius: 6, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(13,71,161,0.3)" }}>
                  <ShieldCheck size={15} color="#fff" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#1565C0", fontSize: 8, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 1 }}>MATERIAL SPEC</span>
                  <span style={{ color: "#063773", fontSize: 11, fontWeight: 800, textTransform: "uppercase", lineHeight: 1.15 }}>HIGH-YIELD<br />CAST IRON</span>
                </div>
              </div>
              <div style={{ width: "3vw", maxWidth: 40, height: 1, background: "linear-gradient(90deg, #1565C0, transparent)" }} />
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1565C0", boxShadow: "0 0 8px rgba(21,101,192,0.4)" }} />
            </motion.div>

            {/* Right Callout Badge — Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ position: "absolute", bottom: "36%", right: 0, zIndex: 10, display: "flex", alignItems: "center", transform: "translateX(12%)" }}
            >
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1565C0", boxShadow: "0 0 8px rgba(21,101,192,0.4)" }} />
              <div style={{ width: "3vw", maxWidth: 40, height: 1, background: "linear-gradient(90deg, transparent, #1565C0)" }} />
              <div style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid rgba(22,101,193,0.12)",
                boxShadow: "0 8px 32px rgba(6,55,115,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 10
              }}>
                <div style={{ background: "linear-gradient(135deg, #1565C0, #0D47A1)", borderRadius: 6, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(13,71,161,0.3)" }}>
                  <Settings size={15} color="#fff" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#1565C0", fontSize: 8, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 1 }}>ADAPTABILITY</span>
                  <span style={{ color: "#063773", fontSize: 11, fontWeight: 800, textTransform: "uppercase", lineHeight: 1.15 }}>ADJUSTABLE<br />RISER CORE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ───────── RIGHT: Text Content ───────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            {/* Title */}
            <motion.h2
              className="font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: "clamp(2.4rem, 4vw, 4rem)",
                fontWeight: 950,
                color: "#0D47A1",
                lineHeight: 0.92,
                textTransform: "uppercase",
                fontStyle: "italic",
                letterSpacing: "-0.03em",
                marginBottom: "1.2vh",
                background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              THE H2<br />CURB BOX
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 70 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ height: 3, background: "linear-gradient(90deg, #1565C0, #42A5F5)", marginBottom: "2vh", borderRadius: 2 }}
            />

            {/* Description */}
            <p style={{ color: "#455A64", fontSize: "clamp(12px, 1.5vh, 15px)", lineHeight: 1.6, marginBottom: "2.5vh", fontWeight: 500, maxWidth: 440, letterSpacing: "0.01em" }}>
              Designed for maximum durability in harsh environments, the H2 Curb Box sets the standard for municipal water infrastructure reliability.
            </p>

            {/* Feature Rows */}
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "2.5vh", maxWidth: 480 }}>
              {[
                { icon: ShieldCheck, title: "CAST-IRON & HDPE COMPOSITE BODY", desc: "Engineered for absolute reliability." },
                { icon: ArrowUpDown, title: "TELESCOPING ADJUSTABLE RISER", desc: "Precision height adjustment system." },
                { icon: Lock,        title: "LOCKING LID — TRAFFIC-RATED", desc: "Heavy-duty tamper-proof security." },
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      borderBottom: i < 2 ? "1px solid rgba(22,101,193,0.08)" : "none",
                      padding: "1.3vh 0",
                    }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(22,101,193,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      boxShadow: "0 2px 8px rgba(6,55,115,0.06)"
                    }}>
                      <Icon size={16} color="#0D47A1" strokeWidth={2} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "#0D3A73", fontWeight: 800, fontSize: "clamp(10px, 1.2vh, 12px)", textTransform: "uppercase", letterSpacing: "0.03em" }}>{feat.title}</span>
                      <span style={{ color: "#78909C", fontSize: "clamp(9px, 1vh, 11px)", fontWeight: 500 }}>{feat.desc}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#products"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.03, boxShadow: "0 12px 32px rgba(13,71,161,0.35)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(135deg, #0D47A1, #1565C0)",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                boxShadow: "0 8px 24px rgba(13,71,161,0.25)",
                alignSelf: "flex-start",
                transition: "all 0.3s ease",
              }}
            >
              EXPLORE PRODUCTS <ArrowRight size={15} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .curbbox-section { height: auto !important; padding: 80px 0 40px !important; }
          .curbbox-container { padding: 0 24px !important; }
          .curbbox-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}