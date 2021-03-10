import types from "./types";

const INIT_STATE = {
  accessToken: "",
  refreshToken: "",
  verification: false,
  isAuth: false,
};

const authorizationReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, verification: false, isAuth: true };
    case types.LOGOUT:
      return { ...state, verification: false, isAuth: false };
    case types.VERIFICATION:
      return { ...state, verification: true };
    case types.REFRESH_TOKEN:
      return {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    default:
      return state;
  }
};

export default authorizationReducer;
