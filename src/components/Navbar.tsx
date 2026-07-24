"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Info, Mail, MapPin, User, FileText, ChevronDown, Search, ArrowRight, Globe } from "lucide-react";

const topLinks = [
  { label: "History", href: "#history", icon: Info },
  { label: "Our Values", href: "#values", icon: User },
  { label: "Locations", href: "#locations", icon: MapPin },
  { label: "Contact", href: "#contact", icon: Mail },
];

const mainLinks = [
  {
    label: "Products",
    href: "/products",
    mega: {
      image: "/images/2.webp",
      title: "INDUSTRIAL MANUFACTURING",
      desc: "Precision-engineered solutions for high-performance water management.",
      link: "View All Products",
      columns: [
        {
          title: "CORE SYSTEMS",
          items: ["Stormwater Stations", "Modular Enclosures", "Drainage Infrastructure", "Filtration Systems"],
        },
        {
          title: "ACCESSORIES & PARTS",
          items: ["Monitoring Probes", "Valve Connectors", "Heavy-Duty Grates", "Access Covers"],
        },
      ],
    },
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    mega: {
      image: "/images/5.webp",
      title: "MANUFACTURING EXCELLENCE",
      desc: "From advanced polymer injection moulding to custom heavy industrial fabrication.",
      link: "Our Capabilities",
      columns: [
        {
          title: "PRODUCTION",
          items: ["Injection Moulding", "Industrial Fabrication", "Precision Machining", "Custom Engineering"],
        },
      ],
    },
  },
  {
    label: "Industries",
    href: "/industries",
    mega: {
      image: "/images/7.webp",
      title: "GLOBAL DEPLOYMENT",
      desc: "Protecting marine ecosystems across every major industrial sector.",
      link: "Explore Industries",
      columns: [
        {
          title: "PUBLIC & CIVIL",
          items: ["Municipal Water", "Civil Infrastructure", "Urban Development"],
        },
        {
          title: "SPECIALIZED SECTORS",
          items: ["Marine & Coastal", "Environmental Facilities", "Heavy Industry", "Agricultural"],
        },
      ],
    },
  },
  {
    label: "Quality",
    href: "/quality",
    mega: {
      image: "/images/3.webp",
      title: "ZERO COMPROMISE",
      desc: "Stringent quality control protocols exceeding international engineering standards.",
      link: "View Standards",
      columns: [
        {
          title: "ASSURANCE",
          items: ["ISO 9001:2015", "Material Testing", "Sustainability", "Compliance"],
        },
      ],
    },
  },
  {
    label: "Company",
    href: "/company",
    mega: {
      image: "/images/4.webp",
      title: "THE H2 GROUP",
      desc: "Decades of engineering heritage driving the future of water infrastructure.",
      link: "About Us",
      columns: [
        {
          title: "ABOUT",
          items: ["Our History", "R&D Lab", "Facilities", "Careers"],
        },
      ],
    },
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (href: string) => {
    setMobileOpen(false);
    setActiveSubmenu(null);
    if (href.startsWith("/")) {
      router.push(href);
    } else {
      if (pathname !== "/") {
        router.push("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(6,35,71,0.15)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
        onMouseLeave={() => setActiveSubmenu(null)}
      >
        {/* Top Bar (Brand Color with Smart Scroll) */}
        <motion.div
          initial={{ height: 64, opacity: 1 }}
          animate={{ height: scrolled ? 0 : 64, opacity: scrolled ? 0 : 1 }}
          style={{ background: "#1565C0", overflow: "hidden" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              padding: "0 60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 64,
            }}
          >
            {/* Logo */}
            <button
              onClick={() => {
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  router.push("/");
                }
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 200,
                  height: 64,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="H2 Industries"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center", padding: "8px 20px" }}
                  priority
                  sizes="200px"
                />
              </div>
            </button>

            {/* Top Right Group (Desktop) */}
            <div className="top-links" style={{ display: "none", alignItems: "center", gap: 32 }}>
              {/* Language Selector */}
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <Globe size={14} color="#fff" style={{ position: "absolute", left: 10, pointerEvents: "none" }} />
                <select
                  style={{
                    appearance: "none",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    padding: "8px 28px 8px 30px",
                    borderRadius: "4px",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 800,
                    cursor: "pointer",
                    outline: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                >
                  <option value="en" style={{ color: "#000" }}>EN</option>
                  <option value="es" style={{ color: "#000" }}>ES</option>
                  <option value="fr" style={{ color: "#000" }}>FR</option>
                  <option value="de" style={{ color: "#000" }}>DE</option>
                  <option value="zh" style={{ color: "#000" }}>ZH</option>
                  <option value="ar" style={{ color: "#000" }}>AR</option>
                </select>
                <ChevronDown size={12} color="#fff" style={{ position: "absolute", right: 10, pointerEvents: "none" }} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                {topLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      onClick={() => nav(link.href)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 800,
                        fontFamily: "inherit",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    >
                      <Icon size={16} />
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                color: "#fff",
                display: "none",
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar (White) */}
        <div className="bottom-bar" style={{ display: "none", borderBottom: "1px solid #90CAF9", position: "relative", background: "#fff" }}>
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              padding: "0 60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 56,
            }}
          >
            {/* Main Links */}
            <nav style={{ display: "flex", alignItems: "center", gap: 40, height: "100%" }}>
              {mainLinks.map((link) => (
                <div
                  key={link.label}
                  style={{ height: "100%", display: "flex", alignItems: "center" }}
                  onMouseEnter={() => setActiveSubmenu(link.label)}
                >
                  <button
                    onClick={() => nav(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: activeSubmenu === link.label ? "#1565C0" : "#0D3A73",
                      fontSize: 15,
                      fontWeight: 800,
                      fontFamily: "inherit",
                      textTransform: "uppercase",
                      transition: "color 0.2s",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      color={activeSubmenu === link.label ? "#1565C0" : "#8898AA"}
                      style={{
                        transform: activeSubmenu === link.label ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    />
                    <div
                      className="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: 3,
                        background: "#1565C0",
                        width: activeSubmenu === link.label ? "100%" : "0%",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </button>
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div
              style={{
                position: "relative",
                width: 320,
              }}
            >
              <Search
                size={18}
                color="#8898AA"
                style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}
              />
              <input
                type="text"
                placeholder="Search resources..."
                style={{
                  width: "100%",
                  padding: "10px 16px 10px 44px",
                  background: "rgba(240, 247, 255, 0.8)",
                  border: "1px solid rgba(100, 181, 246, 0.5)",
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#0D3A73",
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1565C0";
                  e.target.style.background = "#fff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(100, 181, 246, 0.5)";
                  e.target.style.background = "rgba(240, 247, 255, 0.8)";
                }}
              />
            </div>
          </div>

          {/* MEGAMENU DROPDOWN */}
          <AnimatePresence>
            {activeSubmenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  boxShadow: "0 20px 40px rgba(6,35,71,0.1)",
                  borderBottom: "1px solid #90CAF9",
                  zIndex: 40,
                  overflow: "hidden",
                }}
              >
                {mainLinks.map(
                  (link) =>
                    activeSubmenu === link.label && (
                      <div key={link.label} style={{ width: "100%", padding: "0 60px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                        
                        {/* Megamenu Left: Featured Image Block */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          style={{ position: "relative", padding: "48px 60px", background: "#062347", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}
                        >
                          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                            <Image src={link.mega.image} alt={link.mega.title} fill style={{ objectFit: "cover", opacity: 0.3 }} />
                          </div>
                          <div style={{ position: "relative", zIndex: 1 }}>
                            <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", textTransform: "uppercase", marginBottom: 12 }}>
                              {link.mega.title}
                            </h3>
                            <p style={{ fontSize: 15, color: "#42A5F5", lineHeight: 1.6, marginBottom: 24, fontWeight: 500, maxWidth: 320 }}>
                              {link.mega.desc}
                            </p>
                            <button
                              onClick={() => nav(link.href)}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "#1565C0",
                                color: "#fff",
                                border: "none",
                                padding: "12px 24px",
                                fontSize: 13,
                                fontWeight: 800,
                                textTransform: "uppercase",
                                cursor: "pointer",
                                transition: "background 0.2s",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.background = "#0D47A1")}
                              onMouseLeave={(e) => (e.currentTarget.style.background = "#1565C0")}
                            >
                              {link.mega.link} <ArrowRight size={16} />
                            </button>
                          </div>
                        </motion.div>

                        {/* Megamenu Right: Link Columns */}
                        <div style={{ padding: "48px 60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, background: "rgba(240, 247, 255, 0.95)" }}>
                          {link.mega.columns.map((col, idx) => (
                            <motion.div
                              key={col.title}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.15 + (idx * 0.1) }}
                            >
                              <h4 style={{ fontSize: 14, fontWeight: 900, fontStyle: "italic", color: "#0D3A73", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #90CAF9" }}>
                                {col.title}
                              </h4>
                              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                                {col.items.map((item) => (
                                  <li key={item}>
                                    <button
                                      onClick={() => nav(link.href)}
                                      style={{
                                        background: "none",
                                        border: "none",
                                        padding: 0,
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: "#1565C0",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        transition: "color 0.2s",
                                      }}
                                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1565C0")}
                                      onMouseLeave={(e) => (e.currentTarget.style.color = "#1565C0")}
                                    >
                                      {item}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>

                      </div>
                    )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 64, // below top bar
              left: 0,
              right: 0,
              background: "#fff",
              zIndex: 49,
              boxShadow: "0 10px 30px rgba(6,35,71,0.1)",
              borderBottom: "1px solid #90CAF9",
              maxHeight: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              {/* Mobile Search */}
              <div style={{ position: "relative", marginBottom: 16 }}>
                <Search
                  size={18}
                  color="#8898AA"
                  style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    width: "100%",
                    padding: "12px 12px 12px 40px",
                    background: "#E0F0FF",
                    border: "1px solid #64B5F6",
                    borderRadius: 4,
                    fontSize: 15,
                    fontFamily: "inherit",
                    outline: "none",
                  }}
                />
              </div>

              {/* Mobile Main Links */}
              <div style={{ borderBottom: "1px solid #90CAF9", paddingBottom: 16, marginBottom: 16 }}>
                {mainLinks.map((link) => (
                  <div key={link.label} style={{ marginBottom: 12 }}>
                    <button
                      onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "none",
                        border: "none",
                        padding: "8px 0",
                        fontSize: 16,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        color: "#0D3A73",
                        fontFamily: "inherit",
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        style={{
                          transform: activeSubmenu === link.label ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                        }}
                      />
                    </button>
                    <AnimatePresence>
                      {activeSubmenu === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: 16, marginTop: 12 }}
                        >
                          {link.mega.columns.map((col) => (
                            <div key={col.title}>
                              <h5 style={{ fontSize: 12, fontWeight: 800, color: "#42A5F5", marginBottom: 8, letterSpacing: "0.05em" }}>
                                {col.title}
                              </h5>
                              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                {col.items.map((item) => (
                                  <button
                                    key={item}
                                    onClick={() => nav(link.href)}
                                    style={{
                                      textAlign: "left",
                                      background: "none",
                                      border: "none",
                                      padding: "8px 16px",
                                      fontSize: 14,
                                      fontWeight: 600,
                                      color: "#1565C0",
                                      fontFamily: "inherit",
                                    }}
                                  >
                                    {item}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Top Links */}
              <div>
                {topLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      onClick={() => nav(link.href)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        padding: "10px 0",
                        fontSize: 14,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "#1565C0",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        fontFamily: "inherit",
                      }}
                    >
                      <Icon size={18} />
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .top-links { display: flex !important; }
          .bottom-bar { display: block !important; }
        }
        @media (max-width: 1023px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
