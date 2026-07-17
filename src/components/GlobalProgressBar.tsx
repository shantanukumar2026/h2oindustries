"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalProgressBar({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({ container: containerRef }); // tracks container scroll
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!isClient) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      width: 6,
      background: "rgba(255,255,255,0.05)",
      zIndex: 9999, // Ensure it sits on top of everything
      pointerEvents: "none"
    }}>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, #2196F3 0%, #00E5FF 100%)",
          transformOrigin: "top",
          scaleY,
          boxShadow: "-2px 0 10px rgba(33,150,243,0.5)"
        }}
      />
    </div>
  );
}
