import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/Home";
import ProductPage from "./components/product-page/ProductPage";
import CartPage from "./components/cart-page/CartPage";
import OrderConfirmation from "./components/order-confirmation/OrderConfirmation";

const ProtectedRoute = ({children})=> {
  const isAuthenticated = localStorage.getItem("authUser")
  // return {isAuthenticated?children:navigate("/login")}
  return children

}

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:_id" element={<ProductPage />} />
      <Route path="/cart-page" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
    </Routes>
  );
};

export default AllRoutes;
