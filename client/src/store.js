import rootReducer from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadTokens, saveTokens } from "./LocalStorage";
const configureStore = () => {
  const InitToken = {
    tokens: {
      ...loadTokens(),
    },
  };
  const store = createStore(rootReducer, InitToken, composeWithDevTools());
  store.subscribe(() => {
    saveTokens(store.getState().tokens);
  });
  return store;
};

export default configureStore;
