// app/cart/page.tsx
"use client";

import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <div className="p-8">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>Qty: {item.quantity}</p>
              <p className="text-green-400">€ {item.price}</p>
            </div>
            <button
              className="btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <button className="btn bg-red-600" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}
