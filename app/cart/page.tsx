// components/ProductCard.tsx
"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/app/context/CartContext";

export default function ProductCard({
  product,
  onHover,
}: {
  product: Product;
  onHover?: (enter: boolean) => void;
}) {
  const { addToCart } = useCart();

  return (
    <div
      className="card hover:shadow-lg transition cursor-pointer"
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md"
        />
      </Link>

      <div className="p-4">
        <span className="text-sm text-gray-400">{product.category}</span>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-300">{product.description}</p>
        <p className="mt-2 font-bold text-green-400">€ {product.price}</p>

        {/* Add-to-cart Button */}
        <button
          className="btn mt-3 w-full"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
