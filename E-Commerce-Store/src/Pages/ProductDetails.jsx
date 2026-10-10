
import { useParams } from "react-router-dom";

export default function ProductDetails({ products }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="mx-auto max-w-4xl p-8">
      <img
        src={product.image}
        alt={product.title}
        className="mx-auto h-64 object-contain"
      />

      <h1 className="mt-6 text-2xl font-bold">
        {product.title}
      </h1>

      <p className="mt-3 text-gray-600">
        {product.description}
      </p>

      <p className="mt-4 text-xl font-bold text-blue-600">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}