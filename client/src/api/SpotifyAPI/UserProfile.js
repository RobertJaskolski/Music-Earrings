import instanceAuth from "./Instance";
import { userProfileActions } from "../../reducers/userProfile";
import { LogoutUser, setToken } from "../../utils/ApiUtils";

const GetUserProfile = () => async (dispatch, getState) => {
  const { tokens } = getState();
  setToken(tokens["accessToken"]);
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
