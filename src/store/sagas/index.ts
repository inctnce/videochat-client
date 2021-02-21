import axios from "axios";
import userLS from "../../LocalStorage/user";
import User from "../../models/User";
import PATH from "../../PATH";

const user: User = userLS.get()!;

const accessToken = user ? user.AccessToken() : "";

const accountAPI = axios.create({
  baseURL: PATH.API_BASE_URL,
  responseType: "json",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default accountAPI;
