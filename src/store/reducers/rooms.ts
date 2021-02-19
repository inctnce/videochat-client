import { AnyAction } from "redux";

import Rooms from "../../types/Rooms";
import ACTION from "../actions/rooms/ACTION";
import initialState from "../states/rooms";

function rooms(state: Rooms = initialState, action: AnyAction): Rooms {
  switch (action.type) {
    case ACTION.UPD_FILTER:
      return {
        ...state,
        filterValue: action.payload,
      };
    case ACTION.SET_ROOMS:
      return {
        ...state,
        rooms: [...action.payload],
      };
    case ACTION.PUSH_ROOM:
      state.rooms.push(action.payload);
      const r = [...state.rooms];
      return {
        ...state,
        rooms: [...r],
      };
  }
  return state;
}

export default rooms;
