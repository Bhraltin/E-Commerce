import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import {thunk} from "redux-thunk"
import {logger} from "redux-logger"
import clientReducer from "./reducers/clientReducer"
import ProductReducer from './reducers/ProductReducer';
import ShoppingCartReducer from './reducers/ShoppingCardReducer';



const rootReducer = combineReducers({
    client: clientReducer,
    product: ProductReducer,
    shoppingCart: ShoppingCartReducer,
  })



const store = createStore(rootReducer,
  applyMiddleware (thunk, logger)
);

export { store as default };