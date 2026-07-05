"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const gallery = [
  { image: "/images/2.jpeg", label: "Sampling Station — Type A" },
  { image: "/images/7.jpeg", label: "Product in Concrete Environment" },
  { image: "/images/4.jpeg", label: "Aluminium Inlet Drain" },
  { image: "/images/5.jpeg", label: "Black Series Column Drain" },
  { image: "/images/9.jpeg", label: "Flat-Panel Sampling Station" },
  { image: "/images/3.jpeg", label: "Sampling Station — Type B" },
  { image: "/images/6.jpeg", label: "Aluminium Inlet Drain — Extended" },
  { image: "/images/8.jpeg", label: "Closed Body Enclosure Unit" },
  { image: "/images/WhatsApp Image 2026-07-01 at 10.48.44 AM.jpeg", label: "Long-Reach Sampling Probe" },
  { image: "/images/WhatsApp Image 2026-07-01 at 10.48.48 AM.jpeg", label: "Water Series Column Drain" },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lb, setLb] = useState<(typeof gallery)[0] | null>(null);

  return (
    <section id="projects" className="section-pad" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="pill-tag" style={{ marginBottom: 20, display: "inline-flex" }}>
              <span className="dot" /> Projects & Applications
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(1.8rem, 8vw, 3.2rem)", fontWeight: 900, color: "#0D3A73", lineHeight: 1.0, marginBottom: 16, textTransform: "uppercase" }}
            >
              Our Products<br />
              <span style={{ color: "#1565C0" }}>In Action</span>
            </h2>
            <p style={{ color: "#4A6375", fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
              A visual showcase of the H2 Industries product range — precision-engineered components built for real-world water management challenges.
            </p>
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 12,
        }}>
          {gallery.map((item, i) => (
            <GalleryItem key={item.image} item={item} index={i} inView={inView} onOpen={() => setLb(item)} tall={i === 1} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(5,13,28,0.9)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
            onClick={() => setLb(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#F5F7FA",
                borderRadius: 20,
                overflow: "hidden",
                maxWidth: 640,
                width: "100%",
                boxShadow: "0 40px 100px rgba(6,35,71,0.5)",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "1" }}>
                <Image src={lb.image} alt={lb.label} fill style={{ objectFit: "contain", padding: 32 }} />
              </div>
              <div style={{ padding: "16px 24px", background: "#fff", borderTop: "1px solid #90CAF9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#0D3A73" }}>{lb.label}</p>
                  <p style={{ fontSize: 11, color: "#1565C0", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>H2 Industries™</p>
                </div>
                <button onClick={() => setLb(null)} style={{ background: "#F5F7FA", border: "none", borderRadius: 8, padding: 8, cursor: "pointer" }}>
                  <X size={18} color="#4A6375" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryItem({ item, index, inView, onOpen, tall }: {
  item: typeof gallery[0];
  index: number;
  inView: boolean;
  onOpen: () => void;
  tall?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      style={{
        position: "relative",
        aspectRatio: tall ? "1/2" : "1/1",
        borderRadius: 14,
        overflow: "hidden",
        background: "#F5F7FA",
        border: `1.5px solid ${hovered ? "rgba(21,101,192,0.35)" : "#90CAF9"}`,
        cursor: "pointer",
        transition: "all 0.28s ease",
        boxShadow: hovered ? "0 12px 40px rgba(21,101,192,0.15)" : "0 2px 8px rgba(6,35,71,0.04)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        gridRow: tall ? "span 2" : "span 1",
      }}
    >
      <Image
        src={item.image}
        alt={item.label}
        fill
        style={{
          objectFit: "contain",
          padding: 16,
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
      />
      {/* Hover overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(10,25,41,0.6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255,255,255,0.25)",
        }}>
          <ZoomIn size={20} color="#fff" />
        </div>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", fontWeight: 600, textAlign: "center", padding: "0 16px", lineHeight: 1.4 }}>
          {item.label}
        </span>
      </div>
    </motion.div>
  );
}
