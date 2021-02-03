import types from "./types";

const refresh = (item) => ({
  type: types.REFRESH_TOKENS,
  item,
});

const clear = (item) => ({
  type: types.CLEAR_TOKENS,
  item,
});

export default {
  refresh,
  clear,
};
