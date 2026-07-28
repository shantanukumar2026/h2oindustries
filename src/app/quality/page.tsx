import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QualityCompliance from "@/components/QualityCompliance";
import TechnicalStandards from "@/components/TechnicalStandards";
import Sustainability from "@/components/Sustainability";

export default function QualityPage() {
  return (
    <main style={{ paddingTop: 64, background: "#ffffff" }}>
      <Navbar />
      
      {/* Page Header */}
      <div style={{ padding: "120px 60px 80px", maxWidth: 1720, margin: "0 auto", textAlign: "center" }}>
        <div className="pill-tag" style={{ marginBottom: 24 }}>
          <span className="dot" />
          Zero Compromise
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
          QUALITY & <span style={{ color: "#0085f4" }}>COMPLIANCE</span>
        </h1>
      </div>

      <QualityCompliance />
      <TechnicalStandards />
      <Sustainability />
      <Footer />
    </main>
  );
}
