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

     
{/* Products Section */}
<section className="bg-gray-50 px-6 py-16 sm:px-10 lg:px-16">
  {/* Section Header */}
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
      Our Collection
    </span>

    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      Discover Our Products
    </h2>

    <p className="mt-4 text-gray-500">
      Explore our collection of quality products at great prices.
      Find something you love today.
    </p>
  </div>

  {/* Error Message */}
  {error && (
    <p className="mb-6 text-center font-medium text-red-500">
      {error}
    </p>
  )}

  {/* Loading State */}
  {products.length === 0 && !error && (
    <p className="py-12 text-center text-gray-500">
      Loading products...
    </p>
  )}

  {/* Products Grid */}
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        {/* Product Image */}
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
          />

          <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        </div>

        {/* Product Details */}
        <div className="p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            {product.category}
          </p>

          <h3 className="mb-3 line-clamp-2 min-h-12 text-base font-bold text-gray-800 transition group-hover:text-blue-600">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="mb-4 flex items-center gap-2">
            <span className="text-amber-400">★</span>
            <span className="text-sm font-semibold text-gray-700">
              {product.rating?.rate ?? "N/A"}
            </span>
            <span className="text-xs text-gray-400">
              ({product.rating?.count ?? 0} reviews)
            </span>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <div>
              <p className="text-xs text-gray-400">Price</p>
              <p className="text-xl font-extrabold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => navigate(`/Products/${product.id}`)}
              className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
            
              View Details
           </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
</>
  )}