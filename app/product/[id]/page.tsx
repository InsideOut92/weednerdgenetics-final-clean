// app/product/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/app/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-8">Product not found.</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-96 h-96 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-300 mt-2">{product.description}</p>
          <p className="text-green-400 text-xl mt-4">€ {product.price}</p>

          <button
            className="btn btn-green mt-6"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
