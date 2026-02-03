import { put, takeEvery } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAIL, CATEGORY_ADMIN_ACTION } from "../constants";
import requestApi from "admin/helpers/api";

function* getCategoryListSaga() {
    try {
         $$.startLoading();
        const result = yield requestApi(`/categories`, 'GET', [])
        const { data, ...meta } = result.data;
        yield put({
            type: SUCCESS(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST),
            payload: {
                data,
                meta,
            },
        });
        $$.stopLoading();
    } catch (error) {
        yield put({
            type: FAIL(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST),
            payload: {
                errors: error,
            },
        });
        $$.stopLoading();
    }
}

function* createCategorySaga(action) {
    try {
         $$.startLoading();
        const { data, callback } = action.payload;
        yield requestApi(`/categories`, 'POST', data)
        yield put({
            type: SUCCESS(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY),
        });
        yield put({
        type: REQUEST(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST), 
        });
        $$.stopLoading();
        $$.toast("Thêm loại sản phẩm thành công", "success")
        callback?.closeModal();
    } catch (error) {
        yield put({
            type: FAIL(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY),
            payload: {
                errors: error,
            },
        });
        $$.stopLoading();
    }
}

export default function* categorySaga() {
    yield takeEvery(REQUEST(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST), getCategoryListSaga);
    yield takeEvery(REQUEST(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY), createCategorySaga);
}
