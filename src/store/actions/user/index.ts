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

function register(nickname: string, email: string, password: string): AnyAction {
  return {
    type: ACTION.REGISTER,
    payload: {
      nickname: nickname,
      email: email,
      password: password,
    },
  };
}

export default { login, register, successfulLogin };
