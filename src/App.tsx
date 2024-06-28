import React, { useEffect } from "react";
import "./App.scss";
import "_variables.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import ClientLayout from "./client/layouts/ClientLayout";
import HomePage from "./client/pages/HomePage";
import AdminLayout from "admin/layouts/AdminLayout";
import DashboardPage from "admin/pages/DashboardPage";
import PurchaseOrderPage from "admin/pages/PurchaseOrderPage";
import ProductListPage from "admin/pages/ProductListPage";
import CreateProductPage from "admin/pages/CreateProductPage";
import AuthProvider from "contexts/AuthProvider";
import UpdateProductPage from "admin/pages/UpdateProductPage";

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
          <Route path={ROUTES.CLIENT.HOME} element={<HomePage />} />
        </Route>
        {/* ADMIN */}
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN.DASHBOARD} element={<DashboardPage />} />
          <Route
            path={ROUTES.ADMIN.PRODUCT_LIST}
            element={<ProductListPage />}
          />
          <Route
            path={ROUTES.ADMIN.CREATE_PRODUCT}
            element={<CreateProductPage />}
          />
          <Route path={ROUTES.ADMIN.UPDATE_PRODUCT} element={<UpdateProductPage />} /> 
          <Route
            path={ROUTES.ADMIN.PURCHASE_ORDERS}
            element={<PurchaseOrderPage />}
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
