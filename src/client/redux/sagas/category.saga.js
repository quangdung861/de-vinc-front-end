import { put, takeEvery } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAIL, CATEGORY_CLIENT_ACTION } from "../constants";
import requestApi from "client/helpers/api";

function* getCategoryListSaga() {
    try {
         $$.startLoading();
        const result = yield requestApi(`/categories`, 'GET', [])
        const { data, ...meta } = result.data;
        yield put({
            type: SUCCESS(CATEGORY_CLIENT_ACTION.GET_CATEGORY_LIST),
            payload: {
                data,
                meta,
            },
        });
        $$.stopLoading();
    } catch (error) {
        yield put({
            type: FAIL(CATEGORY_CLIENT_ACTION.GET_CATEGORY_LIST),
            payload: {
                errors: error,
            },
        });
        $$.stopLoading();
    }
}


export default function* categorySaga() {
    yield takeEvery(REQUEST(CATEGORY_CLIENT_ACTION.GET_CATEGORY_LIST), getCategoryListSaga);
}
