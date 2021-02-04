import { combineReducers } from "redux";
import tokensReducer from "./reducers/tokens/";
import authReducer from "./reducers/auth/";

const rootReducer = combineReducers({
  tokens: tokensReducer,
  auth: authReducer,
});

export default rootReducer;
