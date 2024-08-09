import { put, takeEvery } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAIL, PRODUCT_ADMIN_ACTION } from "../constants";
import requestApi from "admin/helpers/api";

function* getProductListSaga(action) {
    try {
        $$.loading(true);
        const { params: { items_per_page, page, q } } = action.payload;
        let query = `?items_per_page=${items_per_page}&page=${page}&search=${q}`
        const result = yield requestApi(`/products/${query}`, 'GET', [])
        const { data, ...meta } = result.data;
        yield put({
            type: SUCCESS(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST),
            payload: {
                data: result.data.data,
                meta,
            },
        });
        $$.loading(false);
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST),
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
            type: SUCCESS(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL),
            payload: {
                data: result.data,
                meta,
            },
        });
        $$.loading(false);
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL),
            payload: {
                errors: error,
            },
        });
        $$.loading(false);
    }
}

function* createProductSaga(action) {
    try {
        $$.loading(true);
        const { data, callback } = action.payload;
        yield requestApi(`/products`, 'POST', data)
        yield put({
            type: SUCCESS(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT),
        });
        $$.loading(false);
        $$.toast('Tạo sản phẩm mới thành công', 'success');
        callback.redirect();
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT),
            payload: {
                errors: error,
            },
        });
        $$.loading(false);
    }
}

function* updateProductDetailSaga(action) {
    try {
        $$.loading(true);
        const { id, data, callback } = action.payload;
        yield requestApi(`/products/${id}`, 'PUT', data)
        $$.loading(false);
        $$.toast('Cập nhập sản phẩm thành công', 'success');
        callback.redirect();
    } catch (error) {
        $$.loading(false);
        $$.toast('Cập nhập sản phẩm không thành công', 'danger');
        throw new error;
    }
}

export default function* productSaga() {
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST), getProductListSaga);
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT), createProductSaga);
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL), getProductDetailSaga);
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.UPDATE_PRODUCT_DETAIL), updateProductDetailSaga);
}
