"use client";

import React from "react";
import Link from "next/link";
import { Header } from "./components/Header";
import { AyurvedicHeroSection } from "./components/AyurvedicHeroSection";
import { ProductScrollCanvas } from "./components/ProductScrollCanvas";
import { ProductGridSection } from "./components/ProductGridSection";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { LuxuryBannerSection } from "./components/LuxuryBannerSection";
import { CustomerFeedbackSection } from "./components/CustomerFeedbackSection";
import { PartnersSection } from "./components/PartnersSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { Footer } from "./components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      {/* Navigation Header */}
      <Header />

      {/* 1st Section: Cinematic Ayurvedic Hero & Glowing Skin */}
      <AyurvedicHeroSection />

      {/* Editorial Running Press & Accolades Marquee */}
      <MarqueeTicker />

      {/* Product Collection Showcase Grid */}
      <ProductGridSection />

      {/* Luxury Brand & Harvest Allocation Banner */}
      <LuxuryBannerSection />

      {/* Architectural Specifications Section (Section 04: Vessel Engineering) */}
      <section id="specifications" className="py-32 px-6 md:px-12 bg-gradient-to-b from-[#050608] via-[#07080c] to-[#020304] relative">
        {/* Technical Section Transition Divider */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Subtle Architectural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#c9a86a]" />
                <span className="text-xs sm:text-xs md:text-sm uppercase tracking-[0.3em] text-[#c9a86a] font-mono font-medium">
                  ARCHITECTURAL ANATOMY • VESSEL ENGINEERING
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
                Vessel Engineering
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-md leading-relaxed">
              Every curve, thread, and seal of the Asaliya Production vessel is precision calibrated to protect light-sensitive
              bio-active peptides from photochemical and atmospheric degradation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#c9a86a]/40 transition-colors flex flex-col justify-between shadow-xl">
              <div>
                <span className="font-mono text-xs text-[#c9a86a]">01 / SACRED BOTANICAL ALCHEMY</span>
                <h3 className="text-xl font-light text-white/90 mt-2">
                  Wild Turmeric &amp; Sandalwood Matrix
                </h3>
                <p className="text-xs text-white/50 font-light mt-3 leading-relaxed">
                  Infused with wild-harvested Turmeric (Haridra) and sacred Sandalwood (Chandan) to pacify
                  Pitta inflammation, clarify epidermal tone, and impart lasting luminous Ojas.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] text-white/40 font-mono">
                NET WT. 50 ML / 1.7 FL. OZ.
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#c9a86a]/40 transition-colors flex flex-col justify-between shadow-xl">
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

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#c9a86a]/40 transition-colors flex flex-col justify-between shadow-xl">
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

      {/* Scroll-Driven Product Narrative Canvas (Section: Vessel in Motion) */}
      <section id="story" className="relative w-full border-t border-white/[0.08] bg-[#000000]">
        {/* Kinetic Vessel Exploration Header */}
        <div className="w-full py-4 border-b border-white/[0.06] bg-[#030303] flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
          <span className="text-xs sm:text-xs md:text-sm uppercase tracking-[0.3em] text-white/85 font-mono font-medium">
            KINETIC JOURNEY • VESSEL IN MOTION
          </span>
        </div>
        <ProductScrollCanvas />
      </section>

      {/* Spatial Scrubbing Section */}
      <section className="py-20 px-6 md:px-12 bg-[#020202] border-t border-white/[0.08] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#c9a86a]" />
            <span className="text-xs sm:text-xs md:text-sm uppercase tracking-[0.3em] text-white/85 font-mono font-medium">
              CONTINUOUS DISPERSION • SPATIAL SCRUBBING
            </span>
          </div>
        </div>
      </section>

      {/* Customer Feedback & Patron Testimonials Section */}
      <CustomerFeedbackSection />

      {/* Global Accredited Partners Section */}
      <PartnersSection sectionIndex="" />

      {/* Ritual Protocol Section (Section 05: Chrono-Biology) */}
      <section id="ritual" className="py-32 px-6 md:px-12 bg-gradient-to-b from-[#020304] via-[#050608] to-[#010102] relative text-center">
        {/* Technical Section Transition Divider */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#c9a86a]" />
            <span className="text-xs sm:text-xs md:text-sm uppercase tracking-[0.3em] text-[#c9a86a] font-mono font-medium">
              CHRONO-BIOLOGY • RITUAL INSTRUCTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
            The Asaliya Ritual
          </h2>
          <p className="mt-5 text-sm sm:text-base text-white/70 font-light max-w-xl mx-auto leading-relaxed">
            Unseal the lid, lift the hermetic disc, and scoop a pearl of whipped cream.
            Warm between fingertips to activate bio-lipids before pressing gently across the complexion.
          </p>

          {/* 3 Step Protocol Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xs font-mono text-[#c9a86a] block mb-2">STEP 01</span>
              <h4 className="text-sm font-light text-white mb-1">Unseal &amp; Awaken</h4>
              <p className="text-[11px] text-white/50 font-light leading-relaxed">
                Release the hermetic freshness disc to introduce ambient oxygen to the bio-lipid surface.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xs font-mono text-[#c9a86a] block mb-2">STEP 02</span>
              <h4 className="text-sm font-light text-white mb-1">Thermal Activation</h4>
              <p className="text-[11px] text-white/50 font-light leading-relaxed">
                Warm a pearl of cream between fingertips for 3 seconds to dissolve the plant wax matrix.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xs font-mono text-[#c9a86a] block mb-2">STEP 03</span>
              <h4 className="text-sm font-light text-white mb-1">Epicuticular Press</h4>
              <p className="text-[11px] text-white/50 font-light leading-relaxed">
                Gently press across facial Marma points with upward strokes until fully absorbed.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products/suwani-creme-dor"
              className="px-8 py-4 rounded-full bg-[#c9a86a] text-[#000000] hover:bg-white text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              <span>Reserve Golden Cream Allocation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/shop"
              className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.25em] font-light transition-all"
            >
              Explore Full Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Official Clinical & Ayurvedic Certifications Section (Near Footer) */}
      <CertificationsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
