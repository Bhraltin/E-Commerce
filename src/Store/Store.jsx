import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import {thunk} from "redux-thunk"
import {logger} from "redux-logger"

const store = createStore(
  applyMiddleware (thunk, logger)
);

export default store;