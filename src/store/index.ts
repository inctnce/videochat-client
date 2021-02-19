import { AnyAction, applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import App from "../types/App";
import User from "../types/User";
import Rooms from "../types/Rooms";

import app from "./reducers/app";
import login from "./reducers/user";
import rooms from "./reducers/rooms";

import watchLogin from "./sagas/user/login";
import watchRegister from "./sagas/user/register";
import watchCreateRoom from "./sagas/room/create";
import watchGetRooms from "./sagas/room/get";
import watchUpdateToken from "./sagas/user/accessToken";

const reducers = combineReducers({
  app: app,
  login: login,
  rooms: rooms,
});

const saga = createSagaMiddleware();

const store: Store<CombinedState<{ app: App; login: User; rooms: Rooms }>, AnyAction> = createStore(
  reducers,
  applyMiddleware(logger, saga)
);

saga.run(watchLogin);
saga.run(watchRegister);
saga.run(watchUpdateToken)
saga.run(watchCreateRoom);
saga.run(watchGetRooms);

export default store;
