import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Nav from "./Nav/Nav";
import Footer from "../components/Footer/Footer";
import { connect } from "react-redux";
import { tokensActions } from "../reducers/tokens";
import MyAPI from "../api/MyAPI";
import GetHash from "../utils/GetHash";
import withAuthorizedState from "../components/shared/HOC/withAuthorized";
import withUserProfileState from "../components/shared/HOC/withUserProfile";
import API from "../api/SpotifyAPI";
import { compose } from "recompose";
import SearchResults from "./SearchResults/SearchResults";
import FavArtists from "./FavArtists/FavArtists";

const WithAuthorizedAndUserInfoFavArtists = compose(
  withAuthorizedState,
  withUserProfileState
)(FavArtists);
const WithAuthorizedAndUserInfoNav = compose(
  withAuthorizedState,
  withUserProfileState
)(Nav);
const WithAuthorizedSearchResults = withAuthorizedState(SearchResults);

function RootContainer({ refresh, getUserProfile, auth, refreshToken }) {
  useEffect(() => {
    GetHash(refresh);
    MyAPI.RefreshToken(refreshToken);
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
        <WithAuthorizedSearchResults data-test='searchResults' />
      </Grid>
      <Grid item xs={12}>
        <WithAuthorizedAndUserInfoFavArtists />
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
