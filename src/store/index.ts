import { AnyAction, applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import App from "../types/App";
import Login from "../types/Login";
import Rooms from "../types/Rooms";

import app from "./reducers/app";
import login from "./reducers/login";
import rooms from "./reducers/rooms";

import watchLogin from "./sagas/user/login";
import watchRegister from "./sagas/user/register";

const reducers = combineReducers({
  app: app,
  login: login,
  rooms: rooms,
});

const saga = createSagaMiddleware();

const store: Store<CombinedState<{ app: App; login: Login; rooms: Rooms }>, AnyAction> = createStore(
  reducers,
  applyMiddleware(logger, saga)
);

saga.run(watchLogin);
saga.run(watchRegister);

export default store;
