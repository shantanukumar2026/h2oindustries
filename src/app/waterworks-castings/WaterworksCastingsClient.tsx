"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import waterworksData from "@/data/waterworks.json";
import {
  Search,
  Eye,
  X,
  ArrowRight,
  Download,
  FileText,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  Boxes,
  Truck,
  ExternalLink
} from "lucide-react";

export default function WaterworksCastingsClient() {
  const router = useRouter();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All Pipe & Castings");
  const [quickViewProduct, setQuickViewProduct] = useState<(typeof waterworksData.products)[0] | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const cat = searchParams.get("category");
      if (cat) {
        const found = waterworksData.categories.find(
          (c) => c.toLowerCase() === cat.toLowerCase()
        );
        if (found) {
          setSelectedCat(found);
          setTimeout(() => {
            const catalogSection = document.getElementById("catalog");
            if (catalogSection) {
              catalogSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 300);
        }
      }
    }
  }, []);

  const handleCatChange = (cat: string) => {
    setSelectedCat(cat);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (cat === "All Pipe & Castings" || cat === "All Castings") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", cat);
      }
      window.history.pushState({}, "", url.toString());
    }
  };

  const filteredProducts = waterworksData.products.filter((p) => {
    const matchesQuery =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    const matchesCat = selectedCat === "All Pipe & Castings" || selectedCat === "All Castings" || p.category === selectedCat;

    return matchesQuery && matchesCat;
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F8FAFC" }}>
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          background: "linear-gradient(135deg, #004aad 0%, #004aad 50%, #004aad 100%)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blueprint background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(rgba(33, 150, 243, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 24,
            }}
          >
            <span
              style={{ color: "#90CAF9", cursor: "pointer" }}
              onClick={() => router.push("/")}
            >
              Home
            </span>
            <span style={{ color: "#42A5F5" }}>/</span>
            <span
              style={{ color: "#90CAF9", cursor: "pointer" }}
              onClick={() => router.push("/products")}
            >
              Products
            </span>
            <span style={{ color: "#42A5F5" }}>/</span>
            <span style={{ color: "#fff" }}>Waterworks & Municipal Products</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(33, 150, 243, 0.15)",
                  border: "1px solid rgba(33, 150, 243, 0.4)",
                  padding: "8px 20px",
                  borderRadius: 4,
                  marginBottom: 24,
                }}
              >
                <ShieldCheck size={16} color="#64B5F6" />
                <span
                  style={{
                    color: "#90CAF9",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {waterworksData.hero.tagline}
                </span>
              </div>

              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.08,
                  marginBottom: 24,
                  textTransform: "uppercase",
                  fontStyle: "italic",
                  letterSpacing: "0.01em",
                }}
              >
                {waterworksData.hero.title} <br />
                <span style={{ color: "#2196F3" }}>{waterworksData.hero.highlight}</span>
              </h1>

              <p style={{ color: "#B0BEC5", fontSize: 18, lineHeight: 1.7, maxWidth: 620, marginBottom: 40, fontWeight: 400 }}>
                {waterworksData.hero.subtitle}
              </p>

              {/* Stats Bar */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 20,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: 24,
                  borderRadius: 8,
                }}
                className="hero-stats"
              >
                {waterworksData.hero.stats.map((st, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 28, fontWeight: 900, color: "#64B5F6", fontStyle: "italic", lineHeight: 1 }}>
                      {st.value}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "#90CAF9", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 6 }}>
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                position: "relative",
                background: "rgba(13, 58, 115, 0.4)",
                border: "1px solid rgba(33, 150, 243, 0.3)",
                padding: 40,
                borderRadius: 16,
                boxShadow: "0 24px 60px rgba(0, 74, 173, 0.4)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 320, marginBottom: 24 }}>
                <Image
                  src="/images/waterworks/valve-box-525.webp"
                  alt="H2 Municipal Valve Boxes & Castings"
                  fill
                  style={{ objectFit: "contain", filter: "drop-shadow(0 20px 30px rgba(0, 74, 173,0.5))" }}
                  priority
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", textTransform: "uppercase" }}>
                    Texas Warehouses & Fast Delivery
                  </div>
                  <div style={{ fontSize: 13, color: "#90CAF9", marginTop: 4 }}>
                    Direct dispatch from Waco DC & Houston DC
                  </div>
                </div>

                <a
                  href="#catalog"
                  style={{
                    background: "#2196F3",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: 4,
                    fontWeight: 800,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#1976D2")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#2196F3")}
                >
                  Explore Catalog <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catalog & Search Section */}
      <section id="catalog" style={{ padding: "80px 0", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
          <div style={{ textAlign: "left", marginBottom: 48 }}>
            <span
              style={{
                color: "#0085f4",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 12,
              }}
            >
              Complete Waterworks Catalog
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "#004aad",
                textTransform: "uppercase",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              Product <span style={{ color: "#0085f4" }}>Series & Specifications</span>
            </h2>
          </div>

          {/* Search & Category Pills */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
              {/* Search Bar */}
              <div style={{ position: "relative", flex: "1 1 340px", minWidth: 260 }}>
                <Search
                  size={18}
                  style={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#0085f4",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search valve boxes, joint restraints, DI fittings, SKU..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "16px 16px 16px 48px",
                    background: "#fff",
                    border: "2px solid #E0E0E0",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#004aad",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0085f4")}
                  onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
                />
              </div>

              {/* Counter */}
              <div style={{ display: "flex", alignItems: "center", padding: "0 16px", background: "#E3F2FD", border: "1px solid #90CAF9" }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#004aad", textTransform: "uppercase" }}>
                  Showing {filteredProducts.length} of {waterworksData.products.length} Products
                </span>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {waterworksData.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCatChange(cat)}
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    background: selectedCat === cat ? "#004aad" : "#fff",
                    color: selectedCat === cat ? "#fff" : "#004aad",
                    borderTop: selectedCat === cat ? "3px solid #2196F3" : "3px solid #CFD8DC",
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 6px rgba(0, 74, 173,0.04)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 32,
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    style={{
                      background: "#fff",
                      border: "1px solid #E0E0E0",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 16px rgba(6,35,71,0.04)",
                    }}
                    className="product-card"
                  >
                    {/* Category Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        background: "#0085f4",
                        color: "#fff",
                        padding: "6px 12px",
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        zIndex: 5,
                      }}
                    >
                      {product.category}
                    </div>

                    {/* Image Box */}
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "1.1",
                        background: "#004aad",
                        overflow: "hidden",
                        borderBottom: "1px solid #E0E0E0",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          opacity: 0.1,
                          backgroundImage:
                            "linear-gradient(rgba(33, 150, 243, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.5) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{
                          objectFit: "contain",
                          padding: 32,
                          filter: "drop-shadow(0 10px 20px rgba(0, 74, 173,0.5))",
                          zIndex: 2,
                        }}
                      />
                    </div>

                    {/* Content Box */}
                    <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 800,
                          color: "#1976D2",
                          fontFamily: "monospace",
                          marginBottom: 8,
                        }}
                      >
                        SKU: {product.sku}
                      </div>

                      <h3
                        style={{
                          fontSize: 18,
                          fontWeight: 900,
                          fontStyle: "italic",
                          color: "#004aad",
                          textTransform: "uppercase",
                          lineHeight: 1.3,
                          marginBottom: 16,
                          flex: 1,
                        }}
                      >
                        {product.name}
                      </h3>

                      <p
                        style={{
                          fontSize: 14,
                          color: "#546E7A",
                          lineHeight: 1.6,
                          marginBottom: 24,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {product.description}
                      </p>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        <button
                          onClick={() => setQuickViewProduct(product)}
                          style={{
                            padding: "12px",
                            background: "#E3F2FD",
                            color: "#0085f4",
                            border: "1px solid #90CAF9",
                            fontSize: 13,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#BBDEFB")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "#E3F2FD")}
                        >
                          <Eye size={15} /> Quick View
                        </button>

                        <button
                          onClick={() => router.push(`/products/${product.id}`)}
                          style={{
                            padding: "12px",
                            background: "#0085f4",
                            color: "#fff",
                            border: "none",
                            fontSize: 13,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#004aad")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "#0085f4")}
                        >
                          Full Specs <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", background: "#fff", border: "2px dashed #CFD8DC", marginTop: 32 }}>
              <p style={{ color: "#0085f4", fontSize: 16, fontWeight: 700, textTransform: "uppercase" }}>
                No waterworks products found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Submittals Section */}
      <section style={{ padding: "80px 0", background: "#fff", borderTop: "1px solid #E0E0E0" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="submittal-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <FileText size={28} color="#0085f4" />
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", color: "#004aad", textTransform: "uppercase", margin: 0 }}>
                    General Submittals & MSDS
                  </h3>
                  <p style={{ fontSize: 14, color: "#546E7A", margin: 0, marginTop: 4 }}>
                    Download official technical specification sheets and material certificates
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {waterworksData.submittals.general.map((doc, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      background: "#F8FAFC",
                      border: "1px solid #E0E0E0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: "#0085f4", background: "#E3F2FD", padding: "4px 8px" }}>
                        {doc.code}
                      </span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 800, color: "#004aad" }}>{doc.title}</div>
                      </div>
                    </div>

                    <a
                      href={doc.file}
                      download
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "#0085f4",
                        fontSize: 13,
                        fontWeight: 800,
                        textDecoration: "none",
                      }}
                    >
                      <Download size={16} /> Download
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Quote Form */}
            <div style={{ background: "#004aad", color: "#fff", padding: 40, borderTop: "4px solid #2196F3" }}>
              <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", textTransform: "uppercase", marginBottom: 8 }}>
                Request Municipal Distributor Quote
              </h3>
              <p style={{ fontSize: 14, color: "#90CAF9", marginBottom: 28, lineHeight: 1.5 }}>
                Get volume pricing and freight quotes for valve boxes, ductile iron fittings, and restraint glands directly from our Texas warehouses.
              </p>

              {formSubmitted ? (
                <div style={{ background: "rgba(76, 175, 80, 0.2)", border: "1px solid #4CAF50", padding: 24, textAlign: "center" }}>
                  <CheckCircle2 size={32} color="#81C784" style={{ marginBottom: 12 }} />
                  <div style={{ fontSize: 16, fontWeight: 900, color: "#fff" }}>Quote Request Received!</div>
                  <div style={{ fontSize: 13, color: "#C8E6C9", marginTop: 6 }}>
                    An H2 Industries municipal sales engineer will respond within 24 business hours.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      style={{ padding: 14, background: "#fff", border: "none", fontSize: 14, color: "#004aad", fontWeight: 600 }}
                    />
                    <input
                      type="email"
                      placeholder="Work Email *"
                      required
                      style={{ padding: 14, background: "#fff", border: "none", fontSize: 14, color: "#004aad", fontWeight: 600 }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      style={{ padding: 14, background: "#fff", border: "none", fontSize: 14, color: "#004aad", fontWeight: 600 }}
                    />
                    <input
                      type="text"
                      placeholder="Municipality / Agency Name"
                      style={{ padding: 14, background: "#fff", border: "none", fontSize: 14, color: "#004aad", fontWeight: 600 }}
                    />
                  </div>

                  <textarea
                    placeholder="List required SKUs, quantities, or project details..."
                    rows={3}
                    required
                    style={{ padding: 14, background: "#fff", border: "none", fontSize: 14, color: "#004aad", fontWeight: 600, resize: "vertical" }}
                  />

                  <button
                    type="submit"
                    style={{
                      padding: 16,
                      background: "#2196F3",
                      color: "#fff",
                      border: "none",
                      fontSize: 14,
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                    }}
                  >
                    Submit Quote Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(6,35,71,0.85)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              backdropFilter: "blur(6px)",
            }}
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                maxWidth: 800,
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                position: "relative",
                borderTop: "6px solid #0085f4",
              }}
            >
              <button
                onClick={() => setQuickViewProduct(null)}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "#ECEFF1",
                  border: "none",
                  padding: 8,
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <X size={20} color="#0085f4" />
              </button>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 32, padding: 32 }} className="modal-grid">
                <div style={{ background: "#004aad", position: "relative", aspectRatio: "1", padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    style={{ objectFit: "contain", padding: 24, filter: "drop-shadow(0 10px 20px rgba(0,74,173,0.5))" }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#0085f4", background: "#E3F2FD", padding: "4px 8px" }}>
                    {quickViewProduct.category}
                  </span>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#78909C", fontFamily: "monospace", marginTop: 8 }}>
                    SKU: {quickViewProduct.sku}
                  </div>

                  <h3 style={{ fontSize: 20, fontWeight: 900, fontStyle: "italic", color: "#004aad", textTransform: "uppercase", marginTop: 8, marginBottom: 16 }}>
                    {quickViewProduct.name}
                  </h3>

                  <p style={{ fontSize: 14, color: "#546E7A", lineHeight: 1.6, marginBottom: 24 }}>
                    {quickViewProduct.description}
                  </p>

                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 12, fontWeight: 900, color: "#004aad", textTransform: "uppercase", marginBottom: 8 }}>
                      Key Features & Compliance:
                    </div>
                    {quickViewProduct.features.map((f, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#37474F", marginBottom: 6 }}>
                        <CheckCircle2 size={14} color="#0085f4" /> {f}
                      </div>
                    ))}
                  </div>

                  {/* Specs Table */}
                  <div style={{ background: "#F8FAFC", border: "1px solid #E0E0E0", padding: 16, marginBottom: 24 }}>
                    <div style={{ fontSize: 12, fontWeight: 900, color: "#004aad", textTransform: "uppercase", marginBottom: 12 }}>
                      Technical Specifications:
                    </div>
                    {Object.entries(quickViewProduct.specs).map(([key, val], idx) => (
                      <div
                        key={key}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "6px 0",
                          fontSize: 12,
                          borderBottom: idx === Object.keys(quickViewProduct.specs).length - 1 ? "none" : "1px solid #E0E0E0",
                        }}
                      >
                        <span style={{ fontWeight: 800, color: "#546E7A" }}>{key}</span>
                        <span style={{ fontWeight: 600, color: "#004aad" }}>{val}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setQuickViewProduct(null);
                      router.push(`/products/${quickViewProduct.id}`);
                    }}
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "#0085f4",
                      color: "#fff",
                      border: "none",
                      fontSize: 13,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    View Complete Specs Page <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .submittal-grid { grid-template-columns: 1fr !important; }
          .hub-grid { grid-template-columns: 1fr !important; }
          .modal-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
