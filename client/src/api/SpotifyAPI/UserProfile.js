import instanceAuth, { setToken } from "./Instance";
import { userProfileActions } from "../../reducers/userProfile";
function GetUserProfile() {
  return (dispatch) => {
    setToken();
    dispatch(userProfileActions.requestUserProfile());
    instanceAuth
      .get("/v1/me")
      .then((response) => {
        if (response.status === 200) {
          dispatch(userProfileActions.successUserProfile(response.data));
        } else return undefined;
      })
      .catch((err) => {
        dispatch(userProfileActions.failureUserProfile(err));
      });
  };
}

export default GetUserProfile;
