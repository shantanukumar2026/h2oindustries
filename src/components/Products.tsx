"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search, Eye, X, ArrowRight } from "lucide-react";

const allProducts = [
  { id: 1, image: "/images/2.jpeg", name: "Modular Sampling Station — Type A", category: "Sampling Stations", sku: "H2-SS-A001", description: "Compact dual-door modular sampling enclosure with integrated stainless steel valve and probe assembly. Designed for accessible water sampling in confined stormwater environments.", features: ["Dual-door access panel", "316 stainless steel valve", "Corrosion-resistant body", "Tamper-resistant fasteners"] },
  { id: 2, image: "/images/3.jpeg", name: "Modular Sampling Station — Type B", category: "Sampling Stations", sku: "H2-SS-B002", description: "Wide-body modular sampling station with optimised dual-compartment layout. Features integrated stainless probe assembly and enhanced interior access for maintenance teams.", features: ["Wide-body enclosure", "Enhanced access geometry", "Integrated probe mount", "UV-stabilised polymer"] },
  { id: 3, image: "/images/4.jpeg", name: "Aluminium Inlet Drain — Standard", category: "Drainage Infrastructure", sku: "H2-ID-AL003", description: "Precision-machined aluminium stormwater inlet drain with conical base and segmented barrel sections. Engineered for high-flow municipal drainage applications.", features: ["Machined aluminium construction", "Segmented modular barrel", "Conical flange base", "H2 Industries branded caps"] },
  { id: 4, image: "/images/5.jpeg", name: "Polymer Column Drain — Black Series", category: "Drainage Infrastructure", sku: "H2-CD-BK004", description: "High-density polymer column drainage system in matte black finish. Features a stabilising foot plate and removable top cap for secure installation.", features: ["HDPE moulded construction", "Stabilising foot plate", "Removable top cap", "Matte black coating"] },
  { id: 5, image: "/images/6.jpeg", name: "Aluminium Inlet Drain — Extended", category: "Drainage Infrastructure", sku: "H2-ID-AL005", description: "Extended-barrel variant of the aluminium inlet drain series. Additional barrel section provides greater depth accommodation for deep kerb or road infrastructure.", features: ["Extended barrel depth", "Precision machined finish", "Screw-fit cap with grating", "Anodised surface treatment"] },
  { id: 6, image: "/images/7.jpeg", name: "Sampling Station — Concrete Environment", category: "Sampling Stations", sku: "H2-SS-CE006", description: "H2 sampling station system shown in a concrete industrial environment — demonstrating fit and finish in real-world structural settings.", features: ["In-situ installation ready", "Heavy-duty exterior", "Anti-UV coating", "Industrial environment rated"] },
  { id: 7, image: "/images/8.jpeg", name: "Modular Enclosure Unit — Closed Body", category: "Sampling Stations", sku: "H2-ME-CB007", description: "Closed-body modular enclosure for water sampling and monitoring equipment. Features a side-access port, locking lid, and integrated probe outlet.", features: ["Side-access port", "Integrated probe outlet", "Locking top lid", "Compact profile"] },
  { id: 8, image: "/images/9.jpeg", name: "Flat-Panel Sampling Station — Open", category: "Sampling Stations", sku: "H2-SS-FP008", description: "Flat-panel dual-door sampling station shown open, revealing the full stainless steel probe and valve assembly. Top-mount and bottom-pass configurations available.", features: ["Full-panel door access", "Bottom probe pass-through", "Top-mount valve", "Dual-latch closure"] },
  { id: 9, image: "/images/WhatsApp Image 2026-07-01 at 10.48.44 AM.jpeg", name: "Stainless Steel Sampling Probe — Long Reach", category: "Probe Systems", sku: "H2-PR-LR009", description: "Long-reach stainless steel sampling probe with matte black polymer carrier housing. Engineered for deep pipe insertion, maintenance access, and water quality monitoring.", features: ["Long-reach 316 stainless rod", "Black polymer carrier", "Precision tip fitting", "Drop-in installation"] },
  { id: 10, image: "/images/WhatsApp Image 2026-07-01 at 10.48.48 AM.jpeg", name: "Polymer Column Drain — Water Series", category: "Drainage Infrastructure", sku: "H2-CD-BK010", description: "Compact black polymer column drain from the H2 Water Series. Engineered with precision top cap detailing and branded barrel rings.", features: ["Water Series branding", "Precision top cap", "Branded barrel rings", "Compact footprint"] },
];

const cats = ["All", "Sampling Stations", "Drainage Infrastructure", "Probe Systems"];

const catColors: Record<string, string> = {
  "Sampling Stations": "#1565C0",
  "Drainage Infrastructure": "#0D3A73",
  "Probe Systems": "#0277BD",
};

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [count, setCount] = useState(8);
  const [qv, setQv] = useState<(typeof allProducts)[0] | null>(null);

  const filtered = allProducts.filter((p) => {
    const q = search.toLowerCase();
    const ok = p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
    return ok && (cat === "All" || p.category === cat);
  });
  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;

  return (
    <section id="products" className="section-pad products-section" style={{ background: "#F0F7FF" }}>
      <div className="products-container" style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: "left", marginBottom: 64 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1565C0",
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <div style={{ width: 12, height: 2, background: "#fff" }} />
              <span
                style={{
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Equipment Range
              </span>
            </div>
            
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                fontWeight: 900,
                color: "#0D3A73",
                lineHeight: 1,
                marginBottom: 24,
                textTransform: "uppercase",
                fontStyle: "italic",
                letterSpacing: "0.02em",
              }}
            >
              OUR PRODUCT<br />
              <span style={{ color: "#1565C0" }}>MARKETPLACE</span>
            </h2>
            <div style={{ width: 80, height: 4, background: "#1565C0", marginBottom: 32 }} />

            <p style={{ color: "#1565C0", fontSize: 16, maxWidth: 600, lineHeight: 1.7, fontWeight: 500 }}>
              Browse the complete H2 Industries range — precision-engineered water management products for heavy industrial, municipal, and environmental applications.
            </p>
          </motion.div>
        </div>

        {/* Search + Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}
        >
          {/* Search */}
          <div style={{ position: "relative", flex: "1 1 320px", minWidth: 200 }}>
            <Search size={18} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#1976D2" }} />
            <input
              type="text"
              placeholder="Search by name, category or SKU…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCount(8); }}
              style={{
                width: "100%",
                padding: "16px 16px 16px 48px",
                background: "#fff",
                border: "2px solid #90CAF9",
                fontSize: 15,
                fontWeight: 600,
                color: "#0D3A73",
                fontFamily: "inherit",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => { e.target.style.borderColor = "#1565C0"; }}
              onBlur={(e) => { e.target.style.borderColor = "#90CAF9"; }}
            />
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setCount(8); }}
                style={{
                  padding: "16px 24px",
                  border: cat === c ? "2px solid #0D3A73" : "2px solid #90CAF9",
                  background: cat === c ? "#0D3A73" : "#fff",
                  color: cat === c ? "#fff" : "#1565C0",
                  fontSize: 14,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { if (cat !== c) e.currentTarget.style.borderColor = "#0D3A73"; }}
                onMouseLeave={(e) => { if (cat !== c) e.currentTarget.style.borderColor = "#90CAF9"; }}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Count */}
        <p style={{ color: "#1976D2", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 24 }}>
          SHOWING <strong style={{ color: "#1565C0" }}>{Math.min(count, filtered.length)}</strong> OF <strong style={{ color: "#1565C0" }}>{filtered.length}</strong> PRODUCTS
        </p>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
        }}>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i < 8 ? i * 0.04 : 0 }}
              >
                <ProductCard product={p} onQuickView={() => setQv(p)} catColor={catColors[p.category] ?? "#1565C0"} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", background: "#fff", border: "2px dashed #64B5F6", marginTop: 24 }}>
            <p style={{ color: "#1565C0", fontSize: 16, fontWeight: 700, textTransform: "uppercase" }}>NO PRODUCTS FOUND MATCHING YOUR SEARCH.</p>
          </div>
        )}

        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              onClick={() => setCount((c) => c + 4)}
              style={{
                background: "#0D3A73",
                color: "#fff",
                border: "none",
                padding: "16px 32px",
                fontSize: 15,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1565C0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#0D3A73"; }}
            >
              LOAD MORE <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {qv && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(5, 11, 20, 0.8)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
            onClick={() => setQv(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                borderTop: "6px solid #1565C0",
                maxWidth: 800,
                width: "100%",
                maxHeight: "90vh",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(6,35,71,0.5)",
              }}
            >
              {/* Header */}
              <div style={{ padding: "24px 32px", borderBottom: "2px solid #90CAF9", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
                <div>
                  <span style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    background: catColors[qv.category] ?? "#1565C0",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}>
                    {qv.category}
                  </span>
                  <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", color: "#0D3A73", textTransform: "uppercase", margin: 0 }}>{qv.name}</h3>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#1976D2", marginTop: 8, letterSpacing: "0.05em" }}>SKU: {qv.sku}</p>
                </div>
                <button onClick={() => setQv(null)} style={{ background: "transparent", border: "2px solid #90CAF9", padding: 8, cursor: "pointer", flexShrink: 0, transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "#E0F0FF"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <X size={20} color="#0D3A73" />
                </button>
              </div>

              {/* Body */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr", overflowY: "auto", maxHeight: "calc(90vh - 120px)" }} className="modal-grid">
                <div style={{ background: "#F0F7FF", position: "relative", aspectRatio: "1", borderRight: "2px solid #90CAF9" }} className="modal-img-col">
                  <Image src={qv.image} alt={qv.name} fill style={{ objectFit: "contain", padding: 40 }} />
                </div>
                <div style={{ padding: 32 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>PRODUCT OVERVIEW</h4>
                  <p style={{ fontSize: 15, color: "#1565C0", lineHeight: 1.7, marginBottom: 32, fontWeight: 500 }}>{qv.description}</p>
                  
                  <h4 style={{ fontSize: 14, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>TECHNICAL SPECIFICATIONS</h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                    {qv.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#0D3A73", fontWeight: 600 }}>
                        <div style={{ width: 20, height: 20, background: "rgba(21,101,192,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          <div style={{ width: 6, height: 6, background: "#1565C0" }} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => { setQv(null); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    style={{
                      width: "100%",
                      padding: "16px",
                      background: "#1565C0",
                      color: "#fff",
                      border: "none",
                      fontSize: 15,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#0D47A1"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#1565C0"; }}
                  >
                    REQUEST A QUOTE <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .products-section { padding: 100px 0; }
        .products-container { padding: 0 60px; }
        @media (min-width: 768px) {
          .modal-grid { grid-template-columns: 1fr 1.2fr !important; }
        }
        @media (max-width: 767px) {
          .modal-img-col { border-right: none !important; border-bottom: 2px solid #90CAF9 !important; }
          .products-section { padding: 60px 0; }
          .products-container { padding: 0 24px; }
        }
      `}</style>
    </section>
  );
}

function ProductCard({ product, onQuickView, catColor }: {
  product: typeof allProducts[0];
  onQuickView: () => void;
  catColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "2px solid #90CAF9",
        position: "relative",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "8px 8px 0px rgba(11,25,41,1)" : "0px 0px 0px transparent",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Category badge */}
      <div style={{
        position: "absolute",
        top: 16,
        left: 16,
        background: catColor,
        color: "#fff",
        padding: "6px 12px",
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        zIndex: 10,
      }}>
        {product.category}
      </div>

      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "1", background: "#fff", borderBottom: "2px solid #90CAF9", overflow: "hidden" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{
            objectFit: "contain",
            padding: 32,
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Quick view overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(11,25,41,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}>
          <button
            onClick={onQuickView}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              color: "#0D3A73",
              border: "2px solid #0D3A73",
              padding: "12px 20px",
              fontSize: 13,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1565C0";
              e.currentTarget.style.borderColor = "#1565C0";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.borderColor = "#0D3A73";
              e.currentTarget.style.color = "#0D3A73";
            }}
          >
            <Eye size={16} /> QUICK VIEW
          </button>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: "#1976D2", letterSpacing: "0.05em", marginBottom: 8 }}>SKU: {product.sku}</p>
        <h3 style={{ fontSize: 16, fontWeight: 900, fontStyle: "italic", color: "#0D3A73", textTransform: "uppercase", lineHeight: 1.3, marginBottom: 20, flex: 1 }}>
          {product.name}
        </h3>
        <button
          onClick={onQuickView}
          style={{
            width: "100%",
            padding: "12px",
            background: "transparent",
            color: "#0D3A73",
            border: "2px solid #90CAF9",
            fontSize: 14,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1565C0"; e.currentTarget.style.color = "#1565C0"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#90CAF9"; e.currentTarget.style.color = "#0D3A73"; }}
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}
