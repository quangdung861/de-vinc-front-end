import { fork } from "redux-saga/effects";

// import { default as adminSagaList } from "admin/sagas";
import productSaga from "admin/redux/sagas/product.saga";

export default function* rootSaga() {
    // for (const sagaItem of adminSagaList) {
    //     yield fork(sagaItem);
    // }
    yield fork(productSaga);

}
