"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 bg-[#ffffff9d] backdrop-blur-md shadow-md top-0 left-0 w-full z-50 sticky">
     
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={74} height={74} />
      </div>

      <ul className="hidden md:flex gap-6 text-gray-900 ">
        <li className="group relative cursor-pointer hover:text-orange-500 transition-all ">
          <Link href="/products">Products</Link>
        </li>
        <li className="group relative cursor-pointer hover:text-orange-500 transition-all ">
          <Link href="/services">Services</Link>
        </li>
        <li className="cursor-pointer hover:text-orange-500 transition-all ">
          <Link href="/about">About Us</Link>
        </li>
        <li className="cursor-pointer hover:text-orange-500 transition-all ">
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className="cursor-pointer hover:text-orange-500 transition-all">
          <Link href="/support">Support</Link>
        </li>
      </ul>

    
      <div className="hidden md:flex items-center gap-4">
        <Search className="w-5 h-5 cursor-pointer" />
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
        <Link href="/signin" className="bg-orange-500 text-white px-4 py-2 rounded-md">
          Sign In
        </Link>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

     
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li>
              <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
            <li>
              <Link href="/support" onClick={() => setIsOpen(false)}>Support</Link>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-4">
            <Search className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
            <Link href="/signin" className="bg-orange-500 text-white px-4 py-2 rounded-md">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
