import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ProductDetailClient } from "./ProductDetailClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | SUWANI Haute Formulation",
    };
  }

  return {
    title: `${product.name} — ${product.subtitle} | SUWANI`,
    description: product.description,
    openGraph: {
      title: `${product.name} | SUWANI Haute Formulation`,
      description: product.tagline,
      images: [{ url: product.heroImage }],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <Header />
      <ProductDetailClient product={product} />
      <Footer />
    </main>
  );
}
