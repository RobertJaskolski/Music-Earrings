import { LogoutUser, options } from "../../utils/ApiUtils";
import { responseActions } from "../../reducers/responsesFromApi";
import axios from "axios";

const GetRecommendations = () => async (dispatch, getState) => {
  const { tokens, filtrsGeneratePlaylist } = getState();
  let seed = "";
  if (filtrsGeneratePlaylist["artistSeeds"].length > 0) {
    seed += "&seed_artists=";
    filtrsGeneratePlaylist["artistSeeds"].map((item) => {
      seed += item.id;
      seed += ",";
      return item;
    });
    seed = seed.slice(0, -1);
  }
  if (filtrsGeneratePlaylist["trackSeeds"].length > 0) {
    seed += "&seed_tracks=";
    filtrsGeneratePlaylist["trackSeeds"].map((item) => {
      seed += item.id;
      seed += ",";
      return item;
    });
    seed = seed.slice(0, -1);
  }
  const filters = `limit=${filtrsGeneratePlaylist["limit"]}&min_popularity=${
    filtrsGeneratePlaylist["popularity"][0]
  }&max_popularity=${filtrsGeneratePlaylist["popularity"][1]}&min_energy=${
    filtrsGeneratePlaylist["energy"][0] / 100
  }&max_energy=${filtrsGeneratePlaylist["energy"][1] / 100}&min_danceability=${
    filtrsGeneratePlaylist["danceable"][0] / 100
  }&max_danceability=${filtrsGeneratePlaylist["danceable"][1] / 100}`;
  const optionsAxios = options(
    `/v1/recommendations?${filters}${seed}`,
    tokens["accessToken"]
  );
  dispatch(responseActions.requestRecommendedTracks());
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 200) {
        dispatch(
          responseActions.successRecommendedTracks({
            tracklist: response.data.tracks,
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

export default GetRecommendations;
