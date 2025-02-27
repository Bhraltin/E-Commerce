import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { clientReducer } from './clientReducer';

export const rootReducer = combineReducers({
    category: categoryReducer,
    client: clientReducer,
});
