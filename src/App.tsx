import React, { Suspense, useEffect } from "react";
import "./App.scss";
import "_variables.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import ClientLayout from "./client/layouts/ClientLayout";
import AuthProvider from "contexts/AuthProvider";
import { ClientLayoutChildren } from "client/ClientRoutes";
import { AdminLayoutRoutes } from "admin/AdminRoutes";
import NotFoundPage from "client/pages/NotFoundPaage";
import { ROUTES } from "routes";
const AdminLayout = React.lazy(() => import("admin/layouts/AdminLayout"));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <AuthProvider>
      <Suspense fallback={<div />}>
        <Routes>
          {/* CLIENT */}
          <Route element={<ClientLayout />}>
            {ClientLayoutChildren.map((item, index) => (
              <Route path={item.path} element={item.element} key={index} />
            ))}
          </Route>
          {/* ADMIN */}
          <Route element={<AdminLayout />}>
            {AdminLayoutRoutes.map((item, index) => (
              <Route path={item.path} element={item.element} key={index} />
            ))}
          </Route>
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
