import { createAction } from "@reduxjs/toolkit";

import { REQUEST, CATEGORY_ADMIN_ACTION } from "../constants";

export const getCategoryListAction = createAction(
  REQUEST(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST)
);
export const createCategoryAction = createAction(
  REQUEST(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY)
)
