import types from "./types";

const clear = () => ({ type: types.CLEAR_DATA });
const save = (payload) => ({ type: types.SAVE_RESPONSE_DATA, payload });

export default {
  clear,
  save,
};
