import { tokensActions } from "../reducers/tokens";
import { authActions } from "../reducers/auth";

export const options = (Addurl, token, method = "GET") => ({
  method: method,
  url: `https://api.spotify.com${Addurl}`,
  timeout: 2000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
export const optionsPOST = (Addurl, token, requestBody, method = "POST") => ({
  method: method,
  url: `https://api.spotify.com${Addurl}`,
  timeout: 2000,
  data: requestBody,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const optionsPUT = (Addurl, token, requestBody, method = "PUT") => ({
  method,
  url: `https://api.spotify.com${Addurl}`,
  timeout: 2000,
  data: requestBody,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

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
