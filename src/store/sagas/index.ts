import axios from "axios";
import AccessTokenLS from "../../LocalStorage/accessToken";

const accountAPI = axios.create({
  baseURL: "http://localhost:8000",
  responseType: "json",
  headers: {
    Authorization: `Bearer ${AccessTokenLS.get()}`,
  },
});

export default accountAPI;
