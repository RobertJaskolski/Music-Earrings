import types from "./types";

const login = () => ({ type: types.LOGIN });
const logout = () => ({ type: types.LOGOUT });
const verification = () => ({ type: types.VERIFICATION });

const getRefreshToken = (tokens) => ({
  type: types.REFRESH_TOKEN,
  payload: tokens,
});

const ex = {
  login,
  logout,
  verification,
  getRefreshToken,
};

export default ex;
