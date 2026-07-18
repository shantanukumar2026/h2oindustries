"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import homeData from "@/data/home.json";

export default function About() {
  const portfolioItems = homeData.about.items;

  return (
    <div id="about" style={{ width: "100%" }}>
      {portfolioItems.map((item, index) => (
        <PortfolioSection key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function PortfolioSection({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  
  // The user wants the white card effect. The background of the section remains dark/light based on theme,
  // but the card itself will be white with dark text to match the requested effect.
  const isDark = item.theme === "dark";
  const sectionBgColor = isDark ? "#062347" : "#F5F7FA";
  
  // High contrast cards: White card on dark section, Dark card on light section
  const cardBgColor = isDark ? "#ffffff" : "#0D3A73";
  const textColor = isDark ? "#0D3A73" : "#ffffff";
  const accentColor = isDark ? "#2196F3" : "#64B5F6";
  const descColor = isDark ? "#455A64" : "#BBDEFB";

  return (
    <section 
      ref={ref}
      style={{ 
        height: "100vh", 
        width: "100%", 
        background: sectionBgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px"
      }}
    >
      <div 
        style={{ 
          maxWidth: 1400, 
          width: "100%", 
          margin: "0 auto", 
          padding: "0 60px",
          display: "grid",
          gridTemplateColumns: index % 2 === 0 ? "45% 55%" : "55% 45%",
          alignItems: "center",
          height: "100%"
        }}
        className="portfolio-grid"
      >
        {/* Content Side (The Card Effect) */}
        <div 
          style={{ 
            order: index % 2 === 0 ? 1 : 2,
            background: cardBgColor,
            padding: "48px",
            borderRadius: "16px",
            boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
            zIndex: 10,
            // Create the overlapping effect by pulling it over the media
            marginRight: index % 2 === 0 ? "-80px" : "0",
            marginLeft: index % 2 !== 0 ? "-80px" : "0",
            position: "relative"
          }} 
          className="portfolio-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(33, 150, 243, 0.1)", padding: "8px 16px", marginBottom: 24, borderRadius: 4, borderLeft: `2px solid ${accentColor}` }}>
              <span style={{ color: accentColor, fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {item.subtitle}
              </span>
            </div>

            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: textColor, lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase", fontStyle: "italic", letterSpacing: "0.02em" }}>
              {item.title}
            </h2>

            <div style={{ width: 80, height: 4, background: accentColor, marginBottom: 32 }} />

            <p style={{ color: descColor, fontSize: 16, lineHeight: 1.8, fontWeight: 500, marginBottom: 32 }}>
              {item.desc}
            </p>

            {item.points && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {item.points.map((point: string, i: number) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <CheckCircle2 size={24} color={accentColor} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: textColor, fontSize: 15, lineHeight: 1.6, fontWeight: 700, textTransform: "uppercase" }}>{point}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Media Side */}
        <div style={{ order: index % 2 === 0 ? 2 : 1, position: "relative", height: "60vh", width: "100%" }} className="portfolio-media">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              width: "100%", 
              height: "100%", 
              position: "relative",
              // We remove the hard border and box shadow here so the focus is on the overlapping text card
              background: "transparent",
              overflow: "hidden"
            }}
          >
            <video 
              src={item.video} 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "contain", 
                mixBlendMode: isDark ? "lighten" : "multiply",
                filter: isDark ? "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" : "none"
              }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            padding: 80px 30px 60px 30px !important;
            gap: 40px !important;
          }
          .portfolio-content { 
            order: 2 !important; 
            margin: -60px 20px 0 20px !important; 
          }
          .portfolio-media { 
            order: 1 !important; 
            height: 40vh !important; 
          }
        }
      `}</style>
    </section>
  );
}
