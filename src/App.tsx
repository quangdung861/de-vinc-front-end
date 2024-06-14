import React from "react";
import "./App.scss";
import "_variables.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import ClientLayout from "./client/layouts/ClientLayout";
import HomePage from "./client/pages/HomePage";
import AdminLayout from "admin/layouts/AdminLayout";
import DashboardPage from "admin/pages/DashboardPage";
import PurchaseOrderPage from "admin/pages/PurchaseOrderPage";
import ProductListPage from "admin/pages/ProductListPage";
import CreateProductPage from "admin/pages/CreateProductPage";

function App() {
  return (
    <BrowserRouter>
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
           <Route path={ROUTES.ADMIN.CREATE_PRODUCT} element={<CreateProductPage />} />
          {/* <Route path={ROUTES.ADMIN.UPDATE_PRODUCT} element={<HomePage />} />  */}
          <Route
            path={ROUTES.ADMIN.PURCHASE_ORDERS}
            element={<PurchaseOrderPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
