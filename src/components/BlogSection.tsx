"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import blogsData from "../data/blogs.json";

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-85px" });
  const router = useRouter();

  // Get the latest 3 blogs
  const latestBlogs = blogsData.slice(0, 3);

  return (
    <section
      id="latest-insights"
      style={{
        background: "#F8FAFC",
        padding: "48px 0",
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        boxSizing: "border-box"
      }}
    >
      {/* Decorative subtle background shapes */}
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,150,243,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,101,192,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", width: "100%", zIndex: 1 }}>
        
        {/* Header */}
        <div ref={ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 24 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="pill-tag" style={{ marginBottom: 16 }}>
              <span className="dot" /> Latest Insights & News
            </div>
            
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.2rem)",
                fontWeight: 900,
                color: "#0B1929",
                lineHeight: 1.1,
                textTransform: "uppercase",
                fontStyle: "italic",
                margin: 0
              }}
            >
              H2 Knowledge <span style={{ color: "#1565C0" }}>Hub</span>
            </h2>
            <p style={{ color: "#4A6375", fontSize: 16, maxWidth: 600, marginTop: 12, lineHeight: 1.6, fontWeight: 500 }}>
              Stay updated with the latest in smart water management, green infrastructure standards, and US EPA compliance guides.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button
              onClick={() => router.push("/blog")}
              style={{
                background: "#1565C0",
                color: "#fff",
                border: "none",
                padding: "14px 28px",
                fontSize: 14,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(21, 101, 192, 0.2)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0D47A1";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1565C0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View All Blogs <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }} className="blog-grid">
          {latestBlogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => router.push(`/blog/${blog.id}`)}
              style={{ height: "100%", cursor: "pointer" }}
            >
              <div
                className="card-glow"
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  boxShadow: "0 4px 20px rgba(6, 35, 71, 0.03)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(21, 101, 192, 0.25)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(21, 101, 192, 0.08)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(6, 35, 71, 0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Image / Category Aspect Header */}
                <div style={{ position: "relative", height: 200, width: "100%", background: "#0F2942" }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      background: "#1565C0",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "4px 12px",
                      borderRadius: 4,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                    }}
                  >
                    {blog.category}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    {/* Date / Time */}
                    <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "#4A6375", fontWeight: 600, marginBottom: 12 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Calendar size={14} /> {blog.date}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Clock size={14} /> {blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 900,
                        color: "#0B1929",
                        lineHeight: 1.3,
                        marginBottom: 12,
                        textTransform: "uppercase",
                        fontStyle: "italic",
                        transition: "color 0.2s"
                      }}
                      className="blog-card-title"
                    >
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{ color: "#4A6375", fontSize: 14, lineHeight: 1.6, fontWeight: 500, marginBottom: 24 }}>
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid #F1F5F9" }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(21, 101, 192, 0.1)",
                        color: "#1565C0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 800
                      }}
                    >
                      {blog.author.initials}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: "#0B1929", margin: 0 }}>{blog.author.name}</h4>
                      <p style={{ fontSize: 11, color: "#1565C0", fontWeight: 600, margin: 0 }}>{blog.author.role}</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
