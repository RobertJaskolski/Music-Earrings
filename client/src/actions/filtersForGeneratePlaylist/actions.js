import types from "./types";

const addLimit = (limit) => ({ type: types.ADD_LIMIT, payload: limit });
const deleteLimit = () => ({ type: types.DELETE_LIMIT });
const addPopularity = (popularity) => ({
  type: types.ADD_POPULARITY,
  payload: popularity,
});
const deletePopularity = () => ({ type: types.DELETE_POPULARITY });
const addEnergy = (energy) => ({ type: types.ADD_ENERGY, payload: energy });
const deleteEnergy = () => ({ type: types.DELETE_ENERGY });
const addDanceable = (danceable) => ({
  type: types.ADD_DANCEABLE,
  payload: danceable,
});
const deleteDanceable = () => ({ type: types.DELETE_DANCEABLE });

const addArtist = (artist) => ({ type: types.ADD_ARTIST, payload: artist });
const deleteArtist = (artist) => ({
  type: types.DELETE_ARTIST,
  payload: artist,
});

const addTrack = (track) => ({ type: types.ADD_TRACK, payload: track });
const deleteTrack = (track) => ({ type: types.DELETE_TRACK, payload: track });

const clearFilters = () => ({ type: types.CLEAR_FILTERS });

const ex = {
  addLimit,
  deleteLimit,
  addPopularity,
  deletePopularity,
  addEnergy,
  deleteEnergy,
  addDanceable,
  deleteDanceable,
  addArtist,
  deleteArtist,
  addTrack,
  deleteTrack,
  clearFilters,
};

export default ex;
