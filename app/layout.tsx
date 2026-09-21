import type { Metadata } from "next";
import "./globals.css";
import { AmbientAura } from "./components/AmbientAura";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Asaliya Production | Advanced Cellular Skincare",
  description: "Pure Ayurvedic Rasayana skincare infused with wild turmeric, sacred sandalwood, and Kashmiri saffron.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="antialiased bg-[#000000] text-white selection:bg-white/20">
        <CartProvider>
          <AmbientAura />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
