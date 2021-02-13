import types from "../../actions/search/types";

const INIT_STATE = { searchText: "" };

const searchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_SEARCH:
      return { searchText: action.payload.searchText, ...state };
    case types.CLEAR_SEARCH:
      return { searchText: "", ...state };
    default:
      return state;
  }
};

export default searchReducer;
