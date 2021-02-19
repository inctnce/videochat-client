import { AnyAction } from "redux";
import ACTION from "./ACTION";

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

export default register;
