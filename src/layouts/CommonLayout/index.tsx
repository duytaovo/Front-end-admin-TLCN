import { Outlet } from "react-router-dom";
import "./layout.scss";
import Sidebar from "src/components/sidebar/Sidebar";
import Navbar from "src/components/navbar/Navbar";
function Layout() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
