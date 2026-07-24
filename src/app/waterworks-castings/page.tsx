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

export default function WaterworksCastingsPage() {
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
          background: "linear-gradient(135deg, #050D1C 0%, #062347 50%, #0D3A73 100%)",
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
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 320, marginBottom: 24 }}>
                <Image
                  src="/images/waterworks/valve-box-525.webp"
                  alt="H2 Municipal Valve Boxes & Castings"
                  fill
                  style={{ objectFit: "contain", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))" }}
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
                color: "#1565C0",
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
                color: "#062347",
                textTransform: "uppercase",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              Product <span style={{ color: "#1565C0" }}>Series & Specifications</span>
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
                    color: "#1565C0",
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
                    color: "#062347",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1565C0")}
                  onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
                />
              </div>

              {/* Counter */}
              <div style={{ display: "flex", alignItems: "center", padding: "0 16px", background: "#E3F2FD", border: "1px solid #90CAF9" }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#0D3A73", textTransform: "uppercase" }}>
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
                    background: selectedCat === cat ? "#0D3A73" : "#fff",
                    color: selectedCat === cat ? "#fff" : "#0D3A73",
                    borderTop: selectedCat === cat ? "3px solid #2196F3" : "3px solid #CFD8DC",
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
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
                        background: "#1565C0",
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
                        background: "#062347",
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
                          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
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
                          color: "#0D3A73",
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
                            color: "#1565C0",
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
                            background: "#1565C0",
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
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#0D47A1")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "#1565C0")}
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
              <p style={{ color: "#455A64", fontSize: 16, fontWeight: 700, textTransform: "uppercase" }}>
                No waterworks products found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Submittals & MSDS Section */}
      <section style={{ padding: "80px 0", background: "#fff", borderTop: "1px solid #E0E0E0" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="submittal-grid">
            {/* General Submittals */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <FileText size={28} color="#1565C0" />
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", color: "#062347", textTransform: "uppercase", margin: 0 }}>
                    General Submittals & MSDS
                  </h3>
                  <p style={{ fontSize: 14, color: "#546E7A", margin: 0, marginTop: 4 }}>
                    Download official technical specification sheets and material certificates
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {waterworksData.submittals.general.map((sub, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      background: "#F8FAFC",
                      border: "1px solid #E0E0E0",
                      borderRadius: 4,
                      transition: "all 0.2s",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 800, color: "#0D3A73" }}>{sub.title}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#1976D2", fontFamily: "monospace" }}>{sub.code}</div>
                    </div>
                    <button
                      onClick={() => alert(`Downloading submittal sheet: ${sub.file}`)}
                      style={{
                        background: "#1565C0",
                        color: "#fff",
                        border: "none",
                        padding: "8px 16px",
                        fontSize: 12,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <Download size={14} /> PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Submittals */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <Building2 size={28} color="#1565C0" />
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", color: "#062347", textTransform: "uppercase", margin: 0 }}>
                    Regional City Approvals
                  </h3>
                  <p style={{ fontSize: 14, color: "#546E7A", margin: 0, marginTop: 4 }}>
                    Specific municipal submittal packages for Texas & Louisiana cities
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {waterworksData.submittals.regional.map((reg, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 20,
                      background: "#F8FAFC",
                      border: "1px solid #E0E0E0",
                      borderRadius: 4,
                      borderLeft: "4px solid #1565C0",
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", marginBottom: 4 }}>
                      {reg.region}
                    </div>
                    <div style={{ fontSize: 13, color: "#546E7A", fontWeight: 500, marginBottom: 12 }}>
                      {reg.desc}
                    </div>
                    <button
                      onClick={() => alert(`Downloading ${reg.region} municipal submittal docs...`)}
                      style={{
                        background: "transparent",
                        color: "#1565C0",
                        border: "none",
                        padding: 0,
                        fontSize: 13,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      View Specs <ExternalLink size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Distribution Network & Hubs */}
      <section style={{ padding: "80px 0", background: "#062347", color: "#fff" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span
              style={{
                color: "#64B5F6",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 12,
              }}
            >
              Strategic Supply Chain
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                color: "#fff",
                textTransform: "uppercase",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              Texas Distribution <span style={{ color: "#2196F3" }}>Centers & Warehouses</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="hub-grid">
            {waterworksData.distributionHubs.map((hub, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: 36,
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "#2196F3",
                    color: "#fff",
                    padding: "4px 12px",
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 16,
                  }}
                >
                  {hub.tag}
                </div>

                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>
                  {hub.name}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, color: "#B0BEC5", fontSize: 15 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <MapPin size={18} color="#64B5F6" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span>{hub.address}</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Phone size={18} color="#64B5F6" style={{ flexShrink: 0 }} />
                    <span>Main: {hub.phone} {hub.salesPhone ? `| Toll-Free: ${hub.salesPhone}` : ""}</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Mail size={18} color="#64B5F6" style={{ flexShrink: 0 }} />
                    <span>{hub.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Inquiry Form */}
      <section style={{ padding: "80px 0", background: "#F0F7FF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid #E0E0E0",
              padding: 48,
              borderRadius: 8,
              boxShadow: "0 16px 40px rgba(6,35,71,0.06)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <h2 style={{ fontSize: 28, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
                Request Waterworks Pricing & Submittals
              </h2>
              <p style={{ fontSize: 15, color: "#546E7A", marginTop: 8 }}>
                Get rapid quotes for municipal castings, valve boxes, ductile iron fittings, and joint restraints.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{ padding: 32, background: "#E8F5E9", border: "1px solid #81C784", borderRadius: 4, textAlign: "center", color: "#2E7D32" }}>
                <CheckCircle2 size={40} style={{ margin: "0 auto 12px" }} />
                <h4 style={{ fontSize: 18, fontWeight: 900, textTransform: "uppercase", margin: 0 }}>Quote Inquiry Received!</h4>
                <p style={{ fontSize: 14, margin: "8px 0 0" }}>Our waterworks technical sales team will respond within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 800, color: "#0D3A73", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      style={{
                        width: "100%",
                        padding: 14,
                        border: "1px solid #CFD8DC",
                        fontSize: 14,
                        fontWeight: 600,
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 800, color: "#0D3A73", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                      Company / Municipality *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. City of Austin / Utility Dist."
                      style={{
                        width: "100%",
                        padding: 14,
                        border: "1px solid #CFD8DC",
                        fontSize: 14,
                        fontWeight: 600,
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 800, color: "#0D3A73", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="work@company.com"
                      style={{
                        width: "100%",
                        padding: 14,
                        border: "1px solid #CFD8DC",
                        fontSize: 14,
                        fontWeight: 600,
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 800, color: "#0D3A73", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(254) 555-0199"
                      style={{
                        width: "100%",
                        padding: 14,
                        border: "1px solid #CFD8DC",
                        fontSize: 14,
                        fontWeight: 600,
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 12, fontWeight: 800, color: "#0D3A73", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                    Product Items / Project Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify valve box types, quantities, manhole sizes, or project location..."
                    style={{
                      width: "100%",
                      padding: 14,
                      border: "1px solid #CFD8DC",
                      fontSize: 14,
                      fontWeight: 600,
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#1565C0",
                    color: "#fff",
                    border: "none",
                    padding: "18px",
                    fontSize: 15,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0D47A1")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#1565C0")}
                >
                  Submit Quote Request
                </button>
              </form>
            )}
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
              zIndex: 100,
              background: "rgba(5, 13, 28, 0.75)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
            onClick={() => setQuickViewProduct(null)}
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
                maxWidth: 840,
                width: "100%",
                maxHeight: "90vh",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  padding: "24px 32px",
                  borderBottom: "1px solid #E0E0E0",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  background: "#FAFAFA",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 10px",
                      background: "#1565C0",
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {quickViewProduct.category}
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 900, fontStyle: "italic", color: "#062347", textTransform: "uppercase", margin: 0 }}>
                    {quickViewProduct.name}
                  </h3>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#1976D2", fontFamily: "monospace", marginTop: 4 }}>
                    SKU: {quickViewProduct.sku}
                  </div>
                </div>

                <button
                  onClick={() => setQuickViewProduct(null)}
                  style={{ background: "transparent", border: "2px solid #E0E0E0", padding: 8, cursor: "pointer" }}
                >
                  <X size={20} color="#062347" />
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", maxHeight: "calc(90vh - 120px)", overflowY: "auto" }} className="modal-grid">
                <div style={{ background: "#062347", position: "relative", minHeight: 300 }}>
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    style={{ objectFit: "contain", padding: 32 }}
                  />
                </div>

                <div style={{ padding: 32 }}>
                  <h4 style={{ fontSize: 13, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", marginBottom: 12 }}>
                    Product Description
                  </h4>
                  <p style={{ fontSize: 14, color: "#37474F", lineHeight: 1.6, marginBottom: 24 }}>
                    {quickViewProduct.description}
                  </p>

                  <h4 style={{ fontSize: 13, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", marginBottom: 12 }}>
                    Technical Specifications
                  </h4>
                  <div style={{ border: "1px solid #E0E0E0", marginBottom: 24 }}>
                    {Object.entries(quickViewProduct.specs).map(([key, val], idx) => (
                      <div
                        key={key}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1.5fr",
                          padding: "10px 14px",
                          background: idx % 2 === 0 ? "#FAFAFA" : "#fff",
                          fontSize: 12,
                          borderBottom: idx === Object.keys(quickViewProduct.specs).length - 1 ? "none" : "1px solid #E0E0E0",
                        }}
                      >
                        <span style={{ fontWeight: 800, color: "#546E7A" }}>{key}</span>
                        <span style={{ fontWeight: 600, color: "#0D3A73" }}>{val}</span>
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
                      background: "#1565C0",
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
