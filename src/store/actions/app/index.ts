import ACTION from "./ACTION";
import Notification from "../../../models/Notification";
import { AnyAction } from "redux";

function setNotification(notification: Notification): AnyAction {
  return {
    type: ACTION.NOTIFICATION,
    payload: notification,
  };
}

function cleanAlert(): AnyAction {
  return {
    type: ACTION.CLEAN_NOTIFICATION,
  };
}

const app = {
  setNotification: setNotification,
  cleanNotification: cleanAlert,
};

export default app;
