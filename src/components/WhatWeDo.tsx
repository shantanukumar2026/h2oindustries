"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import homeData from "../data/home.json";

export default function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const data = homeData.story.whatWeDo;

  return (
    <section 
      id="what-we-do" 
      style={{ 
        background: "#F5F7FA", 
        color: "#062347", 
        padding: "48px 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 80, alignItems: "center" }}>
          
          {/* Image & Features */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", order: 2 }} // Changed order for layout alternation
          >
            <div style={{ position: "relative", width: "100%", height: 600, borderRadius: 8, overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}>
              <Image src={data.image} alt={data.title} fill style={{ objectFit: "cover" }} />
            </div>
            
            <div style={{ position: "absolute", top: 40, left: -40, background: "#fff", padding: "32px", borderRadius: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)", maxWidth: 300 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {data.features.map((feature, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <CheckCircle2 color="#2196F3" size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, textTransform: "uppercase", color: "#0D3A73", marginBottom: 4 }}>{feature.title}</h4>
                      <p style={{ margin: 0, fontSize: 14, color: "#607D8B", lineHeight: 1.5 }}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ order: 1 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(33, 150, 243, 0.1)", padding: "8px 16px", marginBottom: 24, borderRadius: 4, borderLeft: "2px solid #2196F3" }}>
              <span style={{ color: "#1565C0", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {data.tagline}
              </span>
            </div>
            
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 32, textTransform: "uppercase" }}>
              {data.title} <br/>
              <span style={{ color: "#2196F3" }}>{data.highlight}</span>
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {data.paragraphs.map((p, i) => (
                <p key={i} style={{ color: "#455A64", fontSize: 18, lineHeight: 1.7, fontWeight: 400, margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative CSS trick to make it look like alternating blocks */}
      <style>{`
        @media (min-width: 1024px) {
          #what-we-do > div > div > div:nth-child(1) { order: 2 !important; }
          #what-we-do > div > div > div:nth-child(2) { order: 1 !important; }
        }
      `}</style>
    </section>
  );
}
