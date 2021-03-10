import types from "./types";

// SEED'S
const addTrackToSeeds = (track) => ({
  type: types.ADD_TRACK_SEED,
  payload: track,
});
const addArtistToSeeds = (artist) => ({
  type: types.ADD_ARTIST_SEED,
  payload: artist,
});
const deleteTrackFromSeeds = (track) => ({
  type: types.DELETE_TRACK_SEED,
  payload: track,
});
const deleteArtistFromSeeds = (artist) => ({
  type: types.DELETE_ARTIST_SEED,
  payload: artist,
});

// FILTERS
const setLimit = (limit) => ({ type: types.SET_LIMIT_FILTER, payload: limit });
const setPopularity = (popularity) => ({
  type: types.SET_POPULARITY_FILTER,
  payload: popularity,
});
const setDanceable = (danceable) => ({
  type: types.SET_DANCEALBE_FILTER,
  payload: danceable,
});
const setEnergy = (energy) => ({
  type: types.SET_ENERGY_FILTER,
  payload: energy,
});

// TRACKLIST NAME, SEARCH TRACKS AND ARTISTS
const setTracklistName = (name) => ({
  type: types.SET_TRACKLIST_NAME,
  payload: name,
});
const setSearchText = (text) => ({
  type: types.SET_SEARCH_TEXT,
  payload: text,
});

// EXPORT
const ex = {
  addTrackToSeeds,
  addArtistToSeeds,
  deleteTrackFromSeeds,
  deleteArtistFromSeeds,
  setLimit,
  setPopularity,
  setDanceable,
  setEnergy,
  setTracklistName,
  setSearchText,
};

export default ex;
