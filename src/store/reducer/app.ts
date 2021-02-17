import { AnyAction } from "redux";
import Notification from "../../model/Notification";
import App from "../../type/App";
import ACTION from "../action/app/ACTION";
import initialState from "../state/app";

function app(state: App = initialState, action: AnyAction): App {
  switch (action.type) {
    case ACTION.NOTIFICATION:
      return {
        ...state,
        isNotification: true,
        notification: new Notification(
          action.payload.getMessage(),
          action.payload.getTitle(),
          action.payload.getSeverity()
        ),
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
