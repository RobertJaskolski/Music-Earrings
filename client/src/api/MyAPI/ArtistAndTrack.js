import { LogoutUser, searchValue } from "../../utils/ApiUtils";
import { spotifyApiActions } from "../../reducers/spotifyApiResponses";
import axios from "axios";

const GetArtistAndTrack = () => async (dispatch, getState) => {
  const { search } = getState();
  const queryString = `?search=${searchValue(search["searchText"])}`;
  dispatch(spotifyApiActions.fetching());
  await axios(`${process.env.REACT_APP_API_URL}/ArtistsAndTracks${queryString}`)
    .then((response) => {
      if (response.status === 200) {
        const artists = response.data.artists.items.slice(0, 6);
        dispatch(
          spotifyApiActions.saveSearch({
            artists: artists,
            tracks: response.data.tracks.items,
          })
        );
      } else {
        LogoutUser(dispatch);
        dispatch(spotifyApiActions.clearSearch());
        return undefined;
      }
    })
    .catch(() => {
      LogoutUser(dispatch);
      dispatch(spotifyApiActions.clearSearch());
      return undefined;
    });
};

export default GetArtistAndTrack;
