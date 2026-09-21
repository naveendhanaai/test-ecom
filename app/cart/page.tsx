"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";
import {
  ShoppingBag,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal, cartCount } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      <Header />

      <section className="pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-white/[0.06] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono">
                  Private Client Checkout
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white/95">
                Your Cart
              </h1>
            </div>

            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-white/40 hover:text-white/80 transition-colors underline font-mono uppercase tracking-wider"
              >
                Clear Cart
              </button>
            )}
          </div>

          {/* Checkout Completed Notice */}
          {orderComplete ? (
            <div className="py-24 text-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#c9a86a]/15 border border-[#c9a86a]/40 flex items-center justify-center mx-auto mb-6 text-[#c9a86a]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-3">
                Allocation Confirmed
              </h2>
              <p className="text-sm text-white/60 font-light leading-relaxed mb-8">
                Thank you for your order with Asaliya Production. Your individually numbered allocations
                have been logged in our private registry. Our Mayfair concierge will prepare your
                climate-controlled dispatch notice immediately.
              </p>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-8 font-mono text-xs text-white/60 space-y-1">
                <div>Order Reference: #AP-{Math.floor(100000 + Math.random() * 900000)}</div>
                <div>Courier: Royal Mail Special Delivery Guaranteed</div>
              </div>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#c9a86a] font-medium text-xs uppercase tracking-wider transition-all"
              >
                <span>Continue Exploring the Shop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart State */
            <div className="py-28 text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mx-auto mb-6 text-white/40">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-light text-white mb-3">Your cart is empty</h2>
              <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-8">
                You currently have no active allocations reserved. Discover our cellular formulations,
                cold-pressed facial oils, and restorative balms in our Shop.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#c9a86a] font-medium text-xs uppercase tracking-wider transition-all shadow-xl"
              >
                <span>Browse The Shop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            /* Active Cart Grid */
            <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Items List (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-white/10 transition-colors"
                  >
                    {/* Visual & Metadata */}
                    <div className="flex items-center gap-5">
                      <Link
                        href={`/products/${item.slug}`}
                        className="relative w-20 h-20 rounded-2xl overflow-hidden bg-black border border-white/[0.08] shrink-0"
                      >
                        <Image
                          src={item.heroImage}
                          alt={item.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </Link>

                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a86a] block">
                          {item.category} • {item.volume}
                        </span>
                        <Link
                          href={`/products/${item.slug}`}
                          className="text-base font-light text-white hover:text-[#c9a86a] transition-colors mt-0.5 block"
                        >
                          {item.name}
                        </Link>
                        <span className="text-xs text-white/40 font-mono mt-1 block">
                          {item.price} each
                        </span>
                      </div>
                    </div>

                    {/* Quantity & Action Controls */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
                      {/* Quantity Modifier */}
                      <div className="flex items-center border border-white/20 rounded-full px-3 py-1 bg-white/[0.02]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-white/60 hover:text-white px-2 py-0.5 text-xs transition-colors"
                          title="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="font-mono text-xs px-2.5 text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-white/60 hover:text-white px-2 py-0.5 text-xs transition-colors"
                          title="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Subtotal for Item */}
                      <div className="text-right min-w-[70px]">
                        <span className="text-sm font-light text-white font-mono block">
                          £{(item.numericPrice * item.quantity).toLocaleString()}
                        </span>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 rounded-full hover:bg-white/[0.06] text-white/40 hover:text-red-400 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Additional Information Banner */}
                <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] flex items-center gap-4 text-xs text-white/60 font-light">
                  <Sparkles className="w-5 h-5 text-[#c9a86a] shrink-0" />
                  <p>
                    Each formulation is prepared fresh upon order allocation. Your jar will be serialised
                    and packaged with a certified cold-seal before courier collection.
                  </p>
                </div>
              </div>

              {/* Order Summary Column (5 cols) */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] shadow-2xl space-y-6">
                  <h2 className="text-lg font-light text-white pb-4 border-b border-white/[0.06]">
                    Order Summary
                  </h2>

                  {/* Summary Breakdown */}
                  <div className="space-y-3.5 text-xs">
                    <div className="flex items-center justify-between text-white/60">
                      <span>Items Subtotal ({cartCount} {cartCount === 1 ? "unit" : "units"})</span>
                      <span className="font-mono text-white">£{cartTotal.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between text-white/60">
                      <span className="flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-[#c9a86a]" />
                        UK Express Delivery
                      </span>
                      <span className="text-[#c9a86a] font-mono">Complimentary</span>
                    </div>

                    <div className="flex items-center justify-between text-white/60">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#c9a86a]" />
                        Thermal Matrix Packaging
                      </span>
                      <span className="text-[#c9a86a] font-mono">Included</span>
                    </div>

                    <div className="flex items-center justify-between text-white/60">
                      <span>Value Added Tax (VAT 20%)</span>
                      <span className="font-mono text-white/40">Included in price</span>
                    </div>
                  </div>

                  {/* Total Bar */}
                  <div className="pt-6 border-t border-white/[0.08] flex items-baseline justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-white/50 block font-mono">
                        Total Amount
                      </span>
                      <span className="text-[10px] text-white/40">All duties &amp; taxes included</span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-light text-white font-mono">
                      £{cartTotal.toLocaleString()}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full py-4 rounded-full bg-white text-black hover:bg-[#c9a86a] hover:text-black text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                  >
                    {isCheckingOut ? (
                      <span>Processing Allocation...</span>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        <span>Proceed to Secure Checkout</span>
                      </>
                    )}
                  </button>

                  {/* Security Footnote */}
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] text-[11px] text-white/40 font-light">
                    <div className="flex items-center gap-2">
                      <Lock className="w-3 h-3 text-[#c9a86a]" />
                      <span>End-to-end 256-bit encrypted checkout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-3 h-3 text-[#c9a86a]" />
                      <span>Dispatched via Royal Mail Special Delivery from London</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
