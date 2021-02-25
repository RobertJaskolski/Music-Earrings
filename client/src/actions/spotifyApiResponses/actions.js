import types from "./types";

const fetching = () => ({
  type: types.FETCHING_DATA,
});
const clearSearch = () => ({ type: types.CLEAR_DATA_SEARCH });
const saveSearch = (payload) => ({
  type: types.SAVE_RESPONSE_DATA_SEARCH,
  payload,
});
const clearTracklist = () => ({ type: types.CLEAR_DATA_TRACKLIST });
const saveTracklist = (payload) => ({
  type: types.SAVE_RESPONSE_DATA_TRACKLIST,
  payload,
});
const ex = {
  clearSearch,
  saveSearch,
  fetching,
  saveTracklist,
  clearTracklist,
};

export default ex;
