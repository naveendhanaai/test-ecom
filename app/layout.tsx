import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suwani | Haute Cellular Restorative",
  description: "Sculpted 24K gilded packaging holding pure botanical biocompatibility.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="antialiased bg-[#000000] text-white selection:bg-white/20">
        {children}
      </body>
    </html>
  );
}
