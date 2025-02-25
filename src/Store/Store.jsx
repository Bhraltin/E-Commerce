import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import {thunk} from "redux-thunk"
import {logger} from "redux-logger"
import ClientReducer from "./reducers/ClientReducer"
import ProductReducer from './reducers/ProductReducer';
import ShoppingCartReducer from './reducers/ShoppingCardReducer';



const rootReducer = combineReducers({
    client: ClientReducer,
    product: ProductReducer,
    shoppingCart: ShoppingCartReducer,
  })



const store = createStore(rootReducer,
  applyMiddleware (thunk, logger)
);

export default store;