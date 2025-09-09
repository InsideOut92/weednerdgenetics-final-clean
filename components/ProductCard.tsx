"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";

import Toast from "./Toast";

export default function ProductCard({
  product,
  onHover,
}: {
  product: Product;
  onHover?: (enter: boolean) => void;
}) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <div
      className="card hover:shadow-lg transition cursor-pointer bg-gray-900/80 border border-gray-700"
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-t-md"
        />
      </Link>

      <div className="p-4">
        <span className="text-sm text-gray-400">{product.category}</span>
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-sm text-gray-300">{product.description}</p>
        <p className="mt-2 font-bold text-green-400">€ {product.price}</p>

        {/* Add-to-cart Button */}
        <button
          className="btn bg-green-600 hover:bg-green-700 mt-3 w-full text-white font-semibold py-2 rounded-lg"
          onClick={handleAdd}
        >
          Add to cart
        </button>
      </div>

      {showToast && (
        <Toast
          message={`${product.name} added to cart!`}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
