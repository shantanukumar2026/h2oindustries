import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import ResearchDevelopment from "@/components/ResearchDevelopment";
import InfrastructureFacilities from "@/components/InfrastructureFacilities";

export default function CompanyPage() {
  return (
    <main style={{ paddingTop: 64, background: "#ffffff" }}>
      <Navbar />
      
      {/* Page Header */}
      <div style={{ padding: "120px 60px 80px", maxWidth: 1720, margin: "0 auto", textAlign: "center" }}>
        <div className="pill-tag" style={{ marginBottom: 24 }}>
          <span className="dot" />
          The H2 Group
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "#0B1929", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
          OUR <span style={{ color: "#1565C0" }}>COMPANY</span>
        </h1>
      </div>

      <About />
      <ResearchDevelopment />
      <InfrastructureFacilities />
      <Footer />
    </main>
  );
}
