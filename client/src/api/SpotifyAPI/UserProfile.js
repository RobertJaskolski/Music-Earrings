import instanceAuth, { setToken } from "./Instance";
import { userProfileActions } from "../../reducers/userProfile";
import LogoutUser from "../../utils/LogoutUser";

const GetUserProfile = () => async (dispatch) => {
  setToken();
  dispatch(userProfileActions.requestUserProfile());
  await instanceAuth
    .get("/v1/me")
    .then((response) => {
      if (response.status === 200) {
        dispatch(userProfileActions.successUserProfile(response.data));
      } else {
        LogoutUser(dispatch);
      }
    })
    .catch((err) => {
      dispatch(userProfileActions.failureUserProfile(err));
      LogoutUser(dispatch);
    });
};

export default GetUserProfile;
