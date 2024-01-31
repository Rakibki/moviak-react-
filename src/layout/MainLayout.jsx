import { Outlet } from "react-router-dom";
import Navabe from "../shared/navber/Navabe";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navabe />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
