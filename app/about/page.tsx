import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PartnersSection } from "@/app/components/PartnersSection";
import { ArrowUpRight, Sparkles, Shield, Compass, FlaskConical, MapPin, Feather } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ASALIYA PRODUCTION Vedic Rasayana & Cellular Formulations",
  description:
    "Explore the origins of Asaliya Production — the union of 5,000-year-old Vedic Rasayana longevity science and zero-water architectural skincare.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      <Header />

      {/* Hero Manifesto Section */}
      <section className="pt-40 pb-24 px-6 md:px-12 border-b border-white/[0.06] relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono">
              House Manifesto • Vedic Rasayana &amp; Modern Cellular Science
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white/95 leading-[1.1]">
            Where Vedic Rasayana meets{" "}
            <span className="font-serif italic font-normal text-[#c9a86a]">
              cellular architecture.
            </span>
          </h1>

          <p className="mt-8 text-base sm:text-xl text-white/70 font-light max-w-2xl leading-relaxed">
            Asaliya Production was founded on a singular radical thesis: that ancient Ayurvedic Rasayana longevity wisdom—the science of cell renewal and vital essence (Ojas)—must be elevated through 100% anhydrous matrices, zero synthetic fillers, and precision bioavailability.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-xs font-mono text-white/40 uppercase tracking-widest">
            <div>5,000-YEAR VEDIC HERITAGE</div>
            <div>•</div>
            <div>100% ANHYDROUS MATRICES</div>
            <div>•</div>
            <div>CRYOGENIC BOTANICAL EXTRACTION</div>
          </div>
        </div>
      </section>

      {/* The Genesis Narrative */}
      <section className="py-28 px-6 md:px-12 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono block mb-3">
              The Genesis
            </span>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white/95">
              The Synthesis of Rasayana &amp; Anhydrous Purity
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6 text-sm sm:text-base text-white/70 font-light leading-relaxed">
            <p>
              For over five millennia, the classical Ayurvedic tradition of <em>Rasayana</em> has documented the precise botanical alchemy required to nourish the deep cellular layers (<em>Dhatus</em>) and cultivate radiant vitality (<em>Ojas</em>). Yet modern commercial skincare diluted this sacred heritage by filling 80% to 95% of every jar with common tap water, relying on harsh chemical preservatives to prevent bacterial growth.
            </p>
            <p>
              Asaliya Production abolished water dilution completely. We replaced inactive water fillers with living organic floral hydrosols—first-distillation Kannauj Rosa Damascena harvested at dawn—and potent Ayurvedic botanicals including wild Kashmiri Kumkumadi saffron, Ashwagandha adaptogens, and cold-pressed Gotu Kola (Centella Asiatica).
            </p>
            <p>
              The result is an anhydrous cellular matrix where every micro-droplet delivers bio-available lipids, adaptogenic antioxidants, and regenerative peptide signalling molecules directly to the skin barrier.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Sacred Pillars */}
      <section className="py-32 px-6 md:px-12 bg-white/[0.01] border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono block mb-3">
              Formulation Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
              The Four Sacred Pillars
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-white/50 font-light">
              Every formula bearing the Asaliya Production seal is governed by four non-negotiable disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/40 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-[#c9a86a]">01 / SACRED TERROIRS</span>
                <Compass className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl font-light text-white/95 mb-3">
                Single-Origin Ayurvedic Botanicals
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                We partner with generational Ayurvedic growers: wild Kashmiri Kumkumadi saffron hand-picked in Pampore, adaptogenic Ashwagandha from organic biodynamic soils, and sacred Kannauj Damask rose hydro-distilled in traditional copper stills.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/40 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-[#c9a86a]">02 / CRYOGENICS</span>
                <FlaskConical className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl font-light text-white/95 mb-3">
                Sub-Zero Enzymatic Extraction
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                Heat degrades delicate phyto-nutrients and plant enzymes. Our laboratories employ sub-zero cryogenic cold-pressing and supercritical CO2 extraction, ensuring 100% of thermolabile enzymes, fatty acids, and adaptogenic peptides remain intact.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/40 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-[#c9a86a]">03 / DOSHA HARMONY</span>
                <Shield className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl font-light text-white/95 mb-3">
                Tridoshic Cellular Equilibrium
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                Formulated to soothe Vata dryness, cool Pitta heat and inflammation, and clarify Kapha congestion. Zero synthetic fragrances, parabens, phthalates, sulphates, microplastics, or silicones. Cruelty-free and vegan-biocompatible.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/40 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-[#c9a86a]">04 / LIGHT DEFENCE</span>
                <Sparkles className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl font-light text-white/95 mb-3">
                Biophotonic Glass &amp; Herbal Preservation
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                Formulations rich in pure wild turmeric, sandalwood, and cold-pressed botanical lipids cannot be housed in clear plastic. Our vessels are crafted from UV-protective biophotonic violet glass, shielding delicate herbal actives and volatile santalols from actinic degradation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Studios (London & Tokyo) */}
      <section className="py-28 px-6 md:px-12 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono block mb-3">
                Sanctuaries &amp; Laboratories
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
                Our Two Studios
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-md leading-relaxed">
              By appointment only. Private client allocations, skin biome diagnostics, and bespoke formulation consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* London */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c9a86a] uppercase mb-4">
                <MapPin className="w-4 h-4" />
                <span>London Studio</span>
              </div>
              <h3 className="text-2xl font-light text-white/95">42 Berkeley Square</h3>
              <p className="text-xs text-white/40 font-mono mt-1">Mayfair, London W1J 5AW, United Kingdom</p>
              <p className="text-xs sm:text-sm text-white/60 font-light mt-6 leading-relaxed">
                Located in historic Mayfair, our London salon serves as our global design studio and private client allocation boutique. Here, bespoke allocations are hand-sealed with custom wax insignias for private collectors.
              </p>
            </div>

            {/* Tokyo */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c9a86a] uppercase mb-4">
                <MapPin className="w-4 h-4" />
                <span>Tokyo Sanctuary</span>
              </div>
              <h3 className="text-2xl font-light text-white/95">Ginza 6-chome</h3>
              <p className="text-xs text-white/40 font-mono mt-1">Chuo-ku, Tokyo 104-0061, Japan</p>
              <p className="text-xs sm:text-sm text-white/60 font-light mt-6 leading-relaxed">
                Tucked into the refined district of Ginza, our research laboratory focuses on bio-ferments, enzyme preservation, and cold-pressed botanical lipids harvested from pristine regional terroirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accredited Global Partners & Stockists */}
      <PartnersSection sectionIndex="05" />

      {/* CTA: Join the Allocation Ledger */}
      <section className="py-32 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <Feather className="w-8 h-8 text-[#c9a86a] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
            Experience the Repertoire
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto leading-relaxed">
            Discover the flagship Golden Restorative Cream or explore our complete library of cellular elixirs, serums, and anhydrous balms.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="px-8 py-4 rounded-full bg-white text-black hover:bg-[#c9a86a] hover:text-black text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-xl"
            >
              Explore Shop
            </Link>
            <Link
              href="/products/suwani-creme-dor"
              className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.25em] font-light transition-all"
            >
              Golden Cream Allocation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
