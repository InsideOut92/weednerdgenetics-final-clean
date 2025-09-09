"use client";

import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = slug?.toString();

  const filtered = products.filter(
    (p) => p.category.toLowerCase() === category
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-white capitalize mb-6">
        {category} Seeds
      </h1>

      {filtered.length === 0 ? (
        <p className="text-gray-400">No products found in this category.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
