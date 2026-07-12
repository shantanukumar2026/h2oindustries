"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProducts } from "@/components/Products";
import { ArrowLeft, Check, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const idStr = params.id as string;
  const id = parseInt(idStr, 10);

  const product = allProducts.find((p) => p.id === id);

  const [form, setForm] = useState({ name: "", email: "", project: "", qty: "1", message: "" });
  const [sent, setSent] = useState(false);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", project: "", qty: "1", message: "" });
    }, 4000);
  };

  if (!product) {
    return (
      <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F0F7FF" }}>
        <Navbar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 120 }}>
          <h2 style={{ color: "#0D3A73", fontWeight: 900, marginBottom: 16 }}>PRODUCT NOT FOUND</h2>
          <button
            onClick={() => router.push("/products")}
            style={{
              background: "#1565C0",
              color: "#fff",
              border: "none",
              padding: "16px 32px",
              cursor: "pointer",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            RETURN TO MARKETPLACE
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F0F7FF" }}>
      <Navbar />

      <div style={{ paddingTop: 140, paddingBottom: 100, flex: 1 }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }} className="detail-container">
          
          {/* Breadcrumb Navigation */}
          <nav style={{ marginBottom: 32, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            <span style={{ color: "#1565C0", cursor: "pointer", transition: "color 0.2s" }} onClick={() => router.push("/")} onMouseEnter={(e) => e.currentTarget.style.color = "#0D47A1"} onMouseLeave={(e) => e.currentTarget.style.color = "#1565C0"}>Home</span>
            <span style={{ color: "#90CAF9" }}>/</span>
            <span style={{ color: "#1565C0", cursor: "pointer", transition: "color 0.2s" }} onClick={() => router.push("/products")} onMouseEnter={(e) => e.currentTarget.style.color = "#0D47A1"} onMouseLeave={(e) => e.currentTarget.style.color = "#1565C0"}>Products</span>
            <span style={{ color: "#90CAF9" }}>/</span>
            <span style={{ color: "#0D3A73" }}>{product.name}</span>
          </nav>

          {/* Main Layout Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 56,
              alignItems: "start",
            }}
            className="detail-grid"
          >
            {/* Left Column: Premium Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "#fff",
                border: "2px solid #90CAF9",
                boxShadow: "12px 12px 0px rgba(11,25,41,1)",
                aspectRatio: "1.1",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 48,
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Column: Spec Sheet & Quote Request */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: 32 }}
            >
              {/* Product Heading Info */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    background: "#1565C0",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {product.category}
                </span>
                
                <h1
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    fontWeight: 900,
                    fontStyle: "italic",
                    color: "#0D3A73",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    marginBottom: 12,
                  }}
                >
                  {product.name}
                </h1>
                
                <p style={{ fontSize: 14, fontWeight: 700, color: "#1976D2", letterSpacing: "0.05em", margin: 0 }}>
                  SKU / SERIAL CODE: {product.sku}
                </p>
              </div>

              {/* Blue Divider */}
              <div style={{ width: 80, height: 4, background: "#1565C0" }} />

              {/* Description */}
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                  Product Overview
                </h4>
                <p style={{ fontSize: 16, color: "#1565C0", lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
                  {product.description}
                </p>
              </div>

              {/* Specifications */}
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                  Technical Specifications
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {product.features.map((feat) => (
                    <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#0D3A73", fontWeight: 600 }}>
                      <div style={{ width: 22, height: 22, background: "rgba(21,101,192,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <Check size={14} color="#1565C0" strokeWidth={3} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action Box */}
              <div
                style={{
                  background: "#fff",
                  border: "2px solid #90CAF9",
                  boxShadow: "8px 8px 0px rgba(11,25,41,0.08)",
                  padding: 32,
                  marginTop: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                <div>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#1976D2", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: 6 }}>
                    ESTIMATED MARKET PRICE
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                    <span style={{ fontSize: 36, fontWeight: 900, color: "#0D3A73", fontFamily: "var(--font-barlow), sans-serif", fontStyle: "italic" }}>
                      {product.price}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#1976D2" }}>
                      USD
                    </span>
                  </div>
                  <span style={{ fontSize: 12, color: "#4A6375", fontWeight: 600, display: "block", marginTop: 8 }}>
                    * Heavy industry contract pricing options available upon inquiry.
                  </span>
                </div>

                <div style={{ width: "100%", height: "1px", background: "#90CAF9" }} />

                <button
                  style={{
                    background: "#1565C0",
                    color: "#fff",
                    border: "none",
                    padding: "16px",
                    fontSize: 15,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.2s, transform 0.1s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0D47A1")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#1565C0")}
                >
                  PLACE ORDER
                </button>

                <div style={{ width: "100%", height: "1px", background: "#90CAF9" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                    Need a Quote?
                  </h4>
                  <p style={{ fontSize: 13, color: "#1565C0", fontWeight: 500, margin: 0, lineHeight: 1.5 }}>
                    Custom dimensions and volume pricing available for major projects.
                  </p>
                  <button
                    onClick={() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      background: "transparent",
                      color: "#0D3A73",
                      border: "2px solid #90CAF9",
                      padding: "12px",
                      fontSize: 13,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      marginTop: 8,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1565C0"; e.currentTarget.style.color = "#1565C0"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#90CAF9"; e.currentTarget.style.color = "#0D3A73"; }}
                  >
                    Request More Info
                  </button>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      <Footer />

      <style>{`
        @media (min-width: 1024px) {
          .detail-grid {
            grid-template-columns: 1fr 1.1fr !important;
          }
        }
        @media (max-width: 768px) {
          .detail-container {
            padding: 0 24px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  background: "#F5F7FA",
  border: "2px solid #E2E8F0",
  fontSize: 14,
  fontWeight: 600,
  color: "#0D3A73",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
};
