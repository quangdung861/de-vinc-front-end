import { createReducer } from "@reduxjs/toolkit";
import { FAIL, REQUEST, SUCCESS, PRODUCT_ADMIN_ACTION } from "../constants";

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
};

const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST), (state) => {
            return {
                ...state,
                productList: {
                    ...state.productList,
                    loading: true,
                },
            };
        })
        .addCase(SUCCESS(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST), (state, action) => {
            const { data, meta } = action.payload;
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data,
                    meta,
                    loading: false,
                },
            };
        })
        .addCase(FAIL(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST), (state, action) => {
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
        // CREATE 
        .addCase(REQUEST(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT), (state) => {

        })
        .addCase(SUCCESS(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT), (state, action) => {

        })
        .addCase(FAIL(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT), (state, action) => {
        })
        // DETAIL
        .addCase(REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL), (state) => {
            return {
                ...state,
                productDetail: {
                    ...state.productDetail,
                    loading: true,
                },
            };
        })
        .addCase(SUCCESS(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL), (state, action) => {
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
        .addCase(FAIL(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL), (state, action) => {
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
})

export default productReducer;
