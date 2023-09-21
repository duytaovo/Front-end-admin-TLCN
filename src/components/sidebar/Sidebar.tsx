import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { DarkModeContext } from "src/contexts/darkModeContext";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { enable, setEnable } = useContext(DarkModeContext);
  const { t } = useTranslation("home");
  const { i18n } = useTranslation();
  const logout = () => {
    if (confirm("Bạn có muốn thoát không?")) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">TECH-ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>{t("sidebar.dashboard")}</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>{t("sidebar.users")}</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>{t("sidebar.products")}</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>{t("sidebar.orders")}</span>
            </li>
          </Link>
          <Link to="/delivery" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>{t("sidebar.delivery")}</span>
            </li>
          </Link>
          <Link to="/reviews" style={{ textDecoration: "none" }}>
            <li>
              <ThumbUpIcon className="icon" />
              <span>{t("sidebar.Review")}</span>
            </li>
          </Link>
          <Link to="/comments" style={{ textDecoration: "none" }}>
            <li>
              <ChatIcon className="icon" />
              <span>{t("sidebar.Comment")}</span>
            </li>
          </Link>
          <Link to="/order" style={{ textDecoration: "none" }}></Link>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>{t("sidebar.status")}</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>{t("sidebar.notification")}</span>
          </li>
          {/* <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>{t("sidebar.profile")}</span>
          </li>
          <li onClick={logout}>
            <ExitToAppIcon className="icon" />
            <span>{t("sidebar.logout")}</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => setEnable("false")}></div>
        <div className="colorOption" onClick={() => setEnable("true")}></div>
      </div>
    </div>
  );
};

export default Sidebar;
