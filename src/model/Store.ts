import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

class Store {
  private store: any;
  private saga: any;

  constructor(reducers: any[]) {
    this.saga = createSagaMiddleware();

    this.store = createStore(combineReducers(reducers), applyMiddleware(logger, this.saga));
  }

  getStore(): any {
    return this.store;
  }

  runSaga(watcher: any): void {
    this.saga.run(watcher);
  }
}

export default Store;
