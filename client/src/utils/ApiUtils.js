import { tokensActions } from "../reducers/tokens";
import { authActions } from "../reducers/auth";
import instanceAuth from "../api/SpotifyAPI/Instance";

export const LogoutUser = (dispatch) => {
  dispatch(authActions.logout());
  dispatch(tokensActions.clear());
};
export const searchValue = (searchText = "") => {
  if (searchText) {
    return searchText;
  }
  return undefined;
};

export const setToken = (accessToken = "") => {
  if (accessToken) {
    instanceAuth.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;
  }
};
