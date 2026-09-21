"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Shield, Compass, Droplets } from "lucide-react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, decimals = 0, suffix = "%", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(
    decimals > 0 ? (0).toFixed(decimals) : "0"
  );

  useEffect(() => {
    if (!isInView) return;
    if (value === 0) {
      setDisplayValue("0");
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * value;

      setDisplayValue(current.toFixed(decimals));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value.toFixed(decimals));
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, decimals, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export const LuxuryBannerSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#030303] relative overflow-hidden">
      {/* Subtle Section Divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a86a]/25 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* The Luxury Banner Container */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#c9a86a]/40 bg-gradient-to-br from-[#14110b] via-[#090805] to-[#020202] p-8 sm:p-14 lg:p-20 shadow-2xl">
          {/* Subtle Radial Glows inside the banner */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c9a86a]/20 rounded-full blur-[120px] pointer-events-none" />
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#e5c17d] font-semibold">
                PHILOSOPHY &amp; HARVEST • RASAYANA ALLOCATION
              </span>
            </div>

            {/* Editorial Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15]">
              5,000 years of Vedic Rasayana,{" "}
              <span className="font-serif italic font-normal text-[#c9a86a]">
                perfected by modern cellular science.
              </span>
            </h2>

            {/* Lead Description */}
            <p className="mt-6 text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-xl">
              Every formulation unites sacred Ayurvedic Rasayana botanicals—Kashmiri Saffron, Wild Turmeric (Haridra), and Sacred Sandalwood (Chandan)—with cryogenic cold extractions and 100% anhydrous matrices. Housed in biophotonic violet vessels engineered to protect fragile bio-peptides from light degradation.
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
                About Our House
              </Link>
            </div>

            {/* Metrics Bar */}
            <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="text-2xl sm:text-3xl font-light text-white font-mono block">
                  <Counter value={98.7} decimals={1} duration={2.2} />
                </span>
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-light mt-1 block">
                  Bio-Availability
                </span>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-light text-[#c9a86a] font-mono block">
                  <Counter value={0} decimals={0} duration={1} />
                </span>
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-light mt-1 block">
                  Water Dilution
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="text-2xl sm:text-3xl font-light text-white font-mono block">
                  <Counter value={100} decimals={0} duration={2.2} />
                </span>
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-light mt-1 block">
                  Wildcrafted Herbs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
