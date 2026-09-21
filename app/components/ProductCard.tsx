"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/app/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group relative flex flex-col justify-between bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-[#c9a86a]/40 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-1.5 shadow-2xl">
      {/* Card Header Metadata */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c9a86a]">
            {product.category} • {product.volume}
          </span>
          {product.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[9px] uppercase tracking-widest text-white/80">
              {product.badge}
            </span>
          )}
        </div>

        {/* Dosha Harmony Pill */}
        {product.dosha && (
          <div className="mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#c9a86a]/10 border border-[#c9a86a]/25 text-[9px] font-mono uppercase tracking-wider text-[#c9a86a]">
              <span className="w-1 h-1 rounded-full bg-[#c9a86a]" />
              {product.dosha}
            </span>
          </div>
        )}

        {/* Product Visual Frame */}
        <Link href={`/products/${product.slug}`} className="block relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black my-4 border border-white/[0.06]">
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100"
          />
          {/* Subtle vignette gloss */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
        </Link>

        {/* Title & Tagline */}
        <h3 className="text-xl font-light tracking-tight text-white/95 group-hover:text-[#c9a86a] transition-colors mt-2">
          {product.name}
        </h3>
        <p className="text-xs text-white/50 font-light mt-1.5 line-clamp-2 leading-relaxed">
          {product.tagline}
        </p>

        {/* Active Key Ingredients Chips */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {product.keyActives.slice(0, 2).map((active) => (
            <span
              key={active.name}
              className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-white/60"
            >
              {active.name}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Price & Actions */}
      <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-white/40 block font-mono">Allocation Price</span>
          <span className="text-base font-light text-white/90">{product.price}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
              added
                ? "bg-[#c9a86a] text-black"
                : "bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/10 hover:border-[#c9a86a]/50"
            }`}
            title="Add to Cart"
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 text-black" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#c9a86a]" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-white text-black hover:bg-[#c9a86a] text-xs uppercase tracking-wider font-medium transition-all"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
