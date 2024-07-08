import { ROUTER_CLIENT } from "./routes";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetail from "./pages/ProductDetailPage";
import SearchPage from "./pages/SearchPage";

export const ClientLayoutChildren = [
  {
    path: ROUTER_CLIENT.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTER_CLIENT.PRODUCT_LIST,
    element: <ProductListPage />,
  },
  {
    path: ROUTER_CLIENT.PRODUCT_DETAIL,
    element: <ProductDetail />,
  },
  {
    path: ROUTER_CLIENT.SEARCH_PAGE,
    element: <SearchPage />,
  },
];
