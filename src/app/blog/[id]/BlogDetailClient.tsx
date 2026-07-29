"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import blogsData from "@/data/blogs.json";

export default function BlogDetailClient() {
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
          <h2 style={{ fontSize: 24, fontWeight: 900, color: "#004aad", marginBottom: 16 }}>ARTICLE NOT FOUND</h2>
          <p style={{ color: "#0085f4", marginBottom: 24 }}>The article you are looking for does not exist or has been moved.</p>
          <button
            onClick={() => router.push("/blog")}
            style={{
              background: "#0085f4",
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
              color: "#0085f4",
              fontWeight: 800,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              marginBottom: 32,
              padding: 0
            }}
          >
            <ArrowLeft size={16} /> Back to Insights Hub
          </button>

          {/* Article Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "inline-block", background: "#0085f4", color: "#fff", fontSize: 12, fontWeight: 800, textTransform: "uppercase", padding: "4px 12px", borderRadius: 4, marginBottom: 16 }}>
              {blog.category}
            </div>

            <h1 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", lineHeight: 1.1, marginBottom: 20 }}>
              {blog.title}
            </h1>

            {/* Author & Date Bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, paddingBottom: 24, borderBottom: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#004aad", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14 }}>
                  {blog.author.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#004aad" }}>{blog.author.name}</div>
                  <div style={{ fontSize: 12, color: "#0085f4" }}>{blog.author.role}</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 13, color: "#0085f4", fontWeight: 600 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Calendar size={15} /> {blog.date}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Clock size={15} /> {blog.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div style={{ position: "relative", height: 450, width: "100%", borderRadius: 16, overflow: "hidden", marginBottom: 48 }}>
            <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Main Article Body */}
          <div style={{ maxWidth: 850, margin: "0 auto" }}>
            
            {/* Excerpt Lead */}
            <p style={{ fontSize: 20, color: "#004aad", fontWeight: 600, fontStyle: "italic", lineHeight: 1.6, marginBottom: 32, paddingLeft: 20, borderLeft: "4px solid #0085f4" }}>
              {blog.excerpt}
            </p>

            {/* Formatted Content */}
            <div 
              style={{ fontSize: 16, color: "#0085f4", lineHeight: 1.8, fontWeight: 400 }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share / Tags Footer */}
            <div style={{ marginTop: 60, paddingTop: 24, borderTop: "1px solid #E2E8F0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#004aad", textTransform: "uppercase" }}>
                Category: <span style={{ color: "#0085f4" }}>{blog.category}</span>
              </div>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: blog.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Article link copied to clipboard!");
                  }
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#E3F2FD",
                  color: "#0085f4",
                  border: "1px solid #90CAF9",
                  padding: "8px 16px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 800,
                  cursor: "pointer"
                }}
              >
                <Share2 size={16} /> Share Article
              </button>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div style={{ marginTop: 80, paddingTop: 40, borderTop: "2px solid #E2E8F0" }}>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#004aad", fontStyle: "italic", textTransform: "uppercase", marginBottom: 32 }}>
                Related Articles
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => router.push(`/blog/${rel.id}`)}
                    style={{
                      background: "#fff",
                      border: "1px solid #E2E8F0",
                      borderRadius: 16,
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "transform 0.2s"
                    }}
                  >
                    <div style={{ height: 180, width: "100%", overflow: "hidden" }}>
                      <img src={rel.image} alt={rel.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: 24 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: "#0085f4", textTransform: "uppercase" }}>{rel.category}</span>
                      <h4 style={{ fontSize: 16, fontWeight: 900, color: "#004aad", marginTop: 8, marginBottom: 8, fontStyle: "italic" }}>{rel.title}</h4>
                      <p style={{ fontSize: 13, color: "#0085f4", lineHeight: 1.5, margin: 0 }}>{rel.excerpt.slice(0, 100)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}
