"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  FileText, 
  ShieldCheck, 
  Building, 
  Award, 
  Briefcase, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Target, 
  Zap, 
  Leaf, 
  Factory,
  Check
} from "lucide-react";

const sidebarNav = [
  { id: "overview", label: "Overview", icon: Building2 },
  { id: "our-story", label: "Our Story", icon: FileText },
  { id: "our-values", label: "Our Values", icon: ShieldCheck },
  { id: "facilities", label: "Facilities", icon: Building },
  { id: "certifications", label: "Certifications", icon: Award },
];

const storyTimeline = [
  { year: "1998", text: "Established H2 Industries with an uncompromising commitment to engineering quality and public water safety." },
  { year: "2004", text: "Expanded advanced polymer injection moulding and heavy-duty iron casting manufacturing facilities." },
  { year: "2010", text: "Achieved ISO 9001:2015 certification and implemented comprehensive AWWA compliance testing." },
  { year: "2015", text: "Opened nationwide distribution hubs across North America to meet growing municipal infrastructure demand." },
  { year: "2020", text: "Invested heavily in automated R&D testing labs, hydrostatic burst chambers, and CAD modeling." },
  { year: "2024+", text: "Leading sustainable waterworks innovation with clean-energy compatible infrastructure products." },
];

const valuesList = [
  { title: "INTEGRITY", desc: "We adhere strictly to engineering specifications and public safety standards.", icon: ShieldCheck },
  { title: "QUALITY", desc: "We never compromise on materials, tolerances, or quality assurance testing.", icon: Award },
  { title: "INNOVATION", desc: "We embrace advanced materials and CAD modeling to solve complex water challenges.", icon: Zap },
  { title: "EXCELLENCE", desc: "We deliver fail-safe products designed for multi-decade field service.", icon: Factory },
  { title: "RESPONSIBILITY", desc: "We protect natural waterways and reduce environmental pollutant entry.", icon: Leaf },
];

const certificationBadges = [
  { name: "ISO 9001:2015", sub: "QUALITY SYSTEM CERTIFIED" },
  { name: "AWWA COMPLIANT", sub: "WATERWORKS STANDARDS" },
  { name: "ASTM INTERNATIONAL", sub: "LAB TESTED CASTINGS" },
  { name: "NSF/ANSI 61 & 372", sub: "POTABLE WATER LEAD-FREE" },
  { name: "UL CERTIFIED", sub: "SAFETY APPROVED" },
  { name: "AASHTO H-20 / HS-20", sub: "HEAVY TRAFFIC RATED" },
  { name: "NASSCO MEMBER", sub: "PIPELINE TECHNOLOGY" },
  { name: "MADE IN USA", sub: "PRECISION BUILT" },
];

export default function CompanyProfile() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 40px 100px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 60, alignItems: "start" }} className="company-grid">

        {/* Sticky Left Sidebar Navigation */}
        <aside style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 24 }} className="company-sidebar">

          {/* Menu Card */}
          <div style={{ background: "#ffffff", borderRadius: "20px", padding: "28px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
            <h4 style={{ fontSize: 12, fontWeight: 900, color: "#004aad", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid rgba(0, 133, 244, 0.15)" }}>
              CORPORATE PROFILE
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {sidebarNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: "none",
                      background: isActive ? "#0085f4" : "transparent",
                      color: isActive ? "#ffffff" : "#004aad",
                      fontSize: 14,
                      fontWeight: isActive ? 800 : 700,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                      boxShadow: isActive ? "0 6px 18px rgba(0, 133, 244, 0.3)" : "none"
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "rgba(0, 133, 244, 0.08)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    <Icon size={18} color={isActive ? "#ffffff" : "#0085f4"} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Connect Card */}
          <div style={{ background: "linear-gradient(135deg, #004aad 0%, #002255 100%)", borderRadius: "20px", padding: "28px", color: "#ffffff", boxShadow: "0 12px 32px rgba(0, 74, 173, 0.2)" }}>
            <h5 style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00bbff", marginBottom: 8 }}>
              ENGINEERING INQUIRIES
            </h5>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.9)", marginBottom: 20, fontWeight: 500 }}>
              Need submittals, CAD drawings, or custom casting specifications?
            </p>
            <Link
              href="/capabilities"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#0085f4",
                color: "#ffffff",
                padding: "12px 20px",
                borderRadius: "10px",
                fontSize: 12,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textDecoration: "none",
                width: "100%",
                justifyContent: "center",
                boxShadow: "0 8px 20px rgba(0, 133, 244, 0.3)",
              }}
            >
              <span>Explore Capabilities</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </aside>

        {/* Main Content Area */}
        <main style={{ display: "flex", flexDirection: "column", gap: 70 }}>

          {/* 1. OVERVIEW SECTION */}
          <section id="overview" style={{ scrollMarginTop: 140 }}>
            <div style={{ display: "block" }} className="overview-section">
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0, 133, 244, 0.1)", border: "1px solid rgba(0, 133, 244, 0.3)", padding: "6px 16px", borderRadius: "100px", marginBottom: 20 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0085f4" }} />
                  <span style={{ color: "#0085f4", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    ABOUT H2 INDUSTRIES
                  </span>
                </div>

                <h1 className="font-display" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#004aad", lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase", fontStyle: "italic" }}>
                  Engineered for Communities. <br />
                  <span style={{ color: "#0085f4" }}>Built to Last.</span>
                </h1>

                <p style={{ color: "#0085f4", fontSize: 16, lineHeight: 1.7, fontWeight: 500, marginBottom: 32, maxWidth: 950 }}>
                  H2 Industries is a leading manufacturer of precision-engineered municipal waterworks castings, valve boxes, curb boxes, mechanical joint restraints, and modular sampling enclosures. We build critical hydro-infrastructure solutions that cities, public utilities, and civil contractors depend on daily.
                </p>

                {/* 4 Point Feature Tags */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                  {[
                    "Precision CAD & Casting Engineering",
                    "End-to-End In-House Manufacturing",
                    "Tested for Severe Hydrostatic Duty",
                    "Trusted by Municipal Authorities"
                  ].map((pt, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "#ffffff", padding: "14px 18px", borderRadius: "12px", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,74,173,0.03)" }}>
                      <CheckCircle2 size={18} color="#0085f4" />
                      <span style={{ fontSize: 13, fontWeight: 800, color: "#004aad" }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 2. OUR STORY SECTION */}
          <section id="our-story" style={{ scrollMarginTop: 140, background: "#ffffff", borderRadius: "24px", padding: "48px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.03)" }}>
            <div style={{ marginBottom: 40 }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                OUR HERITAGE & TIMELINE
              </span>
              <h2 style={{ fontSize: 30, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8, marginBottom: 16 }}>
                A Legacy of Quality and Manufacturing Innovation
              </h2>
              <p style={{ color: "#0085f4", fontSize: 15, maxWidth: 850, lineHeight: 1.6, fontWeight: 500 }}>
                Founded with a mission to deliver dependable water management products, H2 Industries has grown into a premier manufacturer serving municipalities and utility districts across North America.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 24, position: "relative" }} className="timeline-grid">
              {storyTimeline.map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: i === storyTimeline.length - 1 ? "#0085f4" : "#004aad", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, boxShadow: "0 4px 12px rgba(0, 74, 173, 0.2)" }}>
                      {item.year}
                    </div>
                    {i < storyTimeline.length - 1 && (
                      <div style={{ flex: 1, height: 3, background: "linear-gradient(90deg, #004aad 0%, #0085f4 100%)" }} />
                    )}
                  </div>
                  <p style={{ fontSize: 12, color: "#004aad", lineHeight: 1.5, fontWeight: 600, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. OUR VALUES SECTION */}
          <section id="our-values" style={{ scrollMarginTop: 140 }}>
            <div style={{ marginBottom: 32 }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                CORE VALUES
              </span>
              <h2 style={{ fontSize: 30, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8 }}>
                The Principles That Guide Our Engineering
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {valuesList.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: "#ffffff",
                      borderRadius: "20px",
                      padding: "28px",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 8px 24px rgba(0, 74, 173, 0.04)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 14,
                      transition: "transform 0.2s ease, boxShadow 0.2s ease"
                    }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: "12px", background: "rgba(0, 133, 244, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={22} color="#0085f4" />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 900, color: "#004aad", letterSpacing: "0.05em", margin: 0 }}>{val.title}</h3>
                    <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. FACILITIES & CERTIFICATIONS GRID */}
          <section id="facilities" style={{ scrollMarginTop: 140 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="facilities-split">

              {/* Left Column: Facilities Overview */}
              <div style={{ background: "#ffffff", borderRadius: "24px", padding: "36px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.03)" }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  MANUFACTURING & DISTRIBUTION
                </span>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8, marginBottom: 24 }}>
                  State-of-the-Art Production Hubs
                </h3>

                {/* Facility Image Container */}
                <div style={{ position: "relative", height: 220, borderRadius: "16px", overflow: "hidden", marginBottom: 24, background: "linear-gradient(135deg, #004aad 0%, #0085f4 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src="/images/5.webp" alt="H2 Facility" fill style={{ objectFit: "cover", opacity: 0.8 }} />
                  <div style={{ position: "relative", zIndex: 2, background: "rgba(0, 74, 173, 0.85)", padding: "12px 24px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.3)" }}>
                    <span style={{ color: "#ffffff", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em" }}>120,000 SQ FT MANUFACTURING COMPLEX</span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { title: "Advanced Polymer & Metal Production", desc: "CNC Machining, Automated Molding, Hydrostatic Testing & Fabrication" },
                    { title: "In-House Quality Assurance Lab", desc: "Rigorous load, pressure & dimensional tolerance testing before shipment" },
                    { title: "North American Logistics Hubs", desc: "Strategic warehouses ensuring fast job site dispatch" },
                    { title: "Sustainable Manufacturing", desc: "Zero VOC emission moulding lines and 85%+ material recovery" }
                  ].map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <CheckCircle2 size={18} color="#0085f4" style={{ flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <h4 style={{ fontSize: 14, fontWeight: 800, color: "#004aad", margin: 0 }}>{f.title}</h4>
                        <p style={{ fontSize: 13, color: "#64748B", margin: 0, fontWeight: 500, lineHeight: 1.5 }}>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Certifications & Standards */}
              <div id="certifications" style={{ background: "#ffffff", borderRadius: "24px", padding: "36px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    STANDARDS & CERTIFICATIONS
                  </span>
                  <h3 style={{ fontSize: 24, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8, marginBottom: 8 }}>
                    Exceeding Industry Compliance
                  </h3>
                  <p style={{ fontSize: 14, color: "#64748B", fontWeight: 500, marginBottom: 24 }}>
                    Every H2 product is tested and certified to international public works standards.
                  </p>

                  {/* Badges Grid (8 Cards) */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                    {certificationBadges.map((badge, i) => (
                      <div
                        key={i}
                        style={{
                          border: "1px solid #E2E8F0",
                          borderRadius: "12px",
                          padding: "16px",
                          textAlign: "center",
                          background: "#F8FAFC",
                          transition: "border-color 0.2s",
                        }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 900, color: "#004aad", letterSpacing: "0.03em" }}>{badge.name}</div>
                        <div style={{ fontSize: 10, fontWeight: 800, color: "#0085f4", marginTop: 4, letterSpacing: "0.08em" }}>{badge.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 32 }}>
                  <Link
                    href="/quality"
                    style={{
                      width: "100%",
                      padding: "14px 24px",
                      background: "#004aad",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: 13,
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      textDecoration: "none",
                      boxShadow: "0 8px 20px rgba(0, 74, 173, 0.2)"
                    }}
                  >
                    <span>View Quality Standards & Docs</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .company-grid { grid-template-columns: 1fr !important; }
          .company-sidebar { position: relative !important; top: 0 !important; }
          .overview-section { display: block !important; }
          .facilities-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
