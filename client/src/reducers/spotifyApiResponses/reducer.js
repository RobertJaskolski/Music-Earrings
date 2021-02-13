import types from "../../actions/spotifyApiResponses/types";
const INIT_STATE = {
  artists: [],
  tracks: [],
};
const spotifyApiReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.CLEAR_DATA:
      return INIT_STATE;
    case types.SAVE_RESPONSE_DATA:
      return {
        ...state,
        tracks: action.payload.tracks,
        artists: action.payload.artists,
      };
    default:
      return state;
  }
};

export default spotifyApiReducer;
