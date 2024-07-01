import { combineReducers } from 'redux';
import productReducer from 'client/redux/reducers/product.reducer';
import categoryReducer from 'client/redux/reducers/category.reducer';

const clientReducer = combineReducers({
    productReducer,
    categoryReducer,
});

const rootReducer = combineReducers({
    client: clientReducer,
});

export default clientReducer;
