import types from "./types";
const INIT_STATE = {
  artistsAndTracks: {
    artists: [],
    tracks: [],
    loading: false,
  },
  recommendedTracklist: {
    tracklist: [],
    loading: false,
  },
  error: null,
};
const responseReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.GET_RESPONSE_FAILURE:
      return { ...state, error: action.payload };
    case types.GET_ARTISTS_AND_TRACK_REQUEST:
      return {
        ...state,
        artistsAndTracks: { ...state.artistsAndTracks, loading: true },
      };
    case types.GET_ARTISTS_AND_TRACK_SUCCESS:
      return {
        ...state,
        artistsAndTracks: {
          loading: false,
          tracks: action.payload.tracks,
          artists: action.payload.artists,
        },
      };
    case types.GET_RECOMMENDED_TRACKS_REQUEST:
      return {
        ...state,
        recommendedTracklist: { ...state.recommendedTracklist, loading: true },
      };
    case types.GET_RECOMMENDED_TRACKS_SUCCESS:
      return {
        ...state,
        recommendedTracklist: {
          loading: false,
          tracklist: action.payload.tracklist,
        },
      };
    default:
      return state;
  }
};

export default responseReducer;
