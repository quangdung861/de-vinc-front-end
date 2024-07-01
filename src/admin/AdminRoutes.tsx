import { ROUTER_ADMIN } from "./routes";
import ProductListPage from "./pages/ProductListPage";
import DashboardPage from "./pages/DashboardPage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import PurchaseOrderPage from "./pages/PurchaseOrderPage";

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
