"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    num: "01",
    image: "/images/4.jpeg",
    tag: "Stormwater Infrastructure",
    title: "Precision-Engineered Drainage Systems",
    desc: "H2 Industries aluminium inlet drains are machined to exacting tolerances, delivering consistent performance in municipal and civil stormwater infrastructure. Each unit features a segmented barrel system for adaptable depth configurations, topped with a secure branded cap.",
    points: ["Modular barrel sections for variable depths", "High-grade aluminium construction", "Secure screw-fit cap system", "Municipal and civil project rated"],
    reversed: false,
  },
  {
    num: "02",
    image: "/images/9.jpeg",
    tag: "Water Quality Monitoring",
    title: "Modular Sampling Station Systems",
    desc: "Our sampling station platform gives environmental engineers and council inspectors reliable, secure access to stormwater sampling points. The flat-panel dual-door design provides full interior visibility and accommodates a range of probe and valve assemblies.",
    points: ["Dual-door full-access panel", "Top and bottom probe pass-throughs", "Configurable valve mounting", "Environmental monitoring grade"],
    reversed: true,
  },
  {
    num: "03",
    image: "/images/5.jpeg",
    tag: "Urban Water Management",
    title: "Black Series Column Drainage",
    desc: "The H2 Black Series polymer column drain was designed for urban environments where durability and aesthetics both matter. A stabilising foot plate ensures secure installation in road and kerb applications, while the matte black finish blends with modern urban infrastructure.",
    points: ["HDPE moulded for longevity", "Integrated stabilising foot plate", "Removable branded top cap", "Road and kerb installation ready"],
    reversed: false,
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="section-pad" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: "center", marginBottom: 80 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="pill-tag" style={{ marginBottom: 20, display: "inline-flex" }}>
              <span className="dot" /> Featured Solutions
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(1.8rem, 8vw, 3.2rem)", fontWeight: 900, color: "#0D3A73", lineHeight: 1.0, textTransform: "uppercase" }}
            >
              Engineering Solutions<br />
              <span style={{ color: "#1565C0" }}>For Every Application</span>
            </h2>
          </motion.div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
          {solutions.map((sol, i) => (
            <SolutionRow key={sol.num} sol={sol} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionRow({ sol, index }: { sol: typeof solutions[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 56,
          alignItems: "center",
        }}
        className={`sol-grid ${sol.reversed ? "sol-reversed" : ""}`}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: sol.reversed ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", order: sol.reversed ? 2 : 1 }}
          className="sol-img-order"
        >
          <div style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            background: "#F5F7FA",
            aspectRatio: "1 / 1",
            boxShadow: "0 24px 80px rgba(21,101,192,0.12)",
          }}>
            <Image
              src={sol.image}
              alt={sol.title}
              fill
              style={{ objectFit: "contain", padding: 40, transition: "transform 0.7s ease" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="sol-img"
            />
            {/* Tag overlay */}
            <div style={{
              position: "absolute",
              top: 16,
              left: 16,
              background: "#1565C0",
              color: "#fff",
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}>
              {sol.tag}
            </div>
          </div>
          {/* Number watermark */}
          <div
            className="font-display"
            style={{
              position: "absolute",
              bottom: -24,
              right: sol.reversed ? "auto" : -24,
              left: sol.reversed ? -24 : "auto",
              fontSize: 120,
              fontWeight: 900,
              color: "rgba(21,101,192,0.06)",
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {sol.num}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: sol.reversed ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.72, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ order: sol.reversed ? 1 : 2 }}
          className="sol-content-order"
        >
          <h3
            className="font-display"
            style={{
              fontSize: "clamp(1.5rem, 6vw, 2.6rem)",
              fontWeight: 900,
              color: "#0D3A73",
              lineHeight: 1.05,
              marginBottom: 20,
              textTransform: "uppercase",
            }}
          >
            {sol.title}
          </h3>
          <p style={{ fontSize: 16, color: "#4A6375", lineHeight: 1.75, marginBottom: 28 }}>
            {sol.desc}
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {sol.points.map((pt) => (
              <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "rgba(21,101,192,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1565C0" }} />
                </div>
                <span style={{ fontSize: 15, color: "#0D3A73", fontWeight: 500 }}>{pt}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1565C0",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "13px 24px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              boxShadow: "0 4px 20px rgba(21,101,192,0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#0D47A1"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#1565C0"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Learn More <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>

      <style>{`
        .sol-img:hover { transform: scale(1.04) !important; }
        @media (min-width: 1024px) {
          .sol-grid { grid-template-columns: 1fr 1fr !important; }
          .sol-reversed .sol-img-order { order: 2 !important; }
          .sol-reversed .sol-content-order { order: 1 !important; }
        }
      `}</style>
    </div>
  );
}
