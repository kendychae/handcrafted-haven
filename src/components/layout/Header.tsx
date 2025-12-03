"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Browse Products", href: "/products" },
    { name: "Artisans", href: "/artisans" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center mr-11">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg items-center justify-center hidden">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h1 className="font-display font-bold text-xl text-neutral-900">
                  Handcrafted Haven
                </h1>
                <p className="text-xs text-neutral-900">Artisan Marketplace</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="input pr-10 text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-4 w-4 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/become-seller"
              className="btn-outline text-xs px-3 py-2 whitespace-nowrap"
            >
              Sell
            </Link>
            <Link
              href="/login"
              className="text-neutral-700 hover:text-primary-600 font-medium text-sm whitespace-nowrap"
            >
              Sign In
            </Link>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-neutral-700 hover:text-primary-600"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M9 21h6"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-primary-800 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {itemCount}
              </span>
            </Link>
          </div>

          {/* Cart Icon for Tablet */}
          <div className="hidden md:flex lg:hidden">
            <Link
              href="/cart"
              className="relative p-2 text-neutral-700 hover:text-primary-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M9 21h6"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-primary-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-neutral-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-neutral-200 py-4 bg-white">
            <div className="flex flex-col space-y-3">
              {/* Mobile Search */}
              <div className="px-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search handcrafted items..."
                    className="input pr-10"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="h-5 w-5 text-neutral-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="px-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <div className="px-4 pt-3 border-t border-neutral-200 space-y-2">
                <Link
                  href="/cart"
                  className="flex items-center justify-center space-x-2 w-full py-2 text-neutral-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M9 21h6"
                    />
                  </svg>
                  <span>Cart ({itemCount})</span>
                </Link>
                <Link
                  href="/become-seller"
                  className="block btn-outline text-center py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become a Seller
                </Link>
                <Link
                  href="/login"
                  className="block text-center py-2 text-neutral-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
