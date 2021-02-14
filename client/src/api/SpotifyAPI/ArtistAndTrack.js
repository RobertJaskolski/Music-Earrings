import instanceAuth, { setToken, searchValue } from "./Instance";
import LogoutUser from "../../utils/LogoutUser";
import { spotifyApiActions } from "../../reducers/spotifyApiResponses";

const GetArtistAndTrack = () => async (dispatch) => {
  setToken();
  const queryString = `?q=${searchValue()}&type=track%2Cartist&limit=10`;
  dispatch(spotifyApiActions.fetching());
  await instanceAuth
    .get("/v1/search" + queryString)
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