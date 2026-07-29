"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calculator, ShieldCheck, Download, Mail, Info, FileText } from "lucide-react";

// US Cities with actual average annual rainfall
const US_CITIES = [
  { city: "Seattle, WA", annualRain: 38, description: "Pacific Northwest Maritime - Low intensity, high frequency" },
  { city: "Houston, TX", annualRain: 53, description: "Gulf Coast Subtropical - High intensity convective storms" },
  { city: "New York, NY", annualRain: 47, description: "Mid-Atlantic Humid - Varied seasonal storm intensities" },
  { city: "Phoenix, AZ", annualRain: 8, description: "Arid Southwest - High intensity flash flood risks" },
  { city: "Chicago, IL", annualRain: 38, description: "Midwest Continental - High convective summer rain" },
  { city: "Miami, FL", annualRain: 62, description: "South Florida Tropical - Extreme rainfall volume and sea level issues" }
];

// Hydrologic Soil Groups (USDA NRCS Soil Classification)
const SOIL_GROUPS = [
  { group: "A", name: "High Infiltration (Sand/Gravel)", desc: "Well-drained sands and gravels. Low runoff potential." },
  { group: "B", name: "Moderate Infiltration (Loam/Silt)", desc: "Moderately fine to moderately coarse textures." },
  { group: "C", name: "Slow Infiltration (Sandy Clay)", desc: "Fine textures, low infiltration. Impedes water transmission." },
  { group: "D", name: "Very Slow Infiltration (Clay/Wet)", desc: "Swelling clays or high water table. High runoff potential." }
];

// USDA NRCS Curve Numbers based on land use and soil group
const LAND_USES = [
  { 
    id: "paved", 
    label: "Paved Parking, Roofs & Driveways",
    cn: { A: 98, B: 98, C: 98, D: 98 },
    desc: "Impervious surfaces with no infiltration."
  },
  { 
    id: "commercial", 
    label: "Commercial Districts (85% Impervious)",
    cn: { A: 89, B: 92, C: 94, D: 95 },
    desc: "Downtown B2B and business districts."
  },
  { 
    id: "industrial", 
    label: "Industrial Districts (72% Impervious)",
    cn: { A: 81, B: 88, C: 91, D: 93 },
    desc: "Manufacturing plants, warehouses and yards."
  },
  { 
    id: "residential", 
    label: "Residential Lots (1/4 Acre, ~38% Impervious)",
    cn: { A: 61, B: 75, C: 83, D: 87 },
    desc: "Standard single family suburban housing layouts."
  },
  { 
    id: "open", 
    label: "Open Grass Space (Good Condition)",
    cn: { A: 39, B: 61, C: 74, D: 80 },
    desc: "Parks, lawns, golf courses, green buffers."
  }
];

export default function CalculatorClient() {
  const router = useRouter();

  // Selected parameters
  const [selectedCity, setSelectedCity] = useState(US_CITIES[2]); // New York
  const [soilGroup, setSoilGroup] = useState("B");
  const [landUseId, setLandUseId] = useState("commercial");
  const [area, setArea] = useState(50000); // sq ft
  const [areaUnit, setAreaUnit] = useState("sqft"); // sqft or acres
  const [designPrecip, setDesignPrecip] = useState(1.2); // inches

  // Preset templates
  const presets = [
    { label: "Seattle Commercial Site", city: US_CITIES[0], soil: "C", land: "commercial", area: 30000, unit: "sqft", precip: 1.0 },
    { label: "Houston Industrial Vault", city: US_CITIES[1], soil: "D", land: "industrial", area: 3.5, unit: "acres", precip: 1.5 },
    { label: "Chicago Shopping Center", city: US_CITIES[4], soil: "B", land: "paved", area: 120000, unit: "sqft", precip: 1.2 },
    { label: "Miami Suburban Buffer", city: US_CITIES[5], soil: "D", land: "residential", area: 12, unit: "acres", precip: 1.0 }
  ];

  const applyPreset = (preset: typeof presets[0]) => {
    setSelectedCity(preset.city);
    setSoilGroup(preset.soil);
    setLandUseId(preset.land);
    setArea(preset.area);
    setAreaUnit(preset.unit);
    setDesignPrecip(preset.precip);
  };

  // Convert area to sq ft for formulas
  const areaInSqFt = areaUnit === "acres" ? area * 43560 : area;

  // Get current Curve Number (CN) based on land use and soil group
  const currentLandUse = LAND_USES.find(lu => lu.id === landUseId) || LAND_USES[1];
  const curveNumber = currentLandUse.cn[soilGroup as "A" | "B" | "C" | "D"];

  // ──── USDA NRCS TR-55 HYDROLOGY ENGINE ────
  const S = (1000 / curveNumber) - 10;
  const Ia = 0.2 * S;

  let runoffDepth = 0;
  if (designPrecip > Ia) {
    runoffDepth = Math.pow(designPrecip - Ia, 2) / (designPrecip - Ia + S);
  }

  const runoffCubicFeet = areaInSqFt * (runoffDepth / 12);
  const runoffGallons = runoffCubicFeet * 7.48052;

  let wqvDepth = 0;
  if (1.0 > Ia) {
    wqvDepth = Math.pow(1.0 - Ia, 2) / (1.0 - Ia + S);
  }
  const wqvCubicFeet = areaInSqFt * (wqvDepth / 12);
  const wqvGallons = wqvCubicFeet * 7.48052;

  let annualRunoffDepth = 0;
  if (selectedCity.annualRain > Ia) {
    annualRunoffDepth = Math.pow(selectedCity.annualRain - Ia, 2) / (selectedCity.annualRain - Ia + S);
  }
  const annualRunoffGallons = areaInSqFt * (annualRunoffDepth / 12) * 7.48052;
  const annualTSSRemovedLbs = (annualRunoffGallons * 3.78541 * 150 * 0.85) / 453592;

  const isEISAPassed = designPrecip >= 1.2 && curveNumber < 75;
  const isNPDESPassed = wqvGallons > 0 && curveNumber < 90;
  const complianceScore = Math.min(
    100,
    Math.round(
      (100 - curveNumber) * 0.7 + 
      (designPrecip >= 1.2 ? 20 : 10) + 
      (soilGroup === "A" ? 10 : soilGroup === "B" ? 5 : 0)
    )
  );

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F8FAFC" }}>
      <Navbar />

      <div style={{ paddingTop: 140, paddingBottom: 80, flex: 1 }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px" }}>
          
          {/* Breadcrumb */}
          <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
            <span 
              style={{ color: "#0085f4", cursor: "pointer", transition: "color 0.2s" }} 
              onClick={() => router.push("/")}
              onMouseEnter={(e) => e.currentTarget.style.color = "#004aad"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#0085f4"}
            >
              Home
            </span>
            <span style={{ color: "#90CAF9" }}>/</span>
            <span style={{ color: "#004aad" }}>US Stormwater Calculator</span>
          </nav>

          {/* Page Heading */}
          <div style={{ marginBottom: 40 }}>
            <div className="pill-tag" style={{ marginBottom: 16 }}>
              <span className="dot" /> USDA NRCS TR-55 Hydrology Engine
            </div>
            <h1 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)", fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
              US EPA Stormwater & <span style={{ color: "#0085f4" }}>Compliance Calculator</span>
            </h1>
            <p style={{ color: "#0085f4", fontSize: 17, marginTop: 12, maxWidth: 900, lineHeight: 1.6, fontWeight: 500 }}>
              Analyze runoff volumes and EPA Water Quality Volumes using standard US civil engineering methods (NRCS TR-55 Curve Number). Choose actual US cities and hydrologic soil groups to generate realistic compliant drainage evaluations.
            </p>
          </div>

          {/* Preset Selector */}
          <div style={{ marginBottom: 32, background: "#ffffff", border: "1px solid #E2E8F0", padding: "20px 24px", borderRadius: 12, boxShadow: "0 4px 20px rgba(6,35,71,0.01)" }}>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#004aad", textTransform: "uppercase", display: "block", marginBottom: 12, letterSpacing: 0.5 }}>
              Apply Real US Project Presets:
            </span>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => applyPreset(preset)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: "1.5px solid #E2E8F0",
                    background: "#F8FAFC",
                    color: "#0085f4",
                    fontSize: 12,
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0085f4";
                    e.currentTarget.style.color = "#0085f4";
                    e.currentTarget.style.background = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.color = "#0085f4";
                    e.currentTarget.style.background = "#F8FAFC";
                  }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Calculator Layout Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 48 }} className="calc-layout">
            
            {/* Left Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              
              {/* Form Card */}
              <div style={{ background: "#ffffff", border: "1px solid #E2E8F0", borderRadius: 20, padding: 36, boxShadow: "0 4px 20px rgba(6,35,71,0.02)" }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "#004aad", textTransform: "uppercase", fontStyle: "italic", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #E2E8F0" }}>
                  1. Hydrologic Parameters
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  
                  {/* City Select */}
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 800, color: "#004aad", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      US Location Climate Profile:
                    </label>
                    <select
                      value={selectedCity.city}
                      onChange={(e) => {
                        const cityObj = US_CITIES.find(c => c.city === e.target.value);
                        if (cityObj) setSelectedCity(cityObj);
                      }}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1.5px solid #E2E8F0",
                        borderRadius: 8,
                        background: "#F8FAFC",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#004aad",
                        outline: "none"
                      }}
                    >
                      {US_CITIES.map((c) => (
                        <option key={c.city} value={c.city}>
                          {c.city} (Avg Annual Rain: {c.annualRain}")
                        </option>
                      ))}
                    </select>
                    <p style={{ fontSize: 11, color: "#0085f4", marginTop: 6, fontWeight: 500 }}>
                      * {selectedCity.description}
                    </p>
                  </div>

                  {/* Hydrologic Soil Group */}
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 800, color: "#004aad", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      USDA NRCS Hydrologic Soil Group (HSG):
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="soil-grid">
                      {SOIL_GROUPS.map((g) => {
                        const isActive = soilGroup === g.group;
                        return (
                          <button
                            key={g.group}
                            onClick={() => setSoilGroup(g.group)}
                            style={{
                              padding: "12px",
                              borderRadius: 8,
                              border: "1.5px solid",
                              borderColor: isActive ? "#0085f4" : "#E2E8F0",
                              background: isActive ? "rgba(21, 101, 192, 0.08)" : "#ffffff",
                              color: "#004aad",
                              cursor: "pointer",
                              transition: "all 0.2s"
                            }}
                          >
                            <div style={{ fontSize: 16, fontWeight: 900, color: isActive ? "#0085f4" : "#004aad" }}>Group {g.group}</div>
                            <div style={{ fontSize: 9, color: "#0085f4", marginTop: 4, fontWeight: 600, lineHeight: 1.2 }}>{g.group === "A" ? "Sand" : g.group === "B" ? "Loam" : g.group === "C" ? "Sandy Clay" : "Clay"}</div>
                          </button>
                        );
                      })}
                    </div>
                    <p style={{ fontSize: 11, color: "#0085f4", marginTop: 6, fontWeight: 500 }}>
                      * {SOIL_GROUPS.find(g => g.group === soilGroup)?.desc}
                    </p>
                  </div>

                  {/* Land Cover Type */}
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 800, color: "#004aad", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                      Land Use / Ground Cover Type:
                    </label>
                    <select
                      value={landUseId}
                      onChange={(e) => setLandUseId(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1.5px solid #E2E8F0",
                        borderRadius: 8,
                        background: "#F8FAFC",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#004aad",
                        outline: "none"
                      }}
                    >
                      {LAND_USES.map((lu) => (
                        <option key={lu.id} value={lu.id}>
                          {lu.label} (CN: {lu.cn[soilGroup as "A" | "B" | "C" | "D"]})
                        </option>
                      ))}
                    </select>
                    <p style={{ fontSize: 11, color: "#0085f4", marginTop: 6, fontWeight: 500 }}>
                      * {currentLandUse.desc}
                    </p>
                  </div>

                  {/* Drainage Area */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "center" }}>
                      <label style={{ fontSize: 13, fontWeight: 800, color: "#004aad", textTransform: "uppercase" }}>Total Drainage Watershed Area:</label>
                      <div style={{ display: "flex", background: "#F1F5F9", borderRadius: 6, padding: 2 }}>
                        <button
                          onClick={() => { setAreaUnit("sqft"); setArea(areaUnit === "acres" ? Math.round(area * 43560) : area); }}
                          style={{ border: "none", background: areaUnit === "sqft" ? "#fff" : "transparent", padding: "4px 8px", fontSize: 10, fontWeight: 800, borderRadius: 4, cursor: "pointer" }}
                        >
                          SQ FT
                        </button>
                        <button
                          onClick={() => { setAreaUnit("acres"); setArea(areaUnit === "sqft" ? parseFloat((area / 43560).toFixed(2)) : area); }}
                          style={{ border: "none", background: areaUnit === "acres" ? "#fff" : "transparent", padding: "4px 8px", fontSize: 10, fontWeight: 800, borderRadius: 4, cursor: "pointer" }}
                        >
                          ACRES
                        </button>
                      </div>
                    </div>
                    <input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(Math.max(0, parseFloat(e.target.value) || 0))}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1.5px solid #E2E8F0",
                        borderRadius: 8,
                        background: "#F8FAFC",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#004aad",
                        outline: "none"
                      }}
                    />
                  </div>

                  {/* Design Storm Depth Slider */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <label style={{ fontSize: 13, fontWeight: 800, color: "#004aad", textTransform: "uppercase" }}>Design Storm Precipitation Depth (P):</label>
                      <span style={{ fontSize: 14, fontWeight: 900, color: "#0085f4" }}>{designPrecip.toFixed(1)} inches</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="4.0"
                      step="0.1"
                      value={designPrecip}
                      onChange={(e) => setDesignPrecip(parseFloat(e.target.value))}
                      style={{ width: "100%", height: 6, borderRadius: 3, outline: "none", accentColor: "#0085f4", cursor: "pointer" }}
                    />
                    <p style={{ fontSize: 11, color: "#0085f4", marginTop: 4, fontWeight: 500 }}>
                      Precipitation depth for a standard 24-hr design storm event. EISA Sec 438 compliance threshold is 1.2" (95th percentile).
                    </p>
                  </div>

                </div>
              </div>

              {/* Engineering Method / Formula Card */}
              <div style={{ background: "#ffffff", border: "1px solid #E2E8F0", borderRadius: 20, padding: 36, boxShadow: "0 4px 20px rgba(6,35,71,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <Info size={18} color="#0085f4" />
                  <h4 style={{ fontSize: 14, fontWeight: 900, color: "#004aad", textTransform: "uppercase", letterSpacing: 0.5, margin: 0 }}>
                    USDA NRCS TR-55 Hydrology Equations Used:
                  </h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "#0085f4", fontFamily: "monospace", lineHeight: 1.5 }}>
                  <div>
                    <strong>1. Runoff Curve Number (CN)</strong> = {curveNumber}
                    <div style={{ color: "#8898AA", paddingLeft: 12 }}>Determined from USDA Soil Group {soilGroup} and {currentLandUse.label} type.</div>
                  </div>
                  <div>
                    <strong>2. Potential Maximum Retention (S)</strong> = (1000 / CN) - 10 = <strong>{S.toFixed(3)}"</strong>
                    <div style={{ color: "#8898AA", paddingLeft: 12 }}>S represents the max soil retention depth.</div>
                  </div>
                  <div>
                    <strong>3. Initial Abstraction (Ia)</strong> = 0.2 × S = <strong>{Ia.toFixed(3)}"</strong>
                    <div style={{ color: "#8898AA", paddingLeft: 12 }}>Ia represents surface ponds, interception, and initial infiltration.</div>
                  </div>
                  <div>
                    <strong>4. Runoff Depth (Q)</strong> = (P - Ia)² / (P - Ia + S) = <strong>{runoffDepth.toFixed(3)}"</strong>
                    <div style={{ color: "#8898AA", paddingLeft: 12 }}>Runoff depth in inches over the watershed area.</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              
              {/* Report Card */}
              <div 
                style={{ 
                  background: "#004aad", 
                  color: "#ffffff", 
                  borderRadius: 20, 
                  padding: 36, 
                  border: "2px solid #0085f4",
                  boxShadow: "0 20px 40px rgba(21,101,192,0.12)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{ position: "absolute", top: "-30%", right: "-30%", width: 250, height: 250, background: "radial-gradient(circle, rgba(33,150,243,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
                
                <h3 style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: 20, fontWeight: 900, textTransform: "uppercase", fontStyle: "italic", color: "#2196F3", marginBottom: 24 }}>
                  2. Hydrologic Analysis
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div>
                    <span style={{ fontSize: 11, color: "#90CAF9", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>Soil-Cover Curve Number (CN)</span>
                    <div style={{ fontSize: 28, fontWeight: 900, color: "#ffffff", marginTop: 4 }}>
                      {curveNumber}
                    </div>
                  </div>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                    <span style={{ fontSize: 11, color: "#90CAF9", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>Runoff Volume (Design Storm)</span>
                    <div style={{ fontSize: 32, fontWeight: 900, color: "#ffffff", fontFamily: "var(--font-barlow), sans-serif", fontStyle: "italic", marginTop: 4 }}>
                      {Math.round(runoffGallons).toLocaleString()} <span style={{ fontSize: 18, color: "#2196F3", fontStyle: "normal", fontWeight: 500 }}>GAL</span>
                    </div>
                    <span style={{ fontSize: 12, color: "#64B5F6", fontWeight: 500 }}>
                      Based on {runoffDepth.toFixed(3)}" runoff depth.
                    </span>
                  </div>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                    <span style={{ fontSize: 11, color: "#90CAF9", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>US EPA Water Quality Volume (WQV)</span>
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#ffffff", marginTop: 4 }}>
                      {Math.round(wqvGallons).toLocaleString()} <span style={{ fontSize: 14, color: "#90CAF9" }}>GAL</span>
                    </div>
                    <span style={{ fontSize: 12, color: "#64B5F6", fontWeight: 500 }}>
                      Required treatment capacity under standard NPDES rules.
                    </span>
                  </div>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
                    <span style={{ fontSize: 11, color: "#90CAF9", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>Est. Annual TSS Suspended Solids Captured</span>
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#ffffff", marginTop: 4 }}>
                      {Math.round(annualTSSRemovedLbs).toLocaleString()} <span style={{ fontSize: 14, color: "#90CAF9" }}>lbs / year</span>
                    </div>
                    <span style={{ fontSize: 12, color: "#64B5F6", fontWeight: 500 }}>
                      * Using H2 Industries catch basin filtration inserts (85% removal).
                    </span>
                  </div>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, color: "#90CAF9", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>EISA Sec. 438 Compliance</span>
                      <span style={{ fontSize: 13, fontWeight: 900, color: complianceScore >= 80 ? "#00E5FF" : "#FFB300" }}>{complianceScore}% Rating</span>
                    </div>
                    <div style={{ width: "100%", height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${complianceScore}%`,
                          background: complianceScore >= 80 ? "linear-gradient(90deg, #2196F3, #00E5FF)" : "linear-gradient(90deg, #FFB300, #FF5252)",
                          borderRadius: 3,
                          transition: "width 0.4s ease"
                        }}
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Compliance Guidance */}
              <div 
                style={{ 
                  background: "#ffffff", 
                  border: "1px solid #E2E8F0", 
                  borderRadius: 20, 
                  padding: 28,
                  boxShadow: "0 4px 20px rgba(6,35,71,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FileText size={18} color="#0085f4" />
                  <h4 style={{ fontSize: 13, fontWeight: 900, color: "#004aad", textTransform: "uppercase", letterSpacing: 0.5, margin: 0 }}>
                    US Regulatory Guidelines:
                  </h4>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "#0085f4", fontWeight: 500, lineHeight: 1.45 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: isEISAPassed ? "#00E5FF" : "#FFB300", marginTop: 6 }} />
                    <div>
                      <strong>EISA Section 438:</strong> {isEISAPassed ? "PASSED (Design Storm meets runoff controls)." : "CONDITIONAL (Requires runoff depth >= 1.2\" and lower soil/cover CN)."}
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: isNPDESPassed ? "#00E5FF" : "#FFB300", marginTop: 6 }} />
                    <div>
                      <strong>NPDES MS4 Permits:</strong> {isNPDESPassed ? "COMPLIANT (Stormwater treatment inserts recommended)." : "REQUIRES FILTERING (Impervious area demands structural BMP filtration)."}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                  <button
                    onClick={() => router.push("/#contact")}
                    style={{
                      flex: 1,
                      background: "#0085f4",
                      color: "#fff",
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: 6,
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      cursor: "pointer",
                      transition: "background 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#004aad"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#0085f4"}
                  >
                    Request Stamp drawing
                  </button>
                  
                  <button
                    onClick={() => { alert("Exporting certified hydrologic calculations..."); }}
                    style={{
                      background: "transparent",
                      border: "1px solid #0085f4",
                      color: "#0085f4",
                      padding: "12px 20px",
                      borderRadius: 6,
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(21, 101, 192, 0.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <Download size={14} /> Export Calc
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 960px) {
          .calc-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 480px) {
          .soil-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
