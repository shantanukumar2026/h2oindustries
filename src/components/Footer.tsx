"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Globe, MessageCircle, Share2, ArrowRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  COMPANY: [
    { label: "Careers", href: "#careers" },
    { label: "About Us", href: "#about" },
    { label: "Projects", href: "#projects" },
  ],
  "PRODUCTS & SERVICES": [
    { label: "Sampling Stations", href: "#products" },
    { label: "Drainage Infrastructure", href: "#products" },
    { label: "Engineering Services", href: "#services" },
  ],
  INDUSTRIES: [
    { label: "Municipal Water", href: "#industries" },
    { label: "Marine & Coastal", href: "#industries" },
    { label: "Civil Infrastructure", href: "#industries" },
  ],
};

const socials = [
  { icon: Globe, label: "Website", href: "#" },
  { icon: MessageCircle, label: "Contact", href: "#" },
  { icon: Share2, label: "Social", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed!");
    setEmail("");
  };

  return (
    <footer id="contact" style={{ background: "#050B14", color: "#94A3B8", fontFamily: "inherit" }}>
      
      {/* Band 1: Careers CTA */}
      <div style={{ background: "#0B1929", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "32px 60px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 32, textAlign: "center" }}>
          <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", margin: 0, letterSpacing: "0.02em" }}>
            ENGINEER YOUR CAREER. <span style={{ color: "#2196F3" }}>APPLY NOW AT H2 INDUSTRIES.</span>
          </h3>
          <a
            href="#careers"
            style={{
              background: "transparent",
              border: "2px solid #2196F3",
              color: "#2196F3",
              padding: "12px 32px",
              fontSize: 15,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2196F3";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#2196F3";
            }}
          >
            SEE JOBS
          </a>
        </div>
      </div>

      {/* Band 2: Contact Info */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="footer-contact-band" style={{ maxWidth: 1440, margin: "0 auto", padding: "24px 60px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          {/* USA Office */}
          <div className="footer-office-block" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MapPin size={16} color="#2196F3" className="office-icon" />
              <span className="office-text" style={{ fontSize: 13, fontWeight: 500, color: "#fff", textTransform: "uppercase" }}>105 MAXES ROAD, MELVILLE, NY 11737, USA</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Phone size={16} color="#2196F3" className="office-icon" />
              <span className="office-text" style={{ fontSize: 13, fontWeight: 500 }}>+1 (512) 782-8880</span>
            </div>
          </div>
          
          {/* Canada Office */}
          <div className="footer-office-block" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MapPin size={16} color="#2196F3" className="office-icon" />
              <span className="office-text" style={{ fontSize: 13, fontWeight: 500, color: "#fff", textTransform: "uppercase" }}>ONE YOUNGE STREET, TORONTO, ONTARIO M5E 1R4 CANADA</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Phone size={16} color="#2196F3" className="office-icon" />
              <span className="office-text" style={{ fontSize: 13, fontWeight: 500 }}>+1 (438) 805-9990</span>
            </div>
          </div>
        </div>
      </div>

      {/* Band 3: Main Links & Newsletter */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "64px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }} className="footer-main-grid">
            
            {/* Newsletter */}
            <div style={{ maxWidth: 400 }}>
              <h4 style={{ fontSize: 15, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>
                GET H2 INDUSTRIES NEWS
              </h4>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20, fontWeight: 500 }}>
                Once or twice a month we'll send you H2 news with industry content you can use.
              </p>
              <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    fontSize: 14,
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2196F3")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
                <button
                  type="submit"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "0 24px",
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#0B1929";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  SUBMIT
                </button>
              </form>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
                By submitting this form, you agree to the processing of your personal data by H2 Industries as described in the <a href="#" style={{ color: "#2196F3", textDecoration: "none" }}>Privacy Statement.</a>
              </p>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 style={{ fontSize: 15, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 20 }}>
                  {heading}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        style={{
                          color: "#94A3B8",
                          textDecoration: "none",
                          fontSize: 14,
                          fontWeight: 500,
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#2196F3")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect Column */}
            <div>
              <h4 style={{ fontSize: 15, fontWeight: 900, fontStyle: "italic", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 20 }}>
                CONNECT WITH US
              </h4>
              <a
                href="#locations"
                style={{
                  color: "#94A3B8",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  display: "block",
                  marginBottom: 16,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2196F3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                Locations
              </a>
              <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#2196F3";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
              
              {/* Fake Accredited Badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#0D2B55", padding: "8px 12px", borderLeft: "3px solid #2196F3" }}>
                <Image src="/images/logo.png" alt="H2 Industries" width={30} height={30} style={{ objectFit: "contain" }} />
                <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>CERTIFIED<br/>ENGINEERING</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Band 4: Legal / Bottom */}
      <div>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "24px 60px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <p style={{ fontSize: 13, fontWeight: 500, margin: 0 }}>
            © {new Date().getFullYear()}, All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Terms of Service", "Privacy Policy", "Mandatory Disclosures", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "#94A3B8",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 600,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1.5fr 1fr 1.2fr 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .footer-contact-band {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 24px !important;
            padding: 24px 24px !important;
          }
          .footer-office-block {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .office-text {
            font-size: 11px !important;
          }
        }
      `}</style>
    </footer>
  );
}
