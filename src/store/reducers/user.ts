import { AnyAction } from "redux";
import Login from "../../types/Login";
import ACTION from "../actions/user/ACTION";
import initialState from "../states/user";

function app(state: Login = initialState, action: AnyAction): Login {
  switch (action.type) {
    case ACTION.SUCCESSFUL_LOGIN:
      return {
        isAuthenticated: true,
      };
  }
  return state;
}

export default app;
