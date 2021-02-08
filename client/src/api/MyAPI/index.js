import store from "../../index";
import { tokensActions } from "../../reducers/tokens";
import { authActions } from "../../reducers/auth";
import axios from "axios";

async function checkAuth() {
  if (store.getState().tokens["refreshToken"]) {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/refresh_token?refresh_token=${
          store.getState().tokens["refreshToken"]
        }`
      )
      .then((response) => {
        if (response.statusText === "OK") {
          tokensActions.refresh({
            accessToken: response.data["access_token"],
            refreshToken: store.getState().tokens["refreshToken"],
          });
          store.dispatch(authActions.login());
        } else {
          store.dispatch(authActions.logout());
          store.dispatch(tokensActions.clear());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export { checkAuth };
