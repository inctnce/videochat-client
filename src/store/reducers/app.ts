import { AnyAction } from "redux";
import Notification from "../../models/Notification";
import App from "../../types/App";
import ACTION from "../actions/app/ACTION";
import initialState from "../states/app";

function app(state: App = initialState, action: AnyAction): App {
  switch (action.type) {
    case ACTION.NOTIFICATION:
      console.log(action.payload);

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
