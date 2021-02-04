import rootReducer from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { checkTokens, saveTokens } from "./utils/LocalStorage";
const configureStore = () => {
  const InitToken = {
    tokens: {
      ...checkTokens(),
    },
  };
  const store = createStore(rootReducer, InitToken, composeWithDevTools());
  store.subscribe(() => {
    saveTokens(store.getState().tokens);
  });
  return store;
};

export default configureStore;
