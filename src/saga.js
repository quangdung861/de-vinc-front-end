import { all, fork } from "redux-saga/effects";

import { default as adminSagaList } from "admin/redux/sagas";
import { default as clientSagaList } from "client/redux/sagas";

export default function* rootSaga() {
    yield all(adminSagaList.map(saga => fork(saga)));
    yield all(clientSagaList.map(saga => fork(saga)));
}
