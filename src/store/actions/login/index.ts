import { AnyAction } from "redux";
import ACTION from "./ACTION";

function login(email: string, password: string): AnyAction {
  return {
    type: ACTION.LOGIN,
    payload: {
      email: email,
      password: password,
    },
  };
}

function successfulLogin(): AnyAction {
  return {
    type: ACTION.SUCCESSFUL_LOGIN,
  };
}

export default { login, successfulLogin };
