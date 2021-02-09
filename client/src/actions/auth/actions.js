import types from "./types";

const login = () => ({ type: types.LOGIN_AUTH });

const logout = () => ({ type: types.LOGOUT_AUTH });

const checking = () => ({ type: types.CHECKING });
export default {
  login,
  logout,
  checking,
};
