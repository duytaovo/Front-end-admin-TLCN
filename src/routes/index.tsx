import { lazy } from "react";
import path from "src/constants/path";

const Home = lazy(() => import("src/pages/Home/Home"));
const Orders = lazy(() => import("src/pages/Order"));
const NotFound = lazy(() => import("src/pages/NotFound/NotFound"));
const ListUser = lazy(() => import("src/pages/ListUser/ListUser"));
const AddUser = lazy(() => import("src/pages/ListUser/NewUser"));
const Products = lazy(() => import("src/pages/Product"));
const NewProduct = lazy(() => import("src/pages/Product/NewProduct"));

export const routeMain = [
  {
    path: path.home,
    Component: Home,
  },
  {
    path: path.orders,
    Component: Orders,
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
    Component: Products,
  },
  {
    path: path.productNew,
    Component: NewProduct,
  },
  {
    path: "*",
    Component: NotFound,
  },
];
