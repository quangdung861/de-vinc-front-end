import { ROUTER_CLIENT } from "./routes";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";

export const ClientLayoutChildren = [
  {
    path: ROUTER_CLIENT.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTER_CLIENT.PRODUCT_LIST,
    element: <ProductListPage />,
  },
];
