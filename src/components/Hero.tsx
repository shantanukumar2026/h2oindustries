"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, MessageSquare, Phone, Mail, User, ArrowRight, ShieldCheck, Droplet, Leaf, Users } from "lucide-react";
import homeData from "@/data/home.json";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
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


      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero_bright_usa.png"
          alt="Hero Background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0, 74, 173, 0.45) 0%, rgba(0, 133, 244, 0.15) 100%)",
          }}
        />
      </div>

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 40px",
          paddingTop: "120px",
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
          style={{ maxWidth: 700, display: "flex", flexDirection: "column", gap: 16 }}
        >
          {/* Top Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1.5px solid rgba(33, 150, 243, 0.4)",
              background: "rgba(21, 101, 192, 0.2)",
              padding: "4px 16px",
              borderRadius: "100px",
              width: "fit-content",
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2196F3" }} />
            <span
              style={{
                color: "#90CAF9",
                fontSize: 11,
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
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              margin: "12px 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{data.heading.line1}</span>
            <span>{data.heading.line2}</span>
            <span style={{ color: "#2196F3" }}>{data.heading.highlight}</span>
          </h1>

          {/* Sub block */}
          <div style={{ maxWidth: 600 }}>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: "1.1rem",
                fontWeight: 500,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Next-generation hydro-infrastructure and engineering solutions for cleaner, smarter, more resilient communities across the USA and UK.
            </p>
          </div>

          {/* Features */}
          <div style={{ display: "flex", gap: "24px", marginTop: "32px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <ShieldCheck size={28} color="#90CAF9" strokeWidth={1.5} />
              <span style={{ color: "#ffffff", fontSize: 13, lineHeight: 1.2, fontWeight: 700 }}>Reliable<br />Infrastructure</span>
            </div>
            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.15)" }} className="hide-on-mobile" />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Droplet size={28} color="#90CAF9" strokeWidth={1.5} />
              <span style={{ color: "#ffffff", fontSize: 13, lineHeight: 1.2, fontWeight: 700 }}>Innovative<br />Solutions</span>
            </div>
            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.15)" }} className="hide-on-mobile" />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Leaf size={28} color="#90CAF9" strokeWidth={1.5} />
              <span style={{ color: "#ffffff", fontSize: 13, lineHeight: 1.2, fontWeight: 700 }}>Sustainable<br />Future</span>
            </div>
            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.15)" }} className="hide-on-mobile" />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Users size={28} color="#90CAF9" strokeWidth={1.5} />
              <span style={{ color: "#ffffff", fontSize: 13, lineHeight: 1.2, fontWeight: 700 }}>Trusted<br />Partnerships</span>
            </div>
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
            gap: 12,
            marginRight: 60, // Space for the side bar
            background: "rgba(5, 15, 35, 0.72)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(33, 150, 243, 0.25)",
            boxShadow: "0 15px 45px rgba(0, 74, 173, 0.35)",
            borderRadius: "16px",
            padding: "24px",
            width: "360px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 6, height: 6, background: "#2196F3", borderRadius: "50%", boxShadow: "0 0 10px rgba(33, 150, 243, 0.8)" }} />
            <h3
              style={{
                color: "#ffffff",
                fontSize: 13,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: 0,
              }}
            >
              COMMAND CENTER
            </h3>
          </div>

          <a
            href={data.commandCenter.primaryButton.link}
            className="explore-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255, 255, 255, 0.05)",
              color: "#90CAF9",
              textDecoration: "none",
              padding: "16px 20px",
              borderRadius: "8px",
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              border: "1.5px solid #2196F3",
              transition: "all 0.25s ease",
            }}
          >
            EXPLORE CAPABILITIES
            <ArrowRight size={18} />
          </a>

          <a
            href={data.commandCenter.secondaryButton.link}
            className="work-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#0085f4",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 20px",
              borderRadius: "8px",
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              border: "1.5px solid #0085f4",
              transition: "all 0.25s ease",
            }}
          >
            WORK WITH US
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
            background: "#0085f4",
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
          background: "#004aad",
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
          box-shadow: 0 4px 12px rgba(0, 74, 173,0.3);
        }
        .icon-wrapper:hover .icon-tooltip {
          opacity: 1;
          transform: translateX(0);
        }
        .side-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(5, 15, 35, 0.6);
          backdrop-filter: blur(8px);
          border: 2.5px solid #2196F3 !important;
          color: #90CAF9 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .side-btn:hover {
          background: #2196F3 !important;
          color: #fff !important;
          box-shadow: 0 0 15px rgba(33, 150, 243, 0.5);
        }
        .side-btn-filled {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(5, 15, 35, 0.6);
          backdrop-filter: blur(8px);
          border: 2.5px solid #2196F3;
          color: #90CAF9;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .side-btn-filled:hover {
          background: #2196F3 !important;
          color: #fff !important;
          box-shadow: 0 0 15px rgba(33, 150, 243, 0.5);
        }
        .explore-btn:hover {
          background: #0085f4 !important;
          color: #ffffff !important;
          border-color: #0085f4 !important;
          box-shadow: 0 4px 14px rgba(21, 101, 192, 0.3);
        }
        .work-btn:hover {
          background: #004aad !important;
          border-color: #004aad !important;
          box-shadow: 0 4px 14px rgba(13, 71, 161, 0.3);
        }
        .hide-on-mobile {
          display: block;
        }
        @media (max-width: 1023px) {
          .hide-on-mobile {
            display: none !important;
          }
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
