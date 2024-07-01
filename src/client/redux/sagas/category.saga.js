import { put, takeEvery } from "redux-saga/effects";

import { REQUEST, SUCCESS, FAIL, CATEGORY_CLIENT_ACTION } from "../constants";
import requestApi from "client/helpers/api";

function* getCategoryListSaga() {
    try {
        $$.loading(true);
        const result = yield requestApi(`/categories`, 'GET', [])
        const { data, ...meta } = result.data;
        yield put({
            type: SUCCESS(CATEGORY_CLIENT_ACTION.GET_CATEGORY_LIST),
            payload: {
                data,
                meta,
            },
        });
        $$.loading(false);
    } catch (error) {
        yield put({
            type: FAIL(CATEGORY_CLIENT_ACTION.GET_CATEGORY_LIST),
            payload: {
                errors: error,
            },
        });
        $$.loading(false);
    }
}


export default function* categorySaga() {
    yield takeEvery(REQUEST(CATEGORY_CLIENT_ACTION.GET_CATEGORY_LIST), getCategoryListSaga);
}
