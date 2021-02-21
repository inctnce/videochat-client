import { AnyAction } from "redux";
import ACTION from "./ACTION";

function getMessages(roomId: string): AnyAction {
  return {
    type: ACTION.GET_MESSAGES,
    payload: roomId,
  };
}

function sendMessage(text: string): AnyAction {
  return {
    type: ACTION.SEND_MESSAGE,
    payload: text,
  };
}

const message = {
  getMessages,
  sendMessage,
};

export default message;
