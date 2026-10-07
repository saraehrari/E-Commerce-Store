import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          Shop<span className="text-gray-900">Hub</span>
        </NavLink>

        {/* Links */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>

          <NavLink to="/categories" className={navClass}>
            Categories
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="flex items-center">
            {showSearch && (
              <input
                type="text"
                autoFocus
                placeholder="Search products..."
                className="w-48 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            )}

            <button
              onClick={() => setShowSearch(!showSearch)}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
            >
              🔍
            </button>
          </div>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`
            }
          >
            🛒 Cart
          </NavLink>

          {/* Checkout */}
          <NavLink
            to="/checkout"
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Checkout
          </NavLink>

        </div>
      </div>
    </nav>
  );
}