"use client";

import React from "react";

// Phone number for WhatsApp chat (e.g., "447123456789" with country code, no "+" or spaces)
// Left blank for now as requested. Provide number when ready.
const WHATSAPP_NUMBER = "";

export function WhatsAppButton() {
  // Link directly to WhatsApp chat; when number is provided it opens the exact chat
  const whatsappUrl = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Asaliya Production, I would like to enquire about formulations and ordering.")}`
    : "https://wa.me/";

  return (
    <aside
      aria-label="WhatsApp Concierge"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3 select-none"
    >
      {/* Short Callout Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat for information or orders on WhatsApp"
        className="group flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#0a0a0a]/90 hover:bg-[#111111] backdrop-blur-md border border-white/15 hover:border-[#25D366]/60 text-white shadow-xl hover:shadow-[#25D366]/15 transition-all duration-300"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
        </span>
        <span className="text-[11px] sm:text-xs font-medium tracking-wide text-white/90 group-hover:text-white whitespace-nowrap">
          Chat for Info &amp; Orders
        </span>
      </a>

      {/* Floating Green WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black shrink-0"
      >
        {/* Subtle breathing ripple glow */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.99.58 3.844 1.586 5.412L2.3 21.704l4.43-1.258A9.957 9.957 0 0012.004 22c5.524 0 10.004-4.48 10.004-9.996C22.008 6.48 17.528 2 12.004 2zm5.79 14.126c-.24.676-1.39 1.29-1.928 1.34-.51.047-1.168.07-3.376-.848-2.67-1.11-4.38-3.83-4.512-4.008-.132-.178-1.076-1.43-1.076-2.73 0-1.298.68-1.938.92-2.198.24-.26.524-.326.7-.326.176 0 .352.002.506.01.164.008.384-.062.6.458.224.542.766 1.868.832 2.004.066.136.11.296.02.474-.088.178-.132.29-.264.444-.132.156-.278.348-.396.468-.132.132-.27.276-.116.54.154.264.686 1.13 1.472 1.83 1.01.9 1.86 1.18 2.124 1.312.264.132.418.11.572-.066.154-.176.66-.77.836-1.034.176-.264.352-.22.594-.132.242.088 1.54.726 1.804.858.264.132.44.198.506.308.066.11.066.638-.174 1.314z" />
        </svg>
      </a>
    </aside>
  );
}
