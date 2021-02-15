import store from "../../index";
import { tokensActions } from "../../reducers/tokens";
import { authActions } from "../../reducers/auth";
import axios from "axios";

async function checkAuth(refreshToken) {
  if (refreshToken) {
    store.dispatch(authActions.checking());

    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/refresh_token?refresh_token=${refreshToken}`
      )
      .then((response) => {
        if (response.statusText === "OK") {
          tokensActions.refresh({
            accessToken: response.data["access_token"],
            refreshToken: refreshToken,
          });
          store.dispatch(authActions.login());
        } else {
          store.dispatch(authActions.logout());
          store.dispatch(tokensActions.clear());
        }
      })
      .catch((err) => {
        store.dispatch(authActions.logout());
      });
  } else {
    store.dispatch(authActions.logout());
  }
}

export { checkAuth };
