import { LogoutUser, options } from "../../utils/ApiUtils";
import { spotifyApiActions } from "../../reducers/spotifyApiResponses";
import axios from "axios";

const GetRecommendations = () => async (dispatch, getState) => {
  const { tokens, filtrsGeneratePlaylist } = getState();
  let seed = "";
  if (filtrsGeneratePlaylist["artistSeeds"].length > 0) {
    seed += "&seed_artists=";
    filtrsGeneratePlaylist["artistSeeds"].map((item) => {
      seed += item.id;
      seed += ",";
    });
    seed = seed.slice(0, -1);
  }
  if (filtrsGeneratePlaylist["trackSeeds"].length > 0) {
    seed += "&seed_tracks=";
    filtrsGeneratePlaylist["trackSeeds"].map((item) => {
      seed += item.id;
      seed += ",";
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
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 200) {
        dispatch(
          spotifyApiActions.saveTracklist({
            tracklist: response.data,
          })
        );
      } else {
        LogoutUser(dispatch);
        dispatch(spotifyApiActions.clearTracklist());
        return undefined;
      }
    })
    .catch((err) => {
      LogoutUser(dispatch);
      dispatch(spotifyApiActions.clearTracklist());
      return undefined;
    });
};

export default GetRecommendations;
