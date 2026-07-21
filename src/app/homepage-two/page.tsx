"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import WhatWeGive from "@/components/WhatWeGive";
import Testimonials from "@/components/Testimonials";

// Original Technical Sections
import Solutions from "@/components/Solutions";
import TechnologyInnovation from "@/components/TechnologyInnovation";
import ResearchDevelopment from "@/components/ResearchDevelopment";
import InfrastructureFacilities from "@/components/InfrastructureFacilities";
import ManufacturingCapabilities from "@/components/ManufacturingCapabilities";
import ManufacturingProcess from "@/components/ManufacturingProcess";
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

export default function HomepageTwo() {
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
        
        {/* Story Section 1: The Genesis */}
        <PresentationSlide><WhoWeAre /></PresentationSlide>
        
        {/* Story Section 2: The Operations */}
        <PresentationSlide><WhatWeDo /></PresentationSlide>
        
        {/* Story Section 3: The Guarantee */}
        <PresentationSlide><WhatWeGive /></PresentationSlide>
        
        {/* Story Section 4: The Proof */}
        <PresentationSlide><Testimonials /></PresentationSlide>
        
        {/* Original Technical & Infrastructure Sections */}
        <PresentationSlide><Solutions /></PresentationSlide>
        <PresentationSlide><TechnologyInnovation /></PresentationSlide>
        <PresentationSlide><ResearchDevelopment /></PresentationSlide>
        
        <PresentationSlide><InfrastructureFacilities /></PresentationSlide>
        <PresentationSlide><ManufacturingCapabilities /></PresentationSlide>
        <PresentationSlide><ManufacturingProcess /></PresentationSlide>
        
        <PresentationSlide><CurbBoxFeature /></PresentationSlide>
        <PresentationSlide><Products /></PresentationSlide>
        
        <PresentationSlide><QualityCompliance /></PresentationSlide>
        <PresentationSlide><TechnicalStandards /></PresentationSlide>
        <PresentationSlide><Industries /></PresentationSlide>
        
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
