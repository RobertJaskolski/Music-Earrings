import types from "./types";

const addTrackToNotAuthPlayer = (track) => ({
  type: types.PLAYER_NOT_AUTH_ADD_TRACK,
  payload: track,
});

const ex = { addTrackToNotAuthPlayer };

export default ex;
