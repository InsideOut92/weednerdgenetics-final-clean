// components/Footer.tsx
"use client";

import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo-weednerd.png"
            alt="WeedNerd Logo"
            className="h-10 w-auto"
          />
          <span className="text-lg font-semibold text-white">
            WeedNerdGenetics
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-green-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>
          <Link href="/seeds" className="hover:text-green-400 transition">
            Shop
          </Link>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href="mailto:weednerd@example.com"
            className="hover:text-green-400 transition"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-center text-gray-500 mt-6">
        Seeds are sold as souvenirs only. Germination is subject to local laws.
      </p>
    </footer>
  );
}
