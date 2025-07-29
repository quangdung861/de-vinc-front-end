import { debounce, put, takeEvery } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAIL, PRODUCT_CLIENT_ACTION } from "../constants";
import requestApi, { buildQuery } from "client/helpers/api";
import { ITEM_PER_PAGE, PAGE } from "client/constants/api";

function* getSearchListSaga(action) {
    try {
        $$.loading(true);
        const { params } = action.payload;
        const queryParams = {
            items_per_page: params.items_per_page || ITEM_PER_PAGE,
            page: params.page || PAGE,
            q: params.q,
        };

        let query = buildQuery(queryParams);

        const result = yield requestApi(`/products/search/${query}`, 'GET', [])
        const { data, ...meta } = result.data;
        yield put({
            type: SUCCESS(PRODUCT_CLIENT_ACTION.GET_SEARCH_LIST),
            payload: {
                data: result.data.data,
                meta,
            },
        });
        $$.loading(false);
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_CLIENT_ACTION.GET_SEARCH_LIST),
            payload: {
                errors: error,
            },
        });
        $$.loading(false);
    }
}

function* getProductListByCategorySaga(action) {

    try {
        $$.loading(true);
        const { params } = action.payload;
        const queryParams = {
            items_per_page: params.items_per_page || ITEM_PER_PAGE,
            page: params.page || PAGE,
            q: params.q,
            categoryId: params.categoryId,
            order: params.order,
            sortValue: params.sortValue,
            bestSelling: params.bestSelling,
        };

        let query = buildQuery(queryParams);

        const result = yield requestApi(`/products/${query}`, 'GET', [])
        const { data, ...meta } = result.data;
        yield put({
            type: SUCCESS(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST_BY_CATEGORY),
            payload: {
                data: result.data.data,
                meta,
            },
        });
        $$.loading(false);
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST_BY_CATEGORY),
            payload: {
                errors: error,
            },
        });
        $$.loading(false);
    }
}

function* getProductListSaga(action) {

    try {
        $$.loading(true);
        const { params } = action.payload;
        const queryParams = {
            items_per_page: params.items_per_page || ITEM_PER_PAGE,
            page: params.page || PAGE,
            q: params.q,
            categoryId: params.categoryId,
            order: params.order,
            sortValue: params.sortValue,
            bestSelling: params.bestSelling,
        };

        let query = buildQuery(queryParams);

        const result = yield requestApi(`/products/${query}`, 'GET', [])
        const { data, ...meta } = result.data;
        yield put({
            type: SUCCESS(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST),
            payload: {
                data: result.data.data,
                meta,
            },
        });
        $$.loading(false);
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST),
            payload: {
                errors: error,
            },
        });
        $$.loading(false);
    }
}

function* getProductDetailSaga(action) {
    try {
        $$.loading(true);
        const { data, ...meta } = action.payload;
        const result = yield requestApi(`/products/${data.id}`, 'GET')
        yield put({
            type: SUCCESS(PRODUCT_CLIENT_ACTION.GET_PRODUCT_DETAIL),
            payload: {
                data: result.data,
                meta,
            },
        });
        $$.loading(false);
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_CLIENT_ACTION.GET_PRODUCT_DETAIL),
            payload: {
                errors: error,
            },
        });
        $$.loading(false);
    }
}

export default function* productSaga() {
    yield takeEvery(REQUEST(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST), getProductListSaga);
    yield takeEvery(REQUEST(PRODUCT_CLIENT_ACTION.GET_PRODUCT_LIST_BY_CATEGORY), getProductListByCategorySaga);
    yield takeEvery(REQUEST(PRODUCT_CLIENT_ACTION.GET_PRODUCT_DETAIL), getProductDetailSaga);
    yield debounce(
        300,
        REQUEST(PRODUCT_CLIENT_ACTION.GET_SEARCH_LIST),
        getSearchListSaga
    );
}
