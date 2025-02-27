import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import {thunk} from "redux-thunk"
import {logger} from "redux-logger"

import clientReducer from "./reducers/clientReducer.js";
import productReducer from './reducers/productReducer.js';
import shoppingCartReducer from './reducers/shoppingCartReducer.js';
import { categoryReducer } from './reducers/categoryReducer.js';

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    category: categoryReducer
  })

const store = createStore(rootReducer,
  applyMiddleware (thunk, logger)
);

export default store;