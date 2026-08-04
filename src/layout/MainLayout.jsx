import Navbar from "../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import "./mainlayout.scss";
import Footer from "../components/Footer";
import { useEffect } from "react";
export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="main">
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
