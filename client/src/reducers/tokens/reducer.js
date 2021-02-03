import types from "../../actions/tokens/types";

const INIT_STATE = {
  accessToken: "",
  refreshToken: "",
};

const tokenReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.REFRESH_TOKENS:
      return {
        ...state,
        accessToken: action.item.accessToken,
        refreshToken: action.item.refreshToken,
      };
    case types.CLEAR_TOKENS:
      return {
        ...state,
        accessToken: "",
        refreshToken: "",
      };
    default:
      return state;
  }
};

export default tokenReducer;