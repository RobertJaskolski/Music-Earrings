import types from "../../actions/search/types";

const INIT_STATE = { searchText: "" };

const searchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_SEARCH:
      return { ...state, searchText: action.payload.searchText };
    case types.CLEAR_SEARCH:
      return { ...state, searchText: "" };
    default:
      return state;
  }
};

export default searchReducer;
