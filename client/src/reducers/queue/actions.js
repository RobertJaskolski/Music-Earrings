import types from "./types";

const addTrackToQueue = (track) => ({
  type: types.ADD_TRACK_TO_QUEUE,
  payload: track,
});

const deleteTrackFromQueue = (track) => ({
  type: types.DELETE_TRACK_FROM_QUEUE,
  payload: track,
});

const clearQueue = () => ({ type: types.CLEAR_QUEUE });

const ex = {
  addTrackToQueue,
  deleteTrackFromQueue,
  clearQueue,
};

export default ex;
