import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ComoFunciona from "../pages/ComoFunciona";
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import "./Routes.scss";
import Footer from "../components/Footer";

function AppRoutes() {
  const location = useLocation();
  const isDashboardRoute = useMemo(
    () => location.pathname.startsWith("/dashboard"),
    [location.pathname]
  );
  return (
    <div className="container-routes">
      {!isDashboardRoute && <Header />}
      <div className="routes">
        <div className="container-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcionamento" element={<ComoFunciona />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
      {!isDashboardRoute && <Footer />}
    </div>
  );
}

export default AppRoutes;
