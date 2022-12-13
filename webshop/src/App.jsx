import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProductsContextProvider from "./context/ProductsContextProvider";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <ProductsContextProvider>
       <Navbar />
        <Routes>
          <Route path="/products" element={<Home />} />
        </Routes>
        {location.pathname === "/" && (
          <Navigate to="/products" replace={true} />
        )}
      </ProductsContextProvider>
  );
}

export default App
