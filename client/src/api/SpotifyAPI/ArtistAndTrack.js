import { LogoutUser, searchValue, options } from "../../utils/ApiUtils";
import { responseActions } from "../../reducers/responsesFromApi";
import axios from "axios";

const GetArtistAndTrack = () => async (dispatch, getState) => {
  const { tokens, settings } = getState();
  const { texts } = settings;
  const queryString = `?q=${searchValue(
    texts["searchText"]
  )}&type=track%2Cartist&limit=10`;
  const optionsAxios = options(
    "/v1/search" + queryString,
    tokens["accessToken"]
  );
  dispatch(responseActions.requestArtistsAndTracks());
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 200) {
        const artists = response.data.artists.items.slice(0, 6);
        dispatch(
          responseActions.successArtistsAndTracks({
            artists: artists,
            tracks: response.data.tracks.items,
          })
        );
      } else {
        LogoutUser(dispatch);
        dispatch(responseActions.failureResponse("error"));
        return undefined;
      }
    })
    .catch((err) => {
      LogoutUser(dispatch);
      dispatch(responseActions.failureResponse(err.name));
      return undefined;
    });
};

export default GetArtistAndTrack;
