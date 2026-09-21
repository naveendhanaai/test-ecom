"use client";

import React, { useState } from "react";

interface Partner {
  id: string;
  name: string;
  renderLogo: (isHovered: boolean) => React.ReactNode;
}

const PARTNERS: Partner[] = [
  {
    id: "harrods",
    name: "Harrods",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 220 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <text
          x="110"
          y="36"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="Georgia, serif"
          fontSize="28"
          fontStyle="italic"
          fontWeight="bold"
          letterSpacing="2"
          className="transition-colors duration-300"
        >
          Harrods
        </text>
        <text
          x="110"
          y="50"
          textAnchor="middle"
          fill="#c9a86a"
          fontFamily="monospace"
          fontSize="7"
          letterSpacing="4"
          className="uppercase"
        >
          KNIGHTSBRIDGE • LONDON
        </text>
      </svg>
    ),
  },
  {
    id: "selfridges",
    name: "Selfridges & Co.",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 240 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <text
          x="120"
          y="32"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontSize="18"
          fontWeight="800"
          letterSpacing="4"
          className="transition-colors duration-300 uppercase"
        >
          SELFRIDGES &amp; CO
        </text>
        <line x1="40" y1="40" x2="200" y2="40" stroke="#c9a86a" strokeWidth="1" />
        <text
          x="120"
          y="52"
          textAnchor="middle"
          fill="#888888"
          fontFamily="monospace"
          fontSize="7"
          letterSpacing="3"
          className="uppercase"
        >
          OXFORD STREET • LONDON
        </text>
      </svg>
    ),
  },
  {
    id: "bon-marche",
    name: "Le Bon Marché",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 240 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <text
          x="120"
          y="32"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="19"
          fontWeight="400"
          letterSpacing="3"
          className="transition-colors duration-300"
        >
          LE BON MARCHÉ
        </text>
        <text
          x="120"
          y="48"
          textAnchor="middle"
          fill="#c9a86a"
          fontFamily="serif"
          fontSize="9"
          fontStyle="italic"
          letterSpacing="3"
        >
          RIVE GAUCHE • PARIS
        </text>
      </svg>
    ),
  },
  {
    id: "bergdorf",
    name: "Bergdorf Goodman",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 240 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <text
          x="120"
          y="32"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="Didot, 'Bodoni MT', serif"
          fontSize="16"
          fontWeight="600"
          letterSpacing="4"
          className="transition-colors duration-300 uppercase"
        >
          BERGDORF GOODMAN
        </text>
        <text
          x="120"
          y="48"
          textAnchor="middle"
          fill="#c9a86a"
          fontFamily="monospace"
          fontSize="7.5"
          letterSpacing="4"
          className="uppercase"
        >
          5TH AVENUE • NEW YORK
        </text>
      </svg>
    ),
  },
  {
    id: "kerala-ayurveda",
    name: "Kerala Vedic Institute",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(25, 12)">
          <circle cx="15" cy="16" r="13" fill="none" stroke="#c9a86a" strokeWidth="1.2" />
          <path d="M15 7 C15 13, 19 16, 19 21 C19 24, 15 25, 15 25 C15 25, 11 24, 11 21 C11 16, 15 13, 15 7 Z" fill="#c9a86a" />
        </g>
        <text
          x="150"
          y="30"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2"
          className="transition-colors duration-300 uppercase"
        >
          KERALA VEDIC RESEARCH
        </text>
        <text
          x="150"
          y="46"
          textAnchor="middle"
          fill="#888888"
          fontFamily="monospace"
          fontSize="7.5"
          letterSpacing="2.5"
          className="uppercase"
        >
          TERROIR CERTIFICATION
        </text>
      </svg>
    ),
  },
  {
    id: "swiss-dermal",
    name: "Swiss Dermal Academy",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(25, 14)">
          <rect x="0" y="3" width="22" height="22" rx="4" fill="none" stroke="#c9a86a" strokeWidth="1.3" />
          <rect x="9.5" y="7.5" width="3" height="13" fill="#c9a86a" />
          <rect x="4.5" y="12.5" width="13" height="3" fill="#c9a86a" />
        </g>
        <text
          x="150"
          y="30"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2.5"
          className="transition-colors duration-300 uppercase"
        >
          SWISS DERMAL RESEARCH
        </text>
        <text
          x="150"
          y="46"
          textAnchor="middle"
          fill="#888888"
          fontFamily="monospace"
          fontSize="7.5"
          letterSpacing="3"
          className="uppercase"
        >
          GENÈVE • CELLULAR BIO-ASSAY
        </text>
      </svg>
    ),
  },
  {
    id: "kew-gardens",
    name: "Royal Phyto-Lab London",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(25, 12)">
          <circle cx="15" cy="16" r="13" fill="none" stroke="#c9a86a" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="15" cy="16" r="7" fill="none" stroke="#ffffff" strokeWidth="1" />
          <circle cx="15" cy="16" r="2.5" fill="#c9a86a" />
        </g>
        <text
          x="150"
          y="30"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="Georgia, serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2"
          className="transition-colors duration-300 uppercase"
        >
          ROYAL PHYTO-LAB
        </text>
        <text
          x="150"
          y="46"
          textAnchor="middle"
          fill="#c9a86a"
          fontFamily="monospace"
          fontSize="7.5"
          letterSpacing="3"
          className="uppercase"
        >
          LONDON • BOTANICAL DNA
        </text>
      </svg>
    ),
  },
  {
    id: "lane-crawford",
    name: "Lane Crawford",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 240 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <text
          x="120"
          y="32"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="Georgia, serif"
          fontSize="19"
          fontWeight="400"
          letterSpacing="4"
          className="transition-colors duration-300 uppercase"
        >
          LANE CRAWFORD
        </text>
        <text
          x="120"
          y="48"
          textAnchor="middle"
          fill="#c9a86a"
          fontFamily="monospace"
          fontSize="7.5"
          letterSpacing="4"
          className="uppercase"
        >
          CENTRAL • HONG KONG
        </text>
      </svg>
    ),
  },
];

interface PartnersSectionProps {
  sectionIndex?: string;
}

export const PartnersSection: React.FC<PartnersSectionProps> = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="partners" className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#030303] via-[#050504] to-[#020202] relative overflow-hidden">
      {/* Golden Section Transition Divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a86a]/30 to-transparent" />

      {/* Subtle Ambient Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#c9a86a]/[0.025] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 mb-14 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono">
            GLOBAL NETWORK • ACCREDITED ALLIANCE
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
          Our Prestigious Partners
        </h2>
      </div>

      {/* Infinite Smooth Carousel / Slider with vertical breathing room to prevent clipping */}
      <div className="relative w-full overflow-hidden select-none py-8">
        {/* Left & Right Gradient Vignettes for Seamless Edge Fading */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#020202] via-[#020202]/80 to-transparent z-20 pointer-events-none" />

        <div className="flex w-max animate-partner-marquee hover:[animation-play-state:paused] py-3">
          {/* First Track */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
            {PARTNERS.map((partner) => {
              const isHovered = hoveredId === partner.id;
              return (
                <div
                  key={`track1-${partner.id}`}
                  onMouseEnter={() => setHoveredId(partner.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group px-8 py-7 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-4 min-w-[250px] sm:min-w-[290px] border ${
                    isHovered
                      ? "bg-[#0c0b09] border-[#c9a86a]/60 shadow-[0_12px_32px_rgba(201,168,106,0.18)] -translate-y-1.5"
                      : "bg-white/[0.02] border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  <div className="h-14 flex items-center justify-center w-full px-2 overflow-visible">
                    {partner.renderLogo(isHovered)}
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] font-light text-white/80 group-hover:text-[#e5c17d] transition-colors text-center font-mono">
                    {partner.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Duplicate Track for Seamless Infinite Scrolling */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8" aria-hidden="true">
            {PARTNERS.map((partner) => {
              const isHovered = hoveredId === `${partner.id}-dup`;
              return (
                <div
                  key={`track2-${partner.id}`}
                  onMouseEnter={() => setHoveredId(`${partner.id}-dup`)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group px-8 py-7 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-4 min-w-[250px] sm:min-w-[290px] border ${
                    isHovered
                      ? "bg-[#0c0b09] border-[#c9a86a]/60 shadow-[0_12px_32px_rgba(201,168,106,0.18)] -translate-y-1.5"
                      : "bg-white/[0.02] border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  <div className="h-14 flex items-center justify-center w-full px-2 overflow-visible">
                    {partner.renderLogo(isHovered)}
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] font-light text-white/80 group-hover:text-[#e5c17d] transition-colors text-center font-mono">
                    {partner.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes partnerMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-partner-marquee {
          animation: partnerMarquee 32s linear infinite;
        }
      `}</style>
    </section>
  );
};
