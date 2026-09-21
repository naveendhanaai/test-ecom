"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Droplets, Leaf, Sun, Shield } from "lucide-react";

interface BotanicalHotspot {
  id: string;
  name: string;
  sanskrit: string;
  benefit: string;
  dosha: string;
  x: string; // percentage
  y: string; // percentage
  icon: typeof Sparkles;
  bioActivityLabel: string;
  bioActivityValue: string;
}

// Hotspots calibrated for the right-composed visual with complete Ayurvedic & Bio-Activity details
const hotspots: BotanicalHotspot[] = [
  {
    id: "saffron",
    name: "Kashmiri Saffron Threads",
    sanskrit: "Kumkuma (कुङ्कुम)",
    benefit: "Rare carotenoids neutralise oxidation and illuminate hyper-pigmentation.",
    dosha: "Vata & Pitta",
    x: "78%",
    y: "28%",
    icon: Droplets,
    bioActivityLabel: "BIO-ACTIVITY",
    bioActivityValue: "98.7% BIOAVAILABLE",
  },
  {
    id: "turmeric-sandalwood",
    name: "Wild Turmeric & Mysore Sandalwood",
    sanskrit: "Haridra & Chandana (हरिद्रा - चन्दन)",
    benefit: "Bio-curcuminoids and cooling santalols balance Pitta, purify the barrier, and impart luminous glow.",
    dosha: "Tridoshic",
    x: "84%",
    y: "20%",
    icon: Sparkles,
    bioActivityLabel: "BIO-ACTIVITY",
    bioActivityValue: "98.7% BIOAVAILABLE",
  },
  {
    id: "gotu-kola",
    name: "Gotu Kola & Centella Asiatica",
    sanskrit: "Mandukaparni (मण्डूकपर्णी)",
    benefit: "Stimulates type-I collagen synthesis, calms micro-inflammation, and restores elasticity.",
    dosha: "Pitta & Kapha",
    x: "82%",
    y: "42%",
    icon: Leaf,
    bioActivityLabel: "BIO-ACTIVITY",
    bioActivityValue: "98.7% BIOAVAILABLE",
  },
  {
    id: "ojas-skin",
    name: "Luminous Ojas Radiance",
    sanskrit: "Ojas Tejas (ओजस्)",
    benefit: "Deep dermal moisture retention, lipid barrier restoration, and luminous cellular vitality.",
    dosha: "Tridoshic",
    x: "67%",
    y: "36%",
    icon: Sun,
    bioActivityLabel: "BIO-ACTIVITY",
    bioActivityValue: "98.7% BIOAVAILABLE",
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha Adaptogenic Root",
    sanskrit: "Ashwagandha (अश्वगन्धा)",
    benefit: "Neutralises cortisol-induced oxidative stress and fortifies cellular resilience.",
    dosha: "Vata & Kapha",
    x: "73%",
    y: "55%",
    icon: Shield,
    bioActivityLabel: "BIO-ACTIVITY",
    bioActivityValue: "98.7% BIOAVAILABLE",
  },
];

export function AyurvedicHeroSection() {
  const [activeHotspot, setActiveHotspot] = useState<BotanicalHotspot | null>(hotspots[0]);

  return (
    <section className="relative w-full min-h-[100dvh] sm:min-h-[92vh] flex items-center overflow-hidden bg-[#000000] pt-28 pb-16 sm:pt-24 sm:pb-16">
      {/* Full-Bleed Edge-to-Edge Cinematic Background Visual (Woman Naturally on the Right) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full animate-ken-burns">
          <Image
            src="/hero-ayurvedic.jpg"
            alt="Luminous Ayurvedic radiant skin and sacred botanicals - Asaliya Production"
            fill
            priority
            quality={95}
            className="object-cover object-[72%_center] sm:object-center filter brightness-[0.95] contrast-[1.05]"
          />
        </div>

        {/* Golden Luminescence Glow focused on her glowing cheek and collarbone */}
        <div
          className="absolute top-1/3 right-[15%] w-[550px] h-[550px] rounded-full pointer-events-none animate-skin-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(201, 168, 106, 0.22) 0%, rgba(201, 168, 106, 0.05) 50%, transparent 75%)",
          }}
        />

        {/* Mobile-focused bottom & top vignette for crystal clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-60% to-black/30 md:hidden pointer-events-none" />

        {/* Desktop natural gradient blend: Enhances legibility on the left while leaving the right completely open */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/70 via-35% to-transparent pointer-events-none hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/50 pointer-events-none hidden md:block" />

        {/* Atmospheric Floating Gold Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[18%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#c9a86a]/60 blur-[0.5px] animate-pulse" />
          <div className="absolute top-[35%] right-[10%] w-2 h-2 rounded-full bg-[#e8c785]/70 blur-[1px] animate-pulse" />
          <div className="absolute top-[65%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#c9a86a]/50 blur-[0.5px] animate-pulse" />
          <div className="absolute top-[48%] right-[12%] w-1 h-1 rounded-full bg-[#c9a86a]/80 animate-ping" />
        </div>
      </div>

      {/* Interactive Botanical Hotspots on the Girl's Portrait (Right Side) - z-30 for top layer priority */}
      <div className="absolute inset-0 z-30 pointer-events-none hidden md:block">
        {hotspots.map((spot) => {
          const Icon = spot.icon;
          const isSelected = activeHotspot?.id === spot.id;

          return (
            <div
              key={spot.id}
              style={{ top: spot.y, left: spot.x }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group pointer-events-auto"
              onClick={() => setActiveHotspot(isSelected ? null : spot)}
            >
              {/* Radar Ping Animation */}
              <span className="absolute -inset-2 rounded-full bg-[#c9a86a]/30 animate-radar-ping pointer-events-none" />
              
              {/* Hotspot Center Disc */}
              <div
                className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg ${
                  isSelected
                    ? "bg-[#c9a86a] text-[#000000] border-white scale-110 shadow-[#c9a86a]/50"
                    : "bg-[#000000]/70 text-[#c9a86a] border-[#c9a86a]/60 group-hover:scale-110 group-hover:border-[#c9a86a] group-hover:bg-[#c9a86a]/20"
                }`}
                aria-label={`Learn about ${spot.name}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>

              {/* Hotspot Floating Tooltip with Bidirectional Flip */}
              <div
                className={`absolute ${
                  parseInt(spot.x) > 65 ? "right-0 sm:right-[-10px]" : "left-0 sm:left-[-10px]"
                } ${
                  parseInt(spot.y) > 50 ? "bottom-full mb-3" : "top-full mt-3"
                } w-64 sm:w-72 p-4 rounded-2xl bg-[#090909]/95 border border-[#c9a86a]/40 backdrop-blur-xl shadow-2xl shadow-black/80 transition-all duration-300 z-50 pointer-events-none ${
                  isSelected
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 -translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-white/[0.08]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#c9a86a] font-semibold">
                    {spot.dosha}
                  </span>
                  <span className="text-[9px] font-serif italic text-white/50">
                    {spot.sanskrit}
                  </span>
                </div>
                <h4 className="text-sm font-light text-white tracking-wide">{spot.name}</h4>
                <p className="text-xs font-light text-white/70 mt-1 leading-relaxed">
                  {spot.benefit}
                </p>
                <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#c9a86a]/90 font-semibold">{spot.bioActivityLabel}</span>
                  <span className="text-white/90 font-medium">{spot.bioActivityValue}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hero Editorial Content Positioned on the Left (Zero Overlap with the Girl) */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 w-full pointer-events-none">
        <div className="max-w-xl lg:max-w-lg xl:max-w-xl pointer-events-auto">
          {/* Vedic Heritage Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a86a]/15 border border-[#c9a86a]/30 backdrop-blur-md mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#e5c17d] font-semibold">
              SACRED VEDIC RASAYANA • CELLULAR LONGEVITY
            </span>
          </div>

          {/* Editorial Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/95 leading-[1.12]">
            The Science of <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0dfba] to-[#c9a86a]">
              Luminous Ojas.
            </span>
          </h1>

          {/* Subtitle & Ayurvedic Storytelling */}
          <p className="mt-4 sm:mt-6 text-xs sm:text-base text-white/70 font-light leading-relaxed max-w-lg">
            Where five millennia of Ayurvedic alchemy converge with modern cellular biochemistry. Hand-infused with Kashmiri saffron, wild turmeric, sacred sandalwood, and wildcrafted Gotu Kola to awaken your skin&apos;s natural inner radiance.
          </p>

          {/* Call to Actions - Centered on mobile, left-aligned side-by-side on desktop */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-2.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/shop"
              className="w-fit max-w-[250px] sm:max-w-none px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#c9a86a] text-[#000000] hover:bg-white text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] font-semibold transition-all duration-300 shadow-xl shadow-[#c9a86a]/20 inline-flex items-center justify-center gap-2 group whitespace-nowrap text-center"
            >
              <span>Explore Formulations</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/shop?dosha=Tridoshic"
              className="w-fit max-w-[250px] sm:max-w-none px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black/70 border border-white/30 hover:border-[#c9a86a] hover:text-[#c9a86a] text-white text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] font-medium transition-all backdrop-blur-md inline-flex items-center justify-center whitespace-nowrap text-center"
            >
              Discover Your Dosha
            </Link>
          </div>

          {/* Mobile & Tablet Interactive Botanical Pills Selector */}
          <div className="mt-7 pt-5 border-t border-white/10 md:hidden">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e5c17d] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-pulse" />
                Active Bio-Botanicals
              </span>
              <span className="text-[9px] font-mono text-white/40">Tap to inspect</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-1 px-1">
              {hotspots.map((spot) => {
                const isSelected = activeHotspot?.id === spot.id;
                const Icon = spot.icon;
                const shortLabel =
                  spot.id === "saffron"
                    ? "Saffron"
                    : spot.id === "turmeric-sandalwood"
                    ? "Turmeric & Sandalwood"
                    : spot.id === "gotu-kola"
                    ? "Gotu Kola"
                    : spot.id === "ojas-skin"
                    ? "Ojas Radiance"
                    : "Ashwagandha";

                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(isSelected ? null : spot)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all whitespace-nowrap shrink-0 border ${
                      isSelected
                        ? "bg-[#c9a86a] text-black border-white font-medium shadow-md shadow-[#c9a86a]/30"
                        : "bg-black/60 text-white/80 border-[#c9a86a]/40 hover:border-[#c9a86a]"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{shortLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Active Botanical Card */}
            {activeHotspot && (
              <div className="mt-2.5 p-4 rounded-2xl bg-[#0a0a0a]/95 border border-[#c9a86a]/40 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-white/[0.08]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#c9a86a] font-semibold">
                    {activeHotspot.dosha}
                  </span>
                  <span className="text-[10px] font-serif italic text-white/60">
                    {activeHotspot.sanskrit}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-white tracking-wide">{activeHotspot.name}</h4>
                <p className="text-xs font-light text-white/75 mt-1 leading-relaxed">
                  {activeHotspot.benefit}
                </p>
                <div className="mt-3 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#c9a86a] font-semibold">{activeHotspot.bioActivityLabel}</span>
                  <span className="text-white/90 font-medium bg-white/[0.06] px-2 py-0.5 rounded border border-white/10">
                    {activeHotspot.bioActivityValue}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
