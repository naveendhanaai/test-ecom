"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Shield, Compass, Droplets } from "lucide-react";

export const LuxuryBannerSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#000000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* The Luxury Banner Container */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#c9a86a]/30 bg-gradient-to-br from-[#12100b] via-[#090806] to-[#040404] p-8 sm:p-14 lg:p-20 shadow-2xl">
          {/* Subtle Radial Glows inside the banner */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c9a86a]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#c9a86a]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Grid Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            {/* Live Allocation Notice Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#c9a86a]/15 border border-[#c9a86a]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c9a86a] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c9a86a]">
                Autumn Harvest Allocation Active • Paris &amp; Kyoto
              </span>
            </div>

            {/* Editorial Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15]">
              Cellular longevity born in Grasse,{" "}
              <span className="font-serif italic font-normal text-[#c9a86a]">
                perfected in Kyoto.
              </span>
            </h2>

            {/* Lead Description */}
            <p className="mt-6 text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-xl">
              Every formulation is hand-sealed in numbered micro-batches using cryogenic cold extractions and 100% anhydrous matrices. Housed in solid brass vessels engineered to protect fragile bio-peptides from light degradation.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products/suwani-creme-dor"
                className="px-8 py-4 rounded-full bg-white text-black hover:bg-[#c9a86a] hover:text-black text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Reserve Allocation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white text-white text-xs uppercase tracking-[0.25em] font-light transition-all text-center"
              >
                Atelier Manifesto
              </Link>
            </div>

            {/* Metrics Bar */}
            <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="text-2xl sm:text-3xl font-light text-white font-mono block">98.7%</span>
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-light mt-1 block">
                  Bio-Availability
                </span>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-light text-[#c9a86a] font-mono block">0%</span>
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-light mt-1 block">
                  Water Dilution
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="text-2xl sm:text-3xl font-light text-white font-mono block">24K</span>
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-light mt-1 block">
                  Gilded Armor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
