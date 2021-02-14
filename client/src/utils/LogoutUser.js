import { tokensActions } from "../reducers/tokens";
import { authActions } from "../reducers/auth";
import store from "../index";

const LogoutUser = (dispatch) => {
  if (store.getState().auth["isAuthorized"]) {
    dispatch(authActions.logout());
    dispatch(tokensActions.clear());
  }
};

export default LogoutUser;
