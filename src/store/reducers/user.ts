import { AnyAction } from "redux";
import User from "../../types/User";
import ACTION from "../actions/user/ACTION";
import initialState from "../states/user";

function app(state: User = initialState, action: AnyAction): User {
  switch (action.type) {
    case ACTION.SUCCESSFUL_LOGIN:
      return {
        isAuthenticated: true,
      };
  }
  return state;
}

export default app;
