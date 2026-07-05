"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, MessageSquare, Phone, Mail, User } from "lucide-react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 680,
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <video
          ref={videoRef}
          src="/videos/6156382_France Lake Morning Autumn_By_SPICY_MOTION_Artlist_HD.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(5,13,28,0.7) 0%, rgba(5,13,28,0.3) 100%)",
          }}
        />
      </div>

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1600,
          margin: "0 auto",
          padding: "0 60px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
        className="hero-container"
      >
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: 600, display: "flex", flexDirection: "column", gap: 16 }}
        >
          {/* Top Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1565C0",
              padding: "4px 16px",
              width: "fit-content",
            }}
          >
            <div style={{ width: 12, height: 2, background: "#fff" }} />
            <span
              style={{
                color: "#fff",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Precision Water Management
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 8vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1,
              color: "#fff",
              textTransform: "uppercase",
              fontStyle: "italic",
              letterSpacing: "0.02em",
              textShadow: "0 4px 12px rgba(6,35,71,0.3)",
              margin: "12px 0",
            }}
          >
            ENGINEERING THE
            <br />
            WATERWORKS
            <br />
            <span style={{ color: "#42A5F5" }}>AUTHORITY...</span>
          </h1>

          {/* Sub block */}
          <div
            style={{
              background: "#1565C0",
              padding: "16px 24px",
              width: "fit-content",
              maxWidth: 400,
            }}
          >
            <p
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              Next-Generation Hydro-Infrastructure &<br />
              Engineering Solutions
            </p>
          </div>
        </motion.div>

        {/* Right Side Content (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hero-right-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 16,
            marginRight: 60, // Space for the side bar
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: 900,
              fontStyle: "italic",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 8,
              textShadow: "0 2px 4px rgba(6,35,71,0.5)",
            }}
          >
            BUILT FOR EVERY CHALLENGE
          </h3>
          <a
            href="#capabilities"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 280,
              background: "#2196F3",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 24px",
              fontSize: 14,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1E88E5")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2196F3")}
          >
            Explore Capabilities
          </a>
          <a
            href="#contact"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 280,
              background: "#0D2B55",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 24px",
              fontSize: 14,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#154285")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0D2B55")}
          >
            Succeed With Us
          </a>
        </motion.div>
      </div>

      {/* Extreme Right Edge UI */}
      <div
        className="hero-extreme-edge"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 60,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        {/* Connect Tab */}
        <div
          style={{
            position: "absolute",
            top: 100,
            right: -56,
            background: "#2196F3",
            color: "#fff",
            padding: "12px 24px",
            fontSize: 12,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            transform: "rotate(-90deg)",
            transformOrigin: "left top",
            cursor: "pointer",
          }}
        >
          Connect with us
        </div>

        {/* Floating Icons */}
        <div
          style={{
            position: "absolute",
            bottom: 100,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            right: 20,
          }}
        >
          <button
            onClick={toggleMute}
            className="side-btn"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "transparent",
              border: "2px solid #2196F3",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            title={isMuted ? "Unmute Video" : "Mute Video"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <a href="#chat" className="side-btn-filled">
            <MessageSquare size={18} />
          </a>
          <a href="#call" className="side-btn-filled">
            <Phone size={18} />
          </a>
          <a href="#email" className="side-btn-filled">
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Right Floating Button */}
      <a
        href="#contact"
        className="hero-floating-btn"
        style={{
          position: "absolute",
          bottom: 30,
          right: 90,
          background: "#2196F3",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 28px",
          borderRadius: 999,
          textDecoration: "none",
          fontSize: 14,
          fontWeight: 700,
          zIndex: 20,
          boxShadow: "0 10px 30px rgba(6,35,71,0.3)",
          transition: "transform 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1E88E5";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#2196F3";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <User size={18} />
        Meet your dedicated Engineer
      </a>

      {/* Bottom Thick Blue Border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 12,
          background: "#0D47A1",
          zIndex: 20,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          height: 4,
          background: "#2196F3",
          zIndex: 20,
        }}
      />

      <style>{`
        .side-btn:hover {
          background: #2196F3 !important;
        }
        .side-btn-filled {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #2196F3;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.2s;
        }
        .side-btn-filled:hover {
          background: #1E88E5;
        }
        @media (max-width: 1023px) {
          .hero-container {
            flex-direction: column !important;
            justify-content: center !important;
            align-items: flex-start !important;
            padding: 0 20px !important;
          }
          .hero-right-content {
            align-items: flex-start !important;
            margin-top: 40px !important;
            margin-right: 0 !important;
            width: 100% !important;
          }
          .hero-right-content a {
            width: 100% !important;
            max-width: 320px !important;
          }
        }
        @media (max-width: 768px) {
          .hero-extreme-edge {
            display: none !important;
          }
          .hero-floating-btn {
            right: 20px !important;
            bottom: 20px !important;
            padding: 12px 20px !important;
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
