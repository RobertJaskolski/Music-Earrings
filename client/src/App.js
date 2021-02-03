import React from "react";
import { Container } from "@material-ui/core";
import Nav from "./containers/Nav/Nav";
import Footer from "./components/Footer/Footer";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <div className='App'>
      <Container maxWidth='xl'>
        <Nav />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
