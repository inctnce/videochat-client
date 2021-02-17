import { AnyAction, applyMiddleware, CombinedState, createStore, Store as ReduxStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

class Store {
  private saga: any;
  private store: ReduxStore<CombinedState<any>, AnyAction>;

  constructor(reducers: any) {
    this.saga = createSagaMiddleware();

    this.store = createStore(reducers, applyMiddleware(logger, this.saga));
  }

  getStore(): any {
    return this.store;
  }

  runSaga(watcher: any): void {
    this.saga.run(watcher);
  }
}

export default Store;
