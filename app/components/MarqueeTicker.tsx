"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface MarqueeTickerProps {
  items?: string[];
  speed?: "normal" | "slow";
}

const DEFAULT_ITEMS = [
  "5,000 YEARS OF VEDIC RASAYANA CELLULAR WISDOM",
  "“AN EDITORIAL MASTERPIECE IN CELLULAR RESTORATION” — VOGUE UK",
  "WILD TURMERIC, SACRED SANDALWOOD & KASHMIRI SAFFRON",
  "100% ANHYDROUS BOTANICAL EXTRACTION",
  "“THE MOST COVETED VESSEL IN CONTEMPORARY SKINCARE” — HARPER’S BAZAAR",
  "TRIDOSHA CELLULAR EQUILIBRIUM & OJAS RADIANCE",
  "“PURE SENSORY TRANSCENDENCE & WEIGHTLESS BARRIER REPAIR” — ELLE UK",
  "BIOPHOTONIC VIOLET GLASS & HERBAL RASAYANA",
  "CLINICALLY VALIDATED 98.7% EPIDERMAL BIOAVAILABILITY",
];

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ items = DEFAULT_ITEMS }) => {
  return (
    <div className="relative w-full overflow-hidden py-5 bg-[#050505] border-y border-white/[0.06] select-none">
      {/* Side gradient feathering */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* First track */}
        <div className="flex items-center gap-12 shrink-0 pr-12">
          {items.map((text, i) => (
            <div key={`track1-${i}`} className="flex items-center gap-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/70 whitespace-nowrap">
                {text}
              </span>
              <Sparkles className="w-3 h-3 text-[#c9a86a]/60 shrink-0" />
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite scroll */}
        <div className="flex items-center gap-12 shrink-0 pr-12" aria-hidden="true">
          {items.map((text, i) => (
            <div key={`track2-${i}`} className="flex items-center gap-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/70 whitespace-nowrap">
                {text}
              </span>
              <Sparkles className="w-3 h-3 text-[#c9a86a]/60 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 42s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
