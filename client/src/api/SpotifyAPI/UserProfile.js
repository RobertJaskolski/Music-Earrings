import { userResponseActions } from "../../reducers/userResponsesFromAPI";
import { LogoutUser, options } from "../../utils/ApiUtils";
import axios from "axios";

const GetUserProfile = () => async (dispatch, getState) => {
  const { tokens } = getState();
  dispatch(userResponseActions.requestUserProfile());
  const optionsAxios = options("/v1/me", tokens["accessToken"]);
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 200) {
        dispatch(
          userResponseActions.successUserProfile({ info: response.data })
        );
      } else {
        LogoutUser(dispatch);
      }
    })
    .catch((err) => {
      dispatch(userResponseActions.failureResponse(err.name));
      LogoutUser(dispatch);
    });
};

export default GetUserProfile;
