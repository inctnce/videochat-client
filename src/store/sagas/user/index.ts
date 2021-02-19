import axios from "axios";
import UserLS from "../../../LocalStorage/user";

const accountAPI = axios.create({
  baseURL: "https://inctnce-videochat-server.herokuapp.com",
  responseType: "json",
  headers: {
    Authorization: UserLS.get(),
  },
});

export default accountAPI;
