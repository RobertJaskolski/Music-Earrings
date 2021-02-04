import types from "../../actions/auth/types";
const INIT_STATE = {
  isAutorizathed: false,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_AUTH:
      return {
        isAutorizathed: true,
      };
    case types.LOGOUT_AUTH:
      return {
        isAutorizathed: false,
      };

    default:
      return state;
  }
};

export default authReducer;
