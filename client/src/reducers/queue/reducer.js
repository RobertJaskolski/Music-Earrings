import types from "./types";
const INIT_STATE = {
  tracks: [],
};
const queueReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.ADD_TRACK_TO_QUEUE:
      if (!state.tracks.includes(action.payload.track))
        return {
          ...state,
          tracks: [...state.tracks, action.payload.track],
        };
      else return state;
    case types.DELETE_TRACK_FROM_QUEUE:
      const newTracks = state.tracks.filter((item) => {
        if (item !== action.payload.track) return item;
      });
      return {
        tracks: newTracks,
      };
    case types.CLEAR_QUEUE:
      return INIT_STATE;
    default:
      return state;
  }
};

export default queueReducer;
