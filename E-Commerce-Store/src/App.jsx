import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Categories from './Pages/Categories'
import Cards from "./Components/Cards";



export default function App() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
   const [search,setSearch] = useState("");
  
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="app">
      <Navbar
      search={search}
      setSearch={setSearch}
      
      />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                error={error}
                loading={loading}
                search={search}
              />
            }
          />

          <Route path="/about" element={<Aboutus />} />

          <Route path="/products" element={<Products />} />

          <Route
            path="/products/:id"
            element={
              <ProductDetails
                products={products}
                loading={loading}
              />
            }
          />


          <Route path="/categories" element={<Categories/>}/>
          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />
        
        </Routes>
      </main>


      
<section className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="mb-14 text-center">
      <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-600">
        The ShopHub Advantage
      </span>

      <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Why Choose Us?
      </h2>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
        We bring together quality, convenience, and care
        to make every shopping experience better.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <Cards
        icon="🚚"
        title="Fast Delivery"
        para="Your favorite finds, delivered right to your door."
        color="bg-blue-100"
      />

      <Cards
        icon="🔒"
        title="Secure Shopping"
        para="Shop confidently with a safe, reliable experience."
        color="bg-emerald-100"
      />

      <Cards
        icon="💎"
        title="Quality Products"
        para="Discover carefully selected products for everyday life."
        color="bg-amber-100"
      />

      <Cards
        icon="💬"
        title="Friendly Support"
        para="We're here to help whenever you need us."
        color="bg-purple-100"
      />

    </div>
  </div>
</section>

      
    </div>
  );
}
