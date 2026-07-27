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
    features: [
      { title: "ZERO BYPASS", desc: "Engineered catch basin filtration inserts", icon: "Droplet" },
      { title: "EPA COMPLIANT", desc: "Exceeds NPDES water quality guidelines", icon: "FileText" },
      { title: "ECO CERTIFIED", desc: "Actively redirects pollutants from ocean basins", icon: "Leaf" }
    ]
  }
];

export default function About() {
  return (
    <div id="about" style={{ width: "100%", background: "#020f1f", position: "relative" }}>
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
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(33, 150, 243, 0.1)"
      }}
    >
      <div
        style={{
          maxWidth: 1720,
          width: "100%",
          margin: "0 auto",
          padding: "0 60px",
          display: "grid",
          gridTemplateColumns: index % 2 === 0 ? "1fr 1.1fr" : "1.1fr 1fr",
          gap: 60,
          alignItems: "center",
          height: "100%",
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
            gap: 16
          }}
          className="portfolio-content"
        >
          {/* Section Pill */}
          <div 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 8, 
              border: "1px solid rgba(33, 150, 243, 0.3)", 
              padding: "4px 16px", 
              borderRadius: "100px", 
              background: "rgba(21, 101, 192, 0.12)", 
              width: "fit-content" 
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2196F3" }} />
            <span style={{ color: "#90CAF9", fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              OUR PURPOSE
            </span>
          </div>

          {/* Heading with highlighted text */}
          <h2 
            className="font-display" 
            style={{ 
              fontSize: "clamp(2rem, 4vw, 3.6rem)", 
              fontWeight: 900, 
              color: "#ffffff", 
              lineHeight: 1.05, 
              textTransform: "uppercase",
              margin: "12px 0 0 0"
            }}
          >
            {item.mainTitle} <br />
            <span 
              style={{ 
                background: "linear-gradient(135deg, #60AEFF 0%, #2196F3 50%, #1565C0 100%)", 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent", 
                backgroundClip: "text" 
              }}
            >
              {item.highlightText}
            </span>
          </h2>

          {/* Subtitle / Engineering Line */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "8px 0 16px 0" }}>
            <span style={{ color: "#2196F3", fontSize: 14, fontWeight: 800, letterSpacing: "0.08em", fontStyle: "italic", textTransform: "uppercase" }}>
              /// {item.subtitle}
            </span>
            <div style={{ flex: 1, height: 1, background: "rgba(33, 150, 243, 0.2)", maxWidth: 120 }} />
          </div>

          {/* Description */}
          <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.7, fontWeight: 400, marginBottom: 32, maxWidth: 540 }}>
            {item.desc}
          </p>

          {/* Features Grid Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 12 }} className="features-row">
            {item.features.map((feat, fIdx) => {
              const FeatIcon = iconMap[feat.icon] || ShieldCheck;
              return (
                <div key={fIdx} style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: 12,
                  borderRight: fIdx < 2 ? "1px solid rgba(33, 150, 243, 0.15)" : "none",
                  paddingRight: fIdx < 2 ? 16 : 0
                }} className="feature-col">
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(33, 150, 243, 0.08)", border: "1px solid rgba(33, 150, 243, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#42A5F5" }}>
                    <FeatIcon size={18} />
                  </div>
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{feat.title}</h4>
                    <p style={{ color: "#64B5F6", fontSize: 11, lineHeight: 1.4, margin: 0, fontWeight: 500 }}>{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Media Side (Custom Player Box) */}
        <div style={{ order: index % 2 === 0 ? 2 : 1, position: "relative", height: "65vh", width: "100%" }} className="portfolio-media">
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              y: yVideo
            }}
          >
            <CustomMediaPlayer src={item.media} title={item.mainTitle} />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            padding: 80px 30px !important;
            gap: 40px !important;
          }
          .portfolio-content { order: 1 !important; }
          .portfolio-media { order: 2 !important; height: 45vh !important; }
          .features-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .feature-col { border-right: none !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}

// Custom player component supporting both mp4 video and static images
function CustomMediaPlayer({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:15");

  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

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
        borderRadius: 24,
        overflow: "hidden",
        border: "2px solid #2196F3",
        boxShadow: "0 0 30px rgba(33, 150, 243, 0.35)",
        background: "#05101F"
      }}
    >
      {/* Media Playback View */}
      <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
        {isVideo ? (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onClick={handlePlayToggle}
            style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
          />
        ) : (
          <img
            src={src}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}

        {/* Media Controls Bar Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            height: 48,
            background: "rgba(5, 13, 28, 0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: 12,
            border: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            zIndex: 10
          }}
        >
          {/* Play/Pause Button & Time */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
              {isPlaying && isVideo ? <Pause size={18} fill="#ffffff" /> : <Play size={18} fill="#ffffff" />}
            </button>
            <span style={{ fontSize: 13, color: "#94A3B8", fontWeight: 700, fontFamily: "monospace" }}>
              {isVideo ? `${currentTime} / ${duration}` : "0:00 / 0:00"}
            </span>
          </div>

          {/* Timeline slider */}
          <div
            onClick={isVideo ? handleTimelineClick : undefined}
            style={{
              flex: 1,
              margin: "0 20px",
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
                background: "#2196F3",
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
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ffffff",
                  boxShadow: "0 0 6px rgba(0,0,0,0.5)"
                }}
              />
            )}
          </div>

          {/* Control Triggers */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
              {isMuted || !isVideo ? <VolumeX size={18} /> : <Volume2 size={18} />}
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
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Side Column (Right Side of Frame) */}
      <div
        style={{
          background: "#051326",
          borderLeft: "1px solid rgba(33, 150, 243, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 0"
        }}
      >
        {/* Top Dot Grid Pattern */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, opacity: 0.35 }}>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} style={{ width: 3, height: 3, borderRadius: "50%", background: "#42A5F5" }} />
          ))}
        </div>

        {/* Droplet Indicator Badge */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "rgba(21, 101, 192, 0.15)",
            border: "1px solid #2196F3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#42A5F5",
            boxShadow: "0 0 10px rgba(33, 150, 243, 0.3)"
          }}
        >
          <Droplet size={14} fill="#42A5F5" />
        </div>

        {/* Bottom Dot Grid Pattern */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, opacity: 0.35 }}>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} style={{ width: 3, height: 3, borderRadius: "50%", background: "#42A5F5" }} />
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
