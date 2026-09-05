import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ArrowUpRight, Sparkles, Shield, Compass, FlaskConical, MapPin, Feather } from "lucide-react";

export const metadata: Metadata = {
  title: "The Atelier & Manifesto | SUWANI Haute Cellular Formulation",
  description:
    "Explore the origins of Suwani — the synthesis of Grasse botanical science, Kyoto bio-fermentation, and zero-water architectural skincare.",
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
              Atelier Manifesto • Kyoto &amp; Paris
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white/95 leading-[1.1]">
            Where botanical alchemy meets{" "}
            <span className="font-serif italic font-normal text-[#c9a86a]">
              cellular architecture.
            </span>
          </h1>

          <p className="mt-8 text-base sm:text-xl text-white/70 font-light max-w-2xl leading-relaxed">
            Suwani was founded on a singular radical thesis: that luxury skincare should contain
            zero water dilution, zero synthetic fillers, and 100% biocompatible cellular nutrition.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-xs font-mono text-white/40 uppercase tracking-widest">
            <div>EST. KYOTO / PARIS</div>
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
              The Abolition of Water Dilution
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6 text-sm sm:text-base text-white/70 font-light leading-relaxed">
            <p>
              In conventional luxury cosmetics, between 80% to 95% of every jar is comprised of
              common distilled water. This requires aggressive chemical emulsifiers, synthetic
              stabilizers, and artificial parabens simply to prevent microbial proliferation in the water phase.
            </p>
            <p>
              Suwani abolished water completely. We replaced inactive water fillers with living organic
              floral hydrosols—first-distillation Rosa Damascena harvested at dawn in Grasse—and
              cold-pressed Kyoto Camellia lipids that mirror the precise molecular composition of
              human epidermal sebum.
            </p>
            <p>
              The result is an anhydrous cellular matrix where every micro-droplet delivers bio-available
              lipids, antioxidants, and regenerative peptide signaling molecules directly to the stratum corneum.
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
              Every formula bearing the Suwani seal is governed by four non-negotiable disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/40 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-[#c9a86a]">01 / TERROIRS</span>
                <Compass className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl font-light text-white/95 mb-3">
                Single-Origin Traceable Botanicals
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                We do not source commodity raw materials. We partner with legacy micro-growers:
                Camellia japonica from volcanic soil in Uji, Alpine Edelweiss cultivated at 3,000 meters in the Swiss Valais, and wild prickly pear harvested by Berber cooperatives in the Moroccan High Atlas.
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
                Heat is the mortal enemy of active bio-lipids. Our laboratories employ sub-zero cryogenic cold-pressing and supercritical CO2 extraction, ensuring 100% of thermolabile enzymes, fatty acids, and peptides remain structurally intact.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/40 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-[#c9a86a]">03 / CLEAN CHARTER</span>
                <Shield className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl font-light text-white/95 mb-3">
                Absolute Formulation Purity
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                Zero synthetic fragrances, parabens, phthalates, sulfates, microplastics, or silicones. Cruelty-free, vegan-biocompatible, and verified through rigorous double-blind clinical corneometry testing on sensitive epidermal profiles.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/40 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-[#c9a86a]">04 / LIGHT DEFENSE</span>
                <Sparkles className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="text-xl font-light text-white/95 mb-3">
                Architectural Photonic Armor
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                Formulations this potent cannot be housed in standard clear plastic. Our vessels are engineered from solid brass alloys with brushed 24K gold and UV-protective obsidian crystal glass, shielding fragile actives from actinic degradation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Ateliers (Paris & Kyoto) */}
      <section className="py-28 px-6 md:px-12 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono block mb-3">
                Sanctuaries &amp; Laboratories
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
                Our Two Sanctuaries
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-md leading-relaxed">
              By appointment only. Private client allocations, skin biome diagnostics, and bespoke formulation consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Paris */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c9a86a] uppercase mb-4">
                <MapPin className="w-4 h-4" />
                <span>Paris Atelier</span>
              </div>
              <h3 className="text-2xl font-light text-white/95">18 Place Vendôme</h3>
              <p className="text-xs text-white/40 font-mono mt-1">75001 Paris, France</p>
              <p className="text-xs sm:text-sm text-white/60 font-light mt-6 leading-relaxed">
                Located on the historic Place Vendôme, our Paris salon serves as our global design studio and private client allocation boutique. Here, bespoke allocations are hand-sealed with custom wax insignias for private collectors.
              </p>
            </div>

            {/* Kyoto */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c9a86a] uppercase mb-4">
                <MapPin className="w-4 h-4" />
                <span>Kyoto Sanctuary</span>
              </div>
              <h3 className="text-2xl font-light text-white/95">Gion-Higashiyama</h3>
              <p className="text-xs text-white/40 font-mono mt-1">Higashiyama-ku, Kyoto, Japan</p>
              <p className="text-xs sm:text-sm text-white/60 font-light mt-6 leading-relaxed">
                Tucked into the stone alleys of historic Gion, our research laboratory focuses on subterranean bio-ferments, enzyme preservation, and cold-pressed botanical lipids harvested from pristine Japanese terroirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Join the Allocation Ledger */}
      <section className="py-32 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <Feather className="w-8 h-8 text-[#c9a86a] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
            Experience the Repertoire
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto leading-relaxed">
            Discover the flagship Suwani Crème d'Or or explore our complete library of cellular elixirs, serums, and anhydrous balms.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#collection"
              className="px-8 py-4 rounded-full bg-white text-black hover:bg-[#c9a86a] hover:text-black text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-xl"
            >
              Explore Collection
            </Link>
            <Link
              href="/products/suwani-creme-dor"
              className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.25em] font-light transition-all"
            >
              Crème d'Or Allocation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
