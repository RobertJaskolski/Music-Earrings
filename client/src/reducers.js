import { combineReducers } from "redux";
import tokensReducer from "./reducers/tokens/";
import authReducer from "./reducers/auth/";
import userProfileReducer from "./reducers/userProfile";
import searchReducer from "./reducers/search";
import spotifyApiReducer from "./reducers/spotifyApiResponses";
import filterReducer from "./reducers/filtersForGeneratePlaylist";
const rootReducer = combineReducers({
  tokens: tokensReducer,
  auth: authReducer,
  userInfo: userProfileReducer,
  search: searchReducer,
  SpotifyResponses: spotifyApiReducer,
  filtrsGeneratePlaylist: filterReducer,
});

export default rootReducer;
