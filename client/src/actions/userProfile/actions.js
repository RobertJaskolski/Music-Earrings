import types from "./types";

const requestUserProfile = () => ({ type: types.GET_USER_PROFILE_REQUEST });
const requestFavArtists = () => ({ type: types.GET_USER_FAV_ARTISTS_REQUEST });
const requestTracklist = () => ({ type: types.GET_USER_TRACKLIST_REQUEST });

const successUserProfile = (data) => ({
  type: types.GET_USER_PROFILE_SUCCESS,
  payload: data,
});
const successFavArtists = (data) => ({
  type: types.GET_USER_FAV_ARTIST_SUCCESS,
  payload: data,
});
const successTracklist = (data) => ({
  type: types.GET_USER_TRACKLIST_SUCCESS,
  payload: data,
});

const failureUserProfile = (error) => ({
  type: types.GET_USER_FAILURE,
  payload: error,
});

const ex = {
  requestUserProfile,
  successUserProfile,
  failureUserProfile,
  successFavArtists,
  requestFavArtists,
  requestTracklist,
  successTracklist,
};

export default ex;
