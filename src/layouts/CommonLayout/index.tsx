import { Outlet } from "react-router-dom";
import Sidebar from "src/components/sidebar/Sidebar";
import Navbar from "src/components/navbar/Navbar";
function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[6] h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
