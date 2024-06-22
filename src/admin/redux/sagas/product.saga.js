import { put, takeEvery } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAIL, PRODUCT_ADMIN_ACTION } from "../constants";
import requestApi from "admin/helpers/api";

function* getProductListSaga(action) {
    try {
        const { params: { itemsPerPage, currentPage, searchKeyword } } = action.payload;
        let query = `?items_per_page=${itemsPerPage}&page=${currentPage}&search=${searchKeyword}`
        const result = yield requestApi(`/products/${query}`, 'GET', [])
        const { data, ...meta } = result.data;
        yield put({
            type: SUCCESS(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST),
            payload: {
                data: result.data.data,
                meta,
            },
        });
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST),
            payload: {
                errors: error,
            },
        });
    }
}

function* createProductSaga(action) {
    try {
        const data = action.payload;
        let formData = new FormData();
        for (let key in data) {
            if (key == 'images') {
                data.images.forEach((file) => {
                    formData.append('images', file);
                });
            } else {
                formData.append(key, data[key])
            }
        }
        yield requestApi(`/products`, 'POST', formData, 'json', 'multipart/form-data')
        yield put({
            type: SUCCESS(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT),
        });
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT),
            payload: {
                errors: error,
            },
        });
    }
}

export default function* productSaga() {
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST), getProductListSaga);
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT), createProductSaga);
}
