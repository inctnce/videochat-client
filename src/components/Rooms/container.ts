import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import rooms from "../../store/actions/rooms";

import Rooms from "../../types/Rooms";

function mapStateToProps(state: CombinedState<{ rooms: Rooms }>) {
  return {
    filterValue: state.rooms.filterValue,
  };
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
  return {
    updFilter: (value: string) => {
      dispatch(rooms.updFilter(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
