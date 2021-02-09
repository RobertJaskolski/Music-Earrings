import { combineReducers } from "redux";
import tokensReducer from "./reducers/tokens/";
import authReducer from "./reducers/auth/";
import userProfileReducer from "./reducers/userProfile";

const rootReducer = combineReducers({
  tokens: tokensReducer,
  auth: authReducer,
  userInfo: userProfileReducer,
});

export default rootReducer;
