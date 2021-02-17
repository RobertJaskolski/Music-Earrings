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
        const artists = response.data.artists.items.slice(0, 4);
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
