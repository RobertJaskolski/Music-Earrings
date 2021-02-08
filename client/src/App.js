import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import Nav from "./containers/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./app.styles.css";
import { connect } from "react-redux";
import { tokensActions } from "./reducers/tokens";
import { BrowserRouter as Router } from "react-router-dom";
import { checkAuth } from "./api/MyAPI";
import GetHash from "./utils/GetHash";
import withAuthorizedState from "./components/shared/HOC/withAuthorized";
import GetUserProfile from "./api/SpotifyAPI/UserProfile";
const AuthorizedNav = withAuthorizedState(Nav);

function App(props) {
  useEffect(() => {
    GetHash(props.refresh);
    GetUserProfile();
    checkAuth();
  });
  return (
    <Router basename='/'>
      <div className='App'>
        <Container maxWidth='xl'>
          <AuthorizedNav />
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({
  refresh: (tokens) => dispatch(tokensActions.refresh(tokens)),
});

export default connect(null, mapDispatchToProps)(App);
