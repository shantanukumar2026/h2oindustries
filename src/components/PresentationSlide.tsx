"use client";

import { ReactNode } from "react";

interface PresentationSlideProps {
  children: ReactNode;
}

export default function PresentationSlide({ children }: PresentationSlideProps) {
  return (
    <div 
      className="presentation-slide"
      style={{ 
        width: "100%",
        position: "relative"
      }}
    >
      {children}
    </div>
  );
}
