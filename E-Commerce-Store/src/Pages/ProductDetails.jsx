
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="p-10 text-center">Loading product...</p>;
  }

  if (!product) {
    return <p className="p-10 text-center">Product not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto grid max-w-5xl gap-10 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2">

        <div className="flex items-center justify-center rounded-xl bg-white p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase text-blue-600">
            {product.category}
          </p>

          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="mb-4 text-gray-600">
            {product.description}
          </p>

          <p className="mb-4 text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>

          <p className="mb-6 text-gray-600">
            ⭐ {product.rating?.rate ?? "N/A"} (
            {product.rating?.count ?? 0} reviews)
          </p>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Products
          </button>
        </div>

      </div>
    </div>
  );
}