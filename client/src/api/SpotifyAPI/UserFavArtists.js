import { userProfileActions } from "../../reducers/userProfile";
import { LogoutUser, options } from "../../utils/ApiUtils";
import axios from "axios";

const GetUserFavArtists = () => async (dispatch, getState) => {
  const { tokens } = getState();
  dispatch(userProfileActions.requestFavArtists());
  const optionsAxios = options(
    `/v1/me/top/artists?limit=8`,
    tokens["accessToken"]
  );
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 200) {
        dispatch(userProfileActions.successFavArtists(response.data.items));
      } else {
        LogoutUser(dispatch);
      }
    })
    .catch((err) => {
      dispatch(userProfileActions.failureUserProfile(err));
      LogoutUser(dispatch);
    });
};

export default GetUserFavArtists;
