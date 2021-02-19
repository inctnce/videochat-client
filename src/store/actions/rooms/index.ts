import ACTION from "./ACTION";
import { AnyAction } from "redux";
import Room from "../../../models/Room";

function updFilter(value: string): AnyAction {
  return {
    type: ACTION.UPD_FILTER,
    payload: value,
  };
}

function addRoom(name: string): AnyAction {
  return {
    type: ACTION.ADD_ROOM,
    payload: name,
  };
}

function getRooms(): AnyAction {
  return {
    type: ACTION.GET_ROOMS,
  };
}

function setRooms(rooms: Room[]): AnyAction {
  return {
    type: ACTION.SET_ROOMS,
    payload: rooms,
  };
}

function pushRoom(room: Room): AnyAction {
  return {
    type: ACTION.PUSH_ROOM,
    payload: room,
  };
}

const rooms = {
  updFilter,
  addRoom,
  getRooms,
  setRooms,
  pushRoom,
};

export default rooms;
