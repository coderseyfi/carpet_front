import Navbar from "../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import "./mainlayout.scss";
import Footer from "../components/Footer";
import { useEffect } from "react";
export default function MainLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Anchor link (məs. /plan-your-visit#locations): səhifə render olunduqdan sonra bölməyə keç
      const timer = setTimeout(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

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
