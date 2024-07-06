import { createReducer } from "@reduxjs/toolkit";
import { FAIL, REQUEST, SUCCESS, PRODUCT_CLIENT_ACTION } from "../constants";

const initialState = {
    productList: {
        data: [],
        meta: {},
        loading: false,
        errors: null,
    },
    productDetail: {
        data: {},
        meta: {},
        loading: false,
        errors: null,
    },
    searchList: {
        data: [],
        loading: false,
        error: null,
      },
};

const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(REQUEST(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST), (state) => {
            return {
                ...state,
                productList: {
                    ...state.productList,
                    loading: true,
                },
            };
        })
        .addCase(SUCCESS(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST), (state, action) => {
            const { data, meta } = action.payload;
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data: [
                        ...state.productList.data,
                        ...data
                    ],
                    meta,
                    loading: false,
                },
            };
        })
        .addCase(FAIL(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST), (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                productList: {
                    ...state.postList,
                    error,
                    loading: false,
                },
            };
        })
        //CLEAR
        .addCase(REQUEST(PRODUCT_CLIENT_ACTION.CLEAR_PRODUCT_LIST), (state) => {
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data: [],
                    loading: true,
                },
            };
        })
        // DETAIL
        .addCase(REQUEST(PRODUCT_CLIENT_ACTION.GET_PRODUCT_DETAIL), (state) => {
            return {
                ...state,
                productDetail: {
                    ...state.productDetail,
                    loading: true,
                },
            };
        })
        .addCase(SUCCESS(PRODUCT_CLIENT_ACTION.GET_PRODUCT_DETAIL), (state, action) => {
            const { data, meta } = action.payload;
            return {
                ...state,
                productDetail: {
                    ...state.productDetail,
                    data,
                    meta,
                    loading: false,
                },
            };
        })
        .addCase(FAIL(PRODUCT_CLIENT_ACTION.GET_PRODUCT_DETAIL), (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                productDetail: {
                    ...state.productDetail,
                    error,
                    loading: false,
                },
            };
        })
        // SEARCH
        .addCase(REQUEST(PRODUCT_CLIENT_ACTION.GET_SEARCH_LIST), (state, action) => {
            return {
              ...state,
              searchList: {
                ...state.searchList,
                loading: true,
              },
            };
          })
          .addCase(SUCCESS(PRODUCT_CLIENT_ACTION.GET_SEARCH_LIST), (state, action) => {
            const { data } = action.payload;
            return {
              ...state,
              searchList: {
                ...state.searchList,
                loading: false,
                data,
              },
            };
          })
          .addCase(FAIL(PRODUCT_CLIENT_ACTION.GET_SEARCH_LIST), (state, action) => {
            const { error } = action.payload;
            return {
              ...state,
              searchList: {
                ...state.searchList,
                loading: false,
                error,
              },
            };
          });
})

export default productReducer;
