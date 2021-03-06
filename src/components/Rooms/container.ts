import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import room from "../../store/actions/room";
import rooms from "../../store/actions/rooms";

import Rooms from "../../types/Rooms";

function mapStateToProps(state: CombinedState<{ rooms: Rooms }>) {
  return {
    filterValue: state.rooms.filterValue,
    filteredRooms: state.rooms.filteredRooms,
  };
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
  return {
    updFilter: (value: string) => {
      dispatch(rooms.updFilter(value));
    },
    addRoom: (name: string) => {
      dispatch(rooms.addRoom(name));
    },
    getRooms: () => {
      dispatch(rooms.getRooms());
    },
    setRoom: (id: string, name: string) => {
      dispatch(room.goToTheRoom(id, name));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
