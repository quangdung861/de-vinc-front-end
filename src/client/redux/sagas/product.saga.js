import { debounce, put, takeEvery } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAIL, PRODUCT_CLIENT_ACTION } from "../constants";
import requestApi from "client/helpers/api";

function* getSearchListSaga(action) {
    try {
        $$.loading(true);
        const { params: {
            search = '',
            items_per_page = 5,
            page = 1,
        } } = action.payload;
        let query = `?search=${search}&page=${page}&items_per_page=${items_per_page}`
        const result = yield requestApi(`/products/search/${query}`, 'GET', [])
        const { data, ...meta } = result.data;
        console.log("🚀 ~ function*getSearchListSaga ~ data:", data)
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

function* getProductListSaga(action) {
    try {
        $$.loading(true);
        const { params: {
            itemsPerPage = 10,
            currentPage = 1,
            searchKeyword = '',
            categoryId = '',
            order = '',
            sortValue = '' 
        } } = action.payload;
        let query = `?items_per_page=${itemsPerPage}&page=${currentPage}&search=${searchKeyword}&categoryId=${categoryId}&order=${order}&sortValue=${sortValue}`
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
    yield takeEvery(REQUEST(PRODUCT_CLIENT_ACTION.GET_PRODUCT_DETAIL), getProductDetailSaga);
    yield debounce(
        300,
        REQUEST(PRODUCT_CLIENT_ACTION.GET_SEARCH_LIST),
        getSearchListSaga
    );
}
