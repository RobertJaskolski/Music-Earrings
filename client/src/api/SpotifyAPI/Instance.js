import axios from "axios";
import store from "../../index";

const instanceAuth = axios.create({
  baseURL: "https://api.spotify.com",
  timeout: 2000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const searchValue = () => {
  if (store.getState().search["searchText"]) {
    return store.getState().search["searchText"];
  }
  return undefined;
};

export const setToken = () => {
  if (store.getState().tokens["accessToken"]) {
    instanceAuth.defaults.headers.common["Authorization"] = `Bearer ${
      store.getState().tokens["accessToken"]
    }`;
  }
};

export default instanceAuth;
