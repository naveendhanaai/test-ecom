"use client";

import React, { useState } from "react";

interface Certification {
  id: string;
  name: string;
  renderLogo: (isHovered: boolean) => React.ReactNode;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: "ayush-premium",
    name: "Ministry of AYUSH",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(18, 12)">
          <circle cx="15" cy="16" r="13" fill="none" stroke={isHovered ? "#e5c17d" : "#c9a86a"} strokeWidth="1.2" strokeDasharray="3 1.5" />
          <path d="M15 7 C15 13, 19 16, 19 21 C19 24, 15 25, 15 25 C15 25, 11 24, 11 21 C11 16, 15 13, 15 7 Z" fill={isHovered ? "#f0dfba" : "#c9a86a"} />
          <circle cx="15" cy="9" r="1.5" fill="#ffffff" />
        </g>
        <text
          x="150"
          y="30"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2.5"
          className="transition-colors duration-300 uppercase"
        >
          MINISTRY OF AYUSH
        </text>
        <text
          x="150"
          y="46"
          textAnchor="middle"
          fill="#c9a86a"
          fontFamily="monospace"
          fontSize="7.5"
          letterSpacing="2.5"
          className="uppercase"
        >
          AYURVEDIC PREMIUM MARK
        </text>
      </svg>
    ),
  },
  {
    id: "who-gmp",
    name: "WHO-GMP & ISO 22716",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(18, 12)">
          <polygon points="15,3 27,9 27,23 15,29 3,23 3,9" fill={isHovered ? "rgba(201,168,106,0.15)" : "none"} stroke={isHovered ? "#e5c17d" : "#c9a86a"} strokeWidth="1.3" />
          <path d="M15 8 L17 13 L22 13 L18 16 L20 21 L15 18 L10 21 L12 16 L8 13 L13 13 Z" fill={isHovered ? "#f0dfba" : "#c9a86a"} />
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
          WHO-GMP &amp; ISO 22716
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
          CLEANROOM PHARMA-GRADE
        </text>
      </svg>
    ),
  },
  {
    id: "anhydrous",
    name: "100% Anhydrous Standard",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(18, 12)">
          <circle cx="15" cy="16" r="13" fill="none" stroke={isHovered ? "#e5c17d" : "#c9a86a"} strokeWidth="1.2" />
          <path d="M15 6 C15 6, 8 16, 8 21 C8 25, 11 27, 15 27 C19 27, 22 25, 22 21 C22 16, 15 6, 15 6 Z" fill="none" stroke={isHovered ? "#f0dfba" : "#c9a86a"} strokeWidth="1.3" />
          <line x1="8" y1="26" x2="22" y2="7" stroke={isHovered ? "#ffffff" : "#c9a86a"} strokeWidth="1.8" strokeLinecap="round" />
        </g>
        <text
          x="150"
          y="30"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2.5"
          className="transition-colors duration-300 uppercase"
        >
          100% ANHYDROUS PURITY
        </text>
        <text
          x="150"
          y="46"
          textAnchor="middle"
          fill="#c9a86a"
          fontFamily="monospace"
          fontSize="7.5"
          letterSpacing="2.5"
          className="uppercase"
        >
          ZERO WATER DILUTION
        </text>
      </svg>
    ),
  },
  {
    id: "ecocert",
    name: "ECOCERT Cosmos Organic",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(18, 12)">
          <circle cx="15" cy="16" r="13" fill="none" stroke={isHovered ? "#e5c17d" : "#c9a86a"} strokeWidth="1.2" />
          <path d="M15 8 C11 13, 10 18, 15 25 C14 19, 17 13, 15 8 Z" fill={isHovered ? "#f0dfba" : "#c9a86a"} />
          <path d="M7 16 C9 21, 12 25, 15 27" stroke="#c9a86a" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M23 16 C21 21, 18 25, 15 27" stroke="#c9a86a" strokeWidth="1" fill="none" opacity="0.6" />
        </g>
        <text
          x="150"
          y="30"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="Georgia, serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2.5"
          className="transition-colors duration-300 uppercase"
        >
          ECOCERT COSMOS
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
          100% WILDCRAFTED ORGANIC
        </text>
      </svg>
    ),
  },
  {
    id: "swiss-dermal",
    name: "Swiss Cellular Bio-Assay",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(18, 14)">
          <rect x="2" y="2" width="26" height="26" rx="6" fill="none" stroke={isHovered ? "#e5c17d" : "#c9a86a"} strokeWidth="1.3" />
          <rect x="13" y="7" width="4" height="16" rx="1" fill={isHovered ? "#f0dfba" : "#c9a86a"} />
          <rect x="7" y="13" width="16" height="4" rx="1" fill={isHovered ? "#f0dfba" : "#c9a86a"} />
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
          SWISS CELLULAR ASSAY
        </text>
        <text
          x="150"
          y="46"
          textAnchor="middle"
          fill="#c9a86a"
          fontFamily="monospace"
          fontSize="7.5"
          letterSpacing="2.5"
          className="uppercase"
        >
          GENÈVE • DERMAL VALIDATION
        </text>
      </svg>
    ),
  },
  {
    id: "cruelty-free",
    name: "100% Cruelty-Free & Vegan",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(18, 12)">
          <circle cx="15" cy="16" r="13" fill="none" stroke={isHovered ? "#e5c17d" : "#c9a86a"} strokeWidth="1.2" />
          <path d="M8 22 C10 16, 16 14, 20 11 C21 9, 20 6, 18 5 C23 6, 24 9, 24 12 C26 14, 28 15, 28 18 C28 20, 24 22, 21 22 C16 23, 11 24, 8 22 Z" fill={isHovered ? "#f0dfba" : "#c9a86a"} />
          <circle cx="22" cy="11" r="1" fill="#000000" />
        </g>
        <text
          x="150"
          y="30"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2.5"
          className="transition-colors duration-300 uppercase"
        >
          CRUELTY-FREE &amp; VEGAN
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
          PETA &amp; LEAPING BUNNY
        </text>
      </svg>
    ),
  },
  {
    id: "eurofins-icp-ms",
    name: "Heavy Metal Screened",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(18, 12)">
          <polygon points="15,3 27,9 27,23 15,29 3,23 3,9" fill={isHovered ? "rgba(201,168,106,0.15)" : "none"} stroke={isHovered ? "#e5c17d" : "#c9a86a"} strokeWidth="1.3" />
          <ellipse cx="15" cy="16" rx="10" ry="3.5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" transform="rotate(30 15 16)" />
          <ellipse cx="15" cy="16" rx="10" ry="3.5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" transform="rotate(-30 15 16)" />
          <circle cx="15" cy="16" r="3" fill={isHovered ? "#f0dfba" : "#c9a86a"} />
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
          HEAVY METAL SCREENED
        </text>
        <text
          x="150"
          y="46"
          textAnchor="middle"
          fill="#c9a86a"
          fontFamily="monospace"
          fontSize="7.5"
          letterSpacing="2.5"
          className="uppercase"
        >
          EUROFINS ICP-MS TESTED
        </text>
      </svg>
    ),
  },
  {
    id: "miron-glass",
    name: "Biophotonic Violet Glass",
    renderLogo: (isHovered) => (
      <svg viewBox="0 0 260 60" className="h-10 sm:h-11 w-auto overflow-visible transition-colors duration-300">
        <g transform="translate(18, 12)">
          <circle cx="15" cy="16" r="13" fill="none" stroke={isHovered ? "#e5c17d" : "#c9a86a"} strokeWidth="1.2" />
          <polygon points="15,6 23,24 7,24" fill="none" stroke={isHovered ? "#f0dfba" : "#c9a86a"} strokeWidth="1.3" />
          <line x1="5" y1="14" x2="13" y2="15" stroke="#ffffff" strokeWidth="1.2" />
          <line x1="17" y1="17" x2="25" y2="13" stroke="#c9a86a" strokeWidth="1.2" />
        </g>
        <text
          x="150"
          y="30"
          textAnchor="middle"
          fill={isHovered ? "#c9a86a" : "#ffffff"}
          fontFamily="Georgia, serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2.5"
          className="transition-colors duration-300 uppercase"
        >
          BIOPHOTONIC GLASS
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
          MIRON GLASS SWITZERLAND
        </text>
      </svg>
    ),
  },
];

export const CertificationsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 sm:py-32 px-6 md:px-12 bg-gradient-to-b from-[#030303] via-[#060504] to-[#000000] relative overflow-hidden">
      {/* Golden Section Transition Divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a86a]/35 to-transparent" />

      {/* Radiant Ambient Golden Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-[#c9a86a]/[0.035] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 mb-14 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#c9a86a]/15 border border-[#c9a86a]/30 backdrop-blur-md mb-4 shadow-lg shadow-[#c9a86a]/10">
          <span className="w-2 h-2 rounded-full bg-[#c9a86a] animate-pulse" />
          <span className="text-xs sm:text-xs md:text-sm uppercase tracking-[0.3em] text-[#e5c17d] font-mono font-semibold">
            CLINICAL RIGOUR • ACCREDITED CERTIFICATIONS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
          Certified Purity &amp; Clinical Standards
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-white/60 font-light max-w-lg mx-auto leading-relaxed">
          Every formulation is independently audited, certified, and batch-tested by leading Ayurvedic, Swiss, and European pharmacological bodies for verified bio-purity.
        </p>
      </div>

      {/* Infinite Smooth Carousel / Slider with vertical breathing room */}
      <div className="relative w-full overflow-hidden select-none py-6">
        {/* Left & Right Gradient Vignettes for Seamless Edge Fading */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />

        <div className="flex w-max animate-cert-marquee hover:[animation-play-state:paused] py-3">
          {/* First Track */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
            {CERTIFICATIONS.map((cert) => {
              const isHovered = hoveredId === cert.id;
              return (
                <div
                  key={`track1-${cert.id}`}
                  onMouseEnter={() => setHoveredId(cert.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group px-8 py-7 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-4 min-w-[260px] sm:min-w-[300px] border ${
                    isHovered
                      ? "bg-[#0c0b09] border-[#c9a86a]/70 shadow-[0_12px_32px_rgba(201,168,106,0.2)] -translate-y-1.5"
                      : "bg-white/[0.025] border-white/[0.08] hover:border-[#c9a86a]/40"
                  }`}
                >
                  <div className="h-14 flex items-center justify-center w-full px-2 overflow-visible">
                    {cert.renderLogo(isHovered)}
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] font-light text-white/80 group-hover:text-[#e5c17d] transition-colors text-center font-mono">
                    {cert.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Duplicate Track for Seamless Infinite Scrolling */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8" aria-hidden="true">
            {CERTIFICATIONS.map((cert) => {
              const isHovered = hoveredId === `${cert.id}-dup`;
              return (
                <div
                  key={`track2-${cert.id}`}
                  onMouseEnter={() => setHoveredId(`${cert.id}-dup`)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group px-8 py-7 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-4 min-w-[260px] sm:min-w-[300px] border ${
                    isHovered
                      ? "bg-[#0c0b09] border-[#c9a86a]/70 shadow-[0_12px_32px_rgba(201,168,106,0.2)] -translate-y-1.5"
                      : "bg-white/[0.025] border-white/[0.08] hover:border-[#c9a86a]/40"
                  }`}
                >
                  <div className="h-14 flex items-center justify-center w-full px-2 overflow-visible">
                    {cert.renderLogo(isHovered)}
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] font-light text-white/80 group-hover:text-[#e5c17d] transition-colors text-center font-mono">
                    {cert.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes certMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-cert-marquee {
          animation: certMarquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};
