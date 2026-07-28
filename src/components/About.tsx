"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck, Settings, Waves, Target, Award, ShieldAlert,
  Layers, Zap, FileText, Leaf, Droplet, Play, Pause,
  Volume2, VolumeX, Maximize
} from "lucide-react";

// Mapping icons for custom feature blocks
const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Settings,
  Waves,
  Target,
  Award,
  ShieldAlert,
  Layers,
  Zap,
  FileText,
  Leaf
};

// Rich portfolio items matching the design with custom features and support for both mp4/image
const portfolioItems = [
  {
    mainTitle: "DEDICATED TO SAVING OUR",
    highlightText: "OCEANS",
    subtitle: "THROUGH ENGINEERING",
    desc: "H2 Industries was founded with a single unwavering mission: to develop industrial water management products that actively reduce environmental harm.",
    media: "/portfolio/1.mp4",
    bgColor: "#fbfbfbff",
    features: [
      { title: "PURPOSE DRIVEN", desc: "Environmental impact at our core", icon: "ShieldCheck" },
      { title: "ENGINEERING FIRST", desc: "Innovative solutions for real-world challenges", icon: "Settings" },
      { title: "OCEAN FOCUSED", desc: "Protecting today for a sustainable tomorrow", icon: "Waves" }
    ]
  },
  {
    mainTitle: "PRECISION SUB-SURFACE",
    highlightText: "ENGINEERING",
    subtitle: "FOR THE TOUGHEST ENVIRONMENTS",
    desc: "Every product is precision-engineered to meet the most demanding industrial and environmental standards across the USA and global markets.",
    media: "/portfolio/2.mp4",
    bgColor: "#ffffff",
    features: [
      { title: "EXACT TOLERANCE", desc: "Machined to sub-millimeter precision", icon: "Target" },
      { title: "RUGGED RATING", desc: "Certified for municipal Class D wheel-loads", icon: "Award" },
      { title: "PROVEN INTEGRITY", desc: "Extensively field-tested in heavy storm flows", icon: "ShieldAlert" }
    ]
  },
  {
    mainTitle: "MODULAR HIGH-GRADE",
    highlightText: "ENCLOSURES",
    subtitle: "BUILT TO LAST",
    desc: "We design for compatibility with emerging clean-energy infrastructure, hydrogen utility vaults, and long-term protection of municipal waterways.",
    media: "/portfolio/3.mp4",
    bgColor: "#0085f4",
    features: [
      { title: "MODULAR SYSTEM", desc: "Adaptable depth and segmented barrels", icon: "Layers" },
      { title: "CLEAN ENERGY", desc: "Ready for green hydrogen vaults", icon: "Zap" },
      { title: "LONG LIFETIME", desc: "High-grade polymer resists salt & sewage", icon: "ShieldCheck" }
    ]
  },
  {
    mainTitle: "SUSTAINABLE IMPACT &",
    highlightText: "GLOBAL REACH",
    desc: "We engineer structural stormwater components that reduce pollutant entry into wastewater systems, creating a cleaner planet.",
    subtitle: "ECO-FRIENDLY INFRASTRUCTURE",
    media: "/portfolio/4.mp4",
    bgColor: "#0085f4",
    features: [
      { title: "ZERO BYPASS", desc: "Engineered catch basin filtration inserts", icon: "Droplet" },
      { title: "EPA COMPLIANT", desc: "Exceeds NPDES water quality guidelines", icon: "FileText" },
      { title: "ECO CERTIFIED", desc: "Actively redirects pollutants from ocean basins", icon: "Leaf" }
    ]
  }
];

export default function About() {
  return (
    <div id="about" style={{ width: "100%", background: "#004aad", position: "relative" }}>
      {/* Topographical background lines */}
      <ContourLinesBackground />

      {portfolioItems.map((item, index) => (
        <PortfolioSection key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function PortfolioSection({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transitions matching the presentation layout
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const yVideo = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: "65vh",
        padding: "70px 0",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0, 187, 255, 0.2)"
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          width: "100%",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: index % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
          gap: 48,
          alignItems: "center",
          zIndex: 1
        }}
        className="portfolio-grid"
      >
        {/* Left: Content Side */}
        <motion.div
          style={{
            order: index % 2 === 0 ? 1 : 2,
            y: yText,
            opacity,
            display: "flex",
            flexDirection: "column",
            gap: 14
          }}
          className="portfolio-content"
        >
          {/* Section Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid #00bbff",
              padding: "5px 16px",
              borderRadius: "100px",
              background: "rgba(0, 187, 255, 0.15)",
              width: "fit-content"
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00bbff" }} />
            <span style={{ color: "#00bbff", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              OUR PURPOSE
            </span>
          </div>

          {/* Heading with highlighted text */}
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 3.6vw, 3rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.12,
              textTransform: "uppercase",
              margin: "8px 0 0 0",
              letterSpacing: "-0.01em"
            }}
          >
            {item.mainTitle} <br />
            <span
              style={{
                color: "#00bbff",
                display: "inline-block",
                background: "linear-gradient(135deg, #00bbff 0%, #0085f4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              {item.highlightText}
            </span>
          </h2>

          {/* Subtitle / Engineering Line */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "6px 0 14px 0" }}>
            <span style={{ color: "#00bbff", fontSize: 13, fontWeight: 800, letterSpacing: "0.09em", fontStyle: "italic", textTransform: "uppercase" }}>
              /// {item.subtitle}
            </span>
            <div style={{ flex: 1, height: 1, background: "rgba(0, 187, 255, 0.3)", maxWidth: 110 }} />
          </div>

          {/* Description */}
          <p style={{ color: "#E0F2FE", fontSize: 15, lineHeight: 1.65, fontWeight: 400, marginBottom: 24, maxWidth: 520 }}>
            {item.desc}
          </p>

          {/* Features Grid Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 8 }} className="features-row">
            {item.features.map((feat, fIdx) => {
              const FeatIcon = iconMap[feat.icon] || ShieldCheck;
              return (
                <div key={fIdx} style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  borderRight: fIdx < 2 ? "1px solid rgba(0, 187, 255, 0.2)" : "none",
                  paddingRight: fIdx < 2 ? 14 : 0
                }} className="feature-col">
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(0, 187, 255, 0.15)", border: "1px solid #00bbff", display: "flex", alignItems: "center", justifyContent: "center", color: "#00bbff" }}>
                    <FeatIcon size={17} />
                  </div>
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>{feat.title}</h4>
                    <p style={{ color: "#BAE6FD", fontSize: 11, lineHeight: 1.45, margin: 0, fontWeight: 400 }}>{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Media Side (Custom Player Box) */}
        <div style={{ order: index % 2 === 0 ? 2 : 1, position: "relative", height: "380px", width: "100%" }} className="portfolio-media">
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              y: yVideo
            }}
          >
            <CustomMediaPlayer src={item.media} title={item.mainTitle} bgColor="#004aad" />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            padding: 60px 24px !important;
            gap: 32px !important;
          }
          .portfolio-content { order: 1 !important; }
          .portfolio-media { order: 2 !important; height: 300px !important; }
          .features-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .feature-col { border-right: none !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}

// Custom player component supporting both mp4 video and static images
function CustomMediaPlayer({ src, title, bgColor = "#0085f4" }: { src: string; title: string; bgColor?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:15");

  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
  const isWhite = bgColor === "#ffffff" || bgColor.toLowerCase() === "#fff";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;

    const onTimeUpdate = () => {
      const current = video.currentTime;
      const total = video.duration || 0;
      setProgress(total > 0 ? (current / total) * 100 : 0);
      setCurrentTime(formatTime(current));
    };

    const onLoadedMetadata = () => {
      setDuration(formatTime(video.duration));
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    // Auto-play when loaded
    video.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    });

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [src, isVideo]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePlayToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current || !isVideo) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log(err));
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current || !isVideo) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !isVideo) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    videoRef.current.currentTime = percent * videoRef.current.duration;
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current || !isVideo) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 48px",
        borderRadius: 20,
        overflow: "hidden",
        border: isWhite ? "1px solid rgba(226, 232, 240, 0.8)" : "1px solid rgba(33, 150, 243, 0.3)",
        boxShadow: isWhite ? "0 20px 40px rgba(0, 74, 173, 0.35)" : "0 20px 45px rgba(0, 74, 173, 0.6), 0 0 20px rgba(33, 150, 243, 0.15)",
        background: bgColor
      }}
    >
      {/* Media Playback View */}
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          background: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {isVideo ? (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onClick={handlePlayToggle}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              cursor: "pointer",
              background: bgColor
            }}
          />
        ) : (
          <img
            src={src}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "contain", background: bgColor }}
          />
        )}

        {/* Media Controls Bar Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            right: 14,
            height: 42,
            background: "rgba(15, 23, 42, 0.9)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderRadius: 10,
            border: "1px solid rgba(255, 255, 255, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 14px",
            zIndex: 10
          }}
        >
          {/* Play/Pause Button & Time */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={handlePlayToggle}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                opacity: isVideo ? 1 : 0.5
              }}
              disabled={!isVideo}
            >
              {isPlaying && isVideo ? <Pause size={16} fill="#ffffff" /> : <Play size={16} fill="#ffffff" />}
            </button>
            <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700, fontFamily: "monospace" }}>
              {isVideo ? `${currentTime} / ${duration}` : "0:00 / 0:00"}
            </span>
          </div>

          {/* Timeline slider */}
          <div
            onClick={isVideo ? handleTimelineClick : undefined}
            style={{
              flex: 1,
              margin: "0 16px",
              height: 4,
              background: "rgba(255, 255, 255, 0.15)",
              borderRadius: 2,
              position: "relative",
              cursor: isVideo ? "pointer" : "default"
            }}
          >
            <div
              style={{
                height: "100%",
                width: isVideo ? `${progress}%` : "0%",
                background: "linear-gradient(90deg, #2196F3, #64B5F6)",
                borderRadius: 2,
                position: "absolute",
                top: 0,
                left: 0
              }}
            />
            {isVideo && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: `${progress}%`,
                  transform: "translate(-50%, -50%)",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#ffffff",
                  boxShadow: "0 0 6px rgba(0,0,0,0.5)"
                }}
              />
            )}
          </div>

          {/* Control Triggers */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={handleMuteToggle}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: "#94A3B8",
                display: "flex",
                alignItems: "center",
                opacity: isVideo ? 1 : 0.5
              }}
              disabled={!isVideo}
            >
              {isMuted || !isVideo ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button
              onClick={handleFullscreen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: "#94A3B8",
                display: "flex",
                alignItems: "center",
                opacity: isVideo ? 1 : 0.5
              }}
              disabled={!isVideo}
            >
              <Maximize size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Side Column (Right Side of Frame) */}
      <div
        style={{
          background: isWhite ? "#ffffff" : "#004aad",
          borderLeft: isWhite ? "1px solid #e2e8f0" : "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0"
        }}
      >
        {/* Top Dot Grid Pattern */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, opacity: 0.35 }}>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} style={{ width: 3, height: 3, borderRadius: "50%", background: isWhite ? "#0085f4" : "#64B5F6" }} />
          ))}
        </div>

        {/* Droplet Indicator Badge */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isWhite ? "rgba(21, 101, 192, 0.08)" : "rgba(33, 150, 243, 0.12)",
            border: isWhite ? "1px solid #0085f4" : "1px solid rgba(33, 150, 243, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isWhite ? "#0085f4" : "#64B5F6"
          }}
        >
          <Droplet size={13} fill={isWhite ? "#0085f4" : "#64B5F6"} />
        </div>

        {/* Bottom Dot Grid Pattern */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, opacity: 0.35 }}>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} style={{ width: 3, height: 3, borderRadius: "50%", background: isWhite ? "#0085f4" : "#64B5F6" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Background Topography Curve Generator
function ContourLinesBackground() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.05,
        pointerEvents: "none",
        zIndex: 0
      }}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <path d="M-100,200 C150,150 200,450 450,200 C700,-50 850,300 1100,100" fill="none" stroke="#2196F3" strokeWidth="1.5" />
      <path d="M-100,250 C150,200 200,500 450,250 C700,0 850,350 1100,150" fill="none" stroke="#2196F3" strokeWidth="1.5" />
      <path d="M-100,300 C150,250 200,550 450,300 C700,50 850,400 1100,200" fill="none" stroke="#2196F3" strokeWidth="1.5" />
      <path d="M-100,350 C150,300 200,600 450,350 C700,100 850,450 1100,250" fill="none" stroke="#2196F3" strokeWidth="1.5" />

      <path d="M-100,750 C100,600 350,900 650,750 C950,600 850,950 1100,850" fill="none" stroke="#2196F3" strokeWidth="1.5" />
      <path d="M-100,800 C100,650 350,950 650,800 C950,650 850,1000 1100,900" fill="none" stroke="#2196F3" strokeWidth="1.5" />
      <path d="M-100,850 C100,700 350,1000 650,850 C950,700 850,1050 1100,950" fill="none" stroke="#2196F3" strokeWidth="1.5" />
    </svg>
  );
}
