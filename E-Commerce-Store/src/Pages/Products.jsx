import { useNavigate } from "react-router-dom";

export default function Products({products, error, loading, search}){
    const navigate = useNavigate();

   const filteredProducts = (products || [])
    .filter((product) =>
      product.title.toLowerCase().includes((search || "").toLowerCase())
    )
    return(
        <div>
        
{/* Products Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-6 py-16 text-white sm:px-10 md:py-24">

  {/* Background Decoration */}
  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
  <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-white/10" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

    {/* Hero Content */}
    <div>
      <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
        Discover Something New
      </span>

      <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
        Find Your
        <span className="block text-blue-200">
          Perfect Products
        </span>
      </h1>

      <p className="mt-5 max-w-lg text-base leading-7 text-blue-100 sm:text-lg">
        Explore our collection of quality products at great prices.
        Discover your favorites and enjoy a simple shopping experience
        with ShopHub.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#products"
          className="rounded-full bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
        >
          Shop Collection →
        </a>

        <span className="flex items-center text-sm font-medium text-blue-100">
          ✦ Quality products, made easy
        </span>
      </div>
    </div>

    {/* Hero Image */}
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1000&q=85"
        alt="Online shopping collection"
        className="h-64 w-full rounded-3xl object-cover shadow-2xl sm:h-80 lg:h-96"
      />

      <div className="absolute -bottom-4 -left-3 rounded-2xl bg-white p-4 text-slate-800 shadow-xl sm:-left-5 sm:p-5">
        <p className="text-sm text-slate-500">
          Your next favorite
        </p>
        <p className="mt-1 font-bold text-blue-700">
          Is waiting for you ✨
        </p>
      </div>
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
  {loading && (
  <p className="py-12 text-center text-gray-500">
    Loading products...
  </p>
)}

  {/* Products Grid */}
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {filteredProducts.map((product) => (
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
              onClick={() => navigate(`/products/${product.id}`)}
                  className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
              </button>
          </div>
        </div>
      </div> 
    ))}
  </div>
</section>
</div>

    )}