"use client";

import React, { useState } from "react";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ShieldCheck, Sparkles, Feather, Droplets } from "lucide-react";

type FilterCategory = "all" | "cream" | "oil" | "serum" | "treatment" | "mist";

const CATEGORIES: { label: string; value: FilterCategory }[] = [
  { label: "All Editions", value: "all" },
  { label: "Creams & Balms", value: "cream" },
  { label: "Precious Oils", value: "oil" },
  { label: "Bio-Serums", value: "serum" },
  { label: "Treatments", value: "treatment" },
  { label: "Cellular Mists", value: "mist" },
];

export const ProductGridSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "cream") return product.category === "cream" || product.slug === "suwani-baume-nuit";
    return product.category === activeFilter;
  });

  return (
    <section id="collection" className="py-32 px-6 md:px-12 bg-gradient-to-b from-[#070707] via-[#090909] to-[#040404] relative">
      {/* Golden Section Transition Divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a86a]/40 to-transparent" />
      
      {/* Subtle Ambient Section Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#c9a86a]/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono">
                THE REPERTOIRE • VEDIC FORMULATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/95">
              Ayurvedic Cellular Formulations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/60 font-light max-w-md leading-relaxed">
            Synthesised through sacred Ayurvedic Rasayana botanicals, cryogenic extractions,
            and zero water dilution. Numbered allocations in light-blocking architectural vessels.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-white/[0.06]">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-light whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black font-medium shadow-md shadow-white/10"
                    : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.07] border border-white/[0.05]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Trust & Guarantee Luxury Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/[0.03] via-white/[0.02] to-white/[0.01] border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#c9a86a]/10 border border-[#c9a86a]/20 text-[#c9a86a] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/90">Cryogenic Extractions</h4>
              <p className="text-xs text-white/50 mt-1 font-light leading-relaxed">
                Zero heat degradation of delicate phyto-lipids and living plant enzymes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#c9a86a]/10 border border-[#c9a86a]/20 text-[#c9a86a] shrink-0">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/90">Anhydrous Purity</h4>
              <p className="text-xs text-white/50 mt-1 font-light leading-relaxed">
                Formulated without tap water or synthetic thickeners. 100% active matrices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#c9a86a]/10 border border-[#c9a86a]/20 text-[#c9a86a] shrink-0">
              <Feather className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/90">Numbered Micro-Batches</h4>
              <p className="text-xs text-white/50 mt-1 font-light leading-relaxed">
                Limited seasonal harvest allocations individually hand-sealed in London.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#c9a86a]/10 border border-[#c9a86a]/20 text-[#c9a86a] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/90">Climate-Guarded Courier</h4>
              <p className="text-xs text-white/50 mt-1 font-light leading-relaxed">
                Shipped in temperature-stable packaging to preserve molecular potency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
