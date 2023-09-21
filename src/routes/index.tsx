import { lazy } from "react";
import path from "src/constants/path";

const Home = lazy(() => import("src/pages/Home/Home"));
const Order = lazy(() => import("src/pages/Order/Order"));
const NotFound = lazy(() => import("src/pages/NotFound/NotFound"));

export const routeMain = [
  {
    path: path.home,
    Component: Home,
  },
  {
    path: path.orders,
    Component: Order,
  },
  {
    path: "*",
    Component: NotFound,
  },
];
