import { put, takeEvery } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAIL, CATEGORY_ADMIN_ACTION } from "../constants";
import requestApi from "admin/helpers/api";

function* getCategoryListSaga() {
    try {
        $$.loading(true);
        const result = yield requestApi(`/categories`, 'GET', [])
        const { data, ...meta } = result.data;
        yield put({
            type: SUCCESS(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST),
            payload: {
                data,
                meta,
            },
        });
        $$.loading(false);
    } catch (error) {
        yield put({
            type: FAIL(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST),
            payload: {
                errors: error,
            },
        });
        $$.loading(false);
    }
}

function* createCategorySaga(action) {
    try {
        $$.loading(true);
        const { data, callback } = action.payload;
        yield requestApi(`/categories`, 'POST', data)
        yield put({
            type: SUCCESS(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY),
        });
        $$.loading(false);
        $$.toast("Thêm loại sản phẩm thành công", "success")
        callback?.closeModal();
    } catch (error) {
        yield put({
            type: FAIL(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY),
            payload: {
                errors: error,
            },
        });
        $$.loading(false);
    }
}

export default function* categorySaga() {
    yield takeEvery(REQUEST(CATEGORY_ADMIN_ACTION.GET_CATEGORY_LIST), getCategoryListSaga);
    yield takeEvery(REQUEST(CATEGORY_ADMIN_ACTION.CREATE_CATEGORY), createCategorySaga);
}
