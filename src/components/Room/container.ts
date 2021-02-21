import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";

function mapStateToProps(state: CombinedState<{}>) {
  return {};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
