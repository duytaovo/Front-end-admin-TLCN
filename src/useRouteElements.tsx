import path from "src/constants/path";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routeMain } from "./routes";
import CommonLayout from "./layouts/CommonLayout";
import Login from "./pages/Login";
import AuthenticatedGuard from "./guards/AuthenticatedGuard";
import UnAuthenticatedGuard from "./guards/UnAuthenticatedGuard";
import ListUser from "./pages/ListUser/ListUser";
import AddUser from "./pages/ListUser/NewUser";
import ListProduct from "./pages/Product/ListProduct";

export default function useRouteElements() {
  const renderRouter = useMemo(() => {
    return routeMain.map(({ path, Component }, index) => {
      return (
        <Route
          key={index}
          path={path}
          element={
            <Suspense>
              <Component />
            </Suspense>
          }
        />
      );
    });
  }, [path]);

  const routeElements = (
    <Routes>
      <Route
        path=""
        element={
          // <UnAuthenticatedGuard>
          <CommonLayout />
          // </UnAuthenticatedGuard>
        }
      >
        {renderRouter}
        <Route path="users">
          <Route index element={<ListUser />} />
          {/* <Route path=":userId" element={<User />} /> */}
          <Route path="new" element={<AddUser />} />
        </Route>
        <Route path="products">
          <Route index element={<ListProduct />} />
          {/* <Route
              path=":productId"
              element={
                <EditProduct inputs={typeProduct} title="Add New Product" />
              }
            />
            <Route
              path="new"
              element={
                <NewPhone inputs={typeProduct} title="Add New Product" />
              }
            /> */}
        </Route>
      </Route>

      <Route
        path="/login"
        element={
          // <AuthenticatedGuard>
          <Login />
          // </AuthenticatedGuard>
        }
      />
    </Routes>
  );

  return <>{routeElements}</>;
}
