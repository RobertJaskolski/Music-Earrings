// Import outside
import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "recompose";

// Import some utils, API's and etc.
import { tokensActions } from "../reducers/tokens";
import MyAPI from "../api/MyAPI";
import GetHash from "../utils/GetHash";
import API from "../api/SpotifyAPI";

// Import HOC's
import withAuthorizedState from "../components/shared/HOC/withAuthorized";
import withUserResponsesFromAPIState from "../components/shared/HOC/withUserResponsesFormAPI";
import withResponseFromAPIState from "../components/shared/HOC/withResponsesFromAPI";

// Import containers
import SearchResults from "./SearchResults/SearchResults";
import FavArtists from "./FavArtists/FavArtists";
import Tracklist from "./Tracklist/Tracklist";
import Queue from "./Queue/Queue";
import Nav from "./Nav/Nav";
import Footer from "../components/Footer/Footer";

// Containers with HOC's
const WithAuthorizedAndUserResponseFavArtists = compose(
  withAuthorizedState,
  withUserResponsesFromAPIState
)(FavArtists);
const WithAuthorizedAndUserAndDataResponseNav = compose(
  withAuthorizedState,
  withUserResponsesFromAPIState,
  withResponseFromAPIState
)(Nav);
const WithAuthorizedAndResponseDataSearchResults = compose(
  withAuthorizedState,
  withResponseFromAPIState
)(SearchResults);
const WithAuthorizedAndResponseDataTracklist = compose(
  withAuthorizedState,
  withResponseFromAPIState
)(Tracklist);

function RootContainer({
  refresh,
  getUserProfile,
  auth,
  refreshToken,
  getFavArtists,
  getRefreshToken,
}) {
  useEffect(() => {
    GetHash(refresh);
    getRefreshToken(refreshToken);
    if (auth) {
      getUserProfile();
      getFavArtists();
    }
  });
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <WithAuthorizedAndUserAndDataResponseNav />
        </Grid>
        <Grid item xs={12}>
          <WithAuthorizedAndResponseDataSearchResults />
        </Grid>
        <Grid item xs={12}>
          <WithAuthorizedAndUserResponseFavArtists />
        </Grid>
        <Grid item md={8} xs={12}>
          <WithAuthorizedAndResponseDataTracklist />
        </Grid>
        <Grid item md={4} xs={12}>
          <Queue />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  refresh: (tokens) => dispatch(tokensActions.refresh(tokens)),
  getUserProfile: () => dispatch(API.GetUserProfile()),
  getFavArtists: () => dispatch(API.GetUserFavArtists()),
  getRefreshToken: (refreshToken) => dispatch(MyAPI.RefreshToken(refreshToken)),
});
const mapStateToProps = (state) => {
  return {
    refreshToken: state.tokens["refreshToken"],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
