import { combineReducers } from 'redux';
import adminReducer from 'admin/redux/reducers';
import clientReducer from 'client/redux/reducers';

const rootReducer = combineReducers({
    admin: adminReducer,
    client: clientReducer
});

export default rootReducer;
