import store from "../../index";
import { tokensActions } from "../../reducers/tokens";
import { authActions } from "../../reducers/auth";
const api_url = process.env.REACT_APP_API_UR;

export const refreshToken = () => {
  if (store.getState().tokens["refreshToken"]) {
    fetch(
      `${process.env.REACT_APP_API_URL}/refresh_token?refresh_token=${
        store.getState().tokens["refreshToken"]
      }`,
      { method: "get", mode: "cors" }
    ).then((response) => {
      if (response.ok) {
        tokensActions.refresh({
          accessToken: response.json()["access_token"],
          refreshToken: store.getState().tokens["refreshToken"],
        });
        store.dispatch(authActions.login());
      } else {
        store.dispatch(authActions.logout());
        store.dispatch(tokensActions.clear());
      }
    });
  }
};
