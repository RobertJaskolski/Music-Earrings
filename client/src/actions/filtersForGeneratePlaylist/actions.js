import types from "./types";

const addArtist = (artist) => ({ type: types.ADD_ARTIST, payload: artist });

const deleteArtist = (artist) => ({
  type: types.DELETE_ARTIST,
  payload: artist,
});

const addTrack = (track) => ({ type: types.ADD_TRACK, payload: track });

const deleteTrack = (track) => ({ type: types.DELETE_TRACK, payload: track });

const clearFilters = () => ({ type: types.CLEAR_FILTERS });

const ex = { addArtist, deleteArtist, addTrack, deleteTrack, clearFilters };

export default ex;
