import { combineReducers } from "redux";
import tokensReducer from "./reducers/tokens/";
import authReducer from "./reducers/auth/";
import searchReducer from "./reducers/search";
import filterReducer from "./reducers/filtersForGeneratePlaylist";
import responseReducer from "./reducers/responsesFromApi";
import userResponseReducer from "./reducers/userResponsesFromAPI";

const rootReducer = combineReducers({
  tokens: tokensReducer,
  auth: authReducer,
  search: searchReducer,
  filtrsGeneratePlaylist: filterReducer,
  responses: responseReducer,
  userResponses: userResponseReducer,
});

export default rootReducer;
