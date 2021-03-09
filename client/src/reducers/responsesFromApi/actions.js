import types from "./types";

// GET ARTISTS AND TRACKS
const requestArtistsAndTracks = () => ({
  type: types.GET_ARTISTS_AND_TRACK_REQUEST,
});
const successArtistsAndTracks = (data) => ({
  type: types.GET_ARTISTS_AND_TRACK_SUCCESS,
  payload: data,
});

// GET RECOMMENDED TRACKS
const requestRecommendedTracks = () => ({
  type: types.GET_RECOMMENDED_TRACKS_REQUEST,
});
const successRecommendedTracks = (data) => ({
  type: types.GET_RECOMMENDED_TRACKS_SUCCESS,
  payload: data,
});

// FAILURE
const failureResponse = (error) => ({
  type: types.GET_RESPONSE_FAILURE,
  payload: error,
});

// EXPORT
const ex = {
  requestArtistsAndTracks,
  successArtistsAndTracks,
  requestRecommendedTracks,
  successRecommendedTracks,
  failureResponse,
};

export default ex;
