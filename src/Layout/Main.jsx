import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
const Main = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname.includes("/login");
  return (
    <div>
      {hideNavbarFooter || <Navbar />}
      <Outlet />
      {hideNavbarFooter || <Footer />}
    </div>
  );
};

export default Main;
