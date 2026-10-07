import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero image.png";

export default function Home() {
const navigate= useNavigate()




  return (
    <section className="relative h-[500px] overflow-hidden rounded-2xl bg-gray-100">
      
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Discover products"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
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

          <button onClick={(()=> navigate("./Products"))} className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg">
            Shop Now
          </button>

        </div>
      </div>
    </section>
  );
}