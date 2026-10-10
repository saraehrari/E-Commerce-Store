import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  image,
  title,
  price,
  rating,
}) {
  return (
    <div className="w-72 overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-contain p-4"
      />

      <div className="p-5">
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p className="mt-3 text-xl font-bold text-blue-600">
          ${price}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          ⭐ {rating}
        </p>

        <Link
          to={`/products/${id}`}
          className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}