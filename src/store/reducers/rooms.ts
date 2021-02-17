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
  }
  return state;
}

export default rooms;
