"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Award, LucideIcon } from "lucide-react";
import homeData from "@/data/home.json";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Target,
  ShieldCheck,
  Award,
};

export default function TrustGuarantee() {
  const items = homeData.trust.items;
  const header = homeData.trust.header;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        background: "#030b17", // Extremely deep blue/black for max contrast
        padding: "160px 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.02)"
      }}
    >
      {/* Dynamic Halo Background */}
      {isClient && (
        <motion.div
          animate={{
            x: mousePos.x - 400,
            y: mousePos.y - 400,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 800,
            height: 800,
            background: "radial-gradient(circle, rgba(33,150,243,0.15) 0%, rgba(0,229,255,0.05) 40%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
            filter: "blur(60px)",
          }}
        />
      )}

      {/* Static Central Halo for baseline glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60vw",
        height: "60vw",
        background: "radial-gradient(circle, rgba(33,150,243,0.08) 0%, transparent 60%)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 10 }}>

        {/* Fortune 500 Style Header */}
        <div style={{ textAlign: "center", marginBottom: 100 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display" style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              margin: 0,
              lineHeight: 1.1
            }}>
              {header.titleStart} <span style={{
                background: "linear-gradient(135deg, #2196F3 0%, #00E5FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>{header.titleHighlight}</span> {header.titleEnd}
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              maxWidth: 600,
              margin: "24px auto 0",
              fontWeight: 300,
              letterSpacing: 1
            }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Glassmorphic Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24
        }} className="halo-grid">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: 24,
                  padding: 32,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "crosshair"
                }}
                className="glass-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${item.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Subtle top border gradient line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`, opacity: 0.5 }} />

                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `inset 0 0 20px ${item.color}10`
                  }}>
                    <Icon size={24} color={item.color} strokeWidth={1.5} />
                  </div>
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: 2,
                    margin: 0,
                    textTransform: "uppercase"
                  }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  margin: 0,
                  fontWeight: 300
                }}>
                  {item.desc}
                </p>

                {/* Animated corner accent */}
                <div className="corner-accent" style={{ position: "absolute", bottom: 24, right: 24, opacity: 0.2, transition: "opacity 0.5s" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 22L22 2M22 2H8M22 2V16" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        .glass-card:hover .corner-accent {
          opacity: 1 !important;
        }
        @media (max-width: 1200px) {
          .halo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .halo-grid {
            grid-template-columns: 1fr !important;
          }
          .glass-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
