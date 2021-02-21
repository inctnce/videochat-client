import { AnyAction } from "redux";

import Room from "../../types/Room";
import ACTION from "../actions/room/ACTION";
import initialState from "../states/room";

function room(state: Room = initialState, action: AnyAction): Room {
  switch (action.type) {
  }
  return state;
}

export default room;
