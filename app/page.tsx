// app/page.tsx
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const [hoverImage, setHoverImage] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: "url('/images/hero-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay für Transparenz */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6">
          {/* Logo + Text */}
          <div className="text-center lg:text-left max-w-xl">
            <img
              src="/images/logo-weednerd.png"
              alt="WeedNerdGenetics Logo"
              className="w-72 h-auto mb-6 mx-auto lg:mx-0"
            />

            <h1 className="text-4xl font-bold text-white">
              WeedNerdGenetics
            </h1>
            <p className="text-white/80 mt-3">
              Premium genetics for collectors. Seeds are sold as souvenirs;
              germination is subject to local laws.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <a href="/shop" className="btn btn-green">
                Shop Seeds
              </a>
            </div>
          </div>

          {/* Hover Preview */}
          <div className="w-full max-w-sm">
            {hoverImage ? (
              <div className="card p-2">
                <img
                  src={hoverImage}
                  alt="preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="card p-4 text-center text-white/80">
                <strong className="block text-lg mb-2">
                  Hover a strain
                </strong>
                <p className="text-sm">
                  Move your mouse over a product to preview it here.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured */}
<section>
  <h2 className="text-2xl font-bold">Featured Strains</h2>
  <div className="product-grid mt-4">
    {products.filter((p) => p.featured).map((p) => (
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
