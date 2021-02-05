import types from "./types";

const login = () => ({ type: types.LOGIN_AUTH });

const logout = () => ({ type: types.LOGOUT_AUTH });

export default {
  login,
  logout,
};