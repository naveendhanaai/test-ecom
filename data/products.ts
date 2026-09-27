export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "cream" | "oil" | "serum" | "treatment" | "mist" | "lotion";
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
    id: "asaliya-hydrating-face-serum",
    slug: "asaliya-hydrating-face-serum",
    name: "Hydrating Face Serum",
    subtitle: "Multi-Molecular Hyaluronic Acid & Sacred Botanical Extracts",
    category: "serum",
    dosha: "Tridoshic • Vata & Pitta Replenishing",
    doshaType: "tridoshic",
    tagline: "Concentrated hyaluronic moisture elixir with active botanical extracts to nourish, repair, and illuminate skin glow",
    description:
      "A concentrated multi-depth hydration serum engineered to replenish thirsty skin cells. Formulated with triple-molecular-weight Hyaluronic Acid and rare botanical extracts, this clean elixir drenches the dermal layers with essential hydration, soothes oxidative redness, repairs environmental micro-damage, and unveils an enduring, healthy, lit-from-within glow.",
    volume: "30 ML / 1.01 FL. OZ.",
    price: "£135",
    priceNumeric: 135,
    rating: 4.96,
    reviewsCount: 148,
    heroImage: "/products/hydrating-face-serum.jpg",
    badge: "Nourish • Repair • Glow",
    dimensions: "36mm × 108mm • 180g net weight",
    packagingMaterial: "UV-shielding amber apothecary glass with precision pipette and sustainable green carton",
    keyActives: [
      {
        name: "Triple-Molecular Hyaluronic Acid",
        origin: "Bio-Fermented Vegan Source",
        concentration: "3.5%",
        benefit: "Multi-weight fractions penetrate surface and deeper epidermis to bind 1,000x their weight in moisture.",
      },
      {
        name: "Sacred Botanical Extracts",
        origin: "High-Altitude Botanical Sanctuaries",
        concentration: "5.0%",
        benefit: "Polyphenol-dense phyto-complex that soothes cellular stress and restores barrier equilibrium.",
      },
      {
        name: "Pro-Vitamin B5 (Panthenol)",
        origin: "Dermal Grade",
        concentration: "2.0%",
        benefit: "Promotes cellular tissue repair, locks in trans-epidermal moisture, and soothes micro-irritation.",
      },
      {
        name: "Centella Asiatica (Gotu Kola)",
        origin: "Organic Ayurvedic Harvest",
        concentration: "3.0%",
        benefit: "Stimulates structural collagen synthesis and provides deep restorative skin renewal.",
      },
    ],
    clinicalResults: [
      { stat: "+170%", claim: "Immediate increase in cellular hydration index upon contact" },
      { stat: "24 Hrs", claim: "Proven continuous moisture barrier defense against trans-epidermal water loss" },
      { stat: "96.7%", claim: "Observed visibly plumper skin bounce and radiant healthy glow within 7 days" },
    ],
    ritual: [
      {
        step: "01",
        title: "Draw Dropper",
        instruction: "Squeeze the rubber bulb to draw 3-4 golden-hued drops of serum into warm palms.",
        timing: "Both",
      },
      {
        step: "02",
        title: "Press & Awaken",
        instruction: "Gently press palms across forehead, cheeks, and neck until fully absorbed, following with cream.",
        timing: "Both",
      },
    ],
    fullIngredients: [
      "Rosa Damascena Flower Water",
      "Aqua (Water)",
      "Sodium Hyaluronate (Multi-Molecular)",
      "Hydrolyzed Hyaluronic Acid",
      "Panthenol (Pro-Vitamin B5)",
      "Centella Asiatica (Gotu Kola) Extract",
      "Camellia Sinensis (Green Tea) Leaf Extract",
      "Glycyrrhiza Glabra (Licorice) Root Extract",
      "Allantoin",
      "Glycerin",
      "Sodium PCA",
      "Tocopherol",
      "Ethylhexylglycerin",
      "Phenoxyethanol",
    ],
  },
  {
    id: "asaliya-natural-moisturizing-body-lotion",
    slug: "asaliya-natural-moisturizing-body-lotion",
    name: "Natural Moisturizing Factors + Inulin Body Lotion",
    subtitle: "Body Surface Hydration Formula & Prebiotic Inulin",
    category: "lotion",
    dosha: "Tridoshic (All Constitutions)",
    doshaType: "tridoshic",
    tagline: "Comprehensive barrier-supporting body lotion delivering bio-identical Natural Moisturizing Factors and microbiome-nourishing inulin",
    description:
      "A clinical body surface hydration emulsion formulated to fortify the epidermal barrier and replenish dermal lipid balance. Powered by bio-identical Natural Moisturizing Factors (amino acids, fatty acids, phospholipids, urea, and ceramides) paired with prebiotic Inulin, it delivers deep multi-layer hydration to eliminate dry patches without grease or residual tackiness.",
    volume: "240 ML / 8.1 FL. OZ.",
    price: "£38",
    priceNumeric: 38,
    rating: 4.93,
    reviewsCount: 164,
    heroImage: "/products/natural-moisturizing-body-lotion.jpg",
    badge: "Body Care Formulation",
    dimensions: "62mm × 188mm • 285g net weight",
    packagingMaterial: "Recyclable matte white vessel with precision dispensing pump",
    keyActives: [
      {
        name: "Natural Moisturizing Factors (NMF)",
        origin: "Bio-Identical Complex",
        concentration: "10.0%",
        benefit: "Multi-component amino acid & ceramide matrix replicating the skin's natural intercellular hydration retention.",
      },
      {
        name: "Prebiotic Inulin",
        origin: "Chicory Root Extract",
        concentration: "2.5%",
        benefit: "Nourishes the cutaneous microbiome to strengthen natural skin defenses against moisture loss.",
      },
      {
        name: "Plant Squalane",
        origin: "Fermented Olive Lipid",
        concentration: "5.0%",
        benefit: "Weightless emollient that seals hydration into the stratum corneum with zero greasy residue.",
      },
      {
        name: "Biomimetic Ceramides (NP, AP, EOP)",
        origin: "Phyto-Lipid Matrix",
        concentration: "1.5%",
        benefit: "Restores cellular cohesion and repairs damaged barrier lipids across dry body surfaces.",
      },
    ],
    clinicalResults: [
      { stat: "+125%", claim: "Immediate increase in skin surface hydration within 10 minutes of application" },
      { stat: "48 Hrs", claim: "Continuous hydration reservoir confirmed via clinical corneometry" },
      { stat: "98.1%", claim: "Reported immediate barrier comfort and instant reduction in skin flakiness" },
    ],
    ritual: [
      {
        step: "01",
        title: "Dispense",
        instruction: "Dispense 2 to 3 pumps into palms immediately after bathing while skin remains receptive and damp.",
        timing: "Both",
      },
      {
        step: "02",
        title: "Ascending Application",
        instruction: "Massage into limbs and torso with long upward strokes to stimulate circulation and seal moisture.",
        timing: "Both",
      },
    ],
    fullIngredients: [
      "Aqua (Water)",
      "Inulin",
      "Glycerin",
      "Caprylic/Capric Triglyceride",
      "Squalane",
      "Urea",
      "Sodium PCA",
      "Sodium Lactate",
      "Arginine",
      "Aspartic Acid",
      "PCA",
      "Glycine",
      "Alanine",
      "Serine",
      "Valine",
      "Proline",
      "Threonine",
      "Isoleucine",
      "Histidine",
      "Phenylalanine",
      "Ceramide NP",
      "Ceramide AP",
      "Ceramide EOP",
      "Phytosphingosine",
      "Cholesterol",
      "Tocopherol",
      "Xanthan Gum",
      "Ethylhexylglycerin",
      "Phenoxyethanol",
    ],
  },
  {
    id: "ancient-nutra-heenbovitiya",
    slug: "ancient-nutra-heenbovitiya",
    name: "Natural Heenbovitiya Herbal Supplement",
    subtitle: "Sacred Osbeckia Octandra • 60 Vegan Capsules",
    category: "treatment",
    dosha: "Pitta & Kapha Detoxifying",
    doshaType: "pitta",
    tagline: "Ancestral Ayurvedic single-origin Heenbovitiya for liver rejuvenation, metabolic balance, and cellular blood purification",
    description:
      "A revered heritage Ayurvedic botanical supplement crafted from pure wild-harvested Heenbovitiya (Osbeckia octandra). Historically celebrated in traditional Sri Lankan and Vedic medicine, Heenbovitiya is nature's premier hepatoprotective Rasayana, clinically known for supporting cellular liver detoxification, balancing metabolic blood glucose pathways, and neutralizing systemic Pitta heat.",
    volume: "60 VEGAN CAPSULES",
    price: "£42",
    priceNumeric: 42,
    rating: 4.95,
    reviewsCount: 118,
    heroImage: "/products/ancient-nutra-heenbovitiya.jpg",
    badge: "100% Natural • Non-GMO",
    dimensions: "52mm × 98mm • 140g net weight",
    packagingMaterial: "Pharmaceutical-grade UV-barrier white bottle with tamper-evident seal",
    keyActives: [
      {
        name: "Pure Heenbovitiya (Osbeckia Octandra)",
        origin: "Wild Harvest, Sri Lanka",
        concentration: "500mg per capsule",
        benefit: "Potent bioflavonoids and tannins that support hepatic cell regeneration and natural detoxification.",
      },
      {
        name: "Antioxidant Phyto-Polyphenols",
        origin: "Botanical Leaf Extract",
        concentration: "Standardised",
        benefit: "Neutralises free radical damage in liver tissues and purifies systemic blood micro-circulation.",
      },
      {
        name: "Digestive & Metabolic Rasayana",
        origin: "Sacred Herbal Matrix",
        concentration: "Bioactive",
        benefit: "Helps pacify toxic Ama (metabolic waste) and harmonizes cellular glucose metabolism.",
      },
    ],
    clinicalResults: [
      { stat: "100%", claim: "Pure botanical origin — Dairy Free, Gluten Free, Soy Free & Non-GMO" },
      { stat: "30 Days", claim: "Demonstrated significant support for natural liver enzyme equilibrium" },
      { stat: "95.4%", claim: "Reported heightened daily vitality, clearer skin complexion, and metabolic lightness" },
    ],
    ritual: [
      {
        step: "01",
        title: "Daily Dosage",
        instruction: "Take 1 to 2 capsules daily with a glass of warm water, ideally 30 minutes before meals.",
        timing: "Morning",
      },
      {
        step: "02",
        title: "Ayurvedic Anupana",
        instruction: "For optimal bioavailability, consume with warm water infused with a dash of raw honey.",
        timing: "Morning",
      },
    ],
    fullIngredients: [
      "Pure Heenbovitiya Leaf Powder (Osbeckia octandra)",
      "Plant-Derived Cellulose Capsule (HPMC)",
    ],
  },
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
    heroImage: "/products/celestial-radiance-oil.jpg",
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
    heroImage: "/products/rose-damask-mist.jpg",
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
