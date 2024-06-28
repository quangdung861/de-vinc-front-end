import { createReducer } from "@reduxjs/toolkit";
import { FAIL, REQUEST, SUCCESS, CATEGORY_ADMIN_ACTION } from "../constants";

const initialState = {
    categoryList: {
        data: [],
        meta: {},
        loading: false,
        errors: null,
    },
};

const categoryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(REQUEST(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST), (state) => {
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    loading: true,
                },
            };
        })
        .addCase(SUCCESS(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST), (state, action) => {
            const { data, meta } = action.payload;
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    data,
                    meta,
                    loading: false,
                },
            };
        })
        .addCase(FAIL(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST), (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                categoryList: {
                    ...state.postList,
                    error,
                    loading: false,
                },
            };
        })
        // CREATE 
        .addCase(REQUEST(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY), (state) => {
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    loading: true,
                },
            };
        })
        .addCase(SUCCESS(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY), (state, action) => {
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    loading: false,
                },
            };
        })
        .addCase(FAIL(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY), (state, action) => {
            const { error } = action.payload;
            return {
                ...state,
                categoryList: {
                    ...state.postList,
                    error,
                    loading: false,
                },
            };
        });
})

export default categoryReducer;
