"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-white/50 py-24 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.06]">
        {/* Brand & Manifesto Column (5 cols) */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-[#c9a86a] bg-black flex items-center justify-center shadow-xl shadow-[#c9a86a]/30 shrink-0 p-1">
              <Image
                src="/logo.jpg"
                alt="Asaliya Production Logo"
                fill
                className="object-contain p-0.5"
                sizes="72px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-semibold tracking-[0.22em] uppercase text-white/95">
                ASALIYA
              </span>
              <span className="text-xs sm:text-xs tracking-[0.45em] uppercase text-[#e5c17d] font-bold mt-1">
                PRODUCTION
              </span>
            </div>
          </div>
          <p className="text-xs text-white/50 font-light leading-relaxed max-w-sm">
            Fine cellular formulation house based between London and Tokyo.
            Synthesised through cryogenic botanical extractions, zero water dilution,
            and infused with wild turmeric, sacred sandalwood, and Ayurvedic Rasayanas.
          </p>
          <div className="mt-6 flex items-center gap-4 text-[10px] font-mono uppercase text-[#c9a86a]">
            <span>Mayfair, London</span>
            <span>•</span>
            <span>Ginza, Tokyo</span>
          </div>
        </div>

        {/* The Repertoire / Shop Column (3 cols) */}
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
                href="/shop"
                className="text-[#c9a86a] hover:underline inline-block pt-1 text-[11px]"
              >
                View Complete Shop →
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Pages Column (2 cols) */}
        <div className="md:col-span-2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/40 block mb-4">
            Navigation
          </span>
          <ul className="space-y-2.5 text-xs text-white/60 font-light">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white transition-colors">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Client Services (2 cols) */}
        <div className="md:col-span-2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/40 block mb-4">
            Client Care
          </span>
          <ul className="space-y-2.5 text-xs text-white/60 font-light">
            <li>
              <Link href="/contact" className="hover:text-[#c9a86a] text-white/80 transition-colors">
                Book Consultation →
              </Link>
            </li>
            <li>
              <Link href="/products/suwani-creme-dor" className="hover:text-white transition-colors">
                Golden Cream
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Mayfair Studio
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white transition-colors">
                View Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/40 font-mono">
        <div>© {new Date().getFullYear()} ASALIYA PRODUCTION. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Clean Charter</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Allocation Terms</span>
        </div>
      </div>
    </footer>
  );
};
