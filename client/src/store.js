import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadTokens, saveTokens } from "./utils/LocalStorage";
import thunk from "redux-thunk";
const InitToken = {
  tokens: {
    ...loadTokens(),
  },
};

const configureStore = (INIT_STATE = InitToken) => {
  const store = createStore(
    rootReducer,
    INIT_STATE,
    composeWithDevTools(applyMiddleware(thunk))
  );
  store.subscribe(() => {
    saveTokens(store.getState().tokens);
  });
  return store;
};

export default configureStore;
