import types from "../../actions/userProfile/types";
const INIT_STATE = {
  isLoading: false,
  isError: false,
  data: [],
};

const userProfileReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.GET_USER_PROFILE_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_USER_PROFILE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    default:
      return state;
  }
};

export default userProfileReducer;