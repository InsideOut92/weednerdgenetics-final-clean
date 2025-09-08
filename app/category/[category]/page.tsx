// app/category/[category]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CategoryPage() {
  const { category } = useParams();
  const filtered = products.filter(
    (p) => p.category.toLowerCase() === String(category).toLowerCase()
  );

  if (filtered.length === 0) {
    return <div className="container mx-auto p-8 text-white">No products in this category.</div>;
  }

  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold capitalize">{category} Strains</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
