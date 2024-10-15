import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/Home";
import ProductPage from "./components/product-page/ProductPage";
import CartPage from "./components/cart-page/CartPage";
import OrderConfirmation from "./components/order-confirmation/OrderConfirmation";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:_id" element={<ProductPage />} />
      <Route path="/cart-page" element={<CartPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
    </Routes>
  );
};

export default AllRoutes;
