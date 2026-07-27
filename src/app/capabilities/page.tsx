import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologyInnovation from "@/components/TechnologyInnovation";
import ManufacturingCapabilities from "@/components/ManufacturingCapabilities";

export default function CapabilitiesPage() {
  return (
    <main style={{ paddingTop: 64, background: "#004aad" }}>
      <Navbar />

      {/* Page Header */}
      <div style={{ padding: "120px 60px 80px", maxWidth: 1720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(33, 150, 243, 0.1)", border: "1px solid rgba(33, 150, 243, 0.3)", padding: "6px 16px", marginBottom: 24 }}>
          <span style={{ color: "#90CAF9", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Production Power
          </span>
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
          OUR <span style={{ color: "#1E88E5" }}>CAPABILITIES</span>
        </h1>
      </div>

      <TechnologyInnovation />
      <ManufacturingCapabilities />
      <Footer />
    </main>
  );
}
