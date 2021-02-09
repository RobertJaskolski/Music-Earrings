import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadTokens, saveTokens } from "./utils/LocalStorage";
import thunk from "redux-thunk";
const configureStore = () => {
  const InitToken = {
    tokens: {
      ...loadTokens(),
    },
  };
  const store = createStore(
    rootReducer,
    InitToken,
    composeWithDevTools(applyMiddleware(thunk))
  );
  store.subscribe(() => {
    saveTokens(store.getState().tokens);
  });
  return store;
};

export default configureStore;
