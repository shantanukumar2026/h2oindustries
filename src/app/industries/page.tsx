import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import GlobalSupplyNetwork from "@/components/GlobalSupplyNetwork";

export default function IndustriesPage() {
  return (
    <main style={{ paddingTop: 64, background: "#ffffff" }}>
      <Navbar />
      
      {/* Page Header */}
      <div style={{ padding: "120px 60px 80px", maxWidth: 1720, margin: "0 auto", textAlign: "center" }}>
        <div className="pill-tag" style={{ marginBottom: 24 }}>
          <span className="dot" />
          Sectors We Serve
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "#0B1929", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
          GLOBAL <span style={{ color: "#1565C0" }}>INDUSTRIES</span>
        </h1>
      </div>

      <Industries />
      <GlobalSupplyNetwork />
      <Footer />
    </main>
  );
}
