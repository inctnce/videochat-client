import { AnyAction, applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import App from "../types/App";
import Rooms from "../types/Rooms";

import app from "./reducers/app";
import rooms from "./reducers/rooms";

const reducers = combineReducers({
  app: app,
  rooms: rooms,
});

const saga = createSagaMiddleware();

const store: Store<CombinedState<{ app: App; rooms: Rooms }>, AnyAction> = createStore(
  reducers,
  applyMiddleware(logger, saga)
);

export default store;
