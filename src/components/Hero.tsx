"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, MessageSquare, Phone, Mail, User, ArrowRight } from "lucide-react";
import homeData from "@/data/home.json";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const data = homeData.hero;

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
          src={data.videoBg || "/videos/hero-bg-optimized.mp4"}
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
          width: "100%",
          margin: "0 auto",
          padding: "0 60px",
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
              {data.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 8vw, 4.8rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#fff",
              textTransform: "uppercase",
              fontStyle: "italic",
              letterSpacing: "0.02em",
              textShadow: "0 10px 30px rgba(0,0,0,0.5)",
              margin: "16px 0",
            }}
          >
            {data.heading.line1}
            <br />
            {data.heading.line2}
            <br />
            <span style={{ color: "#42A5F5" }}>{data.heading.highlight}</span>
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
              {data.subheading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </motion.div>

        {/* Right Side Content (Command Center) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hero-right-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 16,
            marginRight: 60, // Space for the side bar
            background: "rgba(5, 13, 28, 0.3)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(33, 150, 243, 0.2)",
            borderTop: "4px solid #2196F3",
            padding: "32px",
            width: "380px",
            boxShadow: "0 24px 48px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, borderBottom: "1px solid rgba(144, 202, 249, 0.2)", paddingBottom: 16 }}>
            <div style={{ width: 8, height: 8, background: "#42A5F5", borderRadius: "50%", boxShadow: "0 0 10px #42A5F5" }} />
            <h3
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: 0,
              }}
            >
              {data.commandCenter.title}
            </h3>
          </div>
          
          <a
            href={data.commandCenter.primaryButton.link}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 20px",
              borderRadius: "8px",
              fontSize: 14,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2196F3";
              e.currentTarget.style.borderColor = "#2196F3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            {data.commandCenter.primaryButton.text}
            <ArrowRight size={18} />
          </a>

          <a
            href={data.commandCenter.secondaryButton.link}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#1565C0",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 20px",
              borderRadius: "8px",
              fontSize: 14,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              border: "1px solid transparent",
              transition: "all 0.2s",
              boxShadow: "0 4px 12px rgba(21, 101, 192, 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1E88E5";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1565C0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {data.commandCenter.secondaryButton.text}
            <ArrowRight size={18} />
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
          <div className="icon-wrapper">
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
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <div className="icon-tooltip">{isMuted ? "Unmute" : "Mute"}</div>
          </div>
          
          <div className="icon-wrapper">
            <a href="#chat" className="side-btn-filled">
              <MessageSquare size={18} />
            </a>
            <div className="icon-tooltip">Live Chat</div>
          </div>
          
          <div className="icon-wrapper">
            <a href="#call" className="side-btn-filled">
              <Phone size={18} />
            </a>
            <div className="icon-tooltip">Call Us</div>
          </div>
          
          <div className="icon-wrapper">
            <a href="#email" className="side-btn-filled">
              <Mail size={18} />
            </a>
            <div className="icon-tooltip">Email Us</div>
          </div>
          
          <div className="icon-wrapper">
            <a href="#contact" className="side-btn-filled">
              <User size={18} />
            </a>
            <div className="icon-tooltip">Dedicated Engineer</div>
          </div>
        </div>
      </div>



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
        .icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .icon-tooltip {
          position: absolute;
          right: 60px;
          background: rgba(5, 13, 26, 0.9);
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .icon-wrapper:hover .icon-tooltip {
          opacity: 1;
          transform: translateX(0);
        }
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
