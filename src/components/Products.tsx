"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search, Eye, X, ArrowRight } from "lucide-react";
import homeData from "../data/home.json";

export const allProducts = homeData.products.items;

const cats = homeData.products.categories;

const catColors: Record<string, string> = {
  "Sampling Stations": "#1565C0",
  "Drainage Infrastructure": "#0D3A73",
  "Probe Systems": "#0277BD",
};

export default function Products() {
  const router = useRouter();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [count, setCount] = useState(4);
  const [qv, setQv] = useState<(typeof allProducts)[0] | null>(null);

  const filtered = allProducts.filter((p) => {
    const q = search.toLowerCase();
    const ok = p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
    return ok && (cat === "All" || p.category === cat);
  });
  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;
  const { header, searchPlaceholder, emptyMessage, button } = homeData.products;

  return (
    <section id="products" className="section-pad products-section" style={{ background: "transparent" }}>
      <div className="products-container" style={{ maxWidth: 1720, margin: "0 auto" }}>
        
        {/* Header (Dark contrast against light background) */}
        <div ref={ref} style={{ textAlign: "left", marginBottom: 64 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(21, 101, 192, 0.1)",
                border: "1px solid rgba(21, 101, 192, 0.3)",
                padding: "6px 16px",
                marginBottom: 20,
              }}
            >
              <div style={{ width: 12, height: 2, background: "#1565C0" }} />
              <span
                style={{
                  color: "#1565C0",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {header.tagline}
              </span>
            </div>
            
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                fontWeight: 900,
                color: "#062347",
                lineHeight: 1,
                marginBottom: 24,
                textTransform: "uppercase",
                fontStyle: "italic",
                letterSpacing: "0.02em",
              }}
            >
              {header.title}<br />
              <span style={{ color: "#1565C0" }}>
                {header.highlight}
              </span>
            </h2>
            <div style={{ width: 80, height: 4, background: "#1565C0", marginBottom: 32 }} />

            <p style={{ color: "#4A6375", fontSize: 16, maxWidth: 600, lineHeight: 1.7, fontWeight: 500 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Search + Filters (High Contrast) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}
        >
          {/* Search */}
          <div style={{ position: "relative", flex: "1 1 320px", minWidth: 200 }}>
            <Search size={18} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#1565C0" }} />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCount(4); }}
              style={{
                width: "100%",
                padding: "16px 16px 16px 48px",
                background: "#fff",
                border: "2px solid #E0E0E0",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)",
                fontSize: 15,
                fontWeight: 600,
                color: "#062347",
                fontFamily: "inherit",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => { e.target.style.borderColor = "#1565C0"; e.target.style.boxShadow = "0 0 0 3px rgba(21,101,192,0.1)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#E0E0E0"; e.target.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.02)"; }}
            />
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setCount(4); }}
                style={{
                  padding: "16px 24px",
                  border: "none",
                  background: cat === c ? "#0D3A73" : "#fff",
                  color: cat === c ? "#fff" : "#0D3A73",
                  borderTop: cat === c ? "3px solid #2196F3" : "3px solid #E0E0E0",
                  fontSize: 14,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => { if (cat !== c) e.currentTarget.style.borderTopColor = "#1565C0"; }}
                onMouseLeave={(e) => { if (cat !== c) e.currentTarget.style.borderTopColor = "#E0E0E0"; }}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Count */}
        <p style={{ color: "#455A64", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 24 }}>
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
                style={{ height: "100%" }}
              >
                <ProductCard product={p} onQuickView={() => setQv(p)} catColor={catColors[p.category] ?? "#1565C0"} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", background: "#fff", border: "2px dashed #CFD8DC", marginTop: 24 }}>
            <p style={{ color: "#455A64", fontSize: 16, fontWeight: 700, textTransform: "uppercase" }}>{emptyMessage}</p>
          </div>
        )}

        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              onClick={() => router.push("/products")}
              style={{
                background: "#1565C0",
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
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0D47A1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#1565C0"; }}
            >
              {button} <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Quick View Modal (Mixed contrast - Dark image, light details) */}
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
              background: "rgba(5, 13, 28, 0.7)",
              backdropFilter: "blur(8px)",
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
                borderTop: "6px solid #2196F3",
                maxWidth: 800,
                width: "100%",
                maxHeight: "90vh",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              }}
            >
              {/* Header */}
              <div style={{ padding: "24px 32px", borderBottom: "1px solid #E0E0E0", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, background: "#FAFAFA" }}>
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
                  <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", color: "#062347", textTransform: "uppercase", margin: 0 }}>{qv.name}</h3>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#1976D2", marginTop: 8, letterSpacing: "0.05em", fontFamily: "monospace" }}>SKU: {qv.sku}</p>
                </div>
                <button onClick={() => setQv(null)} style={{ background: "transparent", border: "2px solid #E0E0E0", padding: 8, cursor: "pointer", flexShrink: 0, transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "#F5F5F5"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <X size={20} color="#062347" />
                </button>
              </div>

              {/* Body (Dark Image, Light Specs) */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr", overflowY: "auto", maxHeight: "calc(90vh - 120px)" }} className="modal-grid">
                
                {/* Image Col (Dark) */}
                <div style={{ background: "#062347", position: "relative", aspectRatio: "1", borderRight: "1px solid #E0E0E0" }} className="modal-img-col">
                  {/* Blueprint Grid */}
                  <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "linear-gradient(rgba(33, 150, 243, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <Image src={qv.image} alt={qv.name} fill style={{ objectFit: "contain", padding: 40, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))", mixBlendMode: "lighten", zIndex: 2 }} />
                </div>
                
                {/* Spec Col (Light) */}
                <div style={{ padding: 32 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>PRODUCT OVERVIEW</h4>
                  <p style={{ fontSize: 15, color: "#37474F", lineHeight: 1.7, marginBottom: 32, fontWeight: 500 }}>{qv.description}</p>
                  
                  <h4 style={{ fontSize: 14, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>TECHNICAL SPECIFICATIONS</h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                    {qv.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#37474F", fontWeight: 600 }}>
                        <div style={{ width: 20, height: 20, background: "rgba(33, 150, 243, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, border: "1px solid rgba(33, 150, 243, 0.3)" }}>
                          <div style={{ width: 6, height: 6, background: "#2196F3" }} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => { setQv(null); router.push(`/products/${qv.id}`); }}
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
                    VIEW FULL SPECS <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .products-section { padding: 48px 0; }
        .products-container { padding: 0 60px; }
        @media (min-width: 768px) {
          .modal-grid { grid-template-columns: 1fr 1.2fr !important; }
        }
        @media (max-width: 767px) {
          .modal-img-col { border-right: none !important; border-bottom: 1px solid #E0E0E0 !important; }
          .products-section { padding: 32px 0; }
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
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #E0E0E0",
        position: "relative",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(6,35,71,0.15)" : "0 4px 12px rgba(6,35,71,0.03)",
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
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}>
        {product.category}
      </div>
      
      {/* Technical framing on hover */}
      <div style={{
        position: "absolute", inset: 0, border: "2px solid #2196F3", opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none", zIndex: 5
      }} />

      {/* Image Block (Mixed Contrast) */}
      <div style={{ position: "relative", aspectRatio: "1", background: "#062347", borderBottom: "1px solid #E0E0E0", overflow: "hidden" }}>
        {/* Blueprint Grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "linear-gradient(rgba(33, 150, 243, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{
            objectFit: "contain",
            padding: 40,
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
            mixBlendMode: "lighten",
            zIndex: 2
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Quick view overlay (Dark) */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(5, 13, 28, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          zIndex: 3
        }}>
          <button
            onClick={onQuickView}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1565C0",
              color: "#fff",
              border: "none",
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
              e.currentTarget.style.background = "#0D47A1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1565C0";
            }}
          >
            <Eye size={16} /> QUICK VIEW
          </button>
        </div>
      </div>

      {/* Info Block (Light mode) */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", background: "#fff" }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: "#1976D2", letterSpacing: "0.05em", marginBottom: 8, fontFamily: "monospace" }}>SKU: {product.sku}</p>
        <h3 style={{ fontSize: 16, fontWeight: 900, fontStyle: "italic", color: "#0D3A73", textTransform: "uppercase", lineHeight: 1.3, marginBottom: 20, flex: 1 }}>
          {product.name}
        </h3>
        <button
          onClick={() => router.push(`/products/${product.id}`)}
          style={{
            width: "100%",
            padding: "12px",
            background: "transparent",
            color: "#1565C0",
            border: "1px solid rgba(21,101,192,0.3)",
            fontSize: 14,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(21,101,192,0.05)"; e.currentTarget.style.borderColor = "#1565C0"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(21,101,192,0.3)"; }}
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}
