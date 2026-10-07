

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero image.png";

const API = "https://fakestoreapi.com/products";

export default function Home() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(API);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        console.log("API DATA:", data);

        setProducts(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden rounded-2xl">
        <img
          src={heroImage}
          alt="Discover products"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex h-full items-center px-10 md:px-16">
          <div className="max-w-xl text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">
              Welcome to our store
            </p>

            <h1 className="mb-5 text-4xl font-bold md:text-6xl">
              Discover Products You’ll Love
            </h1>

            <p className="mb-7 text-lg text-gray-200">
              Find the perfect products for your everyday needs.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-10">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Products
        </h2>

        {/* Error */}
        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {/* Loading */}
        {products.length === 0 && !error && (
          <p className="text-center text-gray-500">
            Loading products...
          </p>
        )}

        {/* Product List */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border bg-white p-4 shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain"
              />

              <h3 className="mt-4 line-clamp-2 font-semibold">
                {product.title}
              </h3>

              <p className="mt-2 font-bold text-blue-600">
                ${product.price}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                ⭐ {product.rating.rate}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

