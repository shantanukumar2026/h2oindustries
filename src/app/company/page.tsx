import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyProfile from "@/components/CompanyProfile";

export default function CompanyPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F8FAFC" }}>
      <Navbar />
      
      {/* Page Header */}
      <div style={{ paddingTop: 140, paddingBottom: 40, maxWidth: 1720, margin: "0 auto", paddingLeft: 40, paddingRight: 40, width: "100%" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0, 133, 244, 0.1)", border: "1px solid rgba(0, 133, 244, 0.3)", padding: "6px 16px", borderRadius: "100px", marginBottom: 16 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0085f4" }} />
          <span style={{ color: "#0085f4", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            The H2 Group
          </span>
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
          COMPANY <span style={{ color: "#0085f4" }}>PROFILE</span>
        </h1>
      </div>

      <CompanyProfile />
      <Footer />
    </main>
  );
}
