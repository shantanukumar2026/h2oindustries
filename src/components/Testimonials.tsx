import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import homeData from "../data/home.json";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { header, items } = homeData.testimonials;

  return (
    <section 
      id="testimonials" 
      className="testimonials-section" 
      style={{ 
        background: "#F5F7FA", 
        position: "relative",
        width: "100%",
        padding: "48px 0"
      }}
    >
      {/* Background Accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #1565C0 0%, #42A5F5 100%)" }} />
      
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        <div ref={ref} style={{ textAlign: "center", marginBottom: 40 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(21, 101, 192, 0.1)", padding: "6px 16px", marginBottom: 20, borderRadius: 20 }}>
              <span style={{ color: "#1565C0", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {header.tagline}
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 900, color: "#0B1929", lineHeight: 1.1, marginBottom: 20, textTransform: "uppercase", fontStyle: "italic" }}>
              {header.title} <span style={{ color: "#1565C0" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#4A6375", fontSize: 16, maxWidth: 680, margin: "0 auto", lineHeight: 1.6, fontWeight: 500 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{ height: "100%" }}
            >
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #E0E0E0",
                  boxShadow: "0 10px 30px rgba(6,35,71,0.02)",
                  padding: "40px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%"
                }}
              >
                <Quote size={40} color="rgba(21, 101, 192, 0.1)" style={{ position: "absolute", top: 32, right: 32 }} />
                
                <p style={{ color: "#0B1929", fontSize: 16, lineHeight: 1.7, fontWeight: 600, fontStyle: "italic", marginBottom: 32, position: "relative", zIndex: 1 }}>
                  "{item.quote}"
                </p>
                
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#1565C0", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 18 }}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ color: "#0D3A73", fontSize: 16, fontWeight: 800, margin: 0, textTransform: "uppercase" }}>{item.author}</h4>
                    <p style={{ color: "#1565C0", fontSize: 12, fontWeight: 700, margin: "2px 0 0 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.role}</p>
                    <p style={{ color: "#4A6375", fontSize: 12, fontWeight: 500, margin: "2px 0 0 0" }}>{item.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
