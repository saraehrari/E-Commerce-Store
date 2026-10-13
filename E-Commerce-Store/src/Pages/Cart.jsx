

import { Link } from "react-router-dom";

export default function Cart({ cart = [], setCart }) {
  const removeProduct = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, (item.quantity || 1) + amount),
            }
          : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            ShopHub Store
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Your Shopping Cart
          </h1>

          <p className="mt-3 text-slate-500">
            Review your items and get ready to checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="rounded-3xl border border-slate-100 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-5xl">
              🛍️
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-slate-500">
              Looks like you haven't added anything yet.
              Explore our collection and find something you love!
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore Products →
            </Link>
          </div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-3">

            {/* Product List */}
            <div className="space-y-5 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800">
                  Cart Items
                </h2>

                <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                  {totalItems} items
                </span>
              </div>

              {cart.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="group flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:border-blue-100 hover:shadow-lg sm:flex-row sm:items-center"
                >
                  {/* Product Image */}
                  <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-xl bg-slate-50 p-4 sm:w-36">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                      {product.category}
                    </p>

                    <h3 className="line-clamp-2 font-bold leading-6 text-slate-800">
                      {product.title}
                    </h3>

                    <p className="mt-3 text-xl font-extrabold text-slate-900">
                      ${product.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-sm text-slate-500">
                        Quantity:
                      </span>

                      <div className="flex items-center rounded-lg border border-slate-200">
                        <button
                          onClick={() =>
                            updateQuantity(product.id, -1)
                          }
                          className="px-3 py-1.5 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center text-sm font-bold text-slate-800">
                          {product.quantity || 1}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(product.id, 1)
                          }
                          className="px-3 py-1.5 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="self-start rounded-lg px-3 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 hover:text-red-700 sm:self-center"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <Link
                to="/products"
                className="inline-flex items-center gap-2 pt-2 font-semibold text-blue-600 transition hover:text-blue-800"
              >
                <span>←</span> Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <aside className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="text-xl font-extrabold text-slate-900">
                Order Summary
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Review your purchase
              </p>

              <div className="my-6 space-y-4 border-b border-slate-100 pb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Subtotal ({totalItems} items)
                  </span>
                  <span className="font-semibold text-slate-800">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Shipping</span>
                  <span className="font-semibold text-emerald-600">
                    Free
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Discount</span>
                  <span className="font-semibold text-slate-800">
                    $0.00
                  </span>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="font-bold text-slate-900">
                  Total
                </span>

                <span className="text-2xl font-extrabold text-blue-600">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="block w-full rounded-xl bg-blue-600 px-5 py-4 text-center font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Proceed to Checkout →
              </Link>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                <span>🔒</span>
                <span>Secure checkout experience</span>
              </div>

              <div className="mt-6 rounded-xl bg-blue-50 p-4">
                <p className="font-bold text-blue-900">
                  💙 Shopping with confidence
                </p>

                <p className="mt-1 text-sm leading-5 text-blue-700">
                  Your favorite products are waiting for you.
                  Thank you for shopping with ShopHub!
                </p>
              </div>
            </aside>
          </div>
        )}

        {/* Bottom Trust Section */}
        <div className="mt-12 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl bg-white p-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
              🚚
            </span>
            <div>
              <p className="font-bold text-slate-800">Fast Delivery</p>
              <p className="text-sm text-slate-500">
                Convenient delivery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white p-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
              🔐
            </span>
            <div>
              <p className="font-bold text-slate-800">Secure Shopping</p>
              <p className="text-sm text-slate-500">
                Shop with confidence
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white p-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
              ↩️
            </span>
            <div>
              <p className="font-bold text-slate-800">Easy Returns</p>
              <p className="text-sm text-slate-500">
                Simple return process
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
