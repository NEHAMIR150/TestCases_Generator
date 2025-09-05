"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left side: Logo + Text */}
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={40} height={40} />

        {/* Brand Name + Tagline */}
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-black">Supertech</span>
          <span className="text-sm text-gray-600 font-bold">Test Case Generator</span>
        </div>
      </div>

      {/* Right side: Links */}
      <div className="space-x-4 flex items-center">
        <Link href="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">
          About Us
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-500">
          Contact
        </Link>
        <Link href="/demo" className="text-gray-700 hover:text-blue-500">
          Demo
        </Link>
        <Link href="/account" className="text-gray-700 hover:text-blue-500">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
