import types from "../../actions/auth/types";
const INIT_STATE = {
  isAuthorized: false,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_AUTH:
      return {
        isAuthorized: true,
      };
    case types.LOGOUT_AUTH:
      return {
        isAuthorized: false,
      };

    default:
      return state;
  }
};

export default authReducer;
