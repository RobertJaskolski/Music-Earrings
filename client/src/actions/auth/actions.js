import types from "./types";

const login = (item) => ({ type: types.LOGIN_AUTH, item });

const logout = (item) => ({ type: types.LOGOUT_AUTH, item });

export default {
  login,
  logout,
};
