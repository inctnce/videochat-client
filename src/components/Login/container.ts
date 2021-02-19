import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import login from "../../store/actions/login";
import Login from "../../types/Login";

function mapStateToProps(state: CombinedState<{ login: Login }>) {
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
