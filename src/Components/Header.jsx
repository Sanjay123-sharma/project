import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export function Header() {
  const Cart = useSelector((state) => state.product.Cart);
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-purple-600 hover:text-gray-400 transition-all"
        >
          ShopHub
        </NavLink>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-white hover:text-purple-400 font-medium transition-all"
          >
            Home
          </NavLink>
          <NavLink
            to="/orders"
            className="text-white hover:text-purple-400 font-medium transition-all"
          >
            My Orders
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-purple-400 font-medium transition-all"
          >
            About Us
          </NavLink>

        </div>

        {/* Cart Icon */}
        <NavLink
          to="/cart"
          className="relative text-white hover:text-purple-400 transition-all"
        >
          <span>🛒{Cart.length}</span>
        </NavLink>
      </div>
    </header>
  );
}
