import { loadTokens } from "./LocalStorage";
import axios from "axios";
import store from "../index";
import { tokensActions } from "../reducers/tokens";
import { authActions } from "../reducers/auth";

const checkAuth = () => {
  if (store.getState().tokens["refreshToken"]) {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/refresh_token?refresh_token=${
          store.getState().tokens["refreshToken"]
        }`
      )
      .then((res) => {
        tokensActions.refresh({
          accessToken: res.data["access_token"],
          refreshToken: store.getState().tokens["refreshToken"],
        });
        store.dispatch(authActions.login());
      })
      .catch((err) => {
        store.dispatch(authActions.logout());
        store.dispatch(tokensActions.clear());
      });
  }
};

export default checkAuth;
