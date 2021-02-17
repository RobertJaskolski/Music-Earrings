import { LogoutUser, searchValue, options } from "../../utils/ApiUtils";
import { spotifyApiActions } from "../../reducers/spotifyApiResponses";
import axios from "axios";

const GetArtistAndTrack = () => async (dispatch, getState) => {
  const { tokens, search } = getState();
  const queryString = `?q=${searchValue(
    search["searchText"]
  )}&type=track%2Cartist&limit=10`;
  const optionsAxios = options(
    "/v1/search" + queryString,
    tokens["accessToken"]
  );
  dispatch(spotifyApiActions.fetching());
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 200) {
        const artists = response.data.artists.items.slice(0, 6);
        dispatch(
          spotifyApiActions.save({
            artists: artists,
            tracks: response.data.tracks.items,
          })
        );
      } else {
        LogoutUser(dispatch);
        dispatch(spotifyApiActions.clear());
        return undefined;
      }
    })
    .catch(() => {
      LogoutUser(dispatch);
      dispatch(spotifyApiActions.clear());
      return undefined;
    });
};

export default GetArtistAndTrack;
