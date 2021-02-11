import types from "./types";

const refresh = (payload) => ({
  type: types.REFRESH_TOKENS,
  payload,
});

const clear = () => ({
  type: types.CLEAR_TOKENS,
});

export default {
  refresh,
  clear,
};
