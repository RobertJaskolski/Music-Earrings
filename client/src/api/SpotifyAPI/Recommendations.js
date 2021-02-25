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

  const optionsAxios = options(
    `/v1/recommendations?limit=10${seed}`,
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
