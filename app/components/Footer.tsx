"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-white/50 py-24 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.06]">
        {/* Brand & Manifesto Column (5 cols) */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
              <span className="font-serif italic text-xs text-[#c9a86a]">S</span>
            </div>
            <span className="text-sm tracking-[0.3em] uppercase text-white/90 font-light">
              SUWANI BEAUTÉ
            </span>
          </div>
          <p className="text-xs text-white/50 font-light leading-relaxed max-w-sm">
            Haute cellular formulation atelier based between Paris and Kyoto.
            Synthesized through cryogenic botanical extractions, zero water dilution,
            and housed in light-blocking architectural brass and crystal vessels.
          </p>
          <div className="mt-6 flex items-center gap-4 text-[10px] font-mono uppercase text-[#c9a86a]">
            <span>18 Place Vendôme, Paris</span>
            <span>•</span>
            <span>Gion, Kyoto</span>
          </div>
        </div>

        {/* Repertoire Column (3 cols) */}
        <div className="md:col-span-3">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/40 block mb-4">
            The Repertoire
          </span>
          <ul className="space-y-2.5 text-xs text-white/60 font-light">
            {PRODUCTS.slice(0, 5).map((p) => (
              <li key={p.id}>
                <Link
                  href={`/products/${p.slug}`}
                  className="hover:text-white transition-colors block truncate"
                >
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#collection"
                className="text-[#c9a86a] hover:underline inline-block pt-1 text-[11px]"
              >
                View Complete Repertoire →
              </Link>
            </li>
          </ul>
        </div>

        {/* Atelier & Governance Column (2 cols) */}
        <div className="md:col-span-2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/40 block mb-4">
            The Atelier
          </span>
          <ul className="space-y-2.5 text-xs text-white/60 font-light">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                Atelier Manifesto
              </Link>
            </li>
            <li>
              <Link href="/about#pillars" className="hover:text-white transition-colors">
                The 4 Sacred Pillars
              </Link>
            </li>
            <li>
              <Link href="/#specifications" className="hover:text-white transition-colors">
                Vessel Anatomy
              </Link>
            </li>
            <li>
              <Link href="/#ritual" className="hover:text-white transition-colors">
                Application Protocol
              </Link>
            </li>
          </ul>
        </div>

        {/* Private Client Services (2 cols) */}
        <div className="md:col-span-2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/40 block mb-4">
            Private Client
          </span>
          <ul className="space-y-2.5 text-xs text-white/60 font-light">
            <li>
              <span className="hover:text-white cursor-pointer transition-colors">
                Bespoke Diagnostic
              </span>
            </li>
            <li>
              <span className="hover:text-white cursor-pointer transition-colors">
                Allocation Concierge
              </span>
            </li>
            <li>
              <span className="hover:text-white cursor-pointer transition-colors">
                Climate Courier
              </span>
            </li>
            <li>
              <span className="hover:text-white cursor-pointer transition-colors">
                Client Relations
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/40 font-mono">
        <div>© {new Date().getFullYear()} SUWANI BEAUTÉ ATELIER. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Clean Charter</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Allocation Terms</span>
        </div>
      </div>
    </footer>
  );
};
