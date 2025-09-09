"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function SeedsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-6">All Seeds</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
