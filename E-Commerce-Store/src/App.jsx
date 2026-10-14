import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Footer from "./Components/Footer";



export default function App() {

const [products, setProducts] = useState([]);
const [error, setError] = useState("");
const [loading, setLoading] = useState(true);
const [search,setSearch] = useState("");
const [cart, setCart] = useState([]);
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

          <Route path="/about" element={
            <Aboutus
             
          />} />

          <Route path="/products" element={
            <Products 
            products={products}
                error={error}
                loading={loading}
                search={search}
            
            
            />} />

          <Route
            path="/products/:id"
            element={
              <ProductDetails
                products={products}
                loading={loading}
                cart={cart}
                setCart={setCart}

              />
            }
          />
         <Route
  path="/cart"
  element={<Cart cart={cart} setCart={setCart} />}
/>

          <Route path="/checkout" element={<Checkout />} />
        
        </Routes>
      </main>

      <Footer/>
    
</div>
  )};
