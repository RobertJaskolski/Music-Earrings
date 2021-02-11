import { tokensActions } from "../reducers/tokens";
import { authActions } from "../reducers/auth";

const LogoutUser = (dispatch) => {
  dispatch(authActions.logout());
  dispatch(tokensActions.clear());
};

export default LogoutUser;
