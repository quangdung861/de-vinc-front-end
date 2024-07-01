import { createAction } from "@reduxjs/toolkit";

import { REQUEST, CATEGORY_CLIENT_ACTION } from "../constants";

export const getCategoryListAction = createAction(
  REQUEST(CATEGORY_CLIENT_ACTION.GET_CATEGORY_LIST)
);
export const createCategoryAction = createAction(
  REQUEST(CATEGORY_CLIENT_ACTION.CREATE_CATEGORY)
)
