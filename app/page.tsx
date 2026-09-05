"use client";

import React from "react";
import Link from "next/link";
import { Header } from "./components/Header";
import { ProductScrollCanvas } from "./components/ProductScrollCanvas";
import { ProductGridSection } from "./components/ProductGridSection";
import { Footer } from "./components/Footer";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      {/* Navigation Header */}
      <Header />

      {/* Hero Scroll-Driven Product Narrative (Completely unobstructed vessel in center) */}
      <section id="story" className="relative w-full">
        <ProductScrollCanvas />
      </section>

      {/* Product Collection Showcase Grid */}
      <ProductGridSection />

      {/* Architectural Specifications Section */}
      <section id="specifications" className="py-32 px-6 md:px-12 bg-[#000000] border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono block mb-3">
                Architectural Anatomy
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
                Vessel Engineering
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-md leading-relaxed">
              Every curve, thread, and seal of the Suwani tub is precision calibrated to protect light-sensitive
              bio-active peptides from photochemical and atmospheric degradation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/30 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#c9a86a]">01 / GILDED ARMOR</span>
                <h3 className="text-xl font-light text-white/90 mt-2">
                  Brushed 24K Gold Alloy
                </h3>
                <p className="text-xs text-white/50 font-light mt-3 leading-relaxed">
                  Engineered from solid-weighted brass with a brushed 24K gold finish that blocks
                  100% of thermal radiation and actinic light, preserving sensitive active bio-lipids.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] text-white/40 font-mono">
                NET WT. 50 ML / 1.7 FL. OZ.
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/30 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#c9a86a]">02 / HERMETIC CLOSURE</span>
                <h3 className="text-xl font-light text-white/90 mt-2">
                  Precision Disc &amp; Lid
                </h3>
                <p className="text-xs text-white/50 font-light mt-3 leading-relaxed">
                  Internal barrier disc sits flush over the whipped cream surface, creating a dual-layer
                  hermetic chamber that seals out oxidation between uses.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] text-white/40 font-mono">
                DUAL SEAL TOLERANCE: 0.01 MM
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/30 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#c9a86a]">03 / BIOCHEMISTRY</span>
                <h3 className="text-xl font-light text-white/90 mt-2">
                  Whipped Lipid Emulsion
                </h3>
                <p className="text-xs text-white/50 font-light mt-3 leading-relaxed">
                  Cold-pressed organic squalane, plant ceramides, and antioxidant plant sterols
                  whipped to a cloud-like density that melts on epidermal contact.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] text-white/40 font-mono">
                EPIDERMAL PENETRATION: 98.7%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Ritual Section */}
      <section id="ritual" className="py-32 px-6 md:px-12 bg-[#000000] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono block mb-3">
            Application Protocol
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
            The Suwani Ritual
          </h2>
          <p className="mt-5 text-sm sm:text-base text-white/60 font-light max-w-xl mx-auto leading-relaxed">
            Unseal the lid, lift the hermetic disc, and scoop a pearl of whipped cream.
            Warm between fingertips to activate bio-lipids before pressing gently across the visage.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products/suwani-creme-dor"
              className="px-8 py-4 rounded-full bg-white text-[#000000] hover:bg-[#c9a86a] hover:text-[#000000] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              <span>Reserve Crème d'Or Allocation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.25em] font-light transition-all"
            >
              Discover Atelier Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
