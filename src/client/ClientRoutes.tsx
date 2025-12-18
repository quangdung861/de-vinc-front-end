import React from "react";
import { ROUTER_CLIENT } from "./routes";
import HomePage from "./pages/HomePage";
const ProductListPage = React.lazy(() => import("./pages/ProductListPage"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetailPage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const PolicyPage = React.lazy(() => import("./pages/PolicyPage"));

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
  {
    path: ROUTER_CLIENT.POLICY_PAGE,
    element: <PolicyPage />,
  },
];
