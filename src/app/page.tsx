"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustGuarantee from "@/components/TrustGuarantee";
import Solutions from "@/components/Solutions";
import TechnologyInnovation from "@/components/TechnologyInnovation";
import ResearchDevelopment from "@/components/ResearchDevelopment";
import ManufacturingCapabilities from "@/components/ManufacturingCapabilities";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import InfrastructureFacilities from "@/components/InfrastructureFacilities";
import CurbBoxFeature from "@/components/CurbBoxFeature";
import Products from "@/components/Products";
import QualityCompliance from "@/components/QualityCompliance";
import TechnicalStandards from "@/components/TechnicalStandards";
import Industries from "@/components/Industries";
import GlobalSupplyNetwork from "@/components/GlobalSupplyNetwork";
import Sustainability from "@/components/Sustainability";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

import PresentationSlide from "@/components/PresentationSlide";
import GlobalProgressBar from "@/components/GlobalProgressBar";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <GlobalProgressBar containerRef={containerRef} />
      <Navbar />
      
      <main 
        ref={containerRef}
        className="w-full relative"
      >
        <PresentationSlide><Hero /></PresentationSlide>
        
        {/* 1. Introduction: Who we are */}
        <PresentationSlide><About /></PresentationSlide>
        <PresentationSlide><TrustGuarantee /></PresentationSlide>
        
        {/* 2. Innovation: The problems we solve and how we approach them */}
        <PresentationSlide><Solutions /></PresentationSlide>
        <PresentationSlide><TechnologyInnovation /></PresentationSlide>
        <PresentationSlide><ResearchDevelopment /></PresentationSlide>
        
        {/* 3. The Engine: Our facilities and how we build */}
        <PresentationSlide><InfrastructureFacilities /></PresentationSlide>
        <PresentationSlide><ManufacturingCapabilities /></PresentationSlide>
        <PresentationSlide><ManufacturingProcess /></PresentationSlide>
        
        {/* 4. The Output: What we actually produce */}
        <PresentationSlide><CurbBoxFeature /></PresentationSlide>
        <PresentationSlide><Products /></PresentationSlide>
        
        {/* 5. The Proof: Quality standards and real-world usage */}
        <PresentationSlide><QualityCompliance /></PresentationSlide>
        <PresentationSlide><TechnicalStandards /></PresentationSlide>
        <PresentationSlide><Industries /></PresentationSlide>
        
        {/* 6. The Scale & Future: Global reach and commitment */}
        <PresentationSlide><GlobalSupplyNetwork /></PresentationSlide>
        <PresentationSlide><Sustainability /></PresentationSlide>
        <PresentationSlide><Partners /></PresentationSlide>
        
        <PresentationSlide><Footer /></PresentationSlide>
      </main>

      <style>{`
        /* Hide scrollbar for the presentation container for a cleaner look */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
