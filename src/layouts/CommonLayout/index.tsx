import { Outlet } from "react-router-dom";
import Navbar from "src/components/Navbar/Navbar";
import Sidebar from "src/components/Sidebar/Sidebar";
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
