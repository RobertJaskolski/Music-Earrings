import types from "./types";

const addTrackToNotAuthPlayer = (track, type) => ({
  type: types.PLAYER_NOT_AUTH_ADD_TRACK,
  payload: { track, type },
});

const ex = { addTrackToNotAuthPlayer };

export default ex;
