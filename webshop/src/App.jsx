import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProductsContextProvider from "./context/ProductsContextProvider";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";

function App() {
  const location = useLocation();

  return (
    <ProductsContextProvider>
       <Navbar />
        <Routes>
          <Route path="/products" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        {location.pathname === "/" && (
          <Navigate to="/products" replace={true} />
        )}
      </ProductsContextProvider>
  );
}

export default App
