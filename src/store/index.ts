import { AnyAction, applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import App from "../type/App";

import app from "./reducer/app";

const reducers = combineReducers({
  app: app,
});

const saga = createSagaMiddleware();

const store: Store<CombinedState<{ app: App }>, AnyAction> = createStore(reducers, applyMiddleware(logger, saga));

export default store;
