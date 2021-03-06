import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import app from "../../store/actions/app";
import App from "../../types/App";

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
