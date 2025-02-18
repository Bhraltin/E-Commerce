import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import {thunk} from "redux-thunk"
import {logger} from "redux-logger"
import clientReducer from './reducers/ClientReducer';
import productReducer from './reducers/ProductReducer';
import shoppingCartReducer from './reducers/ShoppingCardReducer';



const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
  })



const store = createStore(rootReducer,
  applyMiddleware (thunk, logger)
);

export default store;