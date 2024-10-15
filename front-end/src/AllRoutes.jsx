import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/Home";
import ProductPage from "./components/product-page/ProductPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};

export default AllRoutes;
