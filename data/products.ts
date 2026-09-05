export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "cream" | "oil" | "serum" | "treatment" | "mist";
  tagline: string;
  description: string;
  volume: string;
  price: string;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  badge?: string;
  keyActives: {
    name: string;
    origin: string;
    concentration?: string;
    benefit: string;
  }[];
  clinicalResults: {
    stat: string;
    claim: string;
  }[];
  ritual: {
    step: string;
    title: string;
    instruction: string;
    timing: "Morning" | "Evening" | "Both";
  }[];
  fullIngredients: string[];
  dimensions: string;
  packagingMaterial: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "suwani-creme-dor",
    slug: "suwani-creme-dor",
    name: "Suwani Crème d'Or",
    subtitle: "24K Gilded Restorative Emulsion",
    category: "cream",
    tagline: "Cellular rejuvenation housed in a 24K gilded architectural vessel",
    description:
      "A transcendent barrier-restoring emulsion whipped to weightless silk density. Infused with biomimetic ceramides NP/AP, cold-pressed Kyoto Camellia seed oil, and Alpine Edelweiss stem cultures. Protects cellular integrity and restores lipid balance with 98.7% physiological bioavailability.",
    volume: "50 ML / 1.7 FL. OZ.",
    price: "$185 USD",
    rating: 4.98,
    reviewsCount: 146,
    heroImage: "/cream-tub/ezgif-frame-001.jpg",
    badge: "Flagship Edition",
    dimensions: "68mm × 54mm • 240g net weight",
    packagingMaterial: "Solid-weighted brass alloy with brushed 24K gold finish & hermetic disc",
    keyActives: [
      {
        name: "Bio-Ceramides NP/AP",
        origin: "Biomimetic Ferment",
        concentration: "3.5%",
        benefit: "Reinforces damaged stratum corneum and prevents trans-epidermal moisture loss.",
      },
      {
        name: "Kyoto Camellia Japonica",
        origin: "Uji, Kyoto (Cold-Pressed)",
        concentration: "12%",
        benefit: "Rich in Oleic acid (Omega-9) for featherlight deep epidermis delivery.",
      },
      {
        name: "Alpine Edelweiss Culture",
        origin: "Swiss Valais (3,000m)",
        concentration: "2.0%",
        benefit: "Extreme photo-oxidative defense against UV damage and urban particulate matter.",
      },
      {
        name: "Botanical Squalane",
        origin: "Spanish Cold-Pressed Olives",
        concentration: "8.0%",
        benefit: "Matches human skin sebum structure for instantaneous velvety absorption.",
      },
    ],
    clinicalResults: [
      { stat: "98.7%", claim: "Immediate lipid barrier replenishment within 15 minutes of application" },
      { stat: "100 Hrs", claim: "Continuous hydration reservoir maintained in clinical corneometry tests" },
      { stat: "-42%", claim: "Reduction in appearance of oxidative micro-stress lines over 28 days" },
    ],
    ritual: [
      {
        step: "01",
        title: "Unseal the Vessel",
        instruction: "Lift the weighted 24K gold cap and remove the hermetic freshness disc.",
        timing: "Both",
      },
      {
        step: "02",
        title: "Thermal Activation",
        instruction: "Warm a measured pearl between clean fingertips for 3 seconds to activate phyto-lipids.",
        timing: "Both",
      },
      {
        step: "03",
        title: "Orbital Press",
        instruction: "Gently press into face, neck, and décolleté using sweeping upward strokes until absorbed.",
        timing: "Both",
      },
    ],
    fullIngredients: [
      "Rosa Damascena Flower Water",
      "Camellia Japonica Seed Oil",
      "Squalane",
      "Caprylic/Capric Triglyceride",
      "Ceramide NP",
      "Ceramide AP",
      "Phytosphingosine",
      "Leontopodium Alpinum (Edelweiss) Callus Culture Extract",
      "Glycerin",
      "Cetearyl Olivate",
      "Sorbitan Olivate",
      "Sodium Hyaluronate",
      "Tocopherol (Vitamin E)",
      "Helianthus Annuus Seed Oil",
      "Xanthan Gum",
      "Gold Flakes (24K)",
    ],
  },
  {
    id: "suwani-l-huile-celeste",
    slug: "suwani-l-huile-celeste",
    name: "L'Huile Céleste",
    subtitle: "Active Radiance Cellular Elixir",
    category: "oil",
    tagline: "Cold-extracted lipid concentrate for porcelain luminescence",
    description:
      "A concentrated botanical nectar delivering seven cold-pressed precious oils. Enriched with prickly pear seed, wild rosehip, and pure plant squalane, L'Huile Céleste sinks instantaneously into the epidermis, leaving zero grease and an incandescent velvet glow.",
    volume: "30 ML / 1.0 FL. OZ.",
    price: "$160 USD",
    rating: 4.95,
    reviewsCount: 112,
    heroImage: "/cream-tub/ezgif-frame-045.jpg",
    badge: "Bestseller",
    dimensions: "34mm × 98mm • 180g net weight",
    packagingMaterial: "UV-protective obsidian crystal glass with gold precision dropper",
    keyActives: [
      {
        name: "Organic Prickly Pear Seed",
        origin: "Moroccan High Atlas",
        concentration: "15%",
        benefit: "Highest natural concentration of Vitamin E (Tocopherol) for radical free-radical defense.",
      },
      {
        name: "Wild Chilean Rosehip",
        origin: "Patagonian Andes",
        concentration: "20%",
        benefit: "Rich in trans-retinoic acid to naturally soften hyperpigmentation and brighten complexion.",
      },
      {
        name: "Kalahari Melon Seed",
        origin: "Sub-Saharan Reserves",
        concentration: "10%",
        benefit: "Potent linoleic acid profile that dissolves sebum plugs while nourishing.",
      },
    ],
    clinicalResults: [
      { stat: "42 Sec", claim: "Average absorption time to a velvety dry-touch finish" },
      { stat: "+280%", claim: "Increase in skin luminescence measured by spectrophotometry" },
      { stat: "96.2%", claim: "Of participants noted smoother texture after 14 days" },
    ],
    ritual: [
      {
        step: "01",
        title: "Dispense",
        instruction: "Press the dropper bulb to draw 3-4 golden drops into the palm.",
        timing: "Both",
      },
      {
        step: "02",
        title: "Inhale & Press",
        instruction: "Inhale the natural botanic aroma, then press firmly across forehead, cheeks, and neck.",
        timing: "Both",
      },
    ],
    fullIngredients: [
      "Opuntia Ficus-Indica (Prickly Pear) Seed Oil",
      "Rosa Canina (Rosehip) Seed Oil",
      "Squalane",
      "Citrullus Lanatus (Kalahari Melon) Seed Oil",
      "Sclerocarya Birrea (Marula) Seed Oil",
      "Citrus Aurantium (Neroli) Flower Extract",
      "Tocopherol",
    ],
  },
  {
    id: "suwani-serum-bakuchiol",
    slug: "suwani-serum-bakuchiol",
    name: "Sérum Phyto-Cellulaire",
    subtitle: "2% Bio-Bakuchiol Collagen Renewal",
    category: "serum",
    tagline: "Clean botanical retinol alternative for cellular density and bounce",
    description:
      "A clinical-grade cellular activator providing the collagen-stimulating efficacy of retinol without photosensitivity or irritation. Formulated with 2% pure purified Bakuchiol from Psoralea Corylifolia paired with micro-copper tripeptides.",
    volume: "30 ML / 1.0 FL. OZ.",
    price: "$175 USD",
    rating: 4.92,
    reviewsCount: 88,
    heroImage: "/cream-tub/ezgif-frame-020.jpg",
    badge: "Clinical Actives",
    dimensions: "34mm × 102mm • 185g net weight",
    packagingMaterial: "Double-walled amber glass vial with brushed gold pipette",
    keyActives: [
      {
        name: "Purified Bakuchiol 2%",
        origin: "Organic Psoralea Seed",
        concentration: "2.0%",
        benefit: "Stimulates Type I and IV collagen synthesis without redness, peeling, or sun sensitivity.",
      },
      {
        name: "Copper Tripeptide-1",
        origin: "Cellular Peptide Complex",
        concentration: "1.0%",
        benefit: "Accelerates micro-tissue repair and restores cellular spring elasticity.",
      },
      {
        name: "Blue Tansy Chamazulene",
        origin: "Moroccan Harvest",
        concentration: "0.5%",
        benefit: "Calms inflammation cascades and provides serene natural indigo hue.",
      },
    ],
    clinicalResults: [
      { stat: "+38%", claim: "Increase in pro-collagen synthesis in human dermal fibroblast assays" },
      { stat: "0%", claim: "Reported photosensitivity or erythema flare-ups during daytime trials" },
      { stat: "94.5%", claim: "Observed visible firming and jawline contour refinement after 6 weeks" },
    ],
    ritual: [
      {
        step: "01",
        title: "Layering Order",
        instruction: "Apply directly after cleansing onto slightly damp skin prior to creams or oils.",
        timing: "Both",
      },
      {
        step: "02",
        title: "Glide",
        instruction: "Glide upwards along the jawline and cheekbones using gentle lifting strokes.",
        timing: "Both",
      },
    ],
    fullIngredients: [
      "Aloe Barbadensis Leaf Juice",
      "Bakuchiol",
      "Copper Tripeptide-1",
      "Tanacetum Annuum (Blue Tansy) Flower Oil",
      "Sodium Hyaluronate",
      "Centella Asiatica Extract",
      "Glycerin",
      "Aqua (Botanical Distillate)",
      "Potassium Sorbate",
    ],
  },
  {
    id: "suwani-nectar-resurfacant",
    slug: "suwani-nectar-resurfacant",
    name: "Nectar Resurfaçant",
    subtitle: "Bioactive Papaya Enzyme & Hibiscus Acid Peel",
    category: "treatment",
    tagline: "Gentle biological resurfacing for glass-smooth porcelain texture",
    description:
      "A biological exfoliation nectar that dissolves cellular adhesions without mechanical friction or burning acids. Fermented papaya and pineapple proteases gently lift away dead keratinocytes, unveiling radiant, luminous new skin.",
    volume: "100 ML / 3.4 FL. OZ.",
    price: "$115 USD",
    rating: 4.97,
    reviewsCount: 94,
    heroImage: "/cream-tub/ezgif-frame-060.jpg",
    badge: "Atelier Award",
    dimensions: "45mm × 120mm • 260g net weight",
    packagingMaterial: "Frosted obsidian glass flask with silicone dispenser nozzle",
    keyActives: [
      {
        name: "Fermented Papaya Enzymes",
        origin: "Tropical Fermentation",
        concentration: "5.0%",
        benefit: "Targeted proteolysis that digests dead surface proteins without disturbing living tissue.",
      },
      {
        name: "Hibiscus Sabdariffa Flower Acids",
        origin: "Egyptian Botanical Valley",
        concentration: "4.0%",
        benefit: "Naturally high in pyruvic and citric acids to accelerate cellular turnover.",
      },
      {
        name: "Raw High-Alpine Honey",
        origin: "Swiss Mountain Meadows",
        concentration: "8.0%",
        benefit: "Deep osmotic humectant that soothes and quenches during exfoliation.",
      },
    ],
    clinicalResults: [
      { stat: "3 Uses", claim: "To visibly refine skin roughness and clear micro-congestion" },
      { stat: "99.1%", claim: "Noted zero redness or irritation post-treatment" },
      { stat: "+85%", claim: "Improvement in overall light reflection and makeup adhesion" },
    ],
    ritual: [
      {
        step: "01",
        title: "Application",
        instruction: "Smooth a thin golden veil over dry, cleansed skin. Avoid eye contours.",
        timing: "Evening",
      },
      {
        step: "02",
        title: "Enzymatic Bloom",
        instruction: "Leave undisturbed for 10 minutes. A gentle warming tingle signals active proteolysis.",
        timing: "Evening",
      },
      {
        step: "03",
        title: "Tepid Rinse",
        instruction: "Rinse with warm water or a damp muslin cloth. Follow with Suwani Crème d'Or.",
        timing: "Evening",
      },
    ],
    fullIngredients: [
      "Mel (Alpine Honey)",
      "Carica Papaya (Papaya) Fruit Ferment Extract",
      "Hibiscus Sabdariffa Flower Extract",
      "Bromelain",
      "Lactobacillus Ferment",
      "Glycerin",
      "Aqua (Floral Water)",
      "Hydroxyethylcellulose",
      "Citrus Aurantium Dulcis Oil",
    ],
  },
  {
    id: "suwani-baume-nuit",
    slug: "suwani-baume-nuit",
    name: "Baume Réparateur Céleste",
    subtitle: "Overnight Intensive Cellular Cocoon",
    category: "treatment",
    tagline: "Anhydrous restorative botanical wax that seals repair throughout REM sleep",
    description:
      "A concentrated anhydrous restorative balm designed for nighttime barrier reconstruction. Formulated without water or synthetics, it warms on contact with the skin to envelop the face in a breathable, nourishing cocoon that prevents overnight moisture evaporation.",
    volume: "50 ML / 1.7 FL. OZ.",
    price: "$195 USD",
    rating: 4.96,
    reviewsCount: 76,
    heroImage: "/cream-tub/ezgif-frame-080.jpg",
    badge: "Night Intensive",
    dimensions: "65mm × 50mm • 220g net weight",
    packagingMaterial: "Solid obsidian porcelain jar with brushed gold airtight lid",
    keyActives: [
      {
        name: "Wild Amazonian Murumuru",
        origin: "Sustainable Harvest, Acre Basin",
        concentration: "18%",
        benefit: "Rich in lauric and myristic fatty acids that match natural epidermal intercellular cement.",
      },
      {
        name: "Evening Primrose Bio-Oil",
        origin: "Cold-Pressed French Alps",
        concentration: "12%",
        benefit: "Massive Gamma-Linolenic Acid (GLA) content that calms cellular inflammatory cascades.",
      },
      {
        name: "Moroccan Frankincense Resin",
        origin: "Wildcrafted Boswellia",
        concentration: "1.5%",
        benefit: "Ancestral skin-toning resin that supports natural cellular rejuvenation cycles.",
      },
    ],
    clinicalResults: [
      { stat: "Overnight", claim: "Complete stratum corneum relief from extreme weather and dehydration" },
      { stat: "+320%", claim: "Moisture retention benchmarked against standard commercial night creams" },
      { stat: "98.2%", claim: "Woke with noticeably plumper, calmer, and supple skin" },
    ],
    ritual: [
      {
        step: "01",
        title: "Warm",
        instruction: "Melt a pea-sized amount between warm palms until it transforms into a fluid nectar.",
        timing: "Evening",
      },
      {
        step: "02",
        title: "Cocoon",
        instruction: "Press lovingly across forehead, temples, cheeks, and neck as the final nocturnal step.",
        timing: "Evening",
      },
    ],
    fullIngredients: [
      "Astrocaryum Murumuru Seed Butter",
      "Oenothera Biennis (Evening Primrose) Oil",
      "Cera Alba (Organic Beeswax)",
      "Rosa Canina Fruit Oil",
      "Boswellia Carterii (Frankincense) Oil",
      "Tanacetum Annuum Oil",
      "Tocopherol",
    ],
  },
  {
    id: "suwani-brume-florale",
    slug: "suwani-brume-florale",
    name: "Brume Florale Rosa Damascena",
    subtitle: "Single-Distillation Cellular Hydrosol",
    category: "mist",
    tagline: "Micro-misted botanical dew harvested at dawn in Grasse",
    description:
      "A pure single-distillation organic floral mist capturing the living botanical volatile essence of Rosa Damascena. Infused with copper peptides and high-molecular plant polysaccharides to instantly drench cells and prime hydration receptors.",
    volume: "120 ML / 4.0 FL. OZ.",
    price: "$68 USD",
    rating: 4.88,
    reviewsCount: 104,
    heroImage: "/cream-tub/ezgif-frame-010.jpg",
    badge: "Hydration Mist",
    dimensions: "40mm × 140mm • 210g net weight",
    packagingMaterial: "Matte black glass bottle with ultra-fine cloud atomizing pump",
    keyActives: [
      {
        name: "Grasse Rosa Damascena Hydrosol",
        origin: "Grasse, France (Dawn Harvest)",
        concentration: "85%",
        benefit: "Distilled within 2 hours of harvesting to preserve pure floral terpenes and soothing bio-phenols.",
      },
      {
        name: "High-Molecular Polysaccharides",
        origin: "Organic Tremella Fuciformis",
        concentration: "3.0%",
        benefit: "Holds 500 times its weight in moisture, creating an invisible breath of dewy protection.",
      },
      {
        name: "Silver Fir Needle Water",
        origin: "Valais Forest Reserve",
        concentration: "10%",
        benefit: "Natural phytoncide extract that defends against airborne urban stress.",
      },
    ],
    clinicalResults: [
      { stat: "Instant", claim: "Immediate +180% surge in epidermis hydration measured on contact" },
      { stat: "12 Hrs", claim: "Sustained dewy finish when misted over skincare or makeup" },
      { stat: "100%", claim: "Natural distilled origin with zero artificial fragrance or alcohol" },
    ],
    ritual: [
      {
        step: "01",
        title: "Cloud Misting",
        instruction: "Hold 10 inches from face with eyes closed. Depress atomizing pump 3-4 times.",
        timing: "Both",
      },
      {
        step: "02",
        title: "Absorption",
        instruction: "Allow the fine micro-dew to settle and absorb, or press gently with palms.",
        timing: "Both",
      },
    ],
    fullIngredients: [
      "Rosa Damascena Flower Water",
      "Abies Alba (Silver Fir) Leaf Water",
      "Tremella Fuciformis Extract",
      "Glycerin",
      "Sodium Hyaluronate",
      "Leuconostoc/Radish Root Ferment Filtrate",
      "Citric Acid",
    ],
  },
];
