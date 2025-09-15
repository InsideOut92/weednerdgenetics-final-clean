// app/context/CartContext.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Product, Variant } from "@/data/products";

type CartItem = {
  id: string;            // product.id
  name: string;
  image: string;
  category: string;
  description: string;
  variant: Variant;      // <- z.B. { size: "3 Seeds", price: 39.99 }
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, variant: Variant) => void;
  removeFromCart: (id: string, size: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Laden aus localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Speichern ins localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, variant: Variant) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.variant.size === variant.size
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.variant.size === variant.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          category: product.category,
          description: product.description,
          variant,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: string, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.variant.size === size))
    );
  };

  const clearCart = () => setCart([]);

  const updateQuantity = (id: string, size: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.variant.size === size
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
