"use client";

import React, { useState } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "Allocation Request",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      <Header />

      {/* Hero Header Section */}
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-white/[0.06] bg-gradient-to-b from-[#0a0a0a] via-black to-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-mono">
              Client Concierge • London &amp; Tokyo
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white/95">
            Contact Us
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-light max-w-xl leading-relaxed">
            Whether you require assistance with an existing seasonal allocation, desire a personalised skincare
            consultation, or wish to schedule an appointment at our Mayfair studio, our team is at your service.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] shadow-2xl">
              <h2 className="text-xl font-light text-white mb-2">Send an Enquiry</h2>
              <p className="text-xs text-white/50 font-light mb-8">
                Please complete the form below. A private client concierge will respond within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#c9a86a]/15 border border-[#c9a86a]/40 flex items-center justify-center mx-auto mb-5 text-[#c9a86a]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-light text-white mb-2">Enquiry Received</h3>
                  <p className="text-xs text-white/60 font-light max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, {formData.fullName || "valued client"}. Your dispatch has been logged with our Mayfair studio. A concierge specialist will review your request and contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        enquiryType: "Allocation Request",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#c9a86a] text-xs uppercase tracking-wider font-medium transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-mono text-white/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lady Victoria Spencer"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a86a] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-mono text-white/60 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. victoria@spencer.co.uk"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a86a] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Enquiry Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-mono text-white/60 mb-2">
                        Telephone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +44 20 7946 0912"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a86a] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-mono text-white/60 mb-2">
                        Nature of Enquiry *
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        aria-label="Nature of Enquiry"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white focus:outline-none focus:border-[#c9a86a] transition-colors cursor-pointer"
                      >
                        <option value="Allocation Request" className="bg-[#111] text-white">
                          Allocation Request
                        </option>
                        <option value="Ritual Consultation" className="bg-[#111] text-white">
                          Ritual Consultation
                        </option>
                        <option value="Order & Dispatch" className="bg-[#111] text-white">
                          Order &amp; Dispatch Status
                        </option>
                        <option value="Studio Appointment" className="bg-[#111] text-white">
                          Studio Appointment (Mayfair)
                        </option>
                        <option value="Press & Editorial" className="bg-[#111] text-white">
                          Press &amp; Editorial
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-white/60 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details regarding your enquiry, skin profile, or allocation requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a86a] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white text-black hover:bg-[#c9a86a] hover:text-black text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Studio Locations & Direct Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* London Mayfair Studio */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c9a86a] uppercase mb-3">
                <MapPin className="w-4 h-4" />
                <span>London Studio</span>
              </div>
              <h3 className="text-xl font-light text-white">42 Berkeley Square</h3>
              <p className="text-xs text-white/40 font-mono mt-1">Mayfair, London W1J 5AW, United Kingdom</p>
              <p className="text-xs text-white/60 font-light mt-4 leading-relaxed">
                By appointment only. Private client allocations, skin biome diagnostics, and bespoke formulation consultations.
              </p>
            </div>

            {/* Tokyo Sanctuary */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c9a86a]/30 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c9a86a] uppercase mb-3">
                <MapPin className="w-4 h-4" />
                <span>Tokyo Sanctuary</span>
              </div>
              <h3 className="text-xl font-light text-white">Ginza 6-chome</h3>
              <p className="text-xs text-white/40 font-mono mt-1">Chuo-ku, Tokyo 104-0061, Japan</p>
              <p className="text-xs text-white/60 font-light mt-4 leading-relaxed">
                Our East Asian research facility and private consultation lounge.
              </p>
            </div>

            {/* Direct Client Services */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <h3 className="text-base font-light text-white">Direct Client Services</h3>

              <div className="flex items-start gap-3 text-xs text-white/70">
                <Mail className="w-4 h-4 text-[#c9a86a] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white/40 font-mono text-[10px] uppercase">Private Client Concierge</span>
                  <a href="mailto:concierge@asaliyaproduction.com" className="hover:text-[#c9a86a] transition-colors">
                    concierge@asaliyaproduction.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-white/70">
                <Phone className="w-4 h-4 text-[#c9a86a] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white/40 font-mono text-[10px] uppercase">Direct Telephone</span>
                  <a href="tel:+442079460912" className="hover:text-[#c9a86a] transition-colors">
                    +44 (0) 20 7946 0912
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-white/70">
                <Clock className="w-4 h-4 text-[#c9a86a] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white/40 font-mono text-[10px] uppercase">Concierge Hours</span>
                  <span>Monday to Friday: 09:00 – 18:00 GMT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
