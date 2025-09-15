"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.variant.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">
          Your cart is empty.{" "}
          <Link href="/seeds" className="text-green-400 hover:underline">
            Browse seeds
          </Link>
        </p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.variant.size}`}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">
                    {item.variant.size} – ${item.variant.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-700"
                      onClick={() =>
                        updateQuantity(item.id, item.variant.size, item.quantity - 1)
                      }
                    >
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-700"
                      onClick={() =>
                        updateQuantity(item.id, item.variant.size, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="font-bold text-green-400">
                  ${(item.variant.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="btn bg-red-600 hover:bg-red-700"
                  onClick={() => removeFromCart(item.id, item.variant.size)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="btn bg-gray-600 hover:bg-gray-700"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button className="btn btn-green">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
