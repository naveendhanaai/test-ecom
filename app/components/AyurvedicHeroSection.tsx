"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Droplets, Leaf } from "lucide-react";

interface BotanicalHotspot {
  id: string;
  name: string;
  sanskrit: string;
  benefit: string;
  dosha: string;
  x: string; // percentage
  y: string; // percentage
  icon: typeof Sparkles;
}

// Hotspots calibrated for the new right-composed visual
const hotspots: BotanicalHotspot[] = [
  {
    id: "ojas-skin",
    name: "Luminous Ojas Glow",
    sanskrit: "Ojas Tejas (ओजस्)",
    benefit: "Natural cellular radiance and deep dermal moisture barrier protection.",
    dosha: "Tridoshic",
    x: "67%",
    y: "37%",
    icon: Sparkles,
  },
  {
    id: "saffron",
    name: "Kashmiri Saffron Threads",
    sanskrit: "Kumkuma (कुङ्कुम)",
    benefit: "Rare carotenoids neutralise oxidation and illuminate hyper-pigmentation.",
    dosha: "Vata & Pitta",
    x: "83%",
    y: "30%",
    icon: Droplets,
  },
  {
    id: "gotu-kola",
    name: "Gotu Kola & Centella",
    sanskrit: "Mandukaparni (मण्डूकपर्णी)",
    benefit: "Stimulates type-I collagen synthesis and restores micro-elasticity.",
    dosha: "Pitta & Kapha",
    x: "91%",
    y: "38%",
    icon: Leaf,
  },
  {
    id: "turmeric-sandalwood",
    name: "Wild Turmeric & Sandalwood",
    sanskrit: "Haridra & Chandana (हरिद्रा - चन्दन)",
    benefit: "Bio-curcuminoids and cooling santalols balance Pitta, purify the barrier, and impart luminous glow.",
    dosha: "Tridoshic",
    x: "88%",
    y: "25%",
    icon: Sparkles,
  },
];

export function AyurvedicHeroSection() {
  const [activeHotspot, setActiveHotspot] = useState<BotanicalHotspot | null>(null);

  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-[#000000] pt-24 pb-16">
      {/* Full-Bleed Edge-to-Edge Cinematic Background Visual (Woman Naturally on the Right) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full animate-ken-burns">
          <Image
            src="/hero-ayurvedic.jpg"
            alt="Luminous Ayurvedic radiant skin and sacred botanicals - Asaliya Production"
            fill
            priority
            quality={95}
            className="object-cover object-center filter brightness-[0.95] contrast-[1.05]"
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

        {/* Natural gradient blend: Enhances legibility on the left while leaving the right completely open */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/70 via-35% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/50 pointer-events-none" />

        {/* Atmospheric Floating Gold Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[18%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#c9a86a]/60 blur-[0.5px] animate-pulse" />
          <div className="absolute top-[35%] right-[10%] w-2 h-2 rounded-full bg-[#e8c785]/70 blur-[1px] animate-pulse" />
          <div className="absolute top-[65%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#c9a86a]/50 blur-[0.5px] animate-pulse" />
          <div className="absolute top-[48%] right-[12%] w-1 h-1 rounded-full bg-[#c9a86a]/80 animate-ping" />
        </div>
      </div>

      {/* Interactive Botanical Hotspots on the Girl's Portrait (Right Side) */}
      <div className="absolute inset-0 z-10 pointer-events-auto hidden md:block">
        {hotspots.map((spot) => {
          const Icon = spot.icon;
          const isSelected = activeHotspot?.id === spot.id;

          return (
            <div
              key={spot.id}
              style={{ top: spot.y, left: spot.x }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
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

              {/* Hotspot Floating Tooltip */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-64 p-4 rounded-2xl bg-[#090909]/95 border border-[#c9a86a]/30 backdrop-blur-xl shadow-2xl transition-all duration-300 z-50 pointer-events-none ${
                  isSelected
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-white/[0.08]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#c9a86a]">
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
                  <span className="text-[#c9a86a]/90">BIO-ACTIVITY</span>
                  <span className="text-white/90">98.7% BIOAVAILABLE</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hero Editorial Content Positioned on the Left (Zero Overlap with the Girl) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
          {/* Vedic Heritage Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#c9a86a]/10 border border-[#c9a86a]/30 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase font-mono tracking-[0.25em] text-[#e5c17d] font-semibold">
              SACRED VEDIC RASAYANA • CELLULAR LONGEVITY
            </span>
          </div>

          {/* Editorial Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/95 leading-[1.1]">
            The Science of <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0dfba] to-[#c9a86a]">
              Luminous Ojas.
            </span>
          </h1>

          {/* Subtitle & Ayurvedic Storytelling */}
          <p className="mt-6 text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-lg">
            Where five millennia of Ayurvedic alchemy converge with modern cellular biochemistry. Hand-infused with Kashmiri saffron, wild turmeric, sacred sandalwood, and wildcrafted Gotu Kola to awaken your skin&apos;s natural inner radiance.
          </p>

          {/* Call to Actions - Strictly Side by Side */}
          <div className="mt-8 flex flex-row items-center gap-3 sm:gap-4 overflow-x-auto pb-1">
            <Link
              href="/shop"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#c9a86a] text-[#000000] hover:bg-white text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-xl shadow-[#c9a86a]/20 inline-flex items-center justify-center gap-2 group whitespace-nowrap shrink-0"
            >
              <span>Explore Formulations</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/shop?dosha=Tridoshic"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black/60 border border-white/30 hover:border-[#c9a86a] hover:text-[#c9a86a] text-white text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium transition-all backdrop-blur-md whitespace-nowrap shrink-0"
            >
              Discover Your Dosha
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
