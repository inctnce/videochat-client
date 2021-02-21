import userLS from "../../LocalStorage/user";
import User from "../../models/User";
import Login from "../../types/Login";

const u: User = userLS.get()!;
const isAuthenticated: boolean = u ? !!u.RefreshToken() : false;

const login: Login = {
  isAuthenticated: isAuthenticated,
};

export default login;
