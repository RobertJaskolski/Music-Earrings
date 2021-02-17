import types from "./types";

const requestUserProfile = () => ({ type: types.GET_USER_PROFILE_REQUEST });
const successUserProfile = (data) => ({
  type: types.GET_USER_PROFILE_SUCCESS,
  payload: data,
});
const failureUserProfile = (error) => ({
  type: types.GET_USER_PROFILE_FAILURE,
  payload: error,
});

const ex = {
  requestUserProfile,
  successUserProfile,
  failureUserProfile,
};

export default ex;
