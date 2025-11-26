"use client";

import Link from "next/link";
import newsi from "../newsi/page";
export default function Navbar() {
  return (
  <nav
  className="
    w-full 
    fixed top-0 left-0 z-50
    backdrop-blur-lg 
    bg-black/40
    border-b border-white/10
  "
>
  <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
    
    {/* Logo */}
    <div className="flex items-center gap-2">
      <span className="text-2xl font-semibold text-white">Weather</span>
    </div>

    {/* Menu */}
    <div className="hidden md:flex items-center gap-6 text-lg">
      <Link href="/" className="text-gray-300 hover:text-white transition">
        Home
      </Link>
      <Link href="#berita" className="text-gray-300 hover:text-white transition">
        More News
      </Link>
      <Link href="/contact" className="text-gray-300 hover:text-white transition">
        Contact
      </Link>
    </div>

  </div>
</nav>

  );
}
