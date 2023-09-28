import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import NavbarCustom from "src/components/Navbar/Navbar";
import Sidebar from "./component/Sidebar";

function Layout() {
  return (
    <div className="home">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <div className="homeContainer">
            <NavbarCustom />
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
