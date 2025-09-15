// app/product/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  // Standardmäßig erstes Variant (meist 1 Seed) auswählen
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0] || null
  );

  if (!product) {
    return (
      <div className="container mx-auto p-8 text-white">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 text-white grid md:grid-cols-2 gap-8">
      {/* Produktbild */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Produktinfos */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-green-400 font-medium mt-1">{product.category}</p>
        <p className="mt-4 text-gray-300">{product.description}</p>

        {/* Variants */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Choose Pack Size:</h2>
          <div className="grid grid-cols-2 gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.size}
                className={`border rounded-lg px-4 py-2 text-sm font-medium transition
                  ${
                    selectedVariant?.size === variant.size
                      ? "bg-green-600 text-white border-green-500"
                      : "bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700"
                  }`}
                onClick={() => setSelectedVariant(variant)}
              >
                {variant.size} – ${variant.price.toFixed(2)}
              </button>
            ))}
          </div>
        </div>

        {/* Preis + Add to Cart */}
        <div className="mt-6">
          <p className="text-xl font-bold text-green-400">
            ${selectedVariant?.price.toFixed(2)}
          </p>
          <button
            className="btn btn-green mt-4"
            onClick={() =>
              selectedVariant && addToCart(product, selectedVariant)
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
