import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import login from "../../store/actions/user";
import User from "../../types/User";

function mapStateToProps(state: CombinedState<{ login: User }>) {
  return {
    isAuthenticated: state.login.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
  return {
    login: (email: string, password: string) => {
      dispatch(login.login(email, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
