import React, { useEffect } from "react";
import "./App.scss";
import "_variables.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import ClientLayout from "./client/layouts/ClientLayout";
import AdminLayout from "admin/layouts/AdminLayout";
import AuthProvider from "contexts/AuthProvider";
import { ClientLayoutChildren } from "client/ClientRoutes";
import { AdminLayoutRoutes } from "admin/AdminRoutes";

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
      </Routes>
    </AuthProvider>
  );
}

export default App;
