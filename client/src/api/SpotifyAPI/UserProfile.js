import instanceAuth, { setToken } from "./Instance";
import { userProfileActions } from "../../reducers/userProfile";
import { tokensActions } from "../../reducers/tokens";
import { authActions } from "../../reducers/auth";
function GetUserProfile() {
  return (dispatch) => {
    setToken();
    dispatch(userProfileActions.requestUserProfile());
    instanceAuth
      .get("/v1/me")
      .then((response) => {
        if (response.status === 200) {
          dispatch(userProfileActions.successUserProfile(response.data));
        } else {
          dispatch(authActions.logout());
          dispatch(tokensActions.clear());
        }
      })
      .catch((err) => {
        dispatch(userProfileActions.failureUserProfile(err));
        dispatch(authActions.logout());
        dispatch(tokensActions.clear());
      });
  };
}

export default GetUserProfile;
