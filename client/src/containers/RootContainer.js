// Import outside
import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "recompose";
import Snackbar from "@material-ui/core/Snackbar";

// Import some utils, API's and etc.
import { tokensActions } from "../reducers/tokens";
import MyAPI from "../api/MyAPI";
import GetHash from "../utils/GetHash";
import API from "../api/SpotifyAPI";
import { Alert } from "../styles/Toast";

// Import HOC's
import withAuthorizedState from "../components/shared/HOC/withAuthorized";
import withUserResponsesFromAPIState from "../components/shared/HOC/withUserResponsesFormAPI";
import withResponseFromAPIState from "../components/shared/HOC/withResponsesFromAPI";
import withSettingsState from "../components/shared/HOC/withSettings";
import withQueueState from "../components/shared/HOC/withQueue";
import withPlayerNotAuthState from "../components/shared/HOC/withPlayerNotAuth";

// Import containers
import SearchResults from "./SearchResults/SearchResults";
import FavArtists from "./FavArtists/FavArtists";
import Tracklist from "./Tracklist/Tracklist";
import Queue from "./Queue/Queue";
import Nav from "./Nav/Nav";
import Footer from "../components/Footer/Footer";
import Player from "./Player/Player";

// Containers with HOC's
const PlayerWithPlayerState = compose(withPlayerNotAuthState)(Player);
const WithAuthorizedAndUserResponseAndSettingsFavArtists = compose(
  withAuthorizedState,
  withUserResponsesFromAPIState,
  withSettingsState
)(FavArtists);
const WithAuthorizedAndUserAndDataResponseAndSettingsNav = compose(
  withAuthorizedState,
  withUserResponsesFromAPIState,
  withResponseFromAPIState,
  withSettingsState
)(Nav);
const WithAuthorizedAndResponseDataAndSettingsAndQueueAndPlayerSearchResults = compose(
  withAuthorizedState,
  withResponseFromAPIState,
  withSettingsState,
  withQueueState,
  withPlayerNotAuthState
)(SearchResults);
const WithAuthorizedAndResponseDataAndSettingsAndQueueAndPlayerTracklist = compose(
  withAuthorizedState,
  withResponseFromAPIState,
  withSettingsState,
  withQueueState,
  withPlayerNotAuthState
)(Tracklist);
const WithQueueStateQueue = compose(withQueueState)(Queue);

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
  const [openSuccessArtist, setOpenSuccessArtist] = useState(false);
  const [openSuccessTrack, setOpenSuccessTrack] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const handleOpenSuccessArtist = () => {
    setOpenSuccessArtist(true);
  };
  const handleOpenSuccessTrack = () => {
    setOpenSuccessTrack(true);
  };
  const handleOpenFail = () => {
    setOpenFail(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccessArtist(false);
    setOpenSuccessTrack(false);
    setOpenFail(false);
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <WithAuthorizedAndUserAndDataResponseAndSettingsNav />
        </Grid>
        <Grid item xs={12}>
          <PlayerWithPlayerState />
        </Grid>
        <Grid item xs={12}>
          <WithAuthorizedAndResponseDataAndSettingsAndQueueAndPlayerSearchResults
            handleOpenSuccessArtist={handleOpenSuccessArtist}
            handleOpenFail={handleOpenFail}
            handleOpenSuccessTrack={handleOpenSuccessTrack}
          />
        </Grid>
        <Grid item xs={12}>
          <WithAuthorizedAndUserResponseAndSettingsFavArtists
            handleOpenSuccessArtist={handleOpenSuccessArtist}
            handleOpenFail={handleOpenFail}
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <WithAuthorizedAndResponseDataAndSettingsAndQueueAndPlayerTracklist />
        </Grid>
        <Grid item md={4} xs={12}>
          <WithQueueStateQueue auth={auth} />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
      {/* Toasty */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openSuccessArtist}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          The artist has been added!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openSuccessTrack}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          The track has been added!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openFail}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          You can generate a tracklist on the basis of 5 options!
        </Alert>
      </Snackbar>
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
