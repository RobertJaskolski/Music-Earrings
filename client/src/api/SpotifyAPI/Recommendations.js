import { LogoutUser, options } from "../../utils/ApiUtils";
import { responseActions } from "../../reducers/responsesFromApi";
import axios from "axios";

const GetRecommendations = () => async (dispatch, getState) => {
  const { tokens, settings } = getState();
  const { filters } = settings;
  let seed = "";
  if (filters["artistSeeds"].length > 0) {
    seed += "&seed_artists=";
    filters["artistSeeds"].map((item) => {
      seed += item.id;
      seed += ",";
      return item;
    });
    seed = seed.slice(0, -1);
  }
  if (filters["trackSeeds"].length > 0) {
    seed += "&seed_tracks=";
    filters["trackSeeds"].map((item) => {
      seed += item.id;
      seed += ",";
      return item;
    });
    seed = seed.slice(0, -1);
  }
  const filtersQuery = `limit=${filters["limit"]}&min_popularity=${
    filters["popularity"][0]
  }&max_popularity=${filters["popularity"][1]}&min_energy=${
    filters["energy"][0] / 100
  }&max_energy=${filters["energy"][1] / 100}&min_danceability=${
    filters["danceable"][0] / 100
  }&max_danceability=${filters["danceable"][1] / 100}`;
  const optionsAxios = options(
    `/v1/recommendations?${filtersQuery}${seed}`,
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
