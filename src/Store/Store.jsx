import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import {thunk} from "redux-thunk"
import {logger} from "redux-logger"
import clientReducer from "./reducers/clientReducer.jsx"
import productReducer from './reducers/productReducer.jsx';
import shoppingCartReducer from './reducers/shoppingCartReducer.jsx';

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
  })

const store = createStore(rootReducer,
  applyMiddleware (thunk, logger)
);

export default store;