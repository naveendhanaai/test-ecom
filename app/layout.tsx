import type { Metadata } from "next";
import "./globals.css";
import { AmbientAura } from "./components/AmbientAura";
import { CartProvider } from "./context/CartContext";
import { WhatsAppButton } from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Asaliya Production | Sacred Ayurvedic Rasayana & Cellular Skincare",
  description: "Pure Ayurvedic Rasayana skincare infused with wild turmeric, sacred sandalwood, and Kashmiri saffron.",
  applicationName: "Asaliya Production",
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "192x192", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    shortcut: ["/logo.jpg"],
  },
  openGraph: {
    title: "Asaliya Production | Sacred Ayurvedic Rasayana & Cellular Skincare",
    description: "Pure Ayurvedic Rasayana skincare infused with wild turmeric, sacred sandalwood, and Kashmiri saffron.",
    siteName: "Asaliya Production",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Asaliya Production Brand Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className="antialiased bg-[#000000] text-white selection:bg-white/20">
        <CartProvider>
          <AmbientAura />
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
