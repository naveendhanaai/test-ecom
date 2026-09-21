"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { MarqueeTicker } from "@/app/components/MarqueeTicker";
import {
  Sun,
  Moon,
  Clock,
  Sparkles,
  Droplets,
  Layers,
  Heart,
  Play,
  RotateCcw,
  ArrowUpRight,
  Shield,
} from "lucide-react";

export default function RitualsPage() {
  const [activeCycle, setActiveCycle] = useState<"morning" | "evening">("morning");
  const [meditationActive, setMeditationActive] = useState(false);
  const [meditationStep, setMeditationStep] = useState(0);

  const startMeditation = () => {
    setMeditationActive(true);
    setMeditationStep(1);

    setTimeout(() => setMeditationStep(2), 3000);
    setTimeout(() => setMeditationStep(3), 6000);
    setTimeout(() => {
      setMeditationActive(false);
      setMeditationStep(0);
    }, 9000);
  };

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      <Header />

      {/* Hero Intro */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-white/[0.06] relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono">
              The Art of Ceremony • Circadian Skincare
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white/95 leading-[1.1]">
            The daily meditation of{" "}
            <span className="font-serif italic font-normal text-[#c9a86a]">
              cellular renewal.
            </span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-white/70 font-light max-w-2xl leading-relaxed">
            In the Asaliya Production philosophy, application is not merely hygiene—it is an intentional sensory protocol.
            Our anhydrous matrices respond directly to human dermal temperature, requiring thermal activation to unlock living botanical bio-lipids.
          </p>

          {/* Cycle Toggle */}
          <div className="mt-12 inline-flex p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <button
              onClick={() => setActiveCycle("morning")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all ${
                activeCycle === "morning"
                  ? "bg-white text-black font-medium shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Aube • Solar Awakening</span>
            </button>
            <button
              onClick={() => setActiveCycle("evening")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all ${
                activeCycle === "evening"
                  ? "bg-white text-black font-medium shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Crépuscule • Nocturnal Repair</span>
            </button>
          </div>
        </div>
      </section>

      {/* Cycle Steps Section */}
      <section className="py-24 px-6 md:px-12 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          {activeCycle === "morning" ? (
            <div className="space-y-12">
              <div className="border-b border-white/[0.06] pb-8">
                <span className="text-xs font-mono text-[#c9a86a] uppercase tracking-widest block mb-2">
                  07:00 — 09:00 AM • Photonic &amp; Environmental Armor
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-white">
                  The Solar Awakening Protocol
                </h2>
                <p className="text-xs sm:text-sm text-white/60 font-light mt-3 max-w-xl">
                  Primes cellular respiration, provides free-radical defense against UV rays, and builds a weightless lipid shield that locks moisture in throughout the day.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="font-mono text-xs text-[#c9a86a] block mb-4">PHASE 01 • DRENCH</span>
                  <h3 className="text-lg font-light text-white mb-2">Brume Florale Dew</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Mist 3–4 bursts of Grasse Rosa Damascena Hydrosol across visage. Do not towel dry—allow the living plant polysaccharides to prepare skin receptors.
                  </p>
                  <Link
                    href="/products/suwani-brume-florale"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#c9a86a] mt-6 hover:underline uppercase"
                  >
                    <span>View Hydrosol</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="font-mono text-xs text-[#c9a86a] block mb-4">PHASE 02 • ACTIVATE</span>
                  <h3 className="text-lg font-light text-white mb-2">Sérum Phyto-Cellulaire</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Dispense one pipette of 2% Bio-Bakuchiol and copper peptides. Sweep upwards along contour lines to boost lymphatic micro-circulation.
                  </p>
                  <Link
                    href="/products/suwani-serum-bakuchiol"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#c9a86a] mt-6 hover:underline uppercase"
                  >
                    <span>View Serum</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="font-mono text-xs text-[#c9a86a] block mb-4">PHASE 03 • HERBAL SEAL</span>
                  <h3 className="text-lg font-light text-white mb-2">Golden Restorative Cream</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Warm a pearl of wild turmeric &amp; sandalwood whipped cream between fingertips for 3 seconds. Press gently into complexion and neck until completely absorbed.
                  </p>
                  <Link
                    href="/products/suwani-creme-dor"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#c9a86a] mt-6 hover:underline uppercase"
                  >
                    <span>View Cream</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              <div className="border-b border-white/[0.06] pb-8">
                <span className="text-xs font-mono text-[#c9a86a] uppercase tracking-widest block mb-2">
                  21:00 — 23:00 PM • Stratum Corneum Reconstruction
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-white">
                  The Nocturnal Reconstruction Protocol
                </h2>
                <p className="text-xs sm:text-sm text-white/60 font-light mt-3 max-w-xl">
                  Releases cumulative daytime oxidative stress, gently dissolves dead surface keratinocytes, and envelops the epidermis in an anhydrous restorative cocoon.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="font-mono text-xs text-[#c9a86a] block mb-4">PHASE 01 • RESURFACE</span>
                  <h3 className="text-lg font-light text-white mb-2">Nectar Resurfaçant</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Apply a golden veil of fermented papaya proteases. Allow to bloom for 10 minutes to gently lift cellular debris without physical abrasion.
                  </p>
                  <Link
                    href="/products/suwani-nectar-resurfacant"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#c9a86a] mt-6 hover:underline uppercase"
                  >
                    <span>View Treatment</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="font-mono text-xs text-[#c9a86a] block mb-4">PHASE 02 • RESTORE</span>
                  <h3 className="text-lg font-light text-white mb-2">L'Huile Céleste</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Press 4 drops of cold-pressed Moroccan prickly pear and wild rosehip seed nectar. Delivers high concentrations of Vitamin E while you rest.
                  </p>
                  <Link
                    href="/products/suwani-l-huile-celeste"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#c9a86a] mt-6 hover:underline uppercase"
                  >
                    <span>View Elixir</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="font-mono text-xs text-[#c9a86a] block mb-4">PHASE 03 • COCOON</span>
                  <h3 className="text-lg font-light text-white mb-2">Baume Réparateur Céleste</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Warm a pea-sized amount of anhydrous Murumuru butter into a fluid golden balm. Seals in overnight moisture and repairs stratum corneum fissures.
                  </p>
                  <Link
                    href="/products/suwani-baume-nuit"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#c9a86a] mt-6 hover:underline uppercase"
                  >
                    <span>View Baume</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Thermal Activation Meditation */}
      <section className="py-28 px-6 md:px-12 bg-white/[0.015] border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono block mb-3">
            Interactive Protocol
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
            The 3-Second Thermal Activation
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto leading-relaxed">
            Our anhydrous emulsions are dense with crystalline plant sterols. Experience the guided palm warming protocol used in our Paris and Kyoto salons.
          </p>

          <div className="my-16 flex flex-col items-center justify-center">
            {/* Visual Pulsing Breathing Ring */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-white/10 flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-full border-2 border-[#c9a86a] transition-all duration-1000 ${
                  meditationActive ? "scale-110 opacity-80 animate-ping" : "scale-100 opacity-20"
                }`}
              />
              <div
                className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#c9a86a]/20 to-white/5 flex flex-col items-center justify-center p-6 text-center transition-transform duration-700 ${
                  meditationActive ? "scale-105" : "scale-100"
                }`}
              >
                {meditationStep === 0 && (
                  <span className="text-xs uppercase tracking-widest text-white/60 font-mono">
                    Ready to begin
                  </span>
                )}
                {meditationStep === 1 && (
                  <div className="animate-fadeIn">
                    <span className="text-xs font-mono text-[#c9a86a] block uppercase">01 / Inhale</span>
                    <span className="text-[11px] text-white/80 mt-1 block">Warm balm between fingertips</span>
                  </div>
                )}
                {meditationStep === 2 && (
                  <div className="animate-fadeIn">
                    <span className="text-xs font-mono text-[#c9a86a] block uppercase">02 / Hold</span>
                    <span className="text-[11px] text-white/80 mt-1 block">Botanical phyto-lipids liquefy</span>
                  </div>
                )}
                {meditationStep === 3 && (
                  <div className="animate-fadeIn">
                    <span className="text-xs font-mono text-[#c9a86a] block uppercase">03 / Exhale</span>
                    <span className="text-[11px] text-white/80 mt-1 block">Gently press into visage</span>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={startMeditation}
              disabled={meditationActive}
              className="mt-8 px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#c9a86a] hover:text-black text-xs uppercase tracking-widest font-medium transition-all shadow-xl disabled:opacity-50 inline-flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{meditationActive ? "Meditation in Progress..." : "Begin Thermal Activation"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <MarqueeTicker />

      <Footer />
    </main>
  );
}
