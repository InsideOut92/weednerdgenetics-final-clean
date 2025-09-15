// components/ProductCard.tsx
"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { Product, Variant } from "@/data/products";
import { useCart } from "@/app/context/CartContext";
import Toast from "./Toast";

type Props = {
  product: Product;
  onHover?: (image: string | null) => void;
};

export default function ProductCard({ product, onHover }: Props) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  // Default variant: try "3 Seeds", otherwise first available
  const defaultVariant =
    product.variants.find((v) => v.size.toLowerCase().includes("3")) ||
    product.variants[0];

  const [selected, setSelected] = useState<Variant>(defaultVariant);

  // Robust hover handlers (pointer + mouse)
  const handleEnter = useCallback(() => {
    onHover?.(product.image ?? null);
  }, [onHover, product.image]);

  const handleLeave = useCallback(() => {
    onHover?.(null);
  }, [onHover]);

  const handleAdd = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    // add product + chosen variant to cart
    addToCart(product, selected);
    setShowToast(true);
  };

  return (
    <>
      <div
        className="card bg-gray-900/80 border border-gray-700 rounded-md overflow-hidden transition transform hover:scale-[1.01] cursor-default"
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {/* Image + link */}
        <Link
          href={`/product/${product.id}`}
          prefetch={false}
          className="block"
          onClick={(e) => {
            /* allow navigation; clicking add-to-cart stops propagation */
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover"
            onPointerEnter={handleEnter}
            onPointerLeave={handleLeave}
          />
        </Link>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{product.category}</span>
            {/* price shown for selected variant */}
            <span className="text-sm font-bold text-green-400">
              ${selected?.price?.toFixed(2)}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-white mt-2">{product.name}</h3>
          <p className="text-sm text-gray-300 mt-1 line-clamp-2">{product.description}</p>

          {/* Variant Auswahl (klein) */}
          {product.variants && product.variants.length > 0 && (
            <select
              value={selected.size}
              onChange={(e) =>
                setSelected(
                  product.variants.find((v) => v.size === e.target.value) ||
                    product.variants[0]
                )
              }
              className="mt-3 w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-white"
              onPointerEnter={handleEnter}
            >
              {product.variants.map((v) => (
                <option key={v.size} value={v.size}>
                  {v.size} — ${v.price.toFixed(2)}
                </option>
              ))}
            </select>
          )}

          {/* Add-to-cart */}
          <button
            type="button"
            className="btn btn-green mt-3 w-full text-white font-semibold py-2 rounded-lg"
            onClick={handleAdd}
          >
            Add to cart
          </button>
        </div>
      </div>

      {showToast && (
        <Toast
          message={`${product.name} (${selected.size}) added to cart`}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}
