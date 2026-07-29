import Metadata from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalSupplyNetwork from "@/components/GlobalSupplyNetwork";
import { industriesData } from "@/data/industriesDetails";
import { 
  Building2, 
  Waves, 
  Construction, 
  Leaf, 
  Flame, 
  Sprout, 
  Droplet, 
  Droplets,
  Box, 
  Activity, 
  Layers, 
  Anchor, 
  ShieldAlert, 
  Truck, 
  Compass, 
  Filter, 
  Zap, 
  ShieldCheck, 
  Shield, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Award, 
  ChevronRight,
  PhoneCall
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Waves,
  Construction,
  Leaf,
  Flame,
  Sprout,
  Droplet,
  Droplets,
  Box,
  Activity,
  Layers,
  Anchor,
  ShieldAlert,
  Truck,
  Compass,
  Filter,
  Zap,
  ShieldCheck,
  Shield
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return { title: "Industry Not Found | H2 Industries" };

  const canonicalUrl = `https://h2industries-eta.vercel.app/industries/${slug}`;

  return {
    title: `${industry.title} | H2 Industries Infrastructure`,
    description: industry.subtitle,
    keywords: [
      industry.title,
      industry.tagline,
      "H2 Industries",
      "waterworks castings",
      "hydro infrastructure",
      "AWWA standards",
      "municipal water solutions"
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${industry.title} | H2 Industries`,
      description: industry.subtitle,
      url: canonicalUrl,
      siteName: "H2 Industries",
      type: "website",
      images: [
        {
          url: industry.heroImage || "/images/2.webp",
          width: 1200,
          height: 630,
          alt: industry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.title,
      description: industry.subtitle,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  const allIndustries = Object.values(industriesData);

  return (
    <main style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Header Banner */}
      <section 
        style={{ 
          background: "linear-gradient(135deg, #001A40 0%, #002255 50%, #003380 100%)", 
          paddingTop: 140, 
          paddingBottom: 80, 
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        {/* Decorative Top Accent Line */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 5, background: industry.accent }} />

        {/* Ambient Grid Pattern Overlay */}
        <div 
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.5,
            pointerEvents: "none"
          }}
        />

        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28, fontSize: 13, fontWeight: 700, color: "#90CAF9" }}>
            <Link href="/" style={{ color: "#90CAF9", textDecoration: "none", transition: "color 0.2s" }}>
              Home
            </Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.4)" />
            <Link href="/industries" style={{ color: "#90CAF9", textDecoration: "none" }}>
              Industries
            </Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.4)" />
            <span style={{ color: "#ffffff", fontWeight: 900 }}>{industry.title}</span>
          </div>

          {/* Industry Tagline Badge */}
          <div 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 8, 
              background: "rgba(255, 255, 255, 0.08)", 
              border: `1px solid ${industry.accent}`, 
              padding: "6px 18px", 
              borderRadius: "100px", 
              marginBottom: 24 
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: industry.accent }} />
            <span style={{ color: "#ffffff", fontSize: 12, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              {industry.tagline}
            </span>
          </div>

          <h1 
            className="font-display" 
            style={{ 
              fontSize: "clamp(2.5rem, 6vw, 4.2rem)", 
              fontWeight: 900, 
              color: "#ffffff", 
              lineHeight: 1.1, 
              marginBottom: 24, 
              textTransform: "uppercase", 
              fontStyle: "italic",
              letterSpacing: "0.02em"
            }}
          >
            {industry.title}
          </h1>

          <p style={{ color: "#90CAF9", fontSize: 18, maxWidth: 850, lineHeight: 1.6, fontWeight: 500, marginBottom: 40 }}>
            {industry.subtitle}
          </p>

          {/* Key Metrics Strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 1100 }}>
            {industry.keyStats.map((stat, i) => (
              <div 
                key={i} 
                style={{ 
                  background: "rgba(255, 255, 255, 0.05)", 
                  border: "1px solid rgba(255, 255, 255, 0.1)", 
                  borderLeft: `4px solid ${industry.accent}`, 
                  padding: "20px 24px",
                  backdropFilter: "blur(8px)"
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 900, color: "#ffffff", fontStyle: "italic", lineHeight: 1, marginBottom: 6 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#90CAF9", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "80px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 60, alignItems: "start" }} className="industry-content-grid">
          
          {/* Main Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
            
            {/* 1. OVERVIEW & CHALLENGE / SOLUTION */}
            <section style={{ background: "#ffffff", borderRadius: "24px", padding: "48px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.03)" }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                SECTOR ANALYSIS
              </span>
              <h2 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8, marginBottom: 20 }}>
                Overview & Engineering Approach
              </h2>

              <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.7, fontWeight: 500, marginBottom: 32 }}>
                {industry.overview}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="challenge-solution-grid">
                {/* Challenge Card */}
                <div style={{ background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: "16px", padding: "28px" }}>
                  <div style={{ fontSize: 12, fontWeight: 900, color: "#E53E3E", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                    INDUSTRY CHALLENGE
                  </div>
                  <p style={{ fontSize: 14, color: "#742A2A", lineHeight: 1.6, fontWeight: 600, margin: 0 }}>
                    {industry.challenge}
                  </p>
                </div>

                {/* Solution Card */}
                <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "16px", padding: "28px" }}>
                  <div style={{ fontSize: 12, fontWeight: 900, color: "#16A34A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                    THE H2 SOLUTION
                  </div>
                  <p style={{ fontSize: 14, color: "#14532D", lineHeight: 1.6, fontWeight: 600, margin: 0 }}>
                    {industry.solution}
                  </p>
                </div>
              </div>
            </section>

            {/* 2. KEY APPLICATIONS */}
            <section id="applications">
              <div style={{ marginBottom: 32 }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  KEY APPLICATIONS
                </span>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8 }}>
                  Where Our Products excel
                </h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                {industry.applications.map((app, i) => {
                  const Icon = iconMap[app.iconName] || Building2;
                  return (
                    <div 
                      key={i} 
                      style={{ 
                        background: "#ffffff", 
                        borderRadius: "16px", 
                        padding: "32px", 
                        border: "1px solid #E2E8F0", 
                        boxShadow: "0 8px 24px rgba(0, 74, 173, 0.03)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 16
                      }}
                    >
                      <div style={{ width: 44, height: 44, borderRadius: "12px", background: "rgba(0, 133, 244, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={22} color="#0085f4" />
                      </div>
                      <h3 style={{ fontSize: 18, fontWeight: 900, color: "#004aad", fontStyle: "italic", margin: 0 }}>
                        {app.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
                        {app.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 3. FEATURED PRODUCTS FOR THIS INDUSTRY */}
            <section style={{ background: "#ffffff", borderRadius: "24px", padding: "48px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.03)" }}>
              <div style={{ marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    RECOMMENDED HARDWARE
                  </span>
                  <h2 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8 }}>
                    Specified Products & Castings
                  </h2>
                </div>
                <Link 
                  href="/products" 
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: 8, 
                    color: "#0085f4", 
                    fontSize: 13, 
                    fontWeight: 800, 
                    textDecoration: "none" 
                  }}
                >
                  <span>VIEW FULL CATALOG</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {industry.products.map((prod, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      background: "#F8FAFC", 
                      borderRadius: "16px", 
                      padding: "24px 28px", 
                      border: "1px solid #E2E8F0", 
                      display: "grid", 
                      gridTemplateColumns: "1fr auto", 
                      gap: 20, 
                      alignItems: "center" 
                    }}
                    className="product-row"
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                        <span style={{ fontSize: 11, fontWeight: 900, color: "#0085f4", background: "rgba(0,133,244,0.1)", padding: "4px 10px", borderRadius: "6px" }}>
                          SKU: {prod.sku}
                        </span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#64748B" }}>
                          {prod.spec}
                        </span>
                      </div>
                      <h4 style={{ fontSize: 17, fontWeight: 900, color: "#004aad", fontStyle: "italic", marginBottom: 6 }}>
                        {prod.name}
                      </h4>
                      <p style={{ fontSize: 14, color: "#475569", margin: 0, lineHeight: 1.5 }}>
                        {prod.desc}
                      </p>
                    </div>

                    <div>
                      <Link 
                        href={`/waterworks-castings`} 
                        style={{ 
                          display: "inline-flex", 
                          alignItems: "center", 
                          gap: 8, 
                          background: "#004aad", 
                          color: "#ffffff", 
                          padding: "10px 20px", 
                          borderRadius: "10px", 
                          fontSize: 12, 
                          fontWeight: 900, 
                          textDecoration: "none" 
                        }}
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. TECHNICAL COMPLIANCE & STANDARDS */}
            <section style={{ background: "#ffffff", borderRadius: "24px", padding: "48px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.03)" }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: "#0085f4", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                QUALITY & COMPLIANCE
              </span>
              <h2 style={{ fontSize: 28, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginTop: 8, marginBottom: 28 }}>
                Governing Standards & Testing
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
                {industry.standards.map((std, i) => (
                  <div key={i} style={{ borderLeft: "4px solid #0085f4", paddingLeft: 20, paddingTop: 4, paddingBottom: 4 }}>
                    <div style={{ fontSize: 16, fontWeight: 900, color: "#004aad" }}>
                      {std.code}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#0085f4", marginBottom: 6 }}>
                      {std.title}
                    </div>
                    <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>
                      {std.detail}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. CASE STUDY HIGHLIGHT */}
            <section style={{ background: "linear-gradient(135deg, #004aad 0%, #002255 100%)", borderRadius: "24px", padding: "48px", color: "#ffffff" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", padding: "6px 14px", borderRadius: "100px", marginBottom: 16 }}>
                <Award size={14} color="#90CAF9" />
                <span style={{ fontSize: 11, fontWeight: 900, color: "#90CAF9", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  FIELD CASE STUDY
                </span>
              </div>

              <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", marginBottom: 8 }}>
                {industry.caseStudy.title}
              </h3>
              <p style={{ color: "#90CAF9", fontSize: 13, fontWeight: 800, marginBottom: 24 }}>
                LOCATION: {industry.caseStudy.location}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32 }} className="case-study-split">
                <div>
                  <h4 style={{ fontSize: 12, fontWeight: 900, color: "#90CAF9", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    PROJECT SUMMARY
                  </h4>
                  <p style={{ fontSize: 15, color: "#E2E8F0", lineHeight: 1.6, margin: 0 }}>
                    {industry.caseStudy.summary}
                  </p>
                </div>

                <div style={{ background: "rgba(255,255,255,0.08)", padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h4 style={{ fontSize: 12, fontWeight: 900, color: "#90CAF9", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    DELIVERED IMPACT
                  </h4>
                  <p style={{ fontSize: 15, color: "#ffffff", fontWeight: 800, lineHeight: 1.5, margin: 0 }}>
                    {industry.caseStudy.impact}
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Area */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 32, position: "sticky", top: 120 }}>
            
            {/* Quick Contact & Quote Card */}
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "32px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.05)" }}>
              <div style={{ width: 44, height: 44, borderRadius: "12px", background: "rgba(0,133,244,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <PhoneCall size={22} color="#0085f4" />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 900, color: "#004aad", fontStyle: "italic", marginBottom: 12 }}>
                Engineer Inquiry
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, marginBottom: 24 }}>
                Need technical drawings, CAD specs, or custom submittal packages for your {industry.title} project?
              </p>
              
              <Link 
                href="/calculator"
                style={{ 
                  display: "block", 
                  textAlign: "center", 
                  background: "#0085f4", 
                  color: "#ffffff", 
                  padding: "14px 20px", 
                  borderRadius: "12px", 
                  fontSize: 13, 
                  fontWeight: 900, 
                  textDecoration: "none",
                  boxShadow: "0 8px 20px rgba(0,133,244,0.3)",
                  marginBottom: 12
                }}
              >
                Calculators & Tools
              </Link>

              <Link 
                href="/waterworks-castings"
                style={{ 
                  display: "block", 
                  textAlign: "center", 
                  background: "#004aad", 
                  color: "#ffffff", 
                  padding: "14px 20px", 
                  borderRadius: "12px", 
                  fontSize: 13, 
                  fontWeight: 900, 
                  textDecoration: "none" 
                }}
              >
                Request Custom Quote
              </Link>
            </div>

            {/* Other Industries List */}
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "28px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0, 74, 173, 0.04)" }}>
              <h4 style={{ fontSize: 13, fontWeight: 900, color: "#004aad", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid rgba(0, 133, 244, 0.15)" }}>
                OTHER INDUSTRIES
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {allIndustries.map((ind) => {
                  const isCurrent = ind.slug === industry.slug;
                  return (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        background: isCurrent ? "rgba(0, 133, 244, 0.1)" : "transparent",
                        border: isCurrent ? "1px solid rgba(0, 133, 244, 0.3)" : "1px solid transparent",
                        color: isCurrent ? "#0085f4" : "#475569",
                        fontWeight: isCurrent ? 800 : 600,
                        fontSize: 13,
                        textDecoration: "none",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <span>{ind.title}</span>
                      <ChevronRight size={14} color={isCurrent ? "#0085f4" : "#94A3B8"} />
                    </Link>
                  );
                })}
              </div>
            </div>

          </aside>

        </div>
      </div>

      <GlobalSupplyNetwork />
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .industry-content-grid {
            grid-template-columns: 1fr !important;
          }
          .challenge-solution-grid, .case-study-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
