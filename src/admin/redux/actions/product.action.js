import { createAction } from "@reduxjs/toolkit";

import { REQUEST, PRODUCT_ADMIN_ACTION } from "../constants";

export const getProductListAction = createAction(
  REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST)
);
export const createProductAction = createAction(
  REQUEST(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT)
)
