import { Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "src/components/navbar/Navbar";
import Sidebar from "src/components/sidebar/Sidebar";
import { Grid } from "@mui/material";
function Layout() {
  return (
    <div className="home">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <div className="homeContainer">
            <Navbar />
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
