"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import homeData from "../data/home.json";

export default function WhoWeAre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const data = homeData.story.whoWeAre;

  return (
    <section 
      id="who-we-are" 
      style={{ 
        background: "#062347", 
        color: "#fff", 
        padding: "48px 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 64, alignItems: "center" }}>
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255, 255, 255, 0.05)", padding: "8px 16px", marginBottom: 24, borderRadius: 4, borderLeft: "2px solid #42A5F5" }}>
              <span style={{ color: "#90CAF9", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {data.tagline}
              </span>
            </div>
            
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 32, textTransform: "uppercase" }}>
              {data.title} <br/>
              <span style={{ color: "#2196F3" }}>{data.highlight}</span>
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {data.paragraphs.map((p, i) => (
                <p key={i} style={{ color: "#90CAF9", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", width: "100%", height: 500, borderRadius: 8, overflow: "hidden" }}>
              <Image src={data.image} alt={data.title} fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #062347 0%, transparent 50%)" }} />
            </div>
            
            {/* Stats Overlay */}
            <div style={{ position: "absolute", bottom: -24, left: 24, right: 24, display: "flex", gap: 16 }}>
              {data.stats.map((stat, i) => (
                <div key={i} style={{ flex: 1, background: "#0D3A73", padding: "24px", borderLeft: "4px solid #2196F3", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 8 }}>{stat.value}</div>
                  <div style={{ fontSize: 13, color: "#90CAF9", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
