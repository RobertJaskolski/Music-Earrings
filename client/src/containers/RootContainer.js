import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Nav from "./Nav/Nav";
import Footer from "../components/Footer/Footer";
import { connect } from "react-redux";
import { tokensActions } from "../reducers/tokens";
import { RefreshToken } from "../api/MyAPI";
import GetHash from "../utils/GetHash";
import withAuthorizedState from "../components/shared/HOC/withAuthorized";
import withUserProfileState from "../components/shared/HOC/withUserProfile";
import API from "../api/SpotifyAPI";
import { compose } from "recompose";
import SearchResults from "./SearchResults/SearchResults";

const WithAuthorizedAndUserInfoNav = compose(
  withAuthorizedState,
  withUserProfileState
)(Nav);

function RootContainer({ refresh, getUserProfile, auth, refreshToken }) {
  useEffect(() => {
    GetHash(refresh);
    RefreshToken(refreshToken);
    if (auth) {
      getUserProfile();
    }
  });
  return (
    <Container maxWidth='xl'>
      <Grid item xs={12}>
        <WithAuthorizedAndUserInfoNav />
      </Grid>
      <Grid item xs={12}>
        <SearchResults data-test='searchResults' />
      </Grid>
      <Footer />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  refresh: (tokens) => dispatch(tokensActions.refresh(tokens)),
  getUserProfile: () => dispatch(API.GetUserProfile()),
});
const mapStateToProps = (state) => {
  return {
    refreshToken: state.tokens["refreshToken"],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
