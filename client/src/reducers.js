import { combineReducers } from "redux";
import tokensReducer from "./reducers/tokens/index";

const rootReducer = combineReducers({
  tokens: tokensReducer,
});

export default rootReducer;
