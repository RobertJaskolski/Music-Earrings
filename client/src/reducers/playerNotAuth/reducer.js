import types from "./types";
const INIT_STATE = { track: {}, type: "" };
const playerNotAuthReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.PLAYER_NOT_AUTH_ADD_TRACK:
      return { ...action.payload.track, ...action.payload.type };
    default:
      return state;
  }
};
export default playerNotAuthReducer;
