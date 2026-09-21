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
  "PHYTO-CELLULAR RENEWAL SERUM • 2% AYURVEDIC BABCHI & BAKUCHIOL",
  "WILD TURMERIC, SACRED SANDALWOOD & KASHMIRI SAFFRON",
  "CELESTIAL RADIANCE ELIXIR • COLD-PRESSED BOTANICAL TAILAM",
  "AMLA BIO-ACTIVE VITAMIN C & ASHWAGANDHA CELLULAR ACTIVATOR",
  "“THE MOST COVETED FORMULATION IN CONTEMPORARY SKINCARE” — HARPER’S BAZAAR",
  "TRIDOSHA CELLULAR EQUILIBRIUM & OJAS RADIANCE",
  "NATURAL RETINOL ALTERNATIVE • ZERO PHOTOSENSITIVITY & ZERO IRRITATION",
  "“PURE SENSORY TRANSCENDENCE & WEIGHTLESS BARRIER REPAIR” — ELLE UK",
  "BIOPHOTONIC VIOLET GLASS & HERBAL RASAYANA",
  "CLINICALLY VALIDATED 98.7% EPIDERMAL BIOAVAILABILITY",
];

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = DEFAULT_ITEMS,
  speed = "slow",
}) => {
  const duration = speed === "slow" ? "95s" : "70s";

  return (
    <div className="relative w-full overflow-hidden py-6 bg-[#080808] border-y border-[#c9a86a]/20 select-none shadow-inner">
      {/* Side gradient feathering */}
      <div className="absolute left-0 inset-y-0 w-28 sm:w-36 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-28 sm:w-36 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* First track */}
        <div className="flex items-center gap-14 shrink-0 pr-14">
          {items.map((text, i) => (
            <div key={`track1-${i}`} className="flex items-center gap-7">
              <span className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-white/90 whitespace-nowrap font-medium">
                {text.includes("—") ? (
                  <>
                    <span>{text.split("—")[0]}</span>
                    <span className="text-[#c9a86a] font-semibold">
                      — {text.split("—")[1]}
                    </span>
                  </>
                ) : text.includes("•") ? (
                  <>
                    <span>{text.split("•")[0]}</span>
                    <span className="text-[#c9a86a] font-semibold">
                      • {text.split("•")[1]}
                    </span>
                  </>
                ) : (
                  text
                )}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#c9a86a] shrink-0 drop-shadow-[0_0_8px_rgba(201,168,106,0.4)]" />
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite scroll */}
        <div className="flex items-center gap-14 shrink-0 pr-14" aria-hidden="true">
          {items.map((text, i) => (
            <div key={`track2-${i}`} className="flex items-center gap-7">
              <span className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-white/90 whitespace-nowrap font-medium">
                {text.includes("—") ? (
                  <>
                    <span>{text.split("—")[0]}</span>
                    <span className="text-[#c9a86a] font-semibold">
                      — {text.split("—")[1]}
                    </span>
                  </>
                ) : text.includes("•") ? (
                  <>
                    <span>{text.split("•")[0]}</span>
                    <span className="text-[#c9a86a] font-semibold">
                      • {text.split("•")[1]}
                    </span>
                  </>
                ) : (
                  text
                )}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#c9a86a] shrink-0 drop-shadow-[0_0_8px_rgba(201,168,106,0.4)]" />
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
          animation: marquee ${duration} linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
