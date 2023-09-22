import { lazy } from "react";
import path from "src/constants/path";

const Home = lazy(() => import("src/pages/Home/Home"));
const Order = lazy(() => import("src/pages/Order/Order"));
const NotFound = lazy(() => import("src/pages/NotFound/NotFound"));
const ListUser = lazy(() => import("src/pages/ListUser/ListUser"));
const AddUser = lazy(() => import("src/pages/ListUser/NewUser"));
const ListProducts = lazy(() => import("src/pages/Product/ListProduct"));

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
    path: path.users,
    Component: ListUser,
  },
  {
    path: path.usersDetail,
    Component: ListUser,
  },
  {
    path: path.usersNew,
    Component: AddUser,
  },
  {
    path: path.products,
    Component: ListProducts,
  },
  {
    path: "*",
    Component: NotFound,
  },
];
