"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collection", href: "/#collection" },
    { label: "Rituals", href: "/rituals" },
    { label: "Diagnostic", href: "/diagnostic" },
    { label: "Reviews", href: "/#feedback" },
    { label: "Atelier", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 px-6 md:px-12"
          : "bg-gradient-to-b from-[#000000]/80 via-[#000000]/40 to-transparent border-b border-transparent py-5 px-6 md:px-12"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Monogram & Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center group-hover:border-[#c9a86a] transition-colors">
            <span className="font-serif italic text-xs text-[#c9a86a]">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm tracking-[0.3em] uppercase text-white/95 font-light group-hover:text-white transition-colors">
              SUWANI
            </span>
            <span className="text-[8px] tracking-[0.35em] uppercase text-white/40">
              Haute Formulation
            </span>
          </div>
        </Link>

        {/* Desktop Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-white/60 font-light">
          {navLinks.map((link) => {
            const isActive =
              (link.href === "/about" && pathname === "/about") ||
              (link.href === "/rituals" && pathname === "/rituals") ||
              (link.href === "/diagnostic" && pathname === "/diagnostic");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive ? "text-[#c9a86a] font-medium" : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/products/suwani-creme-dor"
            className="px-5 py-2 rounded-full border border-white/20 hover:border-[#c9a86a] text-white/80 hover:text-white text-[10px] uppercase tracking-[0.25em] font-light transition-all duration-200 flex items-center gap-1.5 group"
          >
            <span>Reserve Crème</span>
            <ArrowUpRight className="w-3 h-3 text-[#c9a86a] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-6 pt-2 border-t border-white/[0.08] bg-black/95 backdrop-blur-xl px-6 rounded-2xl flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-[#c9a86a] py-2 border-b border-white/[0.04]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products/suwani-creme-dor"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 rounded-full bg-white text-black text-center text-xs uppercase tracking-widest font-medium mt-2"
          >
            Reserve Crème d'Or
          </Link>
        </div>
      )}
    </header>
  );
};
