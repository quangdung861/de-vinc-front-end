import { combineReducers } from 'redux';
import productReducer from 'admin/redux/reducers/product.reducer';
import categoryReducer from 'admin/redux/reducers/category.reducer';

const adminReducer = combineReducers({
    productReducer,
    categoryReducer,
});

const rootReducer = combineReducers({
    admin: adminReducer,
});

export default adminReducer;
