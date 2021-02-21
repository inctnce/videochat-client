import { act } from "react-dom/test-utils";
import { AnyAction } from "redux";
import Notification from "../../models/Notification";
import App from "../../types/App";
import ACTION from "../actions/app/ACTION";
import initialState from "../states/app";

function app(state: App = initialState, action: AnyAction): App {
  switch (action.type) {
    case ACTION.NOTIFICATION:
      return {
        ...state,
        isNotification: true,
        notification: action.payload,
      };
    case ACTION.CLEAN_NOTIFICATION:
      return {
        ...state,
        isNotification: false,
      };
  }
  return state;
}

export default app;
