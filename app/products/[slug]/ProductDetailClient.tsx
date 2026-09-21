"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, PRODUCTS } from "@/data/products";
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Droplets,
  Clock,
  ChevronRight,
  Check,
  Layers,
  Heart,
  Share2,
  ShoppingBag,
} from "lucide-react";
import { ProductCard } from "@/app/components/ProductCard";
import { useCart } from "@/app/context/CartContext";

interface ProductDetailClientProps {
  product: Product;
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<"actives" | "ritual" | "clinical" | "ingredients">("actives");
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);
  const [scrubFrame, setScrubFrame] = useState<number>(1); // For 80-frame inspector

  const { addToCart } = useCart();

  const isFlagship = product.slug === "suwani-creme-dor";

  // Related products (exclude current)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  // Format frame number
  const currentFrameUrl = `/cream-tub/ezgif-frame-${String(scrubFrame).padStart(3, "0")}.jpg`;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white/20 pt-24 pb-32">
      {/* Top Breadcrumbs & Back Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between border-b border-white/[0.06]">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/50">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 hover:text-[#c9a86a] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Shop</span>
          </Link>
          <span>/</span>
          <span className="text-[#c9a86a] capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-white/80 truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard.");
              }
            }}
            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-white/60 hover:text-white transition-all"
            title="Share allocation link"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Visual Gallery / 3D Scrubber (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-black border border-white/[0.08] shadow-2xl flex items-center justify-center">
            {isFlagship ? (
              <div className="relative w-full h-full">
                <Image
                  src={currentFrameUrl}
                  alt={`${product.name} Frame ${scrubFrame}`}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1200px) 100vw, 60vw"
                  className="object-contain"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-mono text-[#c9a86a]">
                  Vessel Phase: {scrubFrame <= 25 ? "Hermetic Closed" : scrubFrame <= 50 ? "Lid Elevation" : "Whipped Core Unsealed"} ({scrubFrame}/80)
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1200px) 100vw, 60vw"
                  className="object-contain"
                />
              </div>
            )}

            {/* Subtle Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* Interactive Scrub Controller (For Flagship) */}
          {isFlagship && (
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/60 mb-3">
                <span className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#c9a86a]" />
                  <span>360° Vessel Inspection</span>
                </span>
                <span className="font-mono text-[#c9a86a]">Drag slider to explore</span>
              </div>
              <input
                type="range"
                min={1}
                max={80}
                value={scrubFrame}
                onChange={(e) => setScrubFrame(Number(e.target.value))}
                className="w-full accent-[#c9a86a] bg-white/10 h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[9px] font-mono text-white/40 mt-2 uppercase">
                <span>01. Sealed Hermetic Cap</span>
                <span>40. Hermetic Lift</span>
                <span>80. Active Matrix</span>
              </div>
            </div>
          )}

          {/* Architectural Vessel Specifications Card */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-[10px] uppercase font-mono text-white/40 block">Vessel Mass</span>
              <span className="text-xs text-white/90 font-light mt-1 block">{product.dimensions}</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-[10px] uppercase font-mono text-white/40 block">Protective Alloy</span>
              <span className="text-xs text-white/90 font-light mt-1 block truncate" title={product.packagingMaterial}>
                {product.packagingMaterial.split("with")[0]}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-mono text-white/40 block">Batch Grade</span>
              <span className="text-xs text-[#c9a86a] font-mono mt-1 block">Awwwards 2026 Res.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative, Actives, Reservation (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Category, Dosha & Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#c9a86a]/10 border border-[#c9a86a]/30 text-[10px] font-mono uppercase tracking-widest text-[#c9a86a]">
                {product.category}
              </span>
              {product.dosha && (
                <span className="px-3 py-1 rounded-full bg-[#c9a86a]/15 border border-[#c9a86a]/40 text-[10px] font-mono uppercase tracking-widest text-[#c9a86a] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
                  {product.dosha}
                </span>
              )}
              {product.badge && (
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] uppercase tracking-widest text-white/70">
                  {product.badge}
                </span>
              )}
              <span className="text-[11px] font-mono text-white/40 ml-auto">
                ★ {product.rating} ({product.reviewsCount} allocations)
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
              {product.name}
            </h1>
            <p className="text-sm font-serif italic text-[#c9a86a] mt-2">
              {product.subtitle}
            </p>

            {/* Pricing and Volume */}
            <div className="flex items-baseline gap-4 mt-6 pb-6 border-b border-white/[0.06]">
              <span className="text-3xl font-light text-white">{product.price}</span>
              <span className="text-xs font-mono uppercase text-white/40 tracking-wider">
                {product.volume}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-white/70 font-light leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Quantity Selector & Add to Cart CTA */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-white/20 rounded-full px-3 py-1.5 bg-white/[0.02]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-white/60 hover:text-white px-2 py-1 text-sm transition-colors"
                  >
                    -
                  </button>
                  <span className="font-mono text-xs px-3 text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(5, quantity + 1))}
                    className="text-white/60 hover:text-white px-2 py-1 text-sm transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-[11px] text-white/40 font-mono">Max 5 units per client</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 ${
                    added
                      ? "bg-[#c9a86a] text-black cursor-default"
                      : "bg-white text-black hover:bg-[#c9a86a] hover:text-black"
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-black" />
                      <span>Added to Cart ({quantity})</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart • £{(product.priceNumeric * quantity).toLocaleString()}</span>
                    </>
                  )}
                </button>

                <Link
                  href="/cart"
                  className="px-6 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 border border-white/20 hover:border-white text-white hover:text-white flex items-center justify-center gap-2"
                >
                  View Cart
                </Link>
              </div>

              {added && (
                <div className="p-4 rounded-xl bg-[#c9a86a]/10 border border-[#c9a86a]/30 text-xs text-[#c9a86a] leading-relaxed animate-fadeIn flex items-center justify-between">
                  <span>✓ Added to your cart. Ready for private checkout.</span>
                  <Link href="/cart" className="underline font-mono uppercase tracking-wider text-[10px]">
                    Go to Cart →
                  </Link>
                </div>
              )}
            </div>

            {/* Guarantees */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-2.5 text-xs text-white/50 font-light">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#c9a86a]" />
                <span>Individually serialised &amp; sealed in London studio</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Droplets className="w-4 h-4 text-[#c9a86a]" />
                <span>100% Anhydrous. Zero filler water, silicones, or microplastics</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#c9a86a]" />
                <span>Authentic Ayurvedic Rasayana botanicals with certified cold-extractions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c9a86a]" />
                <span>Complimentary climate-controlled UK express courier</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section: Actives, Ritual, Clinical, Ingredients */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/[0.06]">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 sm:gap-6 border-b border-white/[0.06] pb-4 overflow-x-auto scrollbar-none mb-12">
          {[
            { id: "actives", label: "01 / Rasayana Actives & Terroirs" },
            { id: "ritual", label: "02 / Vedic Ritual & Marma Points" },
            { id: "clinical", label: "03 / Clinical Assays" },
            { id: "ingredients", label: "04 / Full INCI Ledger" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs uppercase tracking-widest pb-3 font-medium whitespace-nowrap transition-all border-b-2 -mb-4 ${
                activeTab === tab.id
                  ? "border-[#c9a86a] text-white"
                  : "border-transparent text-white/40 hover:text-white/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="min-h-[260px]">
          {/* Actives Tab */}
          {activeTab === "actives" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.keyActives.map((active) => (
                <div
                  key={active.name}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-light text-white/95">{active.name}</h3>
                    {active.concentration && (
                      <span className="font-mono text-xs text-[#c9a86a]">
                        {active.concentration}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-3">
                    Terroir: {active.origin}
                  </span>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {active.benefit}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Ritual Tab */}
          {activeTab === "ritual" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.ritual.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-mono text-[#c9a86a]">{step.step}</span>
                      <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-white/60">
                        {step.timing}
                      </span>
                    </div>
                    <h3 className="text-base font-light text-white/90 mb-2">{step.title}</h3>
                    <p className="text-xs text-white/60 font-light leading-relaxed">
                      {step.instruction}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Clinical Assays Tab */}
          {activeTab === "clinical" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.clinicalResults.map((result, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
                >
                  <span className="text-4xl sm:text-5xl font-light text-[#c9a86a] block mb-4">
                    {result.stat}
                  </span>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {result.claim}
                  </p>
                  <span className="text-[9px] font-mono text-white/30 block mt-4 uppercase">
                    Double-Blind Dermatological Assay
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* INCI Ingredients Tab */}
          {activeTab === "ingredients" && (
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
                <span className="text-[10px] uppercase tracking-widest text-[#c9a86a] font-mono">
                  100% Transparent Full Disclosure
                </span>
              </div>
              <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                Our formulations are completely free of synthetic emulsifiers, parabens, phthalates, artificial fragrance, PEGs, silicones, and water dilution.
              </p>
              <div className="flex flex-wrap gap-2">
                {product.fullIngredients.map((ing) => (
                  <span
                    key={ing}
                    className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs text-white/80 font-mono"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Curated Repertoire Companions */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono block mb-2">
              Synergistic Ritual
            </span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white/95">
              Curated Formulations
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Explore All Formulations</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};
