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
  Check,
  Download,
  Users,
  Clock,
  Compass,
  FileCheck,
  TrendingUp,
  ChevronRight,
  Truck,
  Wrench,
  MapPin
} from "lucide-react";

const sidebarNav = [
  { id: "overview", label: "Company Overview", icon: Building2, href: "/company#overview" },
  { id: "who-we-are", label: "Who We Are", icon: FileText, href: "/company#who-we-are" },
  { id: "our-journey", label: "Our Journey", icon: Clock, href: "/company#our-journey" },
  { id: "what-we-do", label: "What We Do", icon: Wrench, href: "/capabilities" },
  { id: "footprint", label: "Manufacturing Footprint", icon: Factory, href: "/capabilities#manufacturing" },
  { id: "quality", label: "Quality & Standards", icon: Award, href: "/quality" },
  { id: "mission-values", label: "Mission & Values", icon: Compass, href: "/company#mission-values" },
  { id: "markets", label: "Markets We Serve", icon: Globe2, href: "/industries" },
  { id: "why-h2", label: "Why H2 Industries", icon: ShieldCheck, href: "/company#why-h2" },
  { id: "resources", label: "Company Resources", icon: Download, href: "/quality#resources" },
];

const storyTimeline = [
  { year: "1998", title: "Foundation in New York", text: "Founded H2 Industries in Melville, NY with a focus on precision AWWA ductile iron valve boxes and curb stop enclosures." },
  { year: "2004", title: "Polymer Foundry Expansion", text: "Built automated polymer injection molding facility to pioneer light-weight, high-durability composite valve enclosures." },
  { year: "2010", title: "ISO 9001 & NSF Certification", text: "Achieved full ISO 9001:2015 accreditation and NSF/ANSI 61 lead-free certification for all potable water castings." },
  { year: "2015", title: "Canadian Operations Launch", text: "Established distribution hub in Toronto, Ontario to support Canadian municipal water authorities and DOT projects." },
  { year: "2020", title: "Southern Operations & R&D Lab", text: "Opened Stuart, Florida facility and expanded internal metallurgical testing labs with hydrostatic burst testing." },
  { year: "2024+", title: "Clean Energy Integration", text: "Pioneering hydrogen-ready underground utility boxes and smart telemetry sampling enclosures across North America." },
];

const whatWeDoPillars = [
  { 
    title: "ENGINEERING & CAD DESIGN", 
    desc: "In-house 3D FEA stress analysis, custom municipal pattern development, and specialized CAD submittals.",
    icon: Wrench,
    points: ["3D Finite Element Analysis", "Custom AWWA Spec Submittals", "Pattern Design & Tooling"]
  },
  { 
    title: "MANUFACTURING & FOUNDRY", 
    desc: "Ductile iron sand casting, gray iron foundry operations, and heavy-duty HDPE injection molding.",
    icon: Factory,
    points: ["ASTM A48 Class 35B Iron", "AASHTO H-20 Traffic Rated", "Robotic Injection Molding"]
  },
  { 
    title: "QUALITY & TESTING", 
    desc: "Rigorous 100% batch testing including hydrostatic pressure, SPECTRO chemical analysis, and load testing.",
    icon: Award,
    points: ["Hydrostatic Burst Chamber", "Chemical Spectrometry", "NSF/ANSI 61 Lead-Free"]
  },
  { 
    title: "DISTRIBUTION & LOGISTICS", 
    desc: "Strategically located regional warehouses in NY, FL, and ON ensuring rapid JIT site delivery.",
    icon: Truck,
    points: ["48-Hour Emergency Shipping", "Jobsite Staging Support", "USA & Canadian Freight"]
  },
  { 
    title: "TECHNICAL FIELD SUPPORT", 
    desc: "Dedicated municipal engineers providing on-site specification consultation and installation guidance.",
    icon: ShieldCheck,
    points: ["AWWA Specification Review", "Contractor On-Site Training", "Lifetime Product Warranties"]
  },
];

const certificationBadges = [
  { name: "ISO 9001:2015", sub: "QUALITY MANAGEMENT CERTIFIED", href: "/quality#standards" },
  { name: "AWWA COMPLIANT", sub: "AMERICAN WATER WORKS ASSOC.", href: "/quality#standards" },
  { name: "ASTM INTERNATIONAL", sub: "METALLURGICAL STANDARDS", href: "/quality#standards" },
  { name: "NSF/ANSI 61 & 372", sub: "POTABLE WATER LEAD-FREE", href: "/quality#standards" },
  { name: "AASHTO H-20 / HS-20", sub: "HIGHWAY TRAFFIC LOAD RATED", href: "/quality#standards" },
  { name: "UL / FM APPROVED", sub: "FIRE MAINS & UTILITIES", href: "/quality#standards" },
  { name: "MADE IN USA / CANADA", sub: "BUY AMERICAN ACT COMPLIANT", href: "/quality#standards" },
  { name: "CSA INTERNATIONAL", sub: "CANADIAN STANDARDS ASSOC.", href: "/quality#standards" },
];

const marketsServed = [
  { title: "Municipal Water & Sewer", desc: "Gate valves, curb boxes, sampling stations, and manhole castings for city water authorities.", icon: Building2 },
  { title: "Departments of Transportation", desc: "AASHTO H-20 traffic-rated drainage inlets and roadway utility access boxes.", icon: Truck },
  { title: "Civil & Infrastructure Contractors", desc: "Custom engineered pre-fabricated enclosures and heavy utility castings.", icon: Factory },
  { title: "Industrial Process & Utilities", desc: "Corrosion-resistant chemical sampling ports and high-pressure waterworks fittings.", icon: Wrench },
  { title: "Stormwater Management", desc: "Precision-engineered inlet frames, column drainage, and EPA-compliant filtration.", icon: Leaf },
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
      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 50, alignItems: "start" }} className="company-grid">

        {/* Sticky Left Sidebar Navigation */}
        <aside style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 24 }} className="company-sidebar">

          {/* Menu Card */}
          <div style={{ background: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
            <h4 style={{ fontSize: 11, fontWeight: 900, color: "#004aad", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 18, paddingBottom: 10, borderBottom: "2px solid rgba(0, 133, 244, 0.15)" }}>
              COMPANY NAVIGATION
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {sidebarNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "10px",
                      border: "none",
                      background: isActive ? "#EBF3FF" : "transparent",
                      color: isActive ? "#004aad" : "#0085f4",
                      fontWeight: isActive ? 900 : 600,
                      fontSize: 13,
                      cursor: "pointer",
                      textAlign: "left",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "#F8FAFC";
                        e.currentTarget.style.color = "#004aad";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#0085f4";
                      }
                    }}
                  >
                    <Icon size={16} color={isActive ? "#0085f4" : "#90CAF9"} />
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {isActive && <ChevronRight size={14} color="#0085f4" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Quick Contact CTA Card */}
          <div style={{ background: "linear-gradient(135deg, #004aad 0%, #0085f4 100%)", borderRadius: "16px", padding: "24px", color: "#ffffff", boxShadow: "0 12px 32px rgba(0, 74, 173, 0.2)" }}>
            <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#90CAF9", marginBottom: 8 }}>
              WORK WITH H2 INDUSTRIES
            </div>
            <h4 style={{ fontSize: 18, fontWeight: 900, lineHeight: 1.25, marginBottom: 12 }}>
              Need Custom AWWA Specifications?
            </h4>
            <p style={{ fontSize: 12, color: "#E0F2FE", lineHeight: 1.5, marginBottom: 20 }}>
              Speak with our engineering sales team for submittal packages, CAD drawings, and volume pricing.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "#ffffff",
                  color: "#004aad",
                  padding: "12px",
                  borderRadius: "8px",
                  fontSize: 12,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
              >
                REQUEST A QUOTE <ArrowRight size={14} />
              </a>
              <a
                href="tel:+15127828880"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  padding: "10px",
                  borderRadius: "8px",
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.3)"
                }}
              >
                <PhoneCall size={14} /> +1 (512) 782-8880
              </a>
            </div>
          </div>

        </aside>

        {/* Right Main Content Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

          {/* 1. COMPANY OVERVIEW */}
          <section id="overview" style={{ scrollMarginTop: 140 }}>
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "40px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EBF3FF", padding: "6px 14px", borderRadius: "100px", marginBottom: 16 }}>
                <Building2 size={14} color="#0085f4" />
                <span style={{ color: "#0085f4", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>ABOUT H2 INDUSTRIES</span>
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 20 }}>
                North America's Precision Waterworks Authority
              </h2>
              <p style={{ fontSize: 15, color: "#0085f4", lineHeight: 1.7, marginBottom: 24, fontWeight: 500 }}>
                H2 Industries is a premier North American manufacturer of precision-engineered hydro-infrastructure products. Headquartered in Melville, New York, with regional manufacturing and distribution operations in Florida and Ontario, H2 Industries engineers fail-safe municipal waterworks castings, valve access boxes, modular sampling enclosures, and stormwater column drainage systems.
              </p>

              {/* Key Facts Bar */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, background: "#F8FAFC", padding: "20px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "#0085f4", textTransform: "uppercase" }}>COMPANY TYPE</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#004aad", marginTop: 2 }}>Private OEM & Foundry</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "#0085f4", textTransform: "uppercase" }}>HEADQUARTERS</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#004aad", marginTop: 2 }}>Melville, NY, USA</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "#0085f4", textTransform: "uppercase" }}>MARKETS SERVED</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#004aad", marginTop: 2 }}>USA & Canada (All 50 States + 10 Provinces)</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "#0085f4", textTransform: "uppercase" }}>PRIMARY STANDARDS</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#004aad", marginTop: 2 }}>AWWA, ASTM, NSF/ANSI 61</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. WHO WE ARE */}
          <section id="who-we-are" style={{ scrollMarginTop: 140 }}>
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "40px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EBF3FF", padding: "6px 14px", borderRadius: "100px", marginBottom: 16 }}>
                    <FileText size={14} color="#0085f4" />
                    <span style={{ color: "#0085f4", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>WHO WE ARE</span>
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 16 }}>
                    Engineered for Multi-Decade Field Reliability
                  </h3>
                  <p style={{ fontSize: 14, color: "#0085f4", lineHeight: 1.65, marginBottom: 16, fontWeight: 500 }}>
                    Founded in 1998, H2 Industries was forged on a commitment to solve complex municipal water challenges through metallurgical precision and rigorous quality control. Our products are installed in major metropolitan water systems, roadway catch basins, and industrial water plants across North America.
                  </p>
                  <p style={{ fontSize: 14, color: "#0085f4", lineHeight: 1.65, marginBottom: 24, fontWeight: 500 }}>
                    We combine old-world foundry expertise with 21st-century CAD modeling, finite element analysis (FEA), and automated polymer injection molding to create infrastructure built for 50+ year service lifespans.
                  </p>

                  <div style={{ display: "flex", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <CheckCircle2 size={16} color="#0085f4" />
                      <span style={{ fontSize: 13, fontWeight: 800, color: "#004aad" }}>100% In-House Testing</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <CheckCircle2 size={16} color="#0085f4" />
                      <span style={{ fontSize: 13, fontWeight: 800, color: "#004aad" }}>Buy American Compliant</span>
                    </div>
                  </div>
                </div>

                {/* Real Facility Image Container */}
                <div style={{ position: "relative", height: 320, borderRadius: "14px", overflow: "hidden", border: "1px solid #E2E8F0" }}>
                  <Image
                    src="/images/THROUGHENGINEERING.png"
                    alt="H2 Industries Manufacturing Facility"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", bottom: 0, inset: "auto 0 0 0", background: "linear-gradient(to top, rgba(0,74,173,0.95), transparent)", padding: "20px 24px", color: "#fff" }}>
                    <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#90CAF9" }}>MELVILLE, NY FACILITY</div>
                    <div style={{ fontSize: 14, fontWeight: 800 }}>Foundry Operations & Automated Tooling Lab</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. OUR JOURNEY (Timeline) */}
          <section id="our-journey" style={{ scrollMarginTop: 140 }}>
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "40px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EBF3FF", padding: "6px 14px", borderRadius: "100px", marginBottom: 16 }}>
                <Clock size={14} color="#0085f4" />
                <span style={{ color: "#0085f4", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>OUR JOURNEY</span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 28 }}>
                Quarter-Century of Innovation & Growth
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {storyTimeline.map((item, i) => (
                  <div key={i} style={{ background: "#F8FAFC", borderRadius: "12px", padding: "24px", border: "1px solid #E2E8F0", position: "relative" }}>
                    <div style={{ fontSize: 24, fontWeight: 950, color: "#0085f4", fontStyle: "italic", marginBottom: 4 }}>
                      {item.year}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 900, color: "#004aad", marginBottom: 8 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#0085f4", lineHeight: 1.5, fontWeight: 500 }}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. WHAT WE DO */}
          <section id="what-we-do" style={{ scrollMarginTop: 140 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EBF3FF", padding: "6px 14px", borderRadius: "100px", alignSelf: "flex-start" }}>
                <Wrench size={14} color="#0085f4" />
                <span style={{ color: "#0085f4", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>WHAT WE DO</span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
                End-to-End Infrastructure Capabilities
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {whatWeDoPillars.map((pil, idx) => {
                  const Icon = pil.icon;
                  return (
                    <div key={idx} style={{ background: "#ffffff", borderRadius: "16px", padding: "28px", border: "1px solid #E2E8F0", boxShadow: "0 8px 24px rgba(0,74,173,0.03)" }}>
                      <div style={{ width: 42, height: 42, borderRadius: "10px", background: "#EFF6FF", border: "1.5px solid #93C5FD", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                        <Icon size={20} color="#0085f4" />
                      </div>
                      <h4 style={{ fontSize: 15, fontWeight: 900, color: "#004aad", marginBottom: 8, letterSpacing: "0.02em" }}>
                        {pil.title}
                      </h4>
                      <p style={{ fontSize: 12, color: "#0085f4", lineHeight: 1.5, marginBottom: 16, fontWeight: 500 }}>
                        {pil.desc}
                      </p>
                      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
                        {pil.points.map((pt, pIdx) => (
                          <div key={pIdx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, color: "#0085f4" }}>
                            <Check size={12} color="#0085f4" /> {pt}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 5. MANUFACTURING FOOTPRINT */}
          <section id="footprint" style={{ scrollMarginTop: 140 }}>
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "40px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EBF3FF", padding: "6px 14px", borderRadius: "100px", marginBottom: 16 }}>
                <Factory size={14} color="#0085f4" />
                <span style={{ color: "#0085f4", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>MANUFACTURING FOOTPRINT</span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 24 }}>
                Strategic North American Facilities
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                {/* NY Facility */}
                <div style={{ background: "#F8FAFC", borderRadius: "14px", overflow: "hidden", border: "1px solid #E2E8F0" }}>
                  <div style={{ position: "relative", height: 160 }}>
                    <Image src="/images/THROUGHENGINEERINGPRD.png" alt="Melville NY Facility" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ fontSize: 10, fontWeight: 900, color: "#0085f4", textTransform: "uppercase" }}>HEADQUARTERS & FOUNDRY</div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#004aad", margin: "4px 0 8px" }}>Melville, New York, USA</div>
                    <p style={{ fontSize: 12, color: "#0085f4", lineHeight: 1.45, margin: 0, fontWeight: 500 }}>
                      120,000 sq. ft. primary casting, CNC machining, metallurgical testing lab, and corporate HQ.
                    </p>
                  </div>
                </div>

                {/* FL Facility */}
                <div style={{ background: "#F8FAFC", borderRadius: "14px", overflow: "hidden", border: "1px solid #E2E8F0" }}>
                  <div style={{ position: "relative", height: 160 }}>
                    <Image src="/images/curb-box.webp" alt="Stuart FL Facility" fill style={{ objectFit: "contain", padding: 20, background: "#ffffff" }} />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ fontSize: 10, fontWeight: 900, color: "#0085f4", textTransform: "uppercase" }}>SOUTHERN OPERATIONS</div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#004aad", margin: "4px 0 8px" }}>Stuart, Florida, USA</div>
                    <p style={{ fontSize: 12, color: "#0085f4", lineHeight: 1.45, margin: 0, fontWeight: 500 }}>
                      Specialized polymer molding, hydrostatic burst testing, and Southeast US logistics distribution hub.
                    </p>
                  </div>
                </div>

                {/* ON Facility */}
                <div style={{ background: "#F8FAFC", borderRadius: "14px", overflow: "hidden", border: "1px solid #E2E8F0" }}>
                  <div style={{ position: "relative", height: 160 }}>
                    <Image src="/images/column-drain-water.webp" alt="Toronto ON Facility" fill style={{ objectFit: "contain", padding: 20, background: "#ffffff" }} />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ fontSize: 10, fontWeight: 900, color: "#0085f4", textTransform: "uppercase" }}>CANADIAN OPERATIONS</div>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#004aad", margin: "4px 0 8px" }}>Toronto, Ontario, Canada</div>
                    <p style={{ fontSize: 12, color: "#0085f4", lineHeight: 1.45, margin: 0, fontWeight: 500 }}>
                      Canadian head office, CSA compliance laboratory, and nationwide provincial distribution center.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. QUALITY & STANDARDS */}
          <section id="quality" style={{ scrollMarginTop: 140 }}>
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "40px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EBF3FF", padding: "6px 14px", borderRadius: "100px", marginBottom: 16 }}>
                <Award size={14} color="#0085f4" />
                <span style={{ color: "#0085f4", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>QUALITY & STANDARDS</span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 24 }}>
                Certified North American Standards & Approvals
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {certificationBadges.map((badge, idx) => (
                  <div key={idx} style={{ background: "#F8FAFC", borderRadius: "12px", padding: "20px", border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <Award size={18} color="#0085f4" />
                        <span style={{ fontSize: 14, fontWeight: 900, color: "#004aad" }}>{badge.name}</span>
                      </div>
                      <div style={{ fontSize: 10, fontWeight: 800, color: "#0085f4", textTransform: "uppercase" }}>
                        {badge.sub}
                      </div>
                    </div>

                    <Link
                      href={badge.href}
                      style={{
                        marginTop: 16,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "transparent",
                        border: "1px solid #90CAF9",
                        color: "#0085f4",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: 11,
                        fontWeight: 800,
                        textDecoration: "none",
                        width: "fit-content"
                      }}
                    >
                      <Download size={12} /> VIEW SPEC
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. MISSION, VISION & VALUES */}
          <section id="mission-values" style={{ scrollMarginTop: 140 }}>
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "40px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EBF3FF", padding: "6px 14px", borderRadius: "100px", marginBottom: 16 }}>
                <Compass size={14} color="#0085f4" />
                <span style={{ color: "#0085f4", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>MISSION, VISION & VALUES</span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 24 }}>
                Compact & Principled Engineering Philosophy
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}>
                <div style={{ background: "#F8FAFC", padding: "24px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", textTransform: "uppercase", marginBottom: 6 }}>OUR MISSION</div>
                  <p style={{ fontSize: 14, color: "#004aad", fontWeight: 700, lineHeight: 1.5, margin: 0 }}>
                    To engineer and manufacture high-yield, fail-safe waterworks products that safeguard public health, protect natural waterways, and exceed North American municipal standards.
                  </p>
                </div>
                <div style={{ background: "#F8FAFC", padding: "24px", borderRadius: "14px", border: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", textTransform: "uppercase", marginBottom: 6 }}>OUR VISION</div>
                  <p style={{ fontSize: 14, color: "#004aad", fontWeight: 700, lineHeight: 1.5, margin: 0 }}>
                    To set the gold standard in sustainable hydro-infrastructure, integrating smart telemetry and eco-friendly manufacturing across all 50 States and 10 Canadian Provinces.
                  </p>
                </div>
              </div>

              {/* Core Values Compact Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
                {[
                  { title: "INTEGRITY", desc: "Strict adherence to specs.", icon: ShieldCheck },
                  { title: "QUALITY", desc: "Zero compromise on tolerances.", icon: Award },
                  { title: "INNOVATION", desc: "Advanced CAD & FEA modeling.", icon: Zap },
                  { title: "RELIABILITY", desc: "Multi-decade service life.", icon: Factory },
                  { title: "STEWARDSHIP", desc: "Protecting clean waterways.", icon: Leaf },
                ].map((v, idx) => {
                  const VIcon = v.icon;
                  return (
                    <div key={idx} style={{ background: "#EBF3FF", padding: "16px", borderRadius: "12px", textAlign: "center" }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#0085f4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
                        <VIcon size={16} />
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 900, color: "#004aad" }}>{v.title}</div>
                      <div style={{ fontSize: 10, color: "#0085f4", marginTop: 2, fontWeight: 500 }}>{v.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 8. MARKETS WE SERVE */}
          <section id="markets" style={{ scrollMarginTop: 140 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EBF3FF", padding: "6px 14px", borderRadius: "100px", alignSelf: "flex-start" }}>
                <Globe2 size={14} color="#0085f4" />
                <span style={{ color: "#0085f4", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>MARKETS WE SERVE</span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
                Diverse Infrastructure Sector Application
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {marketsServed.map((m, idx) => {
                  const MIcon = m.icon;
                  return (
                    <div key={idx} style={{ background: "#ffffff", borderRadius: "16px", padding: "28px", border: "1px solid #E2E8F0", boxShadow: "0 8px 24px rgba(0,74,173,0.03)" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "10px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                        <MIcon size={20} color="#0085f4" />
                      </div>
                      <h4 style={{ fontSize: 16, fontWeight: 900, color: "#004aad", marginBottom: 8 }}>{m.title}</h4>
                      <p style={{ fontSize: 12, color: "#0085f4", lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{m.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 9. WHY H2 INDUSTRIES */}
          <section id="why-h2" style={{ scrollMarginTop: 140 }}>
            <div style={{ background: "linear-gradient(135deg, #004aad 0%, #0085f4 100%)", borderRadius: "20px", padding: "40px", color: "#ffffff", boxShadow: "0 12px 36px rgba(0,74,173,0.2)" }}>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#90CAF9", marginBottom: 8 }}>
                MEASURABLE DIFFERENTIATORS
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 900, textTransform: "uppercase", fontStyle: "italic", marginBottom: 28 }}>
                Why Engineers & Contractors Specify H2 Industries
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                {[
                  { title: "ENGINEERING SUPPORT", desc: "Direct access to P.E. engineers for custom submittals & CAD drawings." },
                  { title: "MANUFACTURING CONTROL", desc: "100% owned foundry & polymer tooling ensuring zero quality drift." },
                  { title: "PRODUCT RELIABILITY", desc: "Tested to 3x AWWA working pressure with zero field failures." },
                  { title: "EMERGENCY DELIVERY", desc: "48-hour express dispatch for urgent municipal field repairs." },
                ].map((diff, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <div style={{ fontSize: 14, fontWeight: 900, color: "#ffffff", marginBottom: 6 }}>{diff.title}</div>
                    <div style={{ fontSize: 12, color: "#E0F2FE", lineHeight: 1.45 }}>{diff.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 10. COMPANY RESOURCES */}
          <section id="resources" style={{ scrollMarginTop: 140 }}>
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "40px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EBF3FF", padding: "6px 14px", borderRadius: "100px", marginBottom: 16 }}>
                <Download size={14} color="#0085f4" />
                <span style={{ color: "#0085f4", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>COMPANY RESOURCES</span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 24 }}>
                Downloadable Corporate & Technical Documentation
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {[
                  { name: "H2 Company Profile", size: "PDF • Technical Spec Sheet", href: "/quality#standards" },
                  { name: "Quality Certifications Pack", size: "PDF • AWWA & ASTM Approvals", href: "/quality#standards" },
                  { name: "Master Product Catalog", size: "PDF • Complete Line Specs", href: "/products" },
                  { name: "Submittals & CAD Library", size: "ZIP • Engineering Drawings", href: "/quality#standards" },
                ].map((res, i) => (
                  <div key={i} style={{ background: "#F8FAFC", padding: "20px", borderRadius: "12px", border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <FileCheck size={24} color="#0085f4" style={{ marginBottom: 10 }} />
                      <div style={{ fontSize: 14, fontWeight: 900, color: "#004aad" }}>{res.name}</div>
                      <div style={{ fontSize: 11, color: "#0085f4", marginTop: 2, fontWeight: 500 }}>{res.size}</div>
                    </div>
                    <Link
                      href={res.href}
                      style={{
                        marginTop: 16,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        background: "#0085f4",
                        color: "#fff",
                        border: "none",
                        padding: "10px",
                        borderRadius: "8px",
                        fontSize: 11,
                        fontWeight: 900,
                        textDecoration: "none"
                      }}
                    >
                      <Download size={14} /> VIEW SPEC
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 11. CONTACT / PARTNERSHIP CTA */}
          <section id="contact-cta" style={{ scrollMarginTop: 140 }}>
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "48px", border: "2px solid #0085f4", boxShadow: "0 16px 40px rgba(0, 85, 244, 0.08)", textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0085f4", marginBottom: 8 }}>
                PARTNERSHIP & MUNICIPAL INQUIRIES
              </div>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 16 }}>
                Work With H2 Industries
              </h2>
              <p style={{ fontSize: 15, color: "#0085f4", maxWidth: 640, margin: "0 auto 32px", lineHeight: 1.6, fontWeight: 500 }}>
                Whether you are specifying an upcoming AWWA municipal project, requesting custom CAD submittals, or establishing a regional distribution partnership, our engineering sales team is ready to assist.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "linear-gradient(135deg, #004aad, #0085f4)",
                    color: "#ffffff",
                    padding: "16px 36px",
                    borderRadius: "10px",
                    fontSize: 14,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    textDecoration: "none",
                    boxShadow: "0 8px 24px rgba(0,74,173,0.25)"
                  }}
                >
                  REQUEST A QUOTE <ArrowRight size={16} />
                </a>
                <a
                  href="tel:+15127828880"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#F8FAFC",
                    color: "#004aad",
                    border: "1.5px solid #E2E8F0",
                    padding: "16px 36px",
                    borderRadius: "10px",
                    fontSize: 14,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    textDecoration: "none"
                  }}
                >
                  <PhoneCall size={16} /> CONTACT SALES
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
