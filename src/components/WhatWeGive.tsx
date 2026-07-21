"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import homeData from "../data/home.json";

export default function WhatWeGive() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const data = homeData.story.whatWeGive;

  return (
    <section 
      id="what-we-give" 
      style={{ 
        background: "#0D3A73", 
        color: "#fff", 
        padding: "48px 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: 800, margin: "0 auto 48px auto" }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255, 255, 255, 0.05)", padding: "8px 16px", marginBottom: 24, borderRadius: 4, borderLeft: "2px solid #42A5F5" }}>
              <span style={{ color: "#90CAF9", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {data.tagline}
              </span>
            </div>
            
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 32, textTransform: "uppercase" }}>
              {data.title} <span style={{ color: "#2196F3" }}>{data.highlight}</span>
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {data.paragraphs.map((p, i) => (
                <p key={i} style={{ color: "#BBDEFB", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {data.guarantees.map((guarantee, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
              style={{ height: "100%" }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "32px",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 16,
                  height: "100%"
                }}
              >
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(33, 150, 243, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ShieldCheck color="#2196F3" size={32} />
                </div>
                <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 700, margin: 0, lineHeight: 1.4, textTransform: "uppercase" }}>
                  {guarantee}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
