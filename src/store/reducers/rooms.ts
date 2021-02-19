import { AnyAction } from "redux";
import Room from "../../models/Room";

import Rooms from "../../types/Rooms";
import ACTION from "../actions/rooms/ACTION";
import initialState from "../states/rooms";

function filterSearch(items: Room[], filterStr: string): any {
  const filteredItems = [];

  for (let i = 0; i < items.length; i++) {
    const name: string = items[i].getName();

    if (name.toLowerCase().search(filterStr.toLowerCase().trim()) !== -1) {
      filteredItems.push(items[i]);
    }
  }
  return filteredItems;
}

function rooms(state: Rooms = initialState, action: AnyAction): Rooms {
  switch (action.type) {
    case ACTION.UPD_FILTER:
      if (action.payload === "") {
        return {
          ...state,
          filterValue: action.payload,
          filteredRooms: [...state.rooms],
        };
      }

      return {
        ...state,
        filterValue: action.payload,
        filteredRooms: filterSearch(state.rooms, action.payload),
      };
    case ACTION.SET_ROOMS:
      return {
        ...state,
        rooms: [...action.payload],
        filteredRooms: [...action.payload],
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
