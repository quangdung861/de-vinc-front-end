import { put, takeEvery } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAIL, PRODUCT_ADMIN_ACTION } from "../constants";
import requestApi from "admin/helpers/api";

function* getProductListSaga(action) {
    try {
         $$.startLoading();
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
        $$.stopLoading();
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST),
            payload: {
                errors: error,
            },
        });
        $$.stopLoading();
    }
}

function* getProductDetailSaga(action) {
    try {
         $$.startLoading();
        const { data, ...meta } = action.payload;
        const result = yield requestApi(`/products/${data.id}`, 'GET')
        yield put({
            type: SUCCESS(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL),
            payload: {
                data: result.data,
                meta,
            },
        });
        $$.stopLoading();
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL),
            payload: {
                errors: error,
            },
        });
        $$.stopLoading();
    }
}

function* createProductSaga(action) {
    try {
         $$.startLoading();
        const { data, callback } = action.payload;
        yield requestApi(`/products`, 'POST', data)
        yield put({
            type: SUCCESS(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT),
        });
        $$.stopLoading();
        $$.toast('Tạo sản phẩm mới thành công', 'success');
        callback.redirect();
    } catch (error) {
        yield put({
            type: FAIL(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT),
            payload: {
                errors: error,
            },
        });
        $$.stopLoading();
    }
}

function* updateProductDetailSaga(action) {
    try {
         $$.startLoading();
        const { id, data, callback } = action.payload;
        yield requestApi(`/products/${id}`, 'PUT', data)
        $$.stopLoading();
        $$.toast('Cập nhập sản phẩm thành công', 'success');
        callback.redirect();
    } catch (error) {
        $$.stopLoading();
        $$.toast('Cập nhập sản phẩm không thành công', 'danger');
        throw error;
    }
}

function* deleteProductSaga(action) {
    try {
         $$.startLoading();
        const { id, callback } = action.payload;
        
        yield requestApi(`/products/${id}`, 'DELETE')
        $$.stopLoading();
        $$.toast('Xoá sản phẩm thành công', 'success');
        callback.redirect();
    } catch (error) {
        $$.stopLoading();
        $$.toast('Xoá sản phẩm không thành công', 'danger');
        throw error;
    }
}

export default function* productSaga() {
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_LIST), getProductListSaga);
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.CREATE_PRODUCT), createProductSaga);
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.GET_PRODUCT_DETAIL), getProductDetailSaga);
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.UPDATE_PRODUCT_DETAIL), updateProductDetailSaga);
    yield takeEvery(REQUEST(PRODUCT_ADMIN_ACTION.DELETE_PRODUCT_DETAIL), deleteProductSaga);
}
