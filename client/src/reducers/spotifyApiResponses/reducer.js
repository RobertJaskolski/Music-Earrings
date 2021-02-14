import types from "../../actions/spotifyApiResponses/types";
const INIT_STATE = {
  artists: [],
  tracks: [],
  loading: false,
};
const spotifyApiReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.FETCHING_DATA:
      return { ...state, loading: true };
    case types.CLEAR_DATA:
      return INIT_STATE;
    case types.SAVE_RESPONSE_DATA:
      return {
        ...state,
        tracks: action.payload.tracks,
        artists: action.payload.artists,
        loading: false,
      };
    default:
      return state;
  }
};

export default spotifyApiReducer;
