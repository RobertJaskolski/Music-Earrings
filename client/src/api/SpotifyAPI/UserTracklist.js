import { userProfileActions } from "../../reducers/userProfile";
import { LogoutUser, options } from "../../utils/ApiUtils";
import axios from "axios";

const GetUserTracklist = () => async (dispatch, getState) => {
  const { tokens } = getState();
  dispatch(userProfileActions.requestTracklist());
  const optionsAxios = options(
    "/v1/me/playlists?limit=50",
    tokens["accessToken"]
  );
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 200) {
        dispatch(userProfileActions.successTracklist(response.data));
      } else {
        LogoutUser(dispatch);
      }
    })
    .catch((err) => {
      dispatch(userProfileActions.failureUserProfile(err));
      LogoutUser(dispatch);
    });
};

export default GetUserTracklist;
