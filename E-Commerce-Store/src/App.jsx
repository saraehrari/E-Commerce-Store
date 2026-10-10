import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Categories from "./Pages/Categories";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

export default function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="main-content">
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<Aboutus />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />

          {/* Product Details */}
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />
          
          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </main>

    </div>
  );
}