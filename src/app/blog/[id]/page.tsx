"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import blogsData from "@/data/blogs.json";

export default function BlogDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  // Find the current blog post
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F8FAFC" }}>
        <Navbar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 140 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: "#0B1929", marginBottom: 16 }}>ARTICLE NOT FOUND</h2>
          <p style={{ color: "#4A6375", marginBottom: 24 }}>The article you are looking for does not exist or has been moved.</p>
          <button
            onClick={() => router.push("/blog")}
            style={{
              background: "#1565C0",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: 6,
              fontWeight: 800,
              cursor: "pointer"
            }}
          >
            Back to Insights
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  // Get related articles (any other article from the list)
  const relatedArticles = blogsData.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F8FAFC" }}>
      <Navbar />

      <div style={{ paddingTop: 140, paddingBottom: 80, flex: 1 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          
          {/* Back Navigation */}
          <button
            onClick={() => router.push("/blog")}
            style={{
              background: "none",
              border: "none",
              color: "#1565C0",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              cursor: "pointer",
              marginBottom: 32,
              padding: 0,
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#0D47A1"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#1565C0"}
          >
            <ArrowLeft size={16} /> Back to Insights
          </button>

          {/* Article Header */}
          <div style={{ marginBottom: 40 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(21, 101, 192, 0.08)",
                color: "#1565C0",
                fontSize: 11,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "6px 16px",
                borderRadius: 4,
                marginBottom: 20,
                border: "1px solid rgba(21, 101, 192, 0.15)"
              }}
            >
              {blog.category}
            </span>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.8rem)",
                fontWeight: 900,
                color: "#0B1929",
                lineHeight: 1.1,
                textTransform: "uppercase",
                fontStyle: "italic",
                marginBottom: 24
              }}
            >
              {blog.title}
            </h1>

            {/* Date / Time */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, paddingBottom: 24, borderBottom: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, color: "#1565C0", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                H2 TECHNICAL BULLETIN
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 14, color: "#4A6375", fontWeight: 600 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Calendar size={16} /> {blog.date}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Clock size={16} /> {blog.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div style={{ width: "100%", borderRadius: 24, overflow: "hidden", height: "clamp(280px, 40vh, 520px)", marginBottom: 48, boxShadow: "0 10px 40px rgba(6,35,71,0.04)", border: "1px solid #E2E8F0" }}>
            <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Main Layout Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "2.4fr 1fr", gap: 60 }} className="blog-detail-grid">
            
            {/* Left: Article Content */}
            <article style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div 
                className="blog-rich-content"
                dangerouslySetInnerHTML={{ __html: blog.content }} 
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "#334155",
                  fontWeight: 500
                }}
              />
              
              <style>{`
                .blog-rich-content h3 {
                  font-family: var(--font-barlow), 'Barlow Condensed', 'Impact', sans-serif;
                  font-size: 26px;
                  font-weight: 900;
                  color: #0B1929;
                  text-transform: uppercase;
                  margin-top: 36px;
                  margin-bottom: 16px;
                  font-style: italic;
                  letter-spacing: 0.5px;
                }
                .blog-rich-content p {
                  margin-bottom: 24px;
                }
              `}</style>

              {/* Share block */}
              <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#0B1929", textTransform: "uppercase", letterSpacing: "0.05em" }}>Share Article:</span>
                <div style={{ display: "flex", gap: 12 }}>
                  <button aria-label="Share on LinkedIn" style={{ cursor: "pointer", border: "1px solid #E2E8F0", background: "#fff", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#1565C0", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1565C0"; e.currentTarget.style.background = "#F0F7FF"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "#fff"; }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "auto" }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </button>
                  <button aria-label="Share on Twitter" style={{ cursor: "pointer", border: "1px solid #E2E8F0", background: "#fff", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#1565C0", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1565C0"; e.currentTarget.style.background = "#F0F7FF"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "#fff"; }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "auto" }}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </button>
                  <button aria-label="Share on Facebook" style={{ cursor: "pointer", border: "1px solid #E2E8F0", background: "#fff", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#1565C0", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1565C0"; e.currentTarget.style.background = "#F0F7FF"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "#fff"; }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "auto" }}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </button>
                </div>
              </div>
            </article>

            {/* Right: Sidebar / Related Articles */}
            <aside style={{ display: "flex", flexDirection: "column", gap: 40 }} className="blog-sidebar">
              
              {/* Newsletter Subscription Box */}
              <div 
                style={{ 
                  background: "#ffffff", 
                  border: "1px solid #E2E8F0", 
                  borderRadius: 16, 
                  padding: 28,
                  boxShadow: "0 4px 20px rgba(6,35,71,0.02)" 
                }}
              >
                <h3 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 900, color: "#0B1929", textTransform: "uppercase", fontStyle: "italic", marginBottom: 12 }}>
                  Stay Informed
                </h3>
                <p style={{ fontSize: 13, color: "#4A6375", lineHeight: 1.5, marginBottom: 20, fontWeight: 500 }}>
                  Subscribe to our monthly newsletter and get US EPA policy updates, engineering guidelines, and stormwater research delivered directly to your inbox.
                </p>
                <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter business email"
                    style={{
                      padding: "10px 14px",
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 6,
                      fontSize: 13,
                      fontWeight: 500,
                      outline: "none"
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: "#1565C0",
                      color: "#fff",
                      border: "none",
                      padding: "10px 14px",
                      borderRadius: 6,
                      fontSize: 13,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "background 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#0D47A1"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#1565C0"}
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Related posts */}
              <div>
                <h3 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 900, color: "#0B1929", textTransform: "uppercase", fontStyle: "italic", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #90CAF9" }}>
                  Related Articles
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {relatedArticles.map((art) => (
                    <div 
                      key={art.id} 
                      onClick={() => router.push(`/blog/${art.id}`)}
                      style={{ cursor: "pointer", display: "flex", gap: 12, alignItems: "center" }}
                      className="related-item"
                    >
                      <div style={{ width: 80, height: 80, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                        <img src={art.image} alt={art.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div>
                        <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#1565C0", letterSpacing: "0.05em" }}>{art.category}</span>
                        <h4 style={{ fontSize: 13, fontWeight: 800, color: "#0B1929", margin: "2px 0 0 0", lineHeight: 1.3, textTransform: "uppercase" }}>{art.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </aside>

          </div>

        </div>
      </div>

      <Footer />
      
      <style>{`
        @media (max-width: 900px) {
          .blog-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </main>
  );
}
