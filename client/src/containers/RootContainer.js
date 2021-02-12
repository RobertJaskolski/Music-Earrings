import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import Nav from "./Nav/Nav";
import Footer from "../components/Footer/Footer";
import { connect } from "react-redux";
import { tokensActions } from "../reducers/tokens";
import { checkAuth } from "../api/MyAPI";
import GetHash from "../utils/GetHash";
import withAuthorizedState from "../components/shared/HOC/withAuthorized";
import withUserProfileState from "../components/shared/HOC/withUserProfile";
import API from "../api/SpotifyAPI";
import { compose } from "recompose";

const WithAuthorizedAndUserInfoNav = compose(
  withAuthorizedState,
  withUserProfileState
)(Nav);

function RootContainer({ refresh, getUserProfile, auth }) {
  useEffect(() => {
    GetHash(refresh);
    checkAuth();
    if (auth) {
      getUserProfile();
    }
  });
  return (
    <Container maxWidth='xl'>
      <WithAuthorizedAndUserInfoNav />
      <Footer />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  refresh: (tokens) => dispatch(tokensActions.refresh(tokens)),
  getUserProfile: () => dispatch(API.GetUserProfile()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
