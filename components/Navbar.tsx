"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-950/95 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center shadow-lg border-b border-green-600">
      {/* Logo links */}
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/images/logo-weednerd.png"
          alt="WeedNerd Logo"
          className="h-10 w-auto"
        />
        <span className="text-xl font-bold hidden sm:inline text-green-500">
          WeedNerdGenetics
        </span>
      </Link>

      {/* Kategorien */}
      <div className="space-x-6 font-medium">
        <Link href="/seeds" className="hover:text-green-400 transition">Seeds</Link>
        <Link href="/category/indica" className="hover:text-green-400 transition">Indica</Link>
        <Link href="/category/sativa" className="hover:text-green-400 transition">Sativa</Link>
        <Link href="/category/autoflower" className="hover:text-green-400 transition">Autoflower</Link>
        <Link href="/category/hybrid" className="hover:text-green-400 transition">Hybrid</Link>
        <Link href="/about" className="hover:text-green-400 transition">About</Link>
        <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
      </div>

      {/* Warenkorb rechts */}
      <Link
        href="/cart"
        className="relative p-2 rounded-full hover:bg-green-600/20 transition"
      >
        <ShoppingCart size={28} />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  );
}
