import { combineReducers } from "redux";
import tokensReducer from "./reducers/tokens/";
import authReducer from "./reducers/auth/";
import userProfileReducer from "./reducers/userProfile";
import searchReducer from "./reducers/search";
import filterReducer from "./reducers/filtersForGeneratePlaylist";
import responseReducer from "./reducers/responsesFromApi";

const rootReducer = combineReducers({
  tokens: tokensReducer,
  auth: authReducer,
  userInfo: userProfileReducer,
  search: searchReducer,
  filtrsGeneratePlaylist: filterReducer,
  responses: responseReducer,
});

export default rootReducer;
