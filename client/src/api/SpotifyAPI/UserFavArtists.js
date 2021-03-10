import { userResponseActions } from "../../reducers/userResponsesFromAPI";
import { LogoutUser, options } from "../../utils/ApiUtils";
import axios from "axios";

const GetUserFavArtists = () => async (dispatch, getState) => {
  const { tokens } = getState();
  dispatch(userResponseActions.requestUserFavoriteArtists());
  const optionsAxios = options(
    `/v1/me/top/artists?limit=5`,
    tokens["accessToken"]
  );
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 200) {
        dispatch(
          userResponseActions.successUserFavoriteArtists({
            artists: response.data.items,
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

export default GetUserFavArtists;
