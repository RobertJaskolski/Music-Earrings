import types from "./types";

// GET USER PROFILE
const requestUserProfile = () => ({ type: types.GET_USER_PROFILE_REQUEST });
const successUserProfile = (data) => ({
  type: types.GET_USER_PROFILE_SUCCESS,
  payload: data,
});

// GET USER FAVORITE ARTISTS
const requestUserFavoriteArtists = () => ({
  type: types.GET_USER_FAVORITE_ARTISTS_REQUEST,
});
const successUserFavoriteArtists = (data) => ({
  type: types.GET_USER_FAVORITE_ARTISTS_SUCCESS,
  payload: data,
});

// GET USER TRACKLISTS
const requestUserTracklists = () => ({
  type: types.GET_USER_TRACKLISTS_REQUEST,
});
const successUserTracklists = (data) => ({
  type: types.GET_USER_TRACKLISTS_SUCCESS,
  payload: data,
});

// FAILURE
const failureResponse = (error) => ({
  type: types.GET_USER_RESPONSE_FAILURE,
  payload: error,
});

// EXPORT
const ex = {
  requestUserProfile,
  successUserProfile,
  requestUserFavoriteArtists,
  successUserFavoriteArtists,
  requestUserTracklists,
  successUserTracklists,
  failureResponse,
};
export default ex;
