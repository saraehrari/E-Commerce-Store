import { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout({ cart = [] }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "cash",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
            ✓
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Thank You!
          </h1>

          <p className="mt-3 text-gray-500">
            Your demo order has been submitted successfully.
          </p>

          <p className="mt-4 text-lg font-bold text-blue-600">
            Total: ${total.toFixed(2)}
          </p>

          <Link
            to="/products"
            className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            ShopHub Checkout
          </span>

          <h1 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Complete Your Order
          </h1>

          <p className="mt-3 text-gray-500">
            Just a few details and your order will be ready.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid items-start gap-8 lg:grid-cols-3"
        >
          {/* Customer Form */}
          <div className="space-y-7 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900">
                01. Contact Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Enter your personal details.
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>
            </section>

            <div className="border-t border-gray-100" />

            {/* Shipping Address */}
            <section>
              <h2 className="text-xl font-bold text-gray-900">
                02. Shipping Address
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Where should we deliver your order?
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Street Address
                  </label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House number and street"
                    autoComplete="street-address"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    City
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    autoComplete="address-level2"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Postal Code
                  </label>
                  <input
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Postal code"
                    autoComplete="postal-code"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>
            </section>

            <div className="border-t border-gray-100" />

            {/* Payment Method */}
            <section>
              <h2 className="text-xl font-bold text-gray-900">
                03. Payment Method
              </h2>

              <div className="mt-5 space-y-3">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-blue-400">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={formData.payment === "cash"}
                    onChange={handleChange}
                    className="h-4 w-4 accent-blue-600"
                  />
                  <span className="text-2xl">📦</span>
                  <span>
                    <span className="block font-semibold text-gray-800">
                      Cash on Delivery
                    </span>
                    <span className="text-sm text-gray-500">
                      Pay when your order arrives.
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-blue-400">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.payment === "card"}
                    onChange={handleChange}
                    className="h-4 w-4 accent-blue-600"
                  />
                  <span className="text-2xl">💳</span>
                  <span>
                    <span className="block font-semibold text-gray-800">
                      Credit / Debit Card
                    </span>
                    <span className="text-sm text-gray-500">
                      Card payment option (demo only).
                    </span>
                  </span>
                </label>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
            </p>
               {cart.length === 0 ? (
              <div className="mt-6 rounded-xl bg-gray-50 p-5 text-center">
                <p className="text-gray-500">
                  Your cart is empty.
                </p>
                <Link
                  to="/products"
                  className="mt-3 inline-block font-semibold text-blue-600 hover:underline"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="mt-6 max-h-80 space-y-4 overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-semibold text-gray-800">
                        {item.title}
                      </p>
                      <p className="mt-1 font-bold text-blue-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span className="font-semibold text-green-600">
                  Free
                </span>
              </div>

              <div className="flex justify-between border-t border-gray-100 pt-4 text-lg font-extrabold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={cart.length === 0}
              className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
            >
              Place Order →
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-400">
              This is a demo checkout. No real payment will be processed.
            </p>

            <Link
              to="/cart"
              className="mt-4 block text-center text-sm font-semibold text-blue-600 hover:underline"
            >
              ← Back to Cart
            </Link>
          </aside>
        </form>
      </div>
    </div>
  );
}