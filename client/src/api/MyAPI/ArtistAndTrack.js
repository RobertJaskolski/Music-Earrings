import { LogoutUser, searchValue } from "../../utils/ApiUtils";
import { responseActions } from "../../reducers/responsesFromApi";
import axios from "axios";

const GetArtistAndTrack = () => async (dispatch, getState) => {
  const { settings } = getState();
  const queryString = `?search=${searchValue(settings.texts["searchText"])}`;
  dispatch(responseActions.requestArtistsAndTracks());
  await axios(`${process.env.REACT_APP_API_URL}/ArtistsAndTracks${queryString}`)
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
