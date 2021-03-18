import React from "react";
import "./app.styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import RootContainer from "./containers/RootContainer";
import withAuthorized from "./components/shared/HOC/withAuthorized";
import Player from "./containers/Player/Player";

const RootwithAuthorized = withAuthorized(RootContainer);

function App() {
  return (
    <Router basename='/'>
      <div className='App'>
        <Player />
        <RootwithAuthorized />
      </div>
    </Router>
  );
}

export default App;
