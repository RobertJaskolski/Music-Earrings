import types from "./types";

const fetching = () => ({
  type: types.FETCHING_DATA,
});
const clear = () => ({ type: types.CLEAR_DATA });
const save = (payload) => ({ type: types.SAVE_RESPONSE_DATA, payload });

export default {
  clear,
  save,
  fetching,
};