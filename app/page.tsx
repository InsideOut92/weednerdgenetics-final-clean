// app/page.tsx
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const [hoverImage, setHoverImage] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="bg-black py-10">
        <div className="container mx-auto flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src="/images/logo-weednerd.png"
            alt="WeedNerdGenetics Logo"
            className="w-72 h-auto mb-6"
          />

          {/* Headline + Text */}
          <h1 className="text-4xl font-bold text-white">WeedNerdGenetics</h1>
          <p className="text-white/80 mt-2 max-w-2xl">
            Premium genetics for collectors. Seeds are sold as souvenirs; germination is subject to local laws.
          </p>

          {/* CTA */}
          <div className="mt-4">
            <a href="/shop" className="btn">
              Shop Seeds
            </a>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white">Featured Strains</h2>
        <div className="product-grid mt-4">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onHover={(enter) => setHoverImage(enter ? p.image : null)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
