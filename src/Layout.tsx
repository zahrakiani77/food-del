import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div id="main" className="flex justify-center items-start ">
          <Outlet />
      </div>
    </>
  );
}

export default Layout