"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const productsMenu = [
  { label: "Manhole Rings & Covers, Extensions", href: "/waterworks-castings" },
  { label: "Pipe Accessories & Bolt Sets", href: "/waterworks-castings" },
  { label: "Valve Boxes, Risers & Extensions", href: "/waterworks-castings" },
  { label: "Meter Boxes & AMR Covers", href: "/waterworks-castings" },
  { label: "MJ X MJ Restrained Adapters", href: "/waterworks-castings" },
  { label: "Wedge Action Joint Restraints", href: "/waterworks-castings" },
  { label: "AWWA Resilient Gate Valves", href: "/waterworks-castings" },
  { label: "AWWA C153 & C110 DI Fittings", href: "/waterworks-castings" },
  { label: "Municipal Sewer Cleanouts", href: "/waterworks-castings" },
  { label: "Storm Drainage Frames & Grates", href: "/waterworks-castings" },
  { label: "Certified Closeout Deals", href: "/waterworks-castings" },
];

const generalSubmittalsMenu = [
  { label: "Generic Castings Submittals", href: "/waterworks-castings#catalog" },
  { label: "Meter Boxes Specifications", href: "/waterworks-castings#catalog" },
  { label: "Frames & Grates Submittals", href: "/waterworks-castings#catalog" },
  { label: "AWWA DI Pipe Fittings Specs", href: "/waterworks-castings#catalog" },
  { label: "Restrained Adapter Data Sheets", href: "/waterworks-castings#catalog" },
  { label: "Joint Restraints Technical Specs", href: "/waterworks-castings#catalog" },
  { label: "Pipe Accessories / Flange Packs", href: "/waterworks-castings#catalog" },
  { label: "Gate Valves Drawing Sheets", href: "/waterworks-castings#catalog" },
  { label: "Extended Lines Submittals", href: "/waterworks-castings#catalog" },
];

const regionalSubmittalsMenu = [
  { label: "Waco City Approved", href: "/waterworks-castings#catalog" },
  { label: "Houston City Approved", href: "/waterworks-castings#catalog" },
  { label: "Dallas Water Utilities (DWU)", href: "/waterworks-castings#catalog" },
  { label: "Plano Infrastructure Specs", href: "/waterworks-castings#catalog" },
  { label: "Fort Worth Water Dept", href: "/waterworks-castings#catalog" },
  { label: "Austin Water APL List", href: "/waterworks-castings#catalog" },
  { label: "San Antonio SAWS Standards", href: "/waterworks-castings#catalog" },
];

const companyMenu = [
  { label: "About H2 Industries", href: "/company" },
  { label: "Careers & Job Openings", href: "/company#careers" },
  { label: "Global Capabilities", href: "/capabilities" },
  { label: "Quality & Compliance", href: "/quality" },
  { label: "All Products Catalog", href: "/products" },
];

const socials = [
  { label: "FB", href: "#", title: "Facebook" },
  { label: "IG", href: "#", title: "Instagram" },
  { label: "X", href: "#", title: "X / Twitter" },
  { label: "IN", href: "#", title: "LinkedIn" },
  { label: "YT", href: "#", title: "YouTube" },
];

export default function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer id="contact" style={{ background: "#050D1A", color: "#90CAF9", fontFamily: "inherit" }}>
      
      {/* Band 1: Careers Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A2E5C 0%, #0D3A73 60%, #1565C0 100%)",
          borderBottom: "1px solid rgba(33, 150, 243, 0.3)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div
          className="footer-cta-pad"
          style={{
            maxWidth: 1720,
            margin: "0 auto",
            padding: "36px 60px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShieldCheck size={26} color="#64B5F6" />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  color: "#fff",
                  textTransform: "uppercase",
                  margin: 0,
                  letterSpacing: "0.02em",
                }}
              >
                ENGINEER YOUR CAREER. <span style={{ color: "#64B5F6" }}>APPLY NOW AT H2 INDUSTRIES.</span>
              </h3>
            </div>
          </div>

          <a
            href="/company#careers"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "2px solid #64B5F6",
              color: "#fff",
              padding: "12px 32px",
              fontSize: 14,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              textDecoration: "none",
              borderRadius: 4,
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#64B5F6";
              e.currentTarget.style.color = "#0A2E5C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#fff";
            }}
          >
            SEE JOBS
          </a>
        </div>
      </div>

      {/* Band 2: Exact Addresses & Phone Numbers Provided in Image */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "36px 0", background: "#061830" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
          
          {/* Brand Header & Socials */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, marginBottom: 28 }}>
            <div style={{ background: "#fff", padding: "8px 20px", borderRadius: 4 }}>
              <Image src="/images/logo.png" alt="H2 Industries" width={170} height={40} style={{ objectFit: "contain" }} />
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  title={s.title}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(33, 150, 243, 0.3)",
                    background: "rgba(13, 58, 115, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#90CAF9",
                    fontSize: 12,
                    fontWeight: 900,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2196F3";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#2196F3";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(13, 58, 115, 0.5)";
                    e.currentTarget.style.color = "#90CAF9";
                    e.currentTarget.style.borderColor = "rgba(33, 150, 243, 0.3)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Exact Address Cards Provided by User */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 24,
            }}
          >
            {/* USA Address & Phone */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderLeft: "4px solid #2196F3",
                padding: "20px 24px",
                borderRadius: 6,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <MapPin size={18} color="#2196F3" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                  105 MAXES ROAD, MELVILLE, NY 11737, USA
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#64B5F6" }}>
                <Phone size={16} color="#2196F3" />
                <span>+1 (512) 782-8880</span>
              </div>
            </div>

            {/* Canada Address & Phone */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderLeft: "4px solid #2196F3",
                padding: "20px 24px",
                borderRadius: 6,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <MapPin size={18} color="#2196F3" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                  ONE YOUNGE STREET, TORONTO, ONTARIO M5E 1R4 CANADA
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "#64B5F6" }}>
                <Phone size={16} color="#2196F3" />
                <span>+1 (438) 805-9990</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Band 3: Rich Organised Menu Columns */}
      <div style={{ padding: "64px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1.1fr 1.1fr 1fr 1.2fr",
              gap: 36,
            }}
            className="footer-nav-grid"
          >
            {/* Column 1: Products */}
            <div>
              <div style={{ borderBottom: "2px solid #2196F3", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 style={{ fontSize: 15, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Products
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {productsMenu.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      style={{ color: "#90CAF9", textDecoration: "none", fontSize: 13, fontWeight: 500, transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#90CAF9")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: General Submittals */}
            <div>
              <div style={{ borderBottom: "2px solid #2196F3", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 style={{ fontSize: 15, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  General Submittals
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {generalSubmittalsMenu.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      style={{ color: "#90CAF9", textDecoration: "none", fontSize: 13, fontWeight: 500, transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#90CAF9")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Regional Submittals */}
            <div>
              <div style={{ borderBottom: "2px solid #2196F3", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 style={{ fontSize: 15, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Regional Submittals
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {regionalSubmittalsMenu.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      style={{ color: "#90CAF9", textDecoration: "none", fontSize: 13, fontWeight: 500, transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#90CAF9")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company & Links */}
            <div>
              <div style={{ borderBottom: "2px solid #2196F3", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 style={{ fontSize: 15, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Company & Links
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {companyMenu.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      style={{ color: "#90CAF9", textDecoration: "none", fontSize: 13, fontWeight: 500, transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#90CAF9")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Newsletter & Certified Badge */}
            <div>
              <div style={{ borderBottom: "2px solid #2196F3", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 style={{ fontSize: 15, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Stay Updated
                </h4>
              </div>
              <p style={{ fontSize: 13, color: "#B0BEC5", lineHeight: 1.6, marginBottom: 16 }}>
                Subscribe to receiving technical spec updates and regional engineering bulletins.
              </p>

              {subscribed ? (
                <div style={{ padding: "12px 16px", background: "rgba(76, 175, 80, 0.15)", border: "1px solid #4CAF50", borderRadius: 4, color: "#81C784", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
                  <CheckCircle2 size={16} /> Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 4,
                      color: "#fff",
                      fontSize: 13,
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#2196F3")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                  />
                  <button
                    type="submit"
                    style={{
                      background: "#2196F3",
                      color: "#fff",
                      border: "none",
                      padding: "12px",
                      fontSize: 13,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      borderRadius: 4,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#1976D2")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#2196F3")}
                  >
                    Subscribe <Send size={14} />
                  </button>
                </form>
              )}

              {/* Certified Quality Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(13, 58, 115, 0.4)",
                  border: "1px solid rgba(33, 150, 243, 0.3)",
                  padding: "12px 16px",
                  borderRadius: 6,
                }}
              >
                <ShieldCheck size={28} color="#64B5F6" />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 900, color: "#fff", textTransform: "uppercase" }}>
                    ISO 9001:2015 & AWWA
                  </div>
                  <div style={{ fontSize: 10, color: "#90CAF9", textTransform: "uppercase", marginTop: 2 }}>
                    Certified Quality Manufacturing
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Band 4: Legal & Copyright Footer */}
      <div style={{ padding: "24px 0", background: "#030A14" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <p style={{ fontSize: 13, color: "#78909C", fontWeight: 500, margin: 0 }}>
            © {new Date().getFullYear()} H2 Industries. All rights reserved. Precision Municipal & Industrial Solutions.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a href="#" style={{ color: "#90CAF9", fontSize: 13, textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#90CAF9")}>Privacy Policy</a>
            <a href="#" style={{ color: "#90CAF9", fontSize: 13, textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#90CAF9")}>Terms of Service</a>
            <a href="#" style={{ color: "#90CAF9", fontSize: 13, textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#90CAF9")}>Cookie Preferences</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1280px) {
          .footer-nav-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .footer-nav-grid { grid-template-columns: 1fr !important; }
          .footer-cta-pad { flex-direction: column; text-align: center; justify-content: center; }
        }
      `}</style>
    </footer>
  );
}
