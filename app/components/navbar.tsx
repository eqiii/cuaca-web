"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold">Weather</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6 text-2xl m-5">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        
      </div>
    </nav>
  );
}
