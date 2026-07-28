"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import blogsData from "@/data/blogs.json";

export default function BlogListingPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Sustainability", "Engineering", "Compliance"];

  // Filter blogs based on search and category
  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F8FAFC" }}>
      <Navbar />
      
      {/* Header Container */}
      <div style={{ paddingTop: 140, paddingBottom: 60, flex: 1 }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px" }}>
          
          {/* Breadcrumb */}
          <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
            <span 
              style={{ color: "#0085f4", cursor: "pointer", transition: "color 0.2s" }} 
              onClick={() => router.push("/")}
              onMouseEnter={(e) => e.currentTarget.style.color = "#004aad"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#0085f4"}
            >
              Home
            </span>
            <span style={{ color: "#90CAF9" }}>/</span>
            <span style={{ color: "#004aad" }}>Insights Hub</span>
          </nav>

          {/* Heading */}
          <div style={{ marginBottom: 48 }}>
            <div className="pill-tag" style={{ marginBottom: 16 }}>
              <span className="dot" /> Knowledge Center
            </div>
            <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
              H2 Industries <span style={{ color: "#0085f4" }}>Insights</span>
            </h1>
            <p style={{ color: "#0085f4", fontSize: 18, marginTop: 12, maxWidth: 640, lineHeight: 1.6, fontWeight: 500 }}>
              Deep dives into advanced stormwater engineering, environmental compliance guidelines, and infrastructure innovations across the USA.
            </p>
          </div>

          {/* Controls: Search and Filters */}
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              gap: 24, 
              flexWrap: "wrap", 
              marginBottom: 40,
              padding: "20px 24px",
              background: "#ffffff",
              border: "1px solid #E2E8F0",
              borderRadius: 16,
              boxShadow: "0 4px 20px rgba(6,35,71,0.02)"
            }}
          >
            {/* Category Filter Buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: "10px 20px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      border: "1px solid",
                      borderColor: isActive ? "#0085f4" : "#E2E8F0",
                      background: isActive ? "#0085f4" : "#ffffff",
                      color: isActive ? "#ffffff" : "#004aad",
                      transition: "all 0.25s ease"
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "#0085f4";
                        e.currentTarget.style.color = "#0085f4";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "#E2E8F0";
                        e.currentTarget.style.color = "#004aad";
                      }
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div style={{ position: "relative", minWidth: 300, flex: "0 1 360px" }}>
              <Search
                size={18}
                color="#0085f4"
                style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px 12px 48px",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#004aad",
                  outline: "none",
                  transition: "all 0.2s"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#0085f4";
                  e.target.style.background = "#fff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#E2E8F0";
                  e.target.style.background = "#F8FAFC";
                }}
              />
            </div>
          </div>

          {/* Grid Layout */}
          {filteredBlogs.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 32 }}>
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => router.push(`/blog/${blog.id}`)}
                  style={{ cursor: "pointer", height: "100%" }}
                >
                  <div
                    className="card-glow"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #E2E8F0",
                      borderRadius: 16,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      boxShadow: "0 4px 20px rgba(6,35,71,0.02)",
                      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(21, 101, 192, 0.25)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(21, 101, 192, 0.06)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(6, 35, 71, 0.02)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ position: "relative", height: 220, width: "100%" }}>
                      <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <div
                        style={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          background: "#0085f4",
                          color: "#fff",
                          fontSize: 11,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          padding: "4px 12px",
                          borderRadius: 4
                        }}
                      >
                        {blog.category}
                      </div>
                    </div>

                    <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                      <div>
                        {/* Meta info */}
                        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "#0085f4", fontWeight: 600, marginBottom: 12 }}>
                          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <Calendar size={14} /> {blog.date}
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <Clock size={14} /> {blog.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 style={{ fontSize: 20, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", lineHeight: 1.3, marginBottom: 12 }}>
                          {blog.title}
                        </h2>

                        {/* Excerpt */}
                        <p style={{ color: "#0085f4", fontSize: 14, lineHeight: 1.6, fontWeight: 500, marginBottom: 24 }}>
                          {blog.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 20px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: 16 }}>
              <BookOpen size={48} color="#90CAF9" style={{ margin: "0 auto 16px auto" }} />
              <h3 style={{ fontSize: 20, color: "#004aad", fontWeight: 800, marginBottom: 8, textTransform: "uppercase" }}>No articles found</h3>
              <p style={{ color: "#0085f4", fontSize: 15, margin: 0 }}>Try adjusting your search terms or selecting another category.</p>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}
