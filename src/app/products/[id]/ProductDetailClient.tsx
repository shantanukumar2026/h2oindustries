"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import homeData from "@/data/home.json";
import { ArrowLeft, Check, Download, FileText, Settings, ShieldCheck, Factory, Play, Search, ArrowRight, Activity, Cpu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const allProducts = homeData.products.items;

export default function ProductDetailClient() {
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
          <h2 style={{ color: "#004aad", fontWeight: 900, marginBottom: 16 }}>PRODUCT NOT FOUND</h2>
          <button onClick={() => router.push("/products")} style={{ background: "#0085f4", color: "#fff", border: "none", padding: "16px 32px", cursor: "pointer", fontWeight: 800, textTransform: "uppercase" }}>RETURN TO MARKETPLACE</button>
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
    <section ref={containerRef} style={{ background: "#004aad", color: "#fff", paddingTop: 140, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, background: "#2196F3" }} />
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        <button
          onClick={() => router.push("/products")}
          style={{ background: "none", border: "none", color: "#90CAF9", fontSize: 13, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40 }}
        >
          <ArrowLeft size={16} /> Back to Products Catalog
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(33, 150, 243, 0.2)", border: "1px solid rgba(33, 150, 243, 0.4)", padding: "6px 16px", borderRadius: 4, marginBottom: 20 }}>
              <span style={{ color: "#90CAF9", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>{product.category}</span>
            </div>
            <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, textTransform: "uppercase", fontStyle: "italic", lineHeight: 1.05, marginBottom: 24, letterSpacing: "0.01em" }}>
              {product.name}
            </h1>
            <p style={{ fontSize: 18, color: "#90CAF9", lineHeight: 1.6, maxWidth: 650, marginBottom: 40, fontWeight: 500 }}>
              {product.description}
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#specs" style={{ background: "#2196F3", color: "#fff", padding: "16px 36px", fontWeight: 800, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none", borderRadius: 4 }}>
                Technical Specs
              </a>
              <a href="#contact" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "16px 36px", fontWeight: 800, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none", borderRadius: 4 }}>
                Request Submittal CAD
              </a>
            </div>
          </div>

          <motion.div style={{ y: yImage, position: "relative", height: 420, width: "100%" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, rgba(33,150,243,0.3) 0%, transparent 70%)" }} />
            <Image src={product.image} alt={product.name} fill style={{ objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }} priority />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechnicalSpecs({ product }: { product: any }) {
  return (
    <section id="specs" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ marginBottom: 60 }}>
          <span style={{ color: "#2196F3", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>Specification Details</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
            ENGINEERING & <span style={{ color: "#2196F3" }}>ATTRIBUTES</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 900, color: "#004aad", textTransform: "uppercase", marginBottom: 24, fontStyle: "italic" }}>
              Key Performance Features
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {product.features?.map((f: string, i: number) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, background: "#F8FAFC", padding: "16px 20px", border: "1px solid #E2E8F0", borderRadius: 8 }}>
                  <Check size={20} color="#2196F3" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#004aad" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: 20, fontWeight: 900, color: "#004aad", textTransform: "uppercase", marginBottom: 24, fontStyle: "italic" }}>
              Dimensional & Material Specs
            </h3>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: 8, overflow: "hidden" }}>
              {Object.entries(product.specs || {}).map(([key, val], idx) => (
                <div key={key} style={{ display: "flex", justifyContent: "space-between", padding: "16px 24px", background: idx % 2 === 0 ? "#F8FAFC" : "#fff", borderBottom: "1px solid #E2E8F0" }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#546E7A" }}>{key}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#004aad" }}>{val as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManufacturingAndQuality() {
  return (
    <section style={{ padding: "100px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <span style={{ color: "#2196F3", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>Quality Control</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 24 }}>
              RIGOROUS <span style={{ color: "#2196F3" }}>TESTING LAB</span>
            </h2>
            <p style={{ color: "#546E7A", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              Every H2 Industries component undergoes 100% quality inspection, hydrostatic pressure testing, and load-cell stress verification prior to job site delivery.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div style={{ background: "#fff", padding: 20, border: "1px solid #E2E8F0", borderRadius: 8 }}>
                <Factory size={24} color="#2196F3" style={{ marginBottom: 12 }} />
                <h4 style={{ fontSize: 16, fontWeight: 800, color: "#004aad", margin: 0 }}>ISO 9001:2015</h4>
                <p style={{ fontSize: 13, color: "#78909C", margin: "4px 0 0 0" }}>Certified Production Facilities</p>
              </div>
              <div style={{ background: "#fff", padding: 20, border: "1px solid #E2E8F0", borderRadius: 8 }}>
                <ShieldCheck size={24} color="#2196F3" style={{ marginBottom: 12 }} />
                <h4 style={{ fontSize: 16, fontWeight: 800, color: "#004aad", margin: 0 }}>AWWA C515 / C110</h4>
                <p style={{ fontSize: 13, color: "#78909C", margin: "4px 0 0 0" }}>Full Municipal Compliance</p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", height: 380, borderRadius: 16, overflow: "hidden" }}>
            <Image src="/images/3.webp" alt="QA Testing Lab" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationsAndIndustries() {
  return (
    <section style={{ padding: "100px 0", background: "#fff", borderTop: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ color: "#2196F3", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>Target Deployment</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
            FIELD <span style={{ color: "#2196F3" }}>APPLICATIONS</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {[
            { title: "Municipal Water Mains", desc: "Potable distribution networks, fire loops, and main isolation valves." },
            { title: "Stormwater Drainage", desc: "Highway catch basins, curb inlet frames, and outfall sampling vaults." },
            { title: "Industrial Complexes", desc: "Refinery process water, clean energy electrolyser supply, and chemical drainage." },
            { title: "Civil Infrastructure", desc: "Airport aprons, bridge scuppers, and high-load traffic corridor utility vaults." }
          ].map((app, i) => (
            <div key={i} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", padding: 32, borderRadius: 12 }}>
              <Activity size={24} color="#2196F3" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, fontWeight: 900, color: "#004aad", fontStyle: "italic", marginBottom: 8 }}>{app.title}</h3>
              <p style={{ fontSize: 14, color: "#546E7A", lineHeight: 1.6, margin: 0 }}>{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesAndContact({ product, router }: { product: any; router: any }) {
  return (
    <section id="contact" style={{ padding: "100px 0", background: "#004aad", color: "#fff" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 60, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, textTransform: "uppercase", fontStyle: "italic", marginBottom: 20 }}>
              Request Submittal Package for <span style={{ color: "#2196F3" }}>{product.name}</span>
            </h2>
            <p style={{ color: "#90CAF9", fontSize: 17, lineHeight: 1.6, marginBottom: 32 }}>
              Need CAD drawings, spec sheets, or a volume distributor quote? Submit your project details for fast engineering response.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <button onClick={() => alert("Downloading specification drawing...")} style={{ background: "#2196F3", color: "#fff", padding: "16px 32px", border: "none", borderRadius: 4, fontWeight: 800, fontSize: 13, textTransform: "uppercase", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Download size={16} /> Download CAD Drawing
              </button>
            </div>
          </div>

          <div style={{ background: "#fff", color: "#004aad", padding: 40, borderRadius: 12 }}>
            <h3 style={{ fontSize: 20, fontWeight: 900, fontStyle: "italic", textTransform: "uppercase", marginBottom: 20 }}>Quick Engineering Inquiry</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted!"); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input type="text" placeholder="Full Name *" required style={{ padding: 14, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 4, fontSize: 14 }} />
              <input type="email" placeholder="Work Email *" required style={{ padding: 14, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 4, fontSize: 14 }} />
              <textarea placeholder="Specify quantities, SKUs, or project location..." rows={3} required style={{ padding: 14, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 4, fontSize: 14, resize: "vertical" }} />
              <button type="submit" style={{ padding: 16, background: "#004aad", color: "#fff", border: "none", borderRadius: 4, fontWeight: 900, textTransform: "uppercase", fontSize: 13, cursor: "pointer" }}>Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
