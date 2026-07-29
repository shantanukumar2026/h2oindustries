export interface IndustryDetail {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  accent: string;
  overview: string;
  challenge: string;
  solution: string;
  keyStats: { value: string; label: string }[];
  applications: { title: string; desc: string; iconName: string }[];
  products: { name: string; sku: string; desc: string; spec: string }[];
  standards: { code: string; title: string; detail: string }[];
  caseStudy: {
    title: string;
    location: string;
    summary: string;
    impact: string;
  };
}

export const industriesData: Record<string, IndustryDetail> = {
  "municipal-water": {
    slug: "municipal-water",
    title: "Municipal Water & Public Utilities",
    subtitle: "Heavy-duty municipal waterworks castings, valve boxes, curb boxes, sampling stations, and AWWA compliant pipe restraint fittings.",
    tagline: "MUNICIPAL WATERWORKS",
    heroImage: "/images/4.jpeg",
    accent: "#2196F3",
    overview: "H2 Industries supplies city water authorities, regional utility districts, and municipal public works departments with high-integrity water infrastructure components designed to withstand decades of continuous service and traffic loads.",
    challenge: "Aging municipal distribution networks suffer from pipe joint separation, valve box subsidence, environmental contamination, and high maintenance costs caused by non-standardized waterworks castings.",
    solution: "Our precision-moulded ductile iron waterworks products and composite sampling enclosures exceed AWWA C515 and AASHTO H-20 standards, ensuring leak-free performance and zero rework during municipal road resurfacing.",
    keyStats: [
      { value: "350 PSI", label: "Working Pressure Rating" },
      { value: "100%", label: "Lead-Free NSF 61 Certified" },
      { value: "50+ Yrs", label: "Design Service Life" },
      { value: "H-20 / HS-20", label: "AASHTO Traffic Rated" }
    ],
    applications: [
      {
        title: "Potable Water Distribution",
        desc: "Mainline gate valves, Mechanical Joint (MJ) fittings, and restrained glands engineered for PVC and ductile iron mains.",
        iconName: "Droplet"
      },
      {
        title: "Curb Box & Meter Access",
        desc: "Precision telescoping curb boxes and arch pattern base boxes for service shut-offs and residential meter connections.",
        iconName: "Box"
      },
      {
        title: "Stormwater Outfall Sampling",
        desc: "Modular sampling stations providing environmental technicians safe, real-time access to municipal stormwater runoff.",
        iconName: "Activity"
      },
      {
        title: "Roadway Grade Adjustment",
        desc: "Specialty extension rings and risers enabling rapid valve box height adjustments during asphalt resurfacing.",
        iconName: "Layers"
      }
    ],
    products: [
      {
        name: "H2 Telescoping Curb Box (Erie & Minneapolis Pattern)",
        sku: "H2-CB-9000",
        desc: "Heavy duty cast iron curb box with brass pentagon plug and adjustable telescoping upper section.",
        spec: "ASTM A48 Class 35B / AWWA Compliant"
      },
      {
        name: "H2 Resilient Wedge Gate Valve (NRS & OS&Y)",
        sku: "H2-GV-RW250",
        desc: "Fusion bonded epoxy coated ductile iron gate valve providing bubble-tight shutoff on water mains.",
        spec: "AWWA C515 / NSF 61 / NSF 372"
      },
      {
        name: "H2 Wedge-Action Restraint Gland (Series 4000)",
        sku: "H2-JR-4000",
        desc: "Auto-torque twist-off nut wedge restraint gland for Ductile Iron and AWWA C900 PVC pipe.",
        spec: "350 PSI Rated / AWWA C111"
      }
    ],
    standards: [
      { code: "AWWA C515", title: "Resilient-Seated Gate Valves", detail: "Reduced-wall ductile-iron body for water supply service." },
      { code: "AASHTO H-20", title: "Highway Bridge & Roadway Load", detail: "Certified to withstand 32,000 lb axle loads." },
      { code: "NSF/ANSI 61", title: "Drinking Water System Components", detail: "Health effects evaluation for potable water contact." }
    ],
    caseStudy: {
      title: "Metro Utility Water Main Upgrade",
      location: "Central Texas Municipal Water District",
      summary: "Supplied over 4,500 mechanical joint restraint glands and telescoping valve boxes for a 38-mile municipal water distribution expansion.",
      impact: "Zero installation defects recorded and 30% reduction in installation labor time using H2 auto-torque twist-off bolts."
    }
  },
  "marine-coastal": {
    slug: "marine-coastal",
    title: "Marine & Coastal Infrastructure",
    subtitle: "Anti-corrosive, saltwater-resistant marine castings, outfall monitoring stations, and coastal stormwater containment systems.",
    tagline: "COASTAL & OCEAN PROTECTION",
    heroImage: "/images/5.jpeg",
    accent: "#0288D1",
    overview: "H2 Industries designs specialized coastal water management hardware engineered to withstand salt-fog exposure, tidal surges, and aggressive marine chemical environments.",
    challenge: "Coastal outfalls suffer rapid salt-spray corrosion, marine biofouling, and storm-surge backflow that compromise urban coastal drainage systems.",
    solution: "We utilize Corten low-alloy steels, marine-grade fusion-bonded epoxy coatings, and non-corrodible polymer composites that prevent ocean pollution at stormwater discharge points.",
    keyStats: [
      { value: "Corten Steel", label: "ASTM A242 Low-Alloy" },
      { value: "FBE Coated", label: "Salt-Fog Resistant" },
      { value: "Zero", label: "Marine Bio-Toxicity" },
      { value: "100%", label: "Coastal Surge Compliant" }
    ],
    applications: [
      {
        title: "Tidal Outfall Control",
        desc: "Check valves, flap gates, and heavy marine outfall structures preventing tidal intrusion into urban stormwater networks.",
        iconName: "Waves"
      },
      {
        title: "Port & Dockside Drainage",
        desc: "Heavy-duty coastal trench grates and catch basins engineered for port container forklifts and crane loadings.",
        iconName: "Anchor"
      },
      {
        title: "Ocean Pollution Interception",
        desc: "Bespoke sampling ports built directly into coastal outfall conduits to monitor micro-plastics and heavy metals.",
        iconName: "ShieldAlert"
      }
    ],
    products: [
      {
        name: "H2 Corten T-Head Bolt & Marine Gasket Sets",
        sku: "H2-PA-MARINE",
        desc: "High-strength Corten low-alloy steel bolts and marine EPDM gasket packs for salt water submerged joints.",
        spec: "ASTM A242 / AWWA C111"
      },
      {
        name: "H2 Coastal Stormwater Outfall Sampling Module",
        sku: "H2-SS-MARINE",
        desc: "Weatherproof polymer enclosure housing automated water quality sampling units near saltwater outfalls.",
        spec: "NEMA 4X / IP66 Weatherproof"
      }
    ],
    standards: [
      { code: "ASTM A242", title: "High-Strength Low-Alloy Structural Steel", detail: "Atmospheric corrosion resistance 2x greater than carbon steel." },
      { code: "NEMA 4X", title: "Enclosure Protection Standard", detail: "Protection against corrosion, windblown dust, and rain." }
    ],
    caseStudy: {
      title: "Coastal Stormwater Outfall Monitoring",
      location: "Gulf Coast Logistics & Port Facility",
      summary: "Deployed 24 anti-corrosive sampling vaults along a major shipping channel to intercept industrial runoff prior to bay discharge.",
      impact: "Achieved 100% compliance with EPA coastal water discharge mandates across 3 consecutive years."
    }
  },
  "civil-infrastructure": {
    slug: "civil-infrastructure",
    title: "Civil Infrastructure & Transportation",
    subtitle: "Highway-grade storm grates, bridge drainage units, heavy-duty manhole frames, and utility vaults built for extreme wheel loads.",
    tagline: "CIVIL INFRASTRUCTURE",
    heroImage: "/images/2.jpeg",
    accent: "#607D8B",
    overview: "H2 Industries supplies civil engineering contractors and transportation authorities with rugged grey and ductile iron castings certified for interstate highways, airports, and heavy logistics corridors.",
    challenge: "High-density vehicle traffic causes frequent frame cracking, cover displacement, and drainage failure on major civil roadways.",
    solution: "Our heavy-duty castings are precision-machined to AASHTO M306 standards, ensuring rattle-free seat contact, superior hydraulic capacity, and maximum structural safety.",
    keyStats: [
      { value: "40,000 lbs", label: "Proof Load AASHTO M306" },
      { value: "Class 35B", label: "ASTM A48 Grey Iron" },
      { value: "Vandal-Proof", label: "Internal Lock Options" },
      { value: "100%", label: "TxDOT & DOT Approved" }
    ],
    applications: [
      {
        title: "Highway Storm Inlets",
        desc: "Vane-grate curb inlets and combination catch basin covers maximizing water capture efficiency on high-speed expressways.",
        iconName: "Truck"
      },
      {
        title: "Bridge Deck Drains",
        desc: "Heavy-wall ductile iron scuppers and downspout expansion fittings designed for bridge vibration and thermal expansion.",
        iconName: "Building2"
      },
      {
        title: "Airport & Cargo Aprons",
        desc: "Extra-heavy duty airport-rated frames and grates rated for 100,000+ lb wheel loads on airfield runways.",
        iconName: "Compass"
      }
    ],
    products: [
      {
        name: "H2 Heavy-Duty AASHTO H-20 Curb Inlet Frame & Grate",
        sku: "H2-CI-2000",
        desc: "Bicycle-safe vane grate frame assembly with high hydraulic capacity curb opening.",
        spec: "AASHTO M306 / ASTM A48 Class 35B"
      },
      {
        name: "H2 Municipal Extension Ring System",
        sku: "H2-EX-RISER",
        desc: "Precision machined iron riser rings allowing rapid road elevation adjustments during asphalt paving.",
        spec: "AASHTO H-20 Traffic Rated"
      }
    ],
    standards: [
      { code: "AASHTO M306", title: "Drainage Structure Castings", detail: "Requires 40,000 lb proof load testing for H-20 rating." },
      { code: "ASTM A48", title: "Gray Iron Castings", detail: "Class 35B specification for high compressive strength." }
    ],
    caseStudy: {
      title: "Interstate Highway Corridor Expansion",
      location: "North Texas Transportation Authority",
      summary: "Delivered 1,200 heavy-duty curb inlet assemblies and grade rings for a 22-mile highway widening project.",
      impact: "Reduced highway lane closure time during paving operations by over 40% using adjustable extension rings."
    }
  },
  "environmental": {
    slug: "environmental",
    title: "Environmental Water Quality",
    subtitle: "Modular sampling stations, micro-pollutant interceptors, and environmental water quality monitoring access points.",
    tagline: "ENVIRONMENTAL MONITORING",
    heroImage: "/images/1.jpeg",
    accent: "#43A047",
    overview: "H2 Industries collaborates with environmental consultants, water resource managers, and conservation agencies to build state-of-the-art monitoring infrastructure that protects natural watersheds.",
    challenge: "Traditional stormwater infrastructure provides no mechanism for accurate water quality testing or micro-pollutant capture before discharge into rivers and oceans.",
    solution: "We engineer modular sampling stations and hydrodynamic pollutant interceptors that provide reliable data access while actively filtering pollutants.",
    keyStats: [
      { value: "ISO 14001", label: "Environmental Management" },
      { value: "Real-Time", label: "Sensor Access Ports" },
      { value: "85%+", label: "Polymer Material Recovery" },
      { value: "Zero", label: "VOC Chemical Emissions" }
    ],
    applications: [
      {
        title: "Watershed Monitoring",
        desc: "Secure, tamper-evident sampling vaults for stream gauging and continuous biological water quality monitoring.",
        iconName: "Leaf"
      },
      {
        title: "Stormwater Interception",
        desc: "Source-control filter inserts and sampling chambers designed to trap sediment, oils, and floating trash.",
        iconName: "Filter"
      },
      {
        title: "Industrial Effluent Sampling",
        desc: "Compliant monitoring stations for manufacturing facilities subject to strict NPDES stormwater discharge permits.",
        iconName: "Activity"
      }
    ],
    products: [
      {
        name: "H2 Modular Sampling Station Vault",
        sku: "H2-SS-MODULAR",
        desc: "Insulated, weatherproof enclosure with internal mounting rails for automatic water samplers and telemetry units.",
        spec: "NEMA 4X / UV Resistant Polymer"
      },
      {
        name: "H2 Hydro-Interceptor Inlet Filter",
        sku: "H2-HI-FILTER",
        desc: "Heavy-duty geotextile and hydrocarbon-absorbing inlet insert for municipal catch basins.",
        spec: "EPA NPDES Phase II Compliant"
      }
    ],
    standards: [
      { code: "ISO 14001", title: "Environmental Management System", detail: "Certified manufacturing process focused on sustainability." },
      { code: "NPDES Phase II", title: "Stormwater Regulations", detail: "Meets EPA standards for urban stormwater pollution control." }
    ],
    caseStudy: {
      title: "River Basin Protection Project",
      location: "State Department of Natural Resources",
      summary: "Installed 35 modular sampling stations across critical river tributaries to track urban runoff pollution levels.",
      impact: "Provided environmental scientists with uninterrupted 24/7 water sampling data with 99.8% uptime."
    }
  },
  "industrial-facilities": {
    slug: "industrial-facilities",
    title: "Industrial Facilities & Energy",
    subtitle: "High-pressure process water drainage, chemical sampling ports, electrolyser water systems, and heavy industrial plant infrastructure.",
    tagline: "INDUSTRIAL INFRASTRUCTURE",
    heroImage: "/images/3.jpeg",
    accent: "#EF6C00",
    overview: "H2 Industries designs robust industrial water infrastructure built to meet the rigorous safety and pressure demands of chemical plants, refineries, clean energy hydrogen facilities, and manufacturing complexes.",
    challenge: "Industrial process water and clean energy installations involve aggressive chemicals, high operating pressures, and continuous thermal cycling that erode ordinary piping products.",
    solution: "Our high-pressure flanged ductile iron fittings, fusion-bonded epoxy linings, and chemical-resistant sampling vaults ensure leak-proof operational security.",
    keyStats: [
      { value: "350 PSI", label: "High Pressure Rating" },
      { value: "FBE Lined", label: "AWWA C116 Epoxy" },
      { value: "Class 250", label: "Heavy Flange Pattern" },
      { value: "Clean-Energy", label: "Hydrogen Ready" }
    ],
    applications: [
      {
        title: "Clean Energy & Electrolysers",
        desc: "Water treatment and supply piping infrastructure engineered for green hydrogen production and electrolyser cooling.",
        iconName: "Zap"
      },
      {
        title: "Chemical Process Drainage",
        desc: "Epoxy-lined ductile iron tees, bends, and flanged manifolds resistant to aggressive process chemicals.",
        iconName: "Flame"
      },
      {
        title: "Refinery Fire Protection",
        desc: "High-pressure AWWA gate valves and heavy-duty indicator posts for industrial plant fire water loops.",
        iconName: "ShieldCheck"
      }
    ],
    products: [
      {
        name: "H2 AWWA C110 Heavy-Wall Flanged Ductile Fittings",
        sku: "H2-DI-C110-FLG",
        desc: "Class 125/250 heavy-wall flanged ductile iron fittings for plant vault and high-pressure process piping.",
        spec: "AWWA C110 / AWWA C116 FBE Coated"
      },
      {
        name: "H2 High-Pressure Restrained Pipe Coupling",
        sku: "H2-AA-MJ2-IND",
        desc: "Integrated mechanical joint restraint coupling built for rigid high-pressure plant piping networks.",
        spec: "350 PSI Working Pressure / 2:1 Safety Factor"
      }
    ],
    standards: [
      { code: "AWWA C110", title: "Full-Body Ductile Iron Fittings", detail: "Heavy wall pattern engineered for severe industrial service." },
      { code: "AWWA C116", title: "Protective Epoxy Coatings", detail: "Fusion-bonded epoxy coating for internal and external corrosion protection." }
    ],
    caseStudy: {
      title: "Clean Energy Plant Hydro-System",
      location: "Industrial Hydrogen Hub Facility",
      summary: "Engineered and delivered high-pressure flanged manifolds and sampling vaults for a major clean energy electrolyser installation.",
      impact: "Passed 100% hydrostatic testing at 525 PSI (1.5x working pressure) without a single leak or joint deflection."
    }
  },
  "agricultural": {
    slug: "agricultural",
    title: "Agricultural & Rural Water Networks",
    subtitle: "Irrigation valve boxes, high-capacity drainage basins, and rural water supply distribution fittings built for harsh soil environments.",
    tagline: "AGRICULTURAL INFRASTRUCTURE",
    heroImage: "/images/4.jpeg",
    accent: "#558B2F",
    overview: "H2 Industries supplies rural water supply corporations, irrigation districts, and agricultural processors with rugged, soil-resistant water control hardware designed for vast distribution networks.",
    challenge: "Agricultural soils contain high mineral content, aggressive fertilizers, and heavy farm machinery loads that destroy lightweight plastic boxes.",
    solution: "We engineer UV-stabilized, impact-resistant polymer meter boxes and heavy cast iron valve enclosures that withstand farm traffic and acidic soil corrosion.",
    keyStats: [
      { value: "UV Stabilized", label: "Sunlight Resistant" },
      { value: "Heavy-Duty", label: "Farm Equipment Rated" },
      { value: "Dirt-Tite", label: "Debris Proof Covers" },
      { value: "Low Maintenance", label: "Decades of Service" }
    ],
    applications: [
      {
        title: "Irrigation Control Vaults",
        desc: "Large body meter and valve boxes housing motorized irrigation control valves and backflow preventers.",
        iconName: "Sprout"
      },
      {
        title: "Rural Water Supply Mains",
        desc: "AWWA C153 compact ductile iron fittings and wedge restraints for long-distance rural water supply pipelines.",
        iconName: "Droplets"
      },
      {
        title: "Agricultural Runoff Protection",
        desc: "Settling basins and sampling ports allowing agricultural operators to monitor irrigation runoff compliance.",
        iconName: "Shield"
      }
    ],
    products: [
      {
        name: "H2 Heavy Polymer Irrigation Meter Box",
        sku: "H2-MB-AGRI",
        desc: "High-impact polymer valve box with reinforced ribbing and lockable reader lid.",
        spec: "ASTM D638 High Impact / UV Protected"
      },
      {
        name: "H2 Restraint Harness for Agricultural PVC Pipe",
        sku: "H2-JR-1100-AG",
        desc: "Split serrated restraint ring assembly engineered to secure push-on PVC irrigation lines against water hammer.",
        spec: "High-Strength Corten Steel Tie Rods"
      }
    ],
    standards: [
      { code: "ASTM D638", title: "Polymer Tensile Properties", detail: "Certified high impact resistance under field temperature swings." },
      { code: "AWWA C153", title: "Ductile Iron Compact Fittings", detail: "Lightweight, space-saving fittings ideal for rural trenching." }
    ],
    caseStudy: {
      title: "Regional Irrigation District Modernization",
      location: "Valley Agricultural Water Authority",
      summary: "Provided 2,800 heavy-duty polymer valve enclosures and PVC joint restraints across a 60,000-acre agricultural irrigation network.",
      impact: "Eliminated valve box damage from tractor traffic and reduced annual maintenance service calls by 75%."
    }
  }
};
