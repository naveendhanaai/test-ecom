"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, Sparkles, CheckCircle2, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  author: string;
  location: string;
  allocationNo: string;
  product: string;
  category: "cream" | "oil" | "serum";
  skinProfile: string;
  rating: number;
  date: string;
  title: string;
  review: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Éléonore de V.",
    location: "Paris, 8th Arrondissement",
    allocationNo: "Batch #0314 / FR",
    product: "Suwani Crème d'Or",
    category: "cream",
    skinProfile: "Sensitized Urban Lipid Deficit",
    rating: 5,
    date: "August 2026",
    title: "An architectural marvel before you even touch the cream",
    review:
      "Unscrewing the weighted 24K gilded cap and lifting the hermetic seal feels like an unhurried sacred ritual. The whipped emulsion is utterly weightless yet deeply quenching—within three mornings, the dehydration micro-lines around my cheekbones completely vanished.",
  },
  {
    id: "t2",
    author: "Kenji Takahashi",
    location: "Minami-Aoyama, Tokyo",
    allocationNo: "Batch #0592 / JP",
    product: "Suwani Crème d'Or",
    category: "cream",
    skinProfile: "Reactive Winter Barrier",
    rating: 5,
    date: "July 2026",
    title: "Kyoto botanical elegance meets French formulation perfection",
    review:
      "Having tested countless heritage Japanese formulations, Suwani operates on another plane. You feel the Camellia seed oil immediately bond with your skin without any tacky residue. It transforms dry epidermal tightness into supple porcelain calm.",
  },
  {
    id: "t3",
    author: "Dr. Sophia Lindqvist",
    location: "Zurich, Switzerland",
    allocationNo: "Batch #0208 / CH",
    product: "Sérum Phyto-Cellulaire",
    category: "serum",
    skinProfile: "Post-Laser Sensitive Epiderma",
    rating: 5,
    date: "August 2026",
    title: "Clinical-level bakuchiol with zero irritation",
    review:
      "As a dermatologist, I am inherently skeptical of marketing claims. But the anhydrous 2% bakuchiol and copper peptide matrix delivers genuine fibroblast stimulation without the erythema or peeling of synthetic retinol. My patients consistently note radiant rebound elasticity.",
  },
  {
    id: "t4",
    author: "Camilla Thorne",
    location: "Upper East Side, New York",
    allocationNo: "Batch #0771 / US",
    product: "L'Huile Céleste",
    category: "oil",
    skinProfile: "Frequent Traveler / Dehydrated Air",
    rating: 5,
    date: "June 2026",
    title: "The only elixir that survives long-haul cabin air",
    review:
      "Three golden drops pressed into clean skin before a transatlantic flight. I landed with radiant, dewy skin instead of the usual dullness. The prickly pear seed and Moroccan tansy absorb in under 40 seconds—there is zero greasy film.",
  },
  {
    id: "t5",
    author: "Marcello Bellini",
    location: "Brera, Milan",
    allocationNo: "Batch #0419 / IT",
    product: "Baume Réparateur Céleste",
    category: "cream",
    skinProfile: "Dry Visage / Nocturnal Repair",
    rating: 5,
    date: "May 2026",
    title: "Waking up with newly constructed skin",
    review:
      "The anhydrous wax warms on your palms and transforms into a golden velvet nectar. It creates an invisible, breathable cocoon that prevents water evaporation throughout sleep. You wake up with rested, plump skin as if you spent a week in a high-alpine retreat.",
  },
  {
    id: "t6",
    author: "Aurelia von H.",
    location: "Vienna, Austria",
    allocationNo: "Batch #0940 / AT",
    product: "Suwani Crème d'Or",
    category: "cream",
    skinProfile: "Fine Lines & Photo-Stressed Visage",
    rating: 5,
    date: "August 2026",
    title: "Worth every moment on the waitlist",
    review:
      "The craftsmanship is sublime. The vessel is cool and substantial in your hand, and the formulation itself melts instantaneously into the skin. This has replaced my entire seven-step routine with a single, potent daily meditation.",
  },
];

export const CustomerFeedbackSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "cream" | "oil" | "serum">("all");

  const filtered = TESTIMONIALS.filter((t) => (filter === "all" ? true : t.category === filter));

  return (
    <section id="feedback" className="py-32 px-6 md:px-12 bg-[#030303] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#c9a86a]/[0.025] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono">
                Patron Dispatches • Verified Allocations
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/95">
              Words from the Private Ledger
            </h2>
          </div>

          {/* Aggregate Rating Scoreboard */}
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <div className="flex items-center gap-1 text-[#c9a86a] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a86a]" />
                ))}
              </div>
              <span className="text-2xl font-light text-white font-mono">4.98</span>
              <span className="text-xs text-white/40 font-mono"> / 5.0</span>
            </div>
            <div className="h-10 w-px bg-white/[0.08]" />
            <div className="text-xs text-white/60 font-light space-y-0.5">
              <p className="text-white/90 font-medium">1,280 Verified Private Allocations</p>
              <p className="text-white/40 font-mono text-[11px]">99.2% Seasonal Re-Allocation Rate</p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-white/[0.06] scrollbar-none">
          {[
            { label: "All Dispatches", value: "all" },
            { label: "Crème d'Or & Balms", value: "cream" },
            { label: "Cellular Oils", value: "oil" },
            { label: "Bio-Serums", value: "serum" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value as any)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-light transition-all duration-300 ${
                filter === cat.value
                  ? "bg-white text-black font-medium shadow-md shadow-white/10"
                  : "bg-white/[0.02] text-white/60 hover:text-white hover:bg-white/[0.06] border border-white/[0.05]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.06] hover:border-[#c9a86a]/40 transition-all duration-500 shadow-xl"
            >
              <div>
                {/* Header: Stars & Batch Allocation */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#c9a86a]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c9a86a]" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] uppercase text-[#c9a86a] px-2 py-0.5 rounded-full bg-[#c9a86a]/10 border border-[#c9a86a]/20">
                    {t.allocationNo}
                  </span>
                </div>

                {/* Review Title */}
                <h3 className="text-base font-light text-white/95 group-hover:text-[#c9a86a] transition-colors leading-snug">
                  “{t.title}”
                </h3>

                {/* Review Body */}
                <p className="text-xs sm:text-[13px] text-white/60 font-light mt-3 leading-relaxed">
                  {t.review}
                </p>
              </div>

              {/* Patron Identity & Verified Badge */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white/90">{t.author}</span>
                    <span title="Verified Allocation Patron">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a86a]" />
                    </span>
                  </div>
                  <span className="text-[11px] text-white/40 block mt-0.5">{t.location}</span>
                  <span className="text-[10px] text-white/30 font-mono block mt-1">
                    Skin Profile: {t.skinProfile}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-white/40 uppercase block">Product</span>
                  <span className="text-xs text-white/80 font-light block">{t.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Ledger Footnote */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] text-xs text-white/50 font-light">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#c9a86a] shrink-0" />
            <span>
              All reviews are collected exclusively from confirmed private allocation serial receipts. Zero sponsored testimonials.
            </span>
          </div>
          <a
            href="#collection"
            className="text-[#c9a86a] hover:underline font-mono text-[11px] uppercase tracking-wider shrink-0"
          >
            Explore Verified Formulations →
          </a>
        </div>
      </div>
    </section>
  );
};
