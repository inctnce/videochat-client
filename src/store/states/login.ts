import RefreshTokenLS from "../../LocalStorage/refreshToken";
import Login from "../../types/Login";

const isAuthenticated: boolean = !!RefreshTokenLS.get();

const login: Login = {
  isAuthenticated: isAuthenticated,
};

export default login;
