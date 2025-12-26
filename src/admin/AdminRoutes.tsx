import React from "react";
import { ROUTER_ADMIN } from "./routes";

const ProductListPage = React.lazy(() => import("./pages/ProductListPage"));
const CreateProductPage = React.lazy(() => import("./pages/CreateProductPage"));
const UpdateProductPage = React.lazy(() => import("./pages/UpdateProductPage"));

export const AdminLayoutRoutes = [
  {
    path: ROUTER_ADMIN.PRODUCT_LIST,
    element: <ProductListPage />,
  },
  {
    path: ROUTER_ADMIN.CREATE_PRODUCT,
    element: <CreateProductPage />,
  },
  {
    path: ROUTER_ADMIN.UPDATE_PRODUCT,
    element: <UpdateProductPage />,
  },
];
