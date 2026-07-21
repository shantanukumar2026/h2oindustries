"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const partnersList = [
  { file: "APWA.JPG", name: "APWA" },
  { file: "AWWA.JPG", name: "AWWA" },
  { file: "MassDOt.JPG", name: "MassDOT" },
  { file: "NEPCA.JPG", name: "NEPCA" },
  { file: "NHDOTlogo.JPG", name: "NHDOT" },
  { file: "NHE.jpg", name: "NHE" },
  { file: "NPCA-Logo.JPG", name: "NPCA" },
  { file: "NY-CMA.jpg", name: "NY-CMA" },
  { file: "Nassau+Logo copy.JPG", name: "Nassau" },
  { file: "PEI.JPG", name: "PEI" },
  { file: "PennDOT-Logo.png", name: "PennDOT" },
  { file: "RIDOT.jpg", name: "RIDOT" },
  { file: "aia copy.jpg", name: "AIA" },
  { file: "canada-ccppa.JPG", name: "Canada CCPPA" },
  { file: "ccmpa copy.jpg", name: "CCMPA" },
  { file: "conn copy.JPG", name: "Conn" },
  { file: "maine.JPG", name: "Maine" },
  { file: "nj copy.JPG", name: "NJ" },
  { file: "ny state copy.JPG", name: "NY State" },
  { file: "ny.JPG", name: "NY" },
  { file: "pcany.jpg", name: "PCANY" },
  { file: "penn copy.JPG", name: "Penn" },
  { file: "ppa.JPG", name: "PPA" },
  { file: "suffolk copy.JPG", name: "Suffolk" },
  { file: "vt copy.JPG", name: "VT" }
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate the list so the marquee scrolls seamlessly
  const marqueeItems = [...partnersList, ...partnersList];

  return (
    <section ref={ref} style={{ padding: "48px 0", background: "#020B14", position: "relative", overflow: "hidden" }}>
      
      {/* Left Fade */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(90deg, #020B14 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />
      {/* Right Fade */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(270deg, #020B14 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span style={{ color: "#2196F3", fontSize: 13, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>
              Global Network
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", fontStyle: "italic", lineHeight: 1.1 }}>
              Trusted <span style={{ color: "#2196F3" }}>By</span><br/>
              Industry Leaders
            </h2>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="marquee-container" style={{ position: "relative", width: "100%", overflow: "hidden", padding: "20px 0" }}>
          
          <motion.div 
            className="marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40 // Adjust speed here
            }}
            style={{ display: "flex", gap: "60px", width: "max-content", alignItems: "center" }}
          >
            {marqueeItems.map((p, i) => (
              <div 
                key={i} 
                className="marquee-item"
                style={{ 
                  width: "160px", 
                  height: "80px", 
                  position: "relative", 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image 
                  src={`/partners/${p.file}`} 
                  alt={p.name} 
                  fill 
                  style={{ objectFit: "contain" }} 
                  unoptimized={true}
                />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
      
      <style>{`
        .marquee-item {
          filter: grayscale(100%) brightness(0) invert(1) opacity(0.5);
          transition: all 0.3s ease;
        }
        .marquee-item:hover {
          filter: grayscale(0%) brightness(1) invert(0) opacity(1) !important;
        }
      `}</style>
    </section>
  );
}
