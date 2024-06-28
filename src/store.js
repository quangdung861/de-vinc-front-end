import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "saga";
import productReducer from "admin/redux/reducers/product.reducer";
import categoryReducer from "admin/redux/reducers/category.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        productReducer,
        categoryReducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(rootSaga);

export default store;