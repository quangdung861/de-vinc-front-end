import { createAction } from "@reduxjs/toolkit";

import { REQUEST, PRODUCT_CLIENT_ACTION } from "../constants";

export const getProductListAction = createAction(
  REQUEST(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST)
);
export const createProductAction = createAction(
  REQUEST(PRODUCT_CLIENT_ACTION.CREATE_PRODUCT)
)

export const getProductDetailAction = createAction(
  REQUEST(PRODUCT_CLIENT_ACTION.GET_PRODUCT_DETAIL)
)

export const updateProductDetailAction = createAction(
  REQUEST(PRODUCT_CLIENT_ACTION.UPDATE_PRODUCT_DETAIL)
)

export const clearProductListAction = createAction(
  REQUEST(PRODUCT_CLIENT_ACTION.CLEAR_PRODUCT_LIST)
);

export const getSearchListAction = createAction(
  REQUEST(PRODUCT_CLIENT_ACTION.GET_SEARCH_LIST)
);