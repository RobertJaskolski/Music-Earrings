import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import Nav from "./containers/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./app.styles.css";
import queryString from "query-string";
import { connect } from "react-redux";
import { tokensActions } from "./reducers/tokens";
import { BrowserRouter as Router } from "react-router-dom";
import checkAuth from "./utils/Auth";
import withAuthorizedState from "./components/shared/HOC/withAuthorized";

const AuthorizedNav = withAuthorizedState(Nav);

function App(props) {
  useEffect(() => {
    if (window.location.hash) {
      const tokens = queryString.parse(window.location.hash);
      props.refresh({
        accessToken: tokens["access_token"],
        refreshToken: tokens["refresh_token"],
      });
      window.history.replaceState(null, null, " ");
    }
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
