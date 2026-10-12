


             
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {/* Brand */}
          <div className="min-w-0">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                🛍️
              </span>
              <span className="text-2xl font-extrabold text-slate-900">
                Shop<span className="text-blue-600">Hub</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Discover products you'll love. Quality, convenience,
              and great finds — all in one place.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white transition hover:bg-blue-700"
              >
                IG
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white transition hover:bg-blue-700"
              >
                f
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white transition hover:bg-blue-700"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h3 className="mb-4 text-lg font-bold text-slate-900">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link className="hover:text-blue-600" to="/">Home</Link></li>
              <li><Link className="hover:text-blue-600" to="/products">Products</Link></li>
              <li><Link className="hover:text-blue-600" to="/about">About Us</Link></li>
              <li><Link className="hover:text-blue-600" to="/categories">Categories</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="min-w-0">
            <h3 className="mb-4 text-lg font-bold text-slate-900">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link className="hover:text-blue-600" to="/cart">Shopping Cart</Link></li>
              <li><Link className="hover:text-blue-600" to="/checkout">Checkout</Link></li>
              <li><Link className="hover:text-blue-600" to="/about">Contact Us</Link></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="min-w-0 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-5 text-white shadow-lg shadow-blue-500/20 sm:p-6">
            <h3 className="text-xl font-bold">
              Find Your Next Favorite
            </h3>

            <p className="mt-3 text-sm leading-6 text-blue-50">
              Explore our collection and discover something special.
            </p>

            <Link
              to="/products"
              className="mt-5 inline-flex max-w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Explore Products <span>→</span>
            </Link>
          </div>
        </div>
 
        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-blue-200 pt-5 text-center sm:mt-10 md:flex-row md:justify-between md:text-left">
          <p className="text-xs leading-5 text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>

        <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
>
  Back to top ↑
</button>
        </div>
      </div>
    </footer>
  );
}
