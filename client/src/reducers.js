import { combineReducers } from "redux";
import tokensReducer from "./reducers/tokens/";
import authReducer from "./reducers/auth/";
import responseReducer from "./reducers/responsesFromApi";
import userResponseReducer from "./reducers/userResponsesFromAPI";
import clientSettingsReducer from "./reducers/clientSettings";
import authorizationReducer from "./reducers/authorization";

const rootReducer = combineReducers({
  tokens: tokensReducer,
  auth: authReducer,
  responses: responseReducer,
  userResponses: userResponseReducer,
  settings: clientSettingsReducer,
  authorization: authorizationReducer,
});

export default rootReducer;
