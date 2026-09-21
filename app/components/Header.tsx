"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/95 backdrop-blur-xl border-b border-white/[0.1] py-3.5 px-6 md:px-12 shadow-2xl"
          : "bg-gradient-to-b from-[#000000]/95 via-[#000000]/75 to-transparent border-b border-transparent py-5 px-6 md:px-12"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#c9a86a]/60 group-hover:border-[#c9a86a] transition-all duration-300 bg-black flex items-center justify-center shadow-xl shadow-[#c9a86a]/25 shrink-0">
            <Image
              src="/logo.jpg"
              alt="Asaliya Production"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 48px, 56px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg md:text-xl font-medium tracking-[0.22em] uppercase text-white group-hover:text-[#c9a86a] transition-colors leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              ASALIYA
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.38em] uppercase text-[#e5c17d] font-bold mt-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              PRODUCTION
            </span>
          </div>
        </Link>

        {/* Desktop 5-Item Navigation with High-Visibility Frosted Capsule */}
        <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-black/80 border border-white/20 backdrop-blur-xl shadow-2xl shadow-black/80">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-200 ${
                  isActive
                    ? "bg-[#c9a86a] text-black font-bold shadow-lg shadow-[#c9a86a]/30"
                    : "text-white font-medium hover:text-[#e5c17d] hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Cart Nav Button with Counter Badge */}
          <Link
            href="/cart"
            className={`relative flex items-center gap-2 ml-1 px-4 py-2 rounded-full border transition-all duration-200 ${
              pathname === "/cart"
                ? "border-[#c9a86a] bg-[#c9a86a] text-black font-bold shadow-lg shadow-[#c9a86a]/30"
                : "border-white/30 hover:border-[#c9a86a] text-white hover:text-[#e5c17d] bg-white/[0.06] hover:bg-white/10 font-semibold"
            }`}
          >
            <ShoppingBag className={`w-3.5 h-3.5 ${pathname === "/cart" ? "text-black" : "text-[#c9a86a]"}`} />
            <span className="text-xs uppercase tracking-wider">Cart</span>
            {cartCount > 0 && (
              <span
                className={`px-1.5 py-0.2 text-[10px] font-mono font-bold rounded-full min-w-[18px] text-center ${
                  pathname === "/cart" ? "bg-black text-[#c9a86a]" : "bg-[#c9a86a] text-black"
                }`}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Right Controls: Cart & Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/cart"
            className="relative p-2.5 rounded-full border-2 border-white/30 bg-black/80 text-white shadow-lg"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#e5c17d]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.2 text-[9px] font-mono font-bold rounded-full bg-[#c9a86a] text-black shadow-md">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#e5c17d] shadow-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with High Contrast */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-6 pt-3 border-2 border-white/15 bg-black/98 backdrop-blur-2xl px-6 rounded-2xl flex flex-col gap-3 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xs uppercase tracking-widest py-3 px-3 rounded-xl border-b border-white/[0.08] transition-all flex items-center justify-between ${
                pathname === link.href
                  ? "bg-[#c9a86a] text-black font-bold shadow-md shadow-[#c9a86a]/20"
                  : "text-white font-medium hover:text-[#c9a86a] hover:bg-white/5"
              }`}
            >
              <span>{link.label}</span>
              {pathname === link.href && (
                <span className="w-2 h-2 rounded-full bg-black" />
              )}
            </Link>
          ))}
          <Link
            href="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-3.5 px-5 rounded-full bg-[#c9a86a] text-black text-xs uppercase tracking-widest font-bold mt-2 shadow-xl shadow-[#c9a86a]/30"
          >
            <span className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>View Cart</span>
            </span>
            <span className="font-mono bg-black text-[#c9a86a] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
              {cartCount} {cartCount === 1 ? "Item" : "Items"}
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};
