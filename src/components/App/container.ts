import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import app from "../../store/action/app";
import App from "../../type/App";

function mapStateToProps(state: CombinedState<{ app: App }>) {
  return {
    isNotification: state.app.isNotification,
    notification: state.app.notification!,
  };
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
  return {
    cleanNotification: () => {
      dispatch(app.cleanNotification());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
