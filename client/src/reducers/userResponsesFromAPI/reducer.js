import types from "./types";
const INIT_STATE = {
  tracklists: {
    tracklists: [],
    loading: false,
  },
  userProfile: {
    info: {},
    loading: false,
  },
  favoriteArtists: {
    artists: [],
    loading: false,
  },
  error: null,
};
const userResponse = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_RESPONSE_FAILURE:
      return { ...state, error: action.payload };
    case types.GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        userProfile: { ...state.userProfile, loading: true },
      };
    case types.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          loading: false,
          info: action.payload.info,
        },
      };
    case types.GET_USER_TRACKLISTS_REQUEST:
      return {
        ...state,
        tracklists: { ...state.tracklists, loading: true },
      };
    case types.GET_USER_TRACKLISTS_SUCCESS:
      return {
        ...state,
        tracklists: {
          loading: false,
          tracklists: action.payload.tracklists,
        },
      };
    case types.GET_USER_FAVORITE_ARTISTS_REQUEST:
      return {
        ...state,
        favoriteArtists: { ...state.favoriteArtists, loading: true },
      };
    case types.GET_USER_FAVORITE_ARTISTS_SUCCESS:
      return {
        ...state,
        favoriteArtists: {
          loading: false,
          artists: action.payload.artists,
        },
      };
    default:
      return state;
  }
};
export default userResponse;
