import { userResponseActions } from "../../reducers/userResponsesFromAPI";
import { LogoutUser, options } from "../../utils/ApiUtils";
import axios from "axios";

const GetUserTracklist = () => async (dispatch, getState) => {
  const { tokens } = getState();
  dispatch(userResponseActions.requestUserTracklists());
  const optionsAxios = options(
    "/v1/me/playlists?limit=50",
    tokens["accessToken"]
  );
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 200) {
        dispatch(
          userResponseActions.successUserTracklists({
            tracklists: response.data,
          })
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

export default GetUserTracklist;
