
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
export default function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                error={error}
                loading={loading}
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
    </div>
  );
}
