import React from "react";
import { ROUTER_ADMIN } from "./routes";
const DashboardPage = React.lazy(() =>
  import("./pages/DashboardPage")
);
const ProductListPage = React.lazy(() =>
  import("./pages/ProductListPage")
);
const CreateProductPage = React.lazy(() =>
  import("./pages/CreateProductPage")
);
const UpdateProductPage = React.lazy(() =>
  import("./pages/UpdateProductPage")
);
const PurchaseOrderPage = React.lazy(() =>
  import("./pages/PurchaseOrderPage")
);

export const AdminLayoutRoutes = [
  {
    path: ROUTER_ADMIN.DASHBOARD,
    element: <DashboardPage />,
  },
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
  {
    path: ROUTER_ADMIN.PURCHASE_ORDERS,
    element: <PurchaseOrderPage />,
  },
];
