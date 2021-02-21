import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import user from "../../store/actions/user";
import Login from "../../types/Login";

function mapStateToProps(state: CombinedState<{ login: Login }>) {
  return {
    isAuthenticated: state.login.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
  return {
    register: (nickname: string, email: string, password: string) => {
      dispatch(user.register(nickname, email, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
