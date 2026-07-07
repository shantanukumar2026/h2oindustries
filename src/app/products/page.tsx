"use client";

import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F0F7FF" }}>
      <Navbar />
      <div style={{ paddingTop: 140, flex: 1 }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", marginBottom: 16 }}>
          {/* Breadcrumb Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            <span style={{ color: "#1565C0", cursor: "pointer", transition: "color 0.2s" }} onClick={() => router.push("/")} onMouseEnter={(e) => e.currentTarget.style.color = "#0D47A1"} onMouseLeave={(e) => e.currentTarget.style.color = "#1565C0"}>Home</span>
            <span style={{ color: "#90CAF9" }}>/</span>
            <span style={{ color: "#0D3A73" }}>Products</span>
          </nav>
        </div>
        <Products />
      </div>
      <Footer />
    </main>
  );
}
