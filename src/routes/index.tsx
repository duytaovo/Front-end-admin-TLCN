import { lazy } from "react";
import path from "src/constants/path";
import NotFound from "src/pages/NotFound";

const Home = lazy(() => import("src/pages/Home/Home"));

export const routeMain = [
  {
    path: path.home,
    Component: Home,
  },
  {
    path: "*",
    Component: NotFound,
  },
];
