"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ProductCard } from "@/app/components/ProductCard";
import { PRODUCTS, Product } from "@/data/products";
import { Search, SlidersHorizontal, Sparkles, Shield, Droplets } from "lucide-react";

type CategoryFilter = "all" | "cream" | "oil" | "serum" | "treatment" | "mist";
type DoshaFilter = "all" | "tridoshic" | "vata" | "pitta" | "kapha";
type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: "All Formulations", value: "all" },
  { label: "Creams & Balms", value: "cream" },
  { label: "Precious Oils", value: "oil" },
  { label: "Bio-Serums", value: "serum" },
  { label: "Targeted Treatments", value: "treatment" },
  { label: "Cellular Mists", value: "mist" },
];

const DOSHAS: { label: string; value: DoshaFilter }[] = [
  { label: "All Constitutions", value: "all" },
  { label: "Tridoshic", value: "tridoshic" },
  { label: "Vata Nourishing", value: "vata" },
  { label: "Pitta Calming", value: "pitta" },
  { label: "Kapha Clarifying", value: "kapha" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedDosha, setSelectedDosha] = useState<DoshaFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const filteredAndSortedProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory ||
        (selectedCategory === "cream" && product.slug === "suwani-baume-nuit");

      // Dosha filter
      const matchesDosha =
        selectedDosha === "all" ||
        product.doshaType === selectedDosha ||
        (selectedDosha === "tridoshic" && product.dosha.toLowerCase().includes("tridoshic"));

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.dosha.toLowerCase().includes(q) ||
        product.keyActives.some((act) => act.name.toLowerCase().includes(q));

      return matchesCategory && matchesDosha && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") {
        return a.priceNumeric - b.priceNumeric;
      }
      if (sortBy === "price-desc") {
        return b.priceNumeric - a.priceNumeric;
      }
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return 0; // "featured" maintains default curated order
    });
  }, [selectedCategory, selectedDosha, searchQuery, sortBy]);

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      <Header />

      {/* Hero Banner Section */}
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-white/[0.06] bg-gradient-to-b from-[#0a0a0a] via-black to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono">
              Vedic Rasayana Shop • London Formulation
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white/95">
                The Ayurvedic Shop
              </h1>
              <p className="mt-4 text-sm sm:text-base text-white/60 font-light max-w-xl leading-relaxed">
                Discover our collection of authentic Ayurvedic Rasayana formulations, cold-extracted Kumkumadi elixirs,
                and restorative balms. Infused with wild turmeric, sacred sandalwood, and Kashmiri saffron to balance your unique Dosha.
              </p>
            </div>

            {/* Quick Guarantees Pill */}
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-white/50">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#c9a86a]" />
                Vedic Rasayana Actives
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#c9a86a]" />
                Tridoshic Balance
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#c9a86a]" />
                100% Anhydrous
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Control Bar: Categories, Dosha Filters, Search & Sorting */}
      <section className="sticky top-20 z-20 bg-black/90 backdrop-blur-md border-b border-white/[0.06] px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "bg-white text-black font-medium shadow-md shadow-white/10"
                        : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Search Input */}
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search herbs, dosha, or actives..."
                  className="w-full pl-9 pr-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a86a] transition-colors"
                />
              </div>

              {/* Sort Select */}
              <div className="relative shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  aria-label="Sort formulations"
                  className="appearance-none bg-white/[0.03] border border-white/10 hover:border-white/20 text-white text-xs px-4 py-2 pr-8 rounded-full focus:outline-none focus:border-[#c9a86a] cursor-pointer transition-colors"
                >
                  <option value="featured" className="bg-[#111] text-white">Featured</option>
                  <option value="price-asc" className="bg-[#111] text-white">Price: Low to High</option>
                  <option value="price-desc" className="bg-[#111] text-white">Price: High to Low</option>
                  <option value="rating" className="bg-[#111] text-white">Top Rated</option>
                </select>
                <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-white/40 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Dosha Filter Sub-Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-white/[0.04] scrollbar-none text-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a86a] shrink-0 mr-1">
              Dosha Constitution:
            </span>
            {DOSHAS.map((d) => {
              const isActive = selectedDosha === d.value;
              return (
                <button
                  key={d.value}
                  onClick={() => setSelectedDosha(d.value)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-[#c9a86a] text-black font-semibold"
                      : "bg-white/[0.02] text-white/50 hover:text-white border border-white/[0.06] hover:border-[#c9a86a]/40"
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-white/50 text-sm font-light">
                No formulations match your search criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-medium hover:bg-[#c9a86a] transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8 text-xs font-mono text-white/40 uppercase">
                <span>Showing {filteredAndSortedProducts.length} Formulations</span>
                <span>Protected in Biophotonic Violet Glass</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-20 px-6 md:px-12 border-t border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <span className="font-mono text-xs text-[#c9a86a] block mb-2">01 / DISPATCH PROTOCOL</span>
            <h3 className="text-base font-light text-white mb-2">Climate-Controlled Courier</h3>
            <p className="text-xs text-white/50 font-light leading-relaxed">
              Every parcel is protected in thermal insulation and dispatched via expedited courier directly to your door across the United Kingdom and internationally.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <span className="font-mono text-xs text-[#c9a86a] block mb-2">02 / AUTHENTICITY</span>
            <h3 className="text-base font-light text-white mb-2">Individual Serial Ledger</h3>
            <p className="text-xs text-white/50 font-light leading-relaxed">
              Every vessel features an individually engraved serial code, logged in our private ledger to guarantee origin, harvest freshness, and authenticity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <span className="font-mono text-xs text-[#c9a86a] block mb-2">03 / CONCIERGE CARE</span>
            <h3 className="text-base font-light text-white mb-2">Private Client Support</h3>
            <p className="text-xs text-white/50 font-light leading-relaxed">
              Need guidance on tailoring your daily skincare ritual? Our Mayfair concierge advisors are available to assist with personalised consultations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
