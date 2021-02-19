import RefreshTokenLS from "../../LocalStorage/refreshToken";
import User from "../../types/User";

const isAuthenticated: boolean = !!RefreshTokenLS.get();

const login: User = {
  isAuthenticated: isAuthenticated,
};

export default login;
