"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PRODUCTS, Product } from "@/data/products";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Layers,
  Shield,
  ArrowUpRight,
  Compass,
} from "lucide-react";

interface Question {
  id: number;
  phase: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    productMatchId: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    phase: "01 / EPIDERMAL BASELINE",
    question: "How does your barrier respond 30 minutes post-cleansing?",
    subtitle: "Identifies cellular lipid depletion and trans-epidermal moisture permeability.",
    options: [
      {
        label: "Tightness & Dehydration Deficit",
        description: "Visible dryness, lack of suppleness, and immediate craving for rich moisture.",
        productMatchId: "suwani-creme-dor",
      },
      {
        label: "Dullness & Sluggish Radiance",
        description: "Lack of porcelain light reflection, persistent fatigue, and uneven texture.",
        productMatchId: "suwani-l-huile-celeste",
      },
      {
        label: "Elasticity Deficit & Expression Stress",
        description: "Fine dehydration micro-lines, loss of firmness along cheekbones and jawline.",
        productMatchId: "suwani-serum-bakuchiol",
      },
      {
        label: "Micro-Congestion & Cellular Buildup",
        description: "Rough superficial stratum corneum, clogged micro-pores, and uneven finish.",
        productMatchId: "suwani-nectar-resurfacant",
      },
    ],
  },
  {
    id: 2,
    phase: "02 / ATMOSPHERIC EXPOSURE",
    question: "What is your primary daily environmental terrain?",
    subtitle: "Calibrates external oxidative stress, particulate load, and actinic radiation.",
    options: [
      {
        label: "Dense Metropolis & Urban Particulate",
        description: "Exposed to exhaust, city smog, airborne heavy metals, and constant screen glare.",
        productMatchId: "suwani-creme-dor",
      },
      {
        label: "Frequent Aviation & Dehydrated Microclimates",
        description: "Low-humidity pressurized cabins, aggressive air conditioning, and dry seasonal winds.",
        productMatchId: "suwani-baume-nuit",
      },
      {
        label: "Alpine Altitudes & High Solar Exposure",
        description: "Intense ultraviolet rays, thin atmosphere, and temperature fluctuations.",
        productMatchId: "suwani-l-huile-celeste",
      },
      {
        label: "Indoor Screen Strain & Temperature Shifts",
        description: "Extended blue light exposure and artificial thermal heating.",
        productMatchId: "suwani-brume-florale",
      },
    ],
  },
  {
    id: 3,
    phase: "03 / TACTILE RESONANCE",
    question: "Which sensorial texture evokes deepest ease for your visage?",
    subtitle: "Aligns lipid density and absorption kinetics with your personal preference.",
    options: [
      {
        label: "Whipped Silk Emulsion",
        description: "Cloud-like, featherlight cream that instantly melts into velvety non-greasy cushion.",
        productMatchId: "suwani-creme-dor",
      },
      {
        label: "Dry Golden Botanical Nectar",
        description: "Super-fluid lipid concentrate that sinks into the skin within 40 seconds.",
        productMatchId: "suwani-l-huile-celeste",
      },
      {
        label: "Concentrated Waterless Phyto-Gel",
        description: "Direct cooling peptide delivery that tightens and lifts on immediate contact.",
        productMatchId: "suwani-serum-bakuchiol",
      },
      {
        label: "Rich Nocturnal Anhydrous Cocoon",
        description: "Melts between warm palms to create a breathable protective seal overnight.",
        productMatchId: "suwani-baume-nuit",
      },
    ],
  },
];

export default function DiagnosticPage() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  const handleSelectOption = (productMatchId: string) => {
    const updatedAnswers = [...answers, productMatchId];
    setAnswers(updatedAnswers);

    if (currentStep + 1 < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete diagnostic
      setIsAnalyzing(true);
      setTimeout(() => {
        // Choose product based on primary answer or fallback to creme-dor
        const chosenId = updatedAnswers[0] || "suwani-creme-dor";
        const found = PRODUCTS.find((p) => p.id === chosenId) || PRODUCTS[0];
        setRecommendedProduct(found);
        setIsAnalyzing(false);
      }, 1600);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setRecommendedProduct(null);
    setIsAnalyzing(false);
  };

  const q = QUESTIONS[currentStep];

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      <Header />

      <div className="pt-36 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
        {!recommendedProduct && !isAnalyzing && (
          <div>
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono block mb-2">
                  Studio Consultation • Step {currentStep + 1} of {QUESTIONS.length}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
                Bespoke Cellular Diagnostic
              </h1>
              <p className="text-xs sm:text-sm text-white/60 font-light mt-3 max-w-xl">
                Answer three clinical inquiries to calibrate your personalized anhydrous formulation ritual.
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-white/[0.06] h-1 rounded-full mt-8 overflow-hidden">
                <div
                  className="bg-[#c9a86a] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-xs font-mono text-[#c9a86a] uppercase tracking-widest block mb-2">
                {q.phase}
              </span>
              <h2 className="text-xl sm:text-3xl font-light text-white leading-snug">
                {q.question}
              </h2>
              <p className="text-xs text-white/50 font-light mt-2 mb-8">{q.subtitle}</p>

              {/* Options */}
              <div className="grid grid-cols-1 gap-4">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.productMatchId)}
                    className="group text-left p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#c9a86a]/40 transition-all duration-300 flex items-start justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-base font-light text-white/90 group-hover:text-[#c9a86a] transition-colors">
                        {opt.label}
                      </h3>
                      <p className="text-xs text-white/50 font-light mt-1.5 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#c9a86a] transition-transform group-hover:translate-x-1 shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Calculating State */}
        {isAnalyzing && (
          <div className="py-24 text-center">
            <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#c9a86a]/40 animate-ping" />
              <div className="w-16 h-16 rounded-full border border-[#c9a86a] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#c9a86a]" />
              </div>
            </div>
            <h2 className="text-2xl font-light text-white">Synthesizing Bio-Metric Blueprint</h2>
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-2">
              Cross-referencing Kyoto bio-ferments &amp; lipid matrices...
            </p>
          </div>
        )}

        {/* Results State */}
        {recommendedProduct && (
          <div className="animate-fadeIn space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono">
                  Prescription Protocol • Serial #SW-{Math.floor(1000 + Math.random() * 9000)}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
                Your Bespoke Allocation Prescription
              </h1>
              <p className="text-xs sm:text-sm text-white/60 font-light mt-2 max-w-xl">
                Based on your epidermal lipid assessment, the following anhydrous formulation delivers maximum physiological bioavailability.
              </p>
            </div>

            {/* Prescribed Formulation Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent border border-[#c9a86a]/40 shadow-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono text-[#c9a86a] uppercase tracking-widest">
                    PRIMARY PRESCRIBED ALLOCATION
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-light text-white mt-1">
                    {recommendedProduct.name}
                  </h2>
                  <p className="text-xs text-white/50 font-serif italic mt-1">
                    {recommendedProduct.subtitle}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-2xl font-light text-white font-mono block">
                    {recommendedProduct.price}
                  </span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest block font-mono">
                    {recommendedProduct.volume}
                  </span>
                </div>
              </div>

              <div className="py-8 space-y-6">
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  {recommendedProduct.description}
                </p>

                {/* Key actives */}
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#c9a86a] tracking-widest block mb-3">
                    Targeted Cellular Actives
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recommendedProduct.keyActives.slice(0, 2).map((a) => (
                      <div key={a.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-xs text-white/90 font-medium block">{a.name}</span>
                        <span className="text-[11px] text-white/50 font-light mt-1 block leading-relaxed">
                          {a.benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={`/products/${recommendedProduct.slug}`}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black hover:bg-[#c9a86a] hover:text-black text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Reserve Prescribed Formulation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/[0.03] border border-white/10 hover:border-white text-white/70 hover:text-white text-xs uppercase tracking-widest font-light transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Recalibrate Diagnostic</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
