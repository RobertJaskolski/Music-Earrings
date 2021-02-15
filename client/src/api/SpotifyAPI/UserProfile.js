import { userProfileActions } from "../../reducers/userProfile";
import { LogoutUser, options } from "../../utils/ApiUtils";
import axios from "axios";

const GetUserProfile = () => async (dispatch, getState) => {
  const { tokens } = getState();
  dispatch(userProfileActions.requestUserProfile());
  const optionsAxios = options("/v1/me", tokens["accessToken"]);
  await axios(optionsAxios)
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
