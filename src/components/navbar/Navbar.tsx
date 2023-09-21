import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import { DarkModeContext } from "src/contexts/darkModeContext";
import { IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { changeLanguage } from "i18next";
import { MenuProps } from "antd";
import CustomDropDown from "../Dropdown/Dropdown";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { locales } from "src/i18n/i18n";
import Search from "../Search";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <button
        className=" px-2 text-left text-xl hover:text-mainColor"
        onClick={() => changeLanguage("vi")}
      >
        VN
      </button>
    ),
  },
  {
    key: "2",
    label: (
      <button
        className="px-2 text-left text-xl hover:text-mainColor "
        onClick={() => changeLanguage("en")}
      >
        ENG
      </button>
    ),
  },
];
const customDropdownStyle = {
  arrow: false,
  isOnClick: false,
  className: "px-1 mx-3 text-xl xl:p-0 xl:mr-0 hover:text-mainColor",
};
const menuStyle = {
  padding: "20px 20px",
  borderRadius: "16px",
};
const Navbar = () => {
  const { t } = useTranslation("home");
  const { i18n } = useTranslation();
  const currentLanguage = locales[i18n.language as keyof typeof locales];
  const { setEnable, enable } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <Search onChange={() => {}} placeholder="Tìm kiếm" width="300px" />
        </div>
        <div className="items">
          <div className="">
            <CustomDropDown
              {...customDropdownStyle}
              menuStyle={menuStyle}
              items={items}
              // arrow
              // menu={{
              //   items
              // }}
              // placement='bottom'
            >
              <div className=" hover:text-mainColor">
                <LanguageIcon />
                <span className="mx-1 text-mainColor text-xl">
                  {currentLanguage}
                </span>
              </div>
            </CustomDropDown>
          </div>
          <div className="item">
            {enable === "true" ? (
              <IconButton>
                <DarkModeOutlinedIcon
                  className="icon text-white/70"
                  onClick={() => {
                    setEnable("false");
                    localStorage.setItem("enable", "false");
                  }}
                />
              </IconButton>
            ) : (
              <IconButton>
                <LightModeOutlinedIcon
                  className="icon"
                  onClick={() => {
                    setEnable("true");
                    localStorage.setItem("enable", "true");
                  }}
                />
              </IconButton>
            )}
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
