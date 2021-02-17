import ACTION from "./ACTION";
import { AnyAction } from "redux";

function updFilter(value: string): AnyAction {
  return {
    type: ACTION.UPD_FILTER,
    payload: value,
  };
}

const rooms = {
  updFilter: updFilter,
};

export default rooms;
