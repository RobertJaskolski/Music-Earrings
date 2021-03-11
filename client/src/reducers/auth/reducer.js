import types from "./types";
const INIT_STATE = {
  isAuthorized: false,
  checking: true,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_AUTH:
      return {
        isAuthorized: true,
        checking: false,
      };
    case types.LOGOUT_AUTH:
      return {
        isAuthorized: false,
        checking: false,
      };
    case types.CHECKING:
      return {
        checking: true,
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;
