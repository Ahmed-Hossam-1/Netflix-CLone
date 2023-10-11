import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Layout;
