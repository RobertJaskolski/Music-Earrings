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
import withUserProfileState from "./components/shared/HOC/withUserProfile";
import API from "./api/SpotifyAPI";
import { compose } from "recompose";
const WithAuthorizedAndUserInfoNav = compose(
  withAuthorizedState,
  withUserProfileState
)(Nav);

function App({ refresh, getUserProfile }) {
  useEffect(() => {
    GetHash(refresh);
    getUserProfile();
    checkAuth();
  });
  return (
    <Router basename='/'>
      <div className='App'>
        <Container maxWidth='xl'>
          <WithAuthorizedAndUserInfoNav />
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({
  refresh: (tokens) => dispatch(tokensActions.refresh(tokens)),
  getUserProfile: () => dispatch(API.GetUserProfile()),
});

export default connect(null, mapDispatchToProps)(App);
