import { AnyAction } from "redux";
import ACTION from "./ACTION";

function goToTheRoom(id: string, name: string): AnyAction {
  return {
    type: ACTION.GO_TO_THE_ROOM,
    payload: name,
  };
}

const room = {
  goToTheRoom,
};

export default room;
