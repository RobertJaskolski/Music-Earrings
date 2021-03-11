import types from "./types";
const INIT_STATE = {
  accessToken: "",
  refreshToken: "",
};

const tokenReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.REFRESH_TOKENS:
      return {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case types.CLEAR_TOKENS:
      return {
        accessToken: "",
        refreshToken: "",
      };
    default:
      return state;
  }
};

export default tokenReducer;
