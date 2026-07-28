"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Building2, 
  FileText, 
  Users, 
  ShieldCheck, 
  Building, 
  Award, 
  Newspaper, 
  Briefcase, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Globe2, 
  Target, 
  Layers, 
  Cpu, 
  Share2, 
  UserCheck,
  Zap,
  Leaf,
  Factory
} from "lucide-react";

const sidebarNav = [
  { id: "overview", label: "Overview", icon: Building2 },
  { id: "our-story", label: "Our Story", icon: FileText },
  { id: "leadership", label: "Leadership Team", icon: Users },
  { id: "our-values", label: "Our Values", icon: ShieldCheck },
  { id: "facilities", label: "Facilities", icon: Building },
  { id: "certifications", label: "Certifications", icon: Award },
];

const statsData = [
  { value: "25+", label: "YEARS OF EXPERIENCE", icon: Award },
  { value: "500+", label: "PROJECTS COMPLETED", icon: Briefcase },
  { value: "50+", label: "MARKETS SERVED", icon: Globe2 },
  { value: "99%", label: "QUALITY TARGET", icon: Target },
  { value: "120,000+", label: "SQ FT OF MANUFACTURING FACILITY", icon: Factory },
  { value: "12", label: "DISTRIBUTION HUBS ACROSS NORTH AMERICA", icon: Building },
];

const storyTimeline = [
  { year: "1998", text: "Established H2 Industries with a commitment to quality and service." },
  { year: "2004", text: "Added advanced manufacturing capabilities and product lines." },
  { year: "2010", text: "Achieved ISO 9001 certification and strengthened our quality systems." },
  { year: "2015", text: "Expanded facilities to support rising demand across North America." },
  { year: "2020", text: "Invested in automation, R&D, and testing technologies." },
  { year: "2024", text: "Continuing to grow our footprint and advance sustainable infrastructure." },
];

const leadershipTeam = [
  { name: "Team Member 1", role: "Executive Leadership", initials: "TM1" },
  { name: "Team Member 2", role: "Operations Lead", initials: "TM2" },
  { name: "Team Member 3", role: "Engineering Lead", initials: "TM3" },
  { name: "Team Member 4", role: "Financial Lead", initials: "TM4" },
  { name: "Team Member 5", role: "Quality Assurance Lead", initials: "TM5" },
];

const valuesList = [
  { title: "INTEGRITY", desc: "We do what's right — every time.", icon: ShieldCheck },
  { title: "QUALITY", desc: "We never compromise on quality.", icon: Award },
  { title: "INNOVATION", desc: "We embrace new ideas and better ways.", icon: Zap },
  { title: "TEAMWORK", desc: "We succeed together with respect.", icon: Users },
  { title: "RESPONSIBILITY", desc: "We care for our communities and planet.", icon: Leaf },
];

const certificationBadges = [
  { name: "ISO 9001:2015", sub: "CERTIFIED" },
  { name: "COMPLIANT", sub: "AWWA STANDARDS" },
  { name: "ASTM INTERNATIONAL", sub: "TESTED" },
  { name: "NSF/ANSI 61", sub: "DRINKING WATER" },
  { name: "UL CERTIFIED", sub: "SAFETY APPROVED" },
  { name: "H-20 TRAFFIC RATED", sub: "HEAVY DUTY" },
  { name: "NASSCO MEMBER", sub: "PIPELINE TECH" },
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
          <div style={{ background: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
            <h4 style={{ fontSize: 13, fontWeight: 900, color: "#004aad", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid rgba(0, 133, 244, 0.15)" }}>
              COMPANY
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
                      borderRadius: "10px",
                      border: "none",
                      background: isActive ? "#0085f4" : "transparent",
                      color: isActive ? "#ffffff" : "#004aad",
                      fontSize: 14,
                      fontWeight: isActive ? 800 : 700,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
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
          <div style={{ background: "linear-gradient(135deg, #004aad 0%, #0085f4 100%)", borderRadius: "16px", padding: "24px", color: "#ffffff", boxShadow: "0 12px 32px rgba(0, 74, 173, 0.2)" }}>
            <h5 style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00bbff", marginBottom: 8 }}>
              LET'S CONNECT
            </h5>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.9)", marginBottom: 20, fontWeight: 500 }}>
              Have questions or want to learn more about H2 Industries?
            </p>
            <button
              onClick={() => {
                const el = document.getElementById("footer-contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "#ffffff",
                color: "#004aad",
                border: "none",
                borderRadius: "8px",
                fontSize: 13,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00bbff";
                e.currentTarget.style.color = "#004aad";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#004aad";
              }}
            >
              CONTACT US <ArrowRight size={14} />
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          
          {/* 1. OVERVIEW SECTION */}
          <section id="overview" style={{ scrollMarginTop: 140 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "start" }} className="overview-split">
              
              {/* Left Column Text */}
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

                <p style={{ color: "#0085f4", fontSize: 16, lineHeight: 1.7, fontWeight: 500, marginBottom: 32 }}>
                  H2 Industries is a trusted manufacturer of precision-engineered waterworks products used in the critical infrastructure that powers everyday life. From design and testing to manufacturing and delivery — we build solutions that communities depend on.
                </p>

                {/* 4 Point Feature Tags */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    "Precision Engineering",
                    "End-to-End Manufacturing",
                    "Tested for Performance",
                    "Trusted by Professionals"
                  ].map((pt, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "#F8FAFC", padding: "12px 16px", borderRadius: "10px", border: "1px solid #E2E8F0" }}>
                      <CheckCircle2 size={18} color="#0085f4" />
                      <span style={{ fontSize: 13, fontWeight: 800, color: "#004aad" }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Stats Grid (6 Metric Cards) */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {statsData.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        background: "#ffffff",
                        border: "1px solid #E2E8F0",
                        borderRadius: "16px",
                        padding: "20px",
                        boxShadow: "0 8px 24px rgba(0, 74, 173, 0.03)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        transition: "transform 0.2s, boxShadow 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 16px 36px rgba(0, 74, 173, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 74, 173, 0.03)";
                      }}
                    >
                      <div style={{ width: 36, height: 36, borderRadius: "10px", background: "rgba(0, 133, 244, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={18} color="#0085f4" />
                      </div>
                      <div style={{ fontSize: 28, fontWeight: 900, color: "#004aad", lineHeight: 1, fontFamily: "var(--font-barlow), sans-serif", fontStyle: "italic" }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 800, color: "#0085f4", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.3 }}>
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* 2. OUR STORY SECTION */}
          <section id="our-story" style={{ scrollMarginTop: 140, background: "#ffffff", borderRadius: "24px", padding: "48px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.03)" }}>
            <div style={{ marginBottom: 40 }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                OUR STORY
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8, marginBottom: 16 }}>
                A Legacy of Quality and Innovation
              </h2>
              <p style={{ color: "#0085f4", fontSize: 15, maxWidth: 800, lineHeight: 1.6, fontWeight: 500 }}>
                Founded with a vision to deliver dependable, high-performance waterworks solutions, H2 Industries has grown into a leading manufacturer serving municipalities and utilities across North America and beyond. Through continuous investment in technology, people, and processes, we remain committed to engineering excellence and long-term partnerships.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20, position: "relative" }} className="timeline-grid">
              {storyTimeline.map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: i === storyTimeline.length - 1 ? "#00bbff" : "#004aad", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, boxShadow: "0 4px 12px rgba(0, 74, 173, 0.2)" }}>
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

          {/* 3. LEADERSHIP TEAM SECTION (With Graphic Avatar Placeholders) */}
          <section id="leadership" style={{ scrollMarginTop: 140 }}>
            <div style={{ marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
              <div>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  LEADERSHIP TEAM
                </span>
                <h2 style={{ fontSize: 32, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8 }}>
                  Experienced. Passionate. Committed.
                </h2>
              </div>
            </div>

            {/* Team Grid with High-Tech Graphic Placeholders (No Human Photos) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 24 }}>
              {leadershipTeam.map((member, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0, 74, 173, 0.04)",
                    transition: "transform 0.2s, boxShadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 16px 36px rgba(0, 74, 173, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 74, 173, 0.04)";
                  }}
                >
                  {/* Clean Corporate Avatar Placeholder Container (No human photo) */}
                  <div style={{ height: 180, background: "linear-gradient(135deg, #004aad 0%, #0085f4 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}>
                      <UserCheck size={36} color="#004aad" />
                    </div>
                    <div style={{ position: "absolute", bottom: 12, right: 12, width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Share2 size={14} color="#ffffff" />
                    </div>
                  </div>

                  {/* Details */}
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 900, color: "#004aad", marginBottom: 4 }}>{member.name}</h3>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#0085f4", margin: 0 }}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. OUR VALUES SECTION */}
          <section id="our-values" style={{ scrollMarginTop: 140 }}>
            <div style={{ marginBottom: 32 }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                OUR VALUES
              </span>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8 }}>
                The Principles That Guide Us
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
              {valuesList.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: "#ffffff",
                      borderRadius: "16px",
                      padding: "24px",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 8px 24px rgba(0, 74, 173, 0.04)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 12,
                    }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: "12px", background: "rgba(0, 133, 244, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={24} color="#0085f4" />
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 900, color: "#004aad", letterSpacing: "0.05em" }}>{val.title}</h3>
                    <p style={{ fontSize: 13, color: "#0085f4", lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 5. FACILITIES & CERTIFICATIONS GRID */}
          <section id="facilities" style={{ scrollMarginTop: 140 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="facilities-split">
              
              {/* Left Column: Facilities Overview */}
              <div style={{ background: "#ffffff", borderRadius: "24px", padding: "36px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.03)" }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  OUR FACILITIES
                </span>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8, marginBottom: 24 }}>
                  State-of-the-Art Manufacturing
                </h3>

                {/* Facility Image Container */}
                <div style={{ position: "relative", height: 220, borderRadius: "12px", overflow: "hidden", marginBottom: 24, background: "linear-gradient(135deg, #004aad 0%, #0085f4 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src="/images/5.webp" alt="H2 Facility" fill style={{ objectFit: "cover", opacity: 0.8 }} />
                  <div style={{ position: "relative", zIndex: 2, background: "rgba(0, 74, 173, 0.85)", padding: "12px 24px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.3)" }}>
                    <span style={{ color: "#ffffff", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>120,000 SQ FT HEADQUARTERS</span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { title: "Advanced Manufacturing", desc: "CNC Machining, Fabrication, Molding & Assembly" },
                    { title: "Quality Assurance Lab", desc: "In-house testing for strength, durability & performance" },
                    { title: "Logistics & Distribution", desc: "Strategically located facilities for fast, reliable delivery" },
                    { title: "Sustainable Operations", desc: "Energy-efficient processes and responsible practices" }
                  ].map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <CheckCircle2 size={18} color="#0085f4" style={{ flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <h4 style={{ fontSize: 14, fontWeight: 800, color: "#004aad", margin: 0 }}>{f.title}</h4>
                        <p style={{ fontSize: 13, color: "#0085f4", margin: 0, fontWeight: 500 }}>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Certifications & Standards */}
              <div id="certifications" style={{ background: "#ffffff", borderRadius: "24px", padding: "36px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    CERTIFICATIONS & STANDARDS
                  </span>
                  <h3 style={{ fontSize: 24, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8, marginBottom: 8 }}>
                    Highest Industry Compliance
                  </h3>
                  <p style={{ fontSize: 14, color: "#0085f4", fontWeight: 500, marginBottom: 24 }}>
                    We build to the highest industry standards.
                  </p>

                  {/* Badges Grid (8 Cards) */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                    {certificationBadges.map((badge, i) => (
                      <div
                        key={i}
                        style={{
                          border: "1.5px solid #E2E8F0",
                          borderRadius: "12px",
                          padding: "16px",
                          textAlign: "center",
                          background: "#F8FAFC",
                          transition: "border-color 0.2s",
                        }}
                      >
                        <div style={{ fontSize: 15, fontWeight: 900, color: "#004aad", letterSpacing: "0.05em" }}>{badge.name}</div>
                        <div style={{ fontSize: 11, fontWeight: 800, color: "#0085f4", marginTop: 4, letterSpacing: "0.1em" }}>{badge.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 32 }}>
                  <button
                    onClick={() => {
                      const el = document.getElementById("quality");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      width: "100%",
                      padding: "14px 24px",
                      background: "#0085f4",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: 14,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#004aad")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#0085f4")}
                  >
                    VIEW ALL CERTIFICATIONS <ArrowRight size={16} />
                  </button>
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
          .overview-split { grid-template-columns: 1fr !important; }
          .facilities-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
