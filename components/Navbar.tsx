// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo links */}
      <Link href="/" className="text-xl font-bold">
        WeedNerd
      </Link>

      {/* Kategorien */}
      <div className="space-x-6">
        <Link href="/seeds">Seeds</Link>
        <Link href="/category/indica">Indica</Link>
        <Link href="/category/sativa">Sativa</Link>
        <Link href="/category/autoflower">Autoflower</Link>
        <Link href="/category/hybrid">Hybrid</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Warenkorb rechts */}
      <Link href="/cart" className="relative">
        <ShoppingCart size={28} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full px-2">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  );
}
