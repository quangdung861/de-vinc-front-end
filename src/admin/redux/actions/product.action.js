import { createAction } from "@reduxjs/toolkit";

import { REQUEST, PRODUCT_ADMIN_ACTION } from "../constants";

export const getProductListAction = createAction(
  REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST)
);
export const createProductAction = createAction(
  REQUEST(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT)
)

export const getProductDetailAction = createAction(
  REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL)
)

export const updateProductDetailAction = createAction(
  REQUEST(PRODUCT_ADMIN_ACTION.UPDATE_PRODUCT_DETAIL)
)

export const deleteProductAction = createAction(
  REQUEST(PRODUCT_ADMIN_ACTION.DELETE_PRODUCT_DETAIL)
)