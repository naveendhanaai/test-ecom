export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "cream" | "oil" | "serum" | "treatment" | "mist";
  dosha: string;
  doshaType: "tridoshic" | "vata" | "pitta" | "kapha";
  tagline: string;
  description: string;
  volume: string;
  price: string;
  priceNumeric: number;
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
    name: "Golden Restorative Cream",
    subtitle: "Wild Turmeric, Mysore Sandalwood & Saffron Rasayana",
    category: "cream",
    dosha: "Tridoshic (All Constitutions)",
    doshaType: "tridoshic",
    tagline: "Vedic Rasayana cellular rejuvenation infused with wild turmeric, sacred sandalwood, and Kashmiri saffron",
    description:
      "A transcendent barrier-restoring emulsion whipped to weightless silk density. Rooted in ancient Rasayana longevity science, it harmonises Wild Turmeric (Haridra), Mysore Sandalwood (Chandan), Kashmiri Kumkumadi Saffron, and Ashwagandha adaptogens with biomimetic ceramides NP/AP and Gotu Kola (Centella Asiatica). Protects cellular integrity, pacifies Pitta heat, and restores lipid equilibrium with 98.7% physiological bioavailability.",
    volume: "50 ML / 1.7 FL. OZ.",
    price: "£185",
    priceNumeric: 185,
    rating: 4.98,
    reviewsCount: 146,
    heroImage: "/cream-tub/ezgif-frame-001.jpg",
    badge: "Flagship Rasayana",
    dimensions: "68mm × 54mm • 240g net weight",
    packagingMaterial: "Biophotonic violet glass & hermetic seal",
    keyActives: [
      {
        name: "Wild Turmeric (Kasturi Manjal / Haridra)",
        origin: "Western Ghats, Kerala",
        concentration: "2.5%",
        benefit: "Potent bio-curcuminoids neutralise cellular oxidative stress, clarify tone, and fade pigmentation.",
      },
      {
        name: "Mysore Sandalwood (Chandan)",
        origin: "Mysore, Karnataka",
        concentration: "2.0%",
        benefit: "Cools aggravated Pitta dosha, tightens pores, calms redness, and provides deep aromatherapeutic stillness.",
      },
      {
        name: "Kashmiri Kumkumadi Saffron",
        origin: "Pampore Valley, Kashmir",
        concentration: "3.5%",
        benefit: "Revered in Charaka Samhita to impart deep golden Ojas luminosity and even skin tone.",
      },
      {
        name: "Ashwagandha Adaptogen",
        origin: "Organic Certified Roots",
        concentration: "2.0%",
        benefit: "Mitigates cortisol-induced oxidative micro-stress and firms epidermal matrix.",
      },
      {
        name: "Gotu Kola (Brahmi / Centella)",
        origin: "Himalayan Foothills",
        concentration: "4.0%",
        benefit: "Stimulates Type I collagen synthesis and calms reactive inflammation.",
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
        instruction: "Lift the weighted obsidian cap and remove the hermetic freshness disc.",
        timing: "Both",
      },
      {
        step: "02",
        title: "Thermal & Marma Activation",
        instruction: "Warm a pearl between fingertips. Inhale the warm saffron aroma, then press with gentle rhythmic acupressure on Sthapani (third eye) and Kapola (cheek marma points).",
        timing: "Both",
      },
      {
        step: "03",
        title: "Ascending Complexion Strokes",
        instruction: "Glide upwards along the jawline toward the temples to stimulate lymphatic drainage and seal Ojas radiance.",
        timing: "Both",
      },
    ],
    fullIngredients: [
      "Rosa Damascena Flower Water",
      "Squalane (Olive-Derived)",
      "Camellia Japonica Seed Oil",
      "Curcuma Longa (Wild Turmeric) Root Extract",
      "Santalum Album (Sandalwood) Wood Extract",
      "Crocus Sativus (Kashmiri Saffron) Stigma Extract",
      "Withania Somnifera (Ashwagandha) Root Extract",
      "Centella Asiatica (Gotu Kola) Extract",
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
    ],
  },
  {
    id: "suwani-l-huile-celeste",
    slug: "suwani-l-huile-celeste",
    name: "Celestial Radiance Facial Oil",
    subtitle: "Kumkumadi & Prickly Pear Cellular Elixir",
    category: "oil",
    dosha: "Vata & Pitta Soothing",
    doshaType: "vata",
    tagline: "Cold-extracted Kumkumadi lipid concentrate for porcelain luminescence and Ojas",
    description:
      "An ancestral botanical nectar delivering seven cold-pressed precious oils. Enriched with wild Kashmiri Kumkumadi saffron, sacred Sandalwood (Chandan), prickly pear seed, and cold-pressed Moringa, Celestial Radiance sinks instantaneously into the epidermis, leaving zero grease and an incandescent velvet glow.",
    volume: "30 ML / 1.0 FL. OZ.",
    price: "£160",
    priceNumeric: 160,
    rating: 4.95,
    reviewsCount: 112,
    heroImage: "/cream-tub/ezgif-frame-045.jpg",
    badge: "Bestseller",
    dimensions: "34mm × 98mm • 180g net weight",
    packagingMaterial: "UV-protective obsidian crystal glass with gold precision dropper",
    keyActives: [
      {
        name: "Kashmiri Kumkumadi Saffron",
        origin: "Pampore, Kashmir",
        concentration: "5.0%",
        benefit: "Classical Ayurvedic elixir for radiant complexion tone and cellular glow.",
      },
      {
        name: "Mysore Sandalwood (Chandan)",
        origin: "Sustainable Karnataka Reserve",
        concentration: "2.0%",
        benefit: "Pitta-calming terpene profile that cools skin redness and soothes cellular inflammation.",
      },
      {
        name: "Cold-Pressed Moringa Seed",
        origin: "Tamil Nadu Foothills",
        concentration: "15%",
        benefit: "Ancient 'Miracle Tree' lipid rich in Behenic acid that shields from environmental pollutants.",
      },
      {
        name: "Organic Prickly Pear Seed",
        origin: "High Atlas Terroir",
        concentration: "15%",
        benefit: "Highest natural concentration of Vitamin E for radical free-radical defence.",
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
        title: "Dispense & Awaken",
        instruction: "Press the dropper bulb to draw 3-4 golden drops into the palm. Cup palms together and breathe deeply.",
        timing: "Both",
      },
      {
        step: "02",
        title: "Marma Point Abhyanga",
        instruction: "Press firmly across forehead, cheeks, and neck, lingering on the temples and jaw marma junctions.",
        timing: "Both",
      },
    ],
    fullIngredients: [
      "Crocus Sativus (Saffron) Infused Oil",
      "Santalum Album (Sandalwood) Oil",
      "Moringa Oleifera Seed Oil",
      "Opuntia Ficus-Indica (Prickly Pear) Seed Oil",
      "Rosa Canina (Rosehip) Seed Oil",
      "Squalane",
      "Citrullus Lanatus (Kalahari Melon) Seed Oil",
      "Sclerocarya Birrea (Marula) Seed Oil",
      "Tocopherol",
    ],
  },
  {
    id: "suwani-serum-bakuchiol",
    slug: "suwani-serum-bakuchiol",
    name: "Phyto-Cellular Renewal Serum",
    subtitle: "2% Babchi (Bakuchiol) & Ashwagandha Cellular Activator",
    category: "serum",
    dosha: "Tridoshic (All Constitutions)",
    doshaType: "tridoshic",
    tagline: "Ancestral Ayurvedic Babchi alternative to retinol for cellular density and bounce",
    description:
      "A clinical-grade cellular activator providing the collagen-stimulating efficacy of retinol without photosensitivity or irritation. Formulated with 2% pure purified Babchi seed (Bakuchiol) paired with adaptogenic Ashwagandha and micro-copper tripeptides for profound cellular renewal.",
    volume: "30 ML / 1.0 FL. OZ.",
    price: "£175",
    priceNumeric: 175,
    rating: 4.92,
    reviewsCount: 88,
    heroImage: "/cream-tub/ezgif-frame-020.jpg",
    badge: "Clinical Rasayana",
    dimensions: "34mm × 102mm • 185g net weight",
    packagingMaterial: "Double-walled amber glass vial with brushed gold pipette",
    keyActives: [
      {
        name: "Purified Babchi (Bakuchiol) 2%",
        origin: "Organic Psoralea Corylifolia Seed",
        concentration: "2.0%",
        benefit: "Revered Ayurvedic botanical that stimulates collagen synthesis without redness or sun sensitivity.",
      },
      {
        name: "Ashwagandha (Indian Ginseng)",
        origin: "Organic Root Ferment",
        concentration: "3.0%",
        benefit: "Powerful adaptogen that neutralises free radicals and supports cellular telomere integrity.",
      },
      {
        name: "Copper Tripeptide-1",
        origin: "Cellular Peptide Complex",
        concentration: "1.0%",
        benefit: "Accelerates micro-tissue repair and restores cellular spring elasticity.",
      },
      {
        name: "Indian Gooseberry (Amla)",
        origin: "Kerala Forest Reserve",
        concentration: "4.0%",
        benefit: "Supercharged bio-available Vitamin C that fortifies epidermal antioxidant reserves.",
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
        title: "Ascending Lift",
        instruction: "Glide upwards along the jawline and cheekbones using gentle lifting strokes to stimulate prana flow.",
        timing: "Both",
      },
    ],
    fullIngredients: [
      "Aloe Barbadensis Leaf Juice",
      "Psoralea Corylifolia (Babchi) Seed Extract (Bakuchiol)",
      "Withania Somnifera (Ashwagandha) Root Extract",
      "Phyllanthus Emblica (Amla) Fruit Extract",
      "Copper Tripeptide-1",
      "Tanacetum Annuum (Blue Tansy) Flower Oil",
      "Sodium Hyaluronate",
      "Centella Asiatica Extract",
      "Glycerin",
      "Potassium Sorbate",
    ],
  },
  {
    id: "suwani-nectar-resurfacant",
    slug: "suwani-nectar-resurfacant",
    name: "Resurfacing Enzyme Treatment",
    subtitle: "Triphala & Papaya Bio-Enzymatic Polish",
    category: "treatment",
    dosha: "Kapha & Pitta Clarifying",
    doshaType: "kapha",
    tagline: "Gentle biological Shodhana (purification) for porcelain smooth texture",
    description:
      "A biological exfoliation nectar that dissolves cellular adhesions without mechanical friction or burning acids. Fermented Triphala (Amalaki, Bibhitaki, Haritaki) and papaya proteases gently lift away dead keratinocytes and metabolic residue (Ama), unveiling radiant, clear skin.",
    volume: "100 ML / 3.4 FL. OZ.",
    price: "£115",
    priceNumeric: 115,
    rating: 4.97,
    reviewsCount: 94,
    heroImage: "/cream-tub/ezgif-frame-060.jpg",
    badge: "Shodhana Award",
    dimensions: "45mm × 120mm • 260g net weight",
    packagingMaterial: "Frosted obsidian glass flask with precision dispenser nozzle",
    keyActives: [
      {
        name: "Fermented Triphala Complex",
        origin: "Kerala Forest Harvest",
        concentration: "6.0%",
        benefit: "Classical three-fruit rasayana that detoxifies cellular debris and purifies the skin surface.",
      },
      {
        name: "Papaya & Pineapple Enzymes",
        origin: "Tropical Ferment",
        concentration: "5.0%",
        benefit: "Targeted proteolysis that digests dead surface proteins without disturbing living tissue.",
      },
      {
        name: "Hibiscus Flower Acids",
        origin: "Organic Ayurvedic Valley",
        concentration: "4.0%",
        benefit: "Naturally high in gentle fruit acids to accelerate cellular turnover.",
      },
      {
        name: "Raw Wild Himalayan Honey",
        origin: "High-Altitude Apiaries",
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
        title: "Enzymatic Shodhana",
        instruction: "Leave undisturbed for 10 minutes. A gentle warming sensation signals active enzymatic release.",
        timing: "Evening",
      },
      {
        step: "03",
        title: "Warm Rinse",
        instruction: "Rinse with warm water or a damp muslin cloth. Follow with Golden Restorative Cream.",
        timing: "Evening",
      },
    ],
    fullIngredients: [
      "Mel (Wild Himalayan Honey)",
      "Terminalia Chebula (Haritaki) Fruit Extract",
      "Terminalia Bellerica (Bibhitaki) Fruit Extract",
      "Phyllanthus Emblica (Amalaki) Fruit Extract",
      "Carica Papaya Fruit Ferment Extract",
      "Hibiscus Sabdariffa Flower Extract",
      "Bromelain",
      "Lactobacillus Ferment",
      "Glycerin",
      "Hydroxyethylcellulose",
      "Citrus Aurantium Dulcis Oil",
    ],
  },
  {
    id: "suwani-baume-nuit",
    slug: "suwani-baume-nuit",
    name: "Nocturnal Repair Balm",
    subtitle: "Shata Dhauta Ghrita & Blue Lotus Night Cocoon",
    category: "treatment",
    dosha: "Vata & Pitta Replenishing",
    doshaType: "vata",
    tagline: "Waterless restorative Ayurvedic balm that seals cellular repair throughout sleep",
    description:
      "A concentrated waterless restorative balm inspired by the ancient Ayurvedic tradition of Shata Dhauta Ghrita (pure lipid washing). Formulated without water or synthetics, it warms on contact with the skin to envelop the face in a breathable, nourishing cocoon with Blue Lotus, Gotu Kola, and botanical Murumuru to prevent overnight moisture loss.",
    volume: "50 ML / 1.7 FL. OZ.",
    price: "£195",
    priceNumeric: 195,
    rating: 4.96,
    reviewsCount: 76,
    heroImage: "/cream-tub/ezgif-frame-080.jpg",
    badge: "Night Intensive",
    dimensions: "65mm × 50mm • 220g net weight",
    packagingMaterial: "Solid obsidian porcelain jar with brushed gold airtight lid",
    keyActives: [
      {
        name: "Blue Lotus Extract",
        origin: "Sacred Water Garden",
        concentration: "2.0%",
        benefit: "Induces profound cellular relaxation and eases tension held in facial muscles.",
      },
      {
        name: "Gotu Kola (Centella Asiatica)",
        origin: "Himalayan Valleys",
        concentration: "5.0%",
        benefit: "Renowned Rasayana herb that stimulates nocturnal collagen repair cycles.",
      },
      {
        name: "Wild Amazonian Murumuru",
        origin: "Sustainable Harvest, Acre Basin",
        concentration: "18%",
        benefit: "Rich in lauric and myristic fatty acids that match natural epidermal intercellular lipid structure.",
      },
      {
        name: "Indian Frankincense (Shallaki)",
        origin: "Wild Boswellia Serrata",
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
        title: "Nocturnal Cocoon",
        instruction: "Press gently across forehead, temples, cheeks, and neck as the final nocturnal step.",
        timing: "Evening",
      },
    ],
    fullIngredients: [
      "Astrocaryum Murumuru Seed Butter",
      "Centella Asiatica (Gotu Kola) Extract",
      "Nymphaea Caerulea (Blue Lotus) Flower Extract",
      "Boswellia Serrata (Shallaki) Resin Oil",
      "Oenothera Biennis (Evening Primrose) Oil",
      "Cera Alba (Organic Beeswax)",
      "Rosa Canina Fruit Oil",
      "Tanacetum Annuum Oil",
      "Tocopherol",
    ],
  },
  {
    id: "suwani-brume-florale",
    slug: "suwani-brume-florale",
    name: "Rose Damask Cellular Mist",
    subtitle: "Kannauj Hydro-Distilled Rose & Vetiver Dew",
    category: "mist",
    dosha: "Tridoshic • Pitta Soothing",
    doshaType: "pitta",
    tagline: "Micro-misted botanical dew hydro-distilled at dawn in Kannauj",
    description:
      "A pure hydro-distilled organic floral mist capturing the living botanical volatile essence of Rosa Damascena from the perfume capital of Kannauj. Blended with cooling Vetiver (Khus), Holy Basil (Tulsi), and copper peptides to instantly drench cells and prime hydration receptors.",
    volume: "120 ML / 4.0 FL. OZ.",
    price: "£68",
    priceNumeric: 68,
    rating: 4.88,
    reviewsCount: 104,
    heroImage: "/cream-tub/ezgif-frame-010.jpg",
    badge: "Hydration Dew",
    dimensions: "40mm × 140mm • 210g net weight",
    packagingMaterial: "Matte black glass bottle with ultra-fine cloud atomising pump",
    keyActives: [
      {
        name: "Kannauj Rose Damascena",
        origin: "Kannauj Traditional Copper Deg Still",
        concentration: "85%",
        benefit: "Hydro-distilled to preserve pure floral terpenes that soothe Pitta heat and redness.",
      },
      {
        name: "Wild Vetiver Root (Khus)",
        origin: "Kewda Valley",
        concentration: "5.0%",
        benefit: "Deeply grounding, cooling Ayurvedic botanical that locks in trans-epidermal moisture.",
      },
      {
        name: "Holy Basil (Tulsi)",
        origin: "Sacred Organic Cultivation",
        concentration: "2.0%",
        benefit: "Revered adaptogen that defends against airborne urban environmental pollution.",
      },
      {
        name: "Tremella Fuciformis Polysaccharides",
        origin: "High-Altitude Bio-Extract",
        concentration: "3.0%",
        benefit: "Holds 500 times its weight in water, creating an invisible breath of dewy protection.",
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
        instruction: "Hold 10 inches from face with eyes closed. Depress atomising pump 3-4 times.",
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
      "Rosa Damascena (Kannauj Rose) Flower Water",
      "Vetiveria Zizanioides (Khus) Root Water",
      "Ocimum Sanctum (Tulsi) Leaf Water",
      "Tremella Fuciformis Extract",
      "Copper Tripeptide-1",
      "Glycerin",
      "Sodium Hyaluronate",
      "Leuconostoc/Radish Root Ferment Filtrate",
      "Citric Acid",
    ],
  },
];
