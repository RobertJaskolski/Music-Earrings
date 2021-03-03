import { tokensActions } from "../../reducers/tokens";
import { authActions } from "../../reducers/auth";
import axios from "axios";
import store from "../../index";

const RefreshToken = (refreshToken) => async (dispatch) => {
  if (refreshToken) {
    dispatch(authActions.checking());

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
          dispatch(authActions.login());
        } else {
          dispatch(authActions.logout());
          dispatch(tokensActions.clear());
        }
      })
      .catch((err) => {
        dispatch(authActions.logout());
      });
  } else {
    dispatch(authActions.logout());
  }
};

export default RefreshToken;
