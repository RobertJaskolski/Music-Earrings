import types from "./types";

const change = (payload) => ({
  type: types.CHANGE_SEARCH,
  payload,
});

const clear = () => ({
  type: types.CLEAR_SEARCH,
});

export default {
  change,
  clear,
};
