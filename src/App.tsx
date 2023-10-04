import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Shop from "./pages/shop";
import ProductPage from "./pages/product";
import CategoryPage from "./pages/category";

function App() {
  return (
    <Router>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Shop />} path="/shop" />
          <Route element={<ProductPage />} path="/shop/:id" />
          <Route element={<CategoryPage />} path="/shop/categories/:category" />
        </Routes>
      </ShoppingCartProvider>
    </Router>
  );
}

export default App;
