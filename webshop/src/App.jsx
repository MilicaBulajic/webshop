import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ProductsContextProvider } from './context/ProductsContextProvider'
import { CartContextProvider } from "./context/CartContextProvider";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";

function App() {
  const location = useLocation();

  return (
    <ProductsContextProvider>
      <CartContextProvider>
       <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:category_id" element={<Home />} />
          <Route path="/product/:product_id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
  );
}

export default App
