"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProducts } from "@/components/Products";
import { ArrowLeft, Check, Download, FileText, Settings, ShieldCheck, Factory, Play, Search, ArrowRight, Activity, Cpu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const idStr = params.id as string;
  const id = parseInt(idStr, 10);
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#FAFAFA" }}>
        <Navbar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 120 }}>
          <h2 style={{ color: "#0D3A73", fontWeight: 900, marginBottom: 16 }}>PRODUCT NOT FOUND</h2>
          <button onClick={() => router.push("/products")} style={{ background: "#1565C0", color: "#fff", border: "none", padding: "16px 32px", cursor: "pointer", fontWeight: 800, textTransform: "uppercase" }}>RETURN TO MARKETPLACE</button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#FAFAFA" }}>
      <Navbar />

      {/* 1. Hero Section (Product Presentation) */}
      <ProductHero product={product} />

      {/* 2. Overview & Technical Specs */}
      <TechnicalSpecs product={product} />

      {/* 3. Manufacturing Process & Quality */}
      <ManufacturingAndQuality />

      {/* 4. Applications & Industries */}
      <ApplicationsAndIndustries />

      {/* 5. Downloads, FAQ, Related, Contact */}
      <ResourcesAndContact product={product} router={router} />

      <Footer />
    </main>
  );
}

function ProductHero({ product }: { product: any }) {
  const router = useRouter();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} style={{ paddingTop: 100, position: "relative", background: "#050d1c", overflow: "hidden" }}>
      {/* Blueprint background for Hero only */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "linear-gradient(rgba(33, 150, 243, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(33, 150, 243, 0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(circle at top right, rgba(33, 150, 243, 0.15), transparent 60%)" }} />

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "40px 60px", position: "relative", zIndex: 10 }}>
        {/* Breadcrumbs */}
        <nav style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 12, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          <span style={{ color: "#90CAF9", cursor: "pointer" }} onClick={() => router.push("/")}>Home</span>
          <span style={{ color: "#42A5F5" }}>/</span>
          <span style={{ color: "#90CAF9", cursor: "pointer" }} onClick={() => router.push("/products")}>Products</span>
          <span style={{ color: "#42A5F5" }}>/</span>
          <span style={{ color: "#fff" }}>{product.name}</span>
        </nav>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "center", minHeight: "75vh" }}>
          {/* Details */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ display: "inline-block", padding: "6px 14px", background: "rgba(33, 150, 243, 0.1)", border: "1px solid rgba(33, 150, 243, 0.3)", color: "#90CAF9", fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
              {product.category}
            </span>
            <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, textTransform: "uppercase", fontStyle: "italic", marginBottom: 16 }}>
              {product.name}
            </h1>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#42A5F5", letterSpacing: "0.05em", fontFamily: "monospace", marginBottom: 32 }}>
              SKU: {product.sku}
            </p>
            <p style={{ color: "#B0BEC5", fontSize: 18, lineHeight: 1.6, fontWeight: 400, maxWidth: 600, marginBottom: 40 }}>
              {product.description}
            </p>

            <div style={{ display: "flex", gap: 16 }}>
              <button style={{ background: "#2196F3", color: "#fff", border: "none", padding: "18px 36px", fontSize: 15, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }} onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}>
                REQUEST QUOTE <ArrowRight size={18} />
              </button>
              <button style={{ background: "transparent", color: "#90CAF9", border: "1px solid rgba(144, 202, 249, 0.3)", padding: "18px 36px", fontSize: 15, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
                DOWNLOAD CAD <Download size={18} />
              </button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <div style={{ position: "relative", height: "100%", minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div style={{ position: "relative", width: "100%", height: "100%", y: yImage }}>
              <Image src={product.image} alt={product.name} fill style={{ objectFit: "contain", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.8))" }} priority />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalSpecs({ product }: { product: any }) {
  return (
    <section style={{ padding: "100px 0", background: "#ffffff", borderBottom: "1px solid #E0E0E0" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>

        {/* Specs Table */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <Settings size={28} color="#1565C0" />
            <h2 style={{ fontSize: 32, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>TECHNICAL SPECIFICATIONS</h2>
          </div>

          <div style={{ border: "1px solid #E0E0E0", borderRadius: 8, overflow: "hidden" }}>
            {[
              { label: "Material", val: "High-Grade Industrial Composite / 316 Stainless" },
              { label: "Tolerance Rating", val: "± 0.05 mm Precision Machined" },
              { label: "Pressure Rating", val: "Hydrostatic Tested to 500 PSI" },
              { label: "Operating Temp", val: "-40°C to +85°C Extreme Environment" },
              { label: "Compliance", val: "ISO 9001, ASTM International Standards" }
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", padding: "20px 24px", background: i % 2 === 0 ? "#FAFAFA" : "#fff", borderBottom: i === 4 ? "none" : "1px solid #E0E0E0" }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#4A6375", textTransform: "uppercase", letterSpacing: "0.05em" }}>{row.label}</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#0D3A73" }}>{row.val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ delay: 0.2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <Activity size={28} color="#1565C0" />
            <h2 style={{ fontSize: 32, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>CORE ADVANTAGES</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {product.features.map((feat: string, i: number) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: "#F0F7FF", border: "1px solid #90CAF9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={24} color="#1565C0" strokeWidth={3} />
                </div>
                <div>
                  <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0D3A73", textTransform: "uppercase", marginBottom: 8 }}>{feat}</h4>
                  <p style={{ fontSize: 15, color: "#4A6375", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>Engineered to provide maximum reliability and lifecycle value in rigorous industrial environments.</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ManufacturingAndQuality() {
  return (
    <section style={{ background: "#FAFAFA", padding: "100px 0", borderBottom: "1px solid #E0E0E0" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", fontStyle: "italic", marginBottom: 16 }}>PRECISION AT EVERY STEP</h2>
          <p style={{ fontSize: 18, color: "#4A6375", maxWidth: 700, margin: "0 auto", fontWeight: 500 }}>From raw material to final inspection, our state-of-the-art facilities ensure flawless execution.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {/* Manufacturing */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-20%" }} style={{ position: "relative", height: 500, borderRadius: 16, overflow: "hidden", border: "1px solid #E0E0E0", boxShadow: "0 20px 40px rgba(6,35,71,0.06)" }}>
            <video src="/portfolio/2.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 32, background: "linear-gradient(transparent, rgba(5,13,28,0.9))" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <Factory size={24} color="#42A5F5" />
                <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 900, textTransform: "uppercase", margin: 0 }}>CNC MACHINING & CASTING</h3>
              </div>
              <p style={{ color: "#90CAF9", fontSize: 15, margin: 0 }}>Automated production lines delivering micro-millimeter precision.</p>
            </div>
          </motion.div>

          {/* Quality */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-20%" }} transition={{ delay: 0.2 }} style={{ position: "relative", height: 500, borderRadius: 16, overflow: "hidden", border: "1px solid #E0E0E0", boxShadow: "0 20px 40px rgba(6,35,71,0.06)" }}>
            <video src="/portfolio/3.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 32, background: "linear-gradient(transparent, rgba(5,13,28,0.9))" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <ShieldCheck size={24} color="#42A5F5" />
                <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 900, textTransform: "uppercase", margin: 0 }}>AUTOMATED INSPECTION</h3>
              </div>
              <p style={{ color: "#90CAF9", fontSize: 15, margin: 0 }}>100% batch hydrostatic and stress testing before dispatch.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ApplicationsAndIndustries() {
  const industries = ["Municipal Water Management", "Industrial Chemical Processing", "Heavy Manufacturing", "Commercial Infrastructure", "Environmental Monitoring", "Energy & Hydrogen Sectors"];
  return (
    <section style={{ padding: "100px 0", background: "#ffffff", borderBottom: "1px solid #E0E0E0" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "center" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-20%" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", fontStyle: "italic", marginBottom: 24, lineHeight: 1.1 }}>INDUSTRIES & <br /><span style={{ color: "#2196F3" }}>APPLICATIONS</span></h2>
          <div style={{ width: 60, height: 4, background: "#1565C0", marginBottom: 32 }} />
          <p style={{ fontSize: 16, color: "#4A6375", lineHeight: 1.7, fontWeight: 500, marginBottom: 40 }}>Our equipment forms the critical backbone of advanced infrastructure projects across multiple sectors globally. Built to adapt, scale, and perform.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-20%" }} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {industries.map((ind, i) => (
            <div key={i} style={{ background: "#FAFAFA", border: "1px solid #E0E0E0", padding: "24px 32px", borderRadius: 8, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 8, height: 8, background: "#2196F3", borderRadius: "50%" }} />
              <span style={{ fontSize: 15, fontWeight: 800, color: "#0D3A73", textTransform: "uppercase" }}>{ind}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ResourcesAndContact({ product, router }: { product: any, router: any }) {
  return (
    <section id="contact-section" style={{ padding: "100px 0", background: "#F0F7FF" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>

        {/* Resources */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", marginBottom: 32 }}>PRODUCT RESOURCES</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: FileText, title: "Product Spec Sheet (PDF)" },
              { icon: Cpu, title: "CAD Model (.STP / .DWG)" },
              { icon: ShieldCheck, title: "ISO Compliance Certificate" },
              { icon: Settings, title: "Installation Guide" }
            ].map((res, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#ffffff", border: "1px solid #90CAF9", padding: "20px 24px", borderRadius: 8, cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2196F3"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(21,101,192,0.1)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#90CAF9"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <res.icon size={24} color="#1565C0" />
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#0D3A73", textTransform: "uppercase" }}>{res.title}</span>
                </div>
                <Download size={20} color="#42A5F5" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ delay: 0.2 }}>
          <div style={{ background: "#ffffff", border: "1px solid #E0E0E0", padding: 48, borderRadius: 16, boxShadow: "0 20px 40px rgba(6,35,71,0.05)" }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#0D3A73", textTransform: "uppercase", marginBottom: 16, fontStyle: "italic" }}>REQUEST A QUOTE</h2>
            <p style={{ fontSize: 15, color: "#4A6375", marginBottom: 32, fontWeight: 500 }}>Submit your details to receive pricing for the <strong>{product.name}</strong>, including volume discounts and custom configurations.</p>

            <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <input type="text" placeholder="FULL NAME" style={{ padding: "16px 20px", background: "#F5F7FA", border: "1px solid #CFD8DC", borderRadius: 4, fontSize: 14, fontWeight: 600, color: "#0D3A73", outline: "none" }} />
                <input type="email" placeholder="COMPANY EMAIL" style={{ padding: "16px 20px", background: "#F5F7FA", border: "1px solid #CFD8DC", borderRadius: 4, fontSize: 14, fontWeight: 600, color: "#0D3A73", outline: "none" }} />
              </div>
              <input type="text" placeholder="PROJECT DETAILS / VOLUME REQUIRED" style={{ padding: "16px 20px", background: "#F5F7FA", border: "1px solid #CFD8DC", borderRadius: 4, fontSize: 14, fontWeight: 600, color: "#0D3A73", outline: "none" }} />
              <button type="button" style={{ background: "#1565C0", color: "#fff", border: "none", padding: 20, fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", borderRadius: 4, marginTop: 12 }}>
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
