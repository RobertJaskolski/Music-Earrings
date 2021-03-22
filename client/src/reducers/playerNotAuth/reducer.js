import types from "./types";
const INIT_STATE = { track: {} };
const playerNotAuthReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.PLAYER_NOT_AUTH_ADD_TRACK:
      return state;
    default:
      return state;
  }
};
export default playerNotAuthReducer;
