import types from "../../actions/spotifyApiResponses/types";
const INIT_STATE = {
  artists: [],
  tracks: [],
  tracklist: [],
  loading: false,
  loadingTracklist: false,
};
const spotifyApiReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.FETCHING_DATA:
      return { ...state, loading: true };
    case types.FETCHING_DATA_TRACKLIST:
      return { ...state, loadingTracklist: true };
    case types.CLEAR_DATA_SEARCH:
      return { ...state, loading: false, tracks: [], artists: [] };
    case types.CLEAR_DATA_TRACKLIST:
      return { ...state, loadingTracklist: false, tracklist: [] };
    case types.SAVE_RESPONSE_DATA_SEARCH:
      return {
        ...state,
        tracks: action.payload.tracks,
        artists: action.payload.artists,
        loading: false,
      };
    case types.SAVE_RESPONSE_DATA_TRACKLIST:
      return {
        ...state,
        tracklist: action.payload.tracklist,
        loadingTracklist: false,
      };
    default:
      return state;
  }
};

export default spotifyApiReducer;
